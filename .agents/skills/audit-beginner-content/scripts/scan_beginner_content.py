#!/usr/bin/env python3
"""Find heuristic beginner-comprehension risks in public-facing text.

This scanner intentionally reports signals rather than pass/fail judgments.
Review every match in context with the semantic audit rubric.
"""

from __future__ import annotations

import argparse
import json
import re
import sys
from collections import Counter
from dataclasses import asdict, dataclass
from pathlib import Path
from typing import Iterable


SUPPORTED_SUFFIXES = {
    ".html",
    ".htm",
    ".js",
    ".jsx",
    ".json",
    ".md",
    ".mdx",
    ".mjs",
    ".ts",
    ".tsx",
    ".txt",
    ".vue",
}

IGNORED_DIRS = {
    ".git",
    ".next",
    ".nuxt",
    ".output",
    ".turbo",
    "__pycache__",
    "_next",
    "build",
    "coverage",
    "dist",
    "node_modules",
    "out",
    "vendor",
}

DISCLAIMER_PATTERNS = (
    r"不能(?:单独)?证明",
    r"不代表(?:所有|任何|权威|历史事实)",
    r"不是(?:直接|历史|客观).{0,8}(?:事实|记录|现场|摄影)",
    r"不能推广到",
    r"不等同于",
    r"不是唯一(?:的)?(?:解释|结论)",
    r"仅供参考",
)

EMPTY_CAUTION_PATTERNS = (
    r"学界存在争议",
    r"情况(?:十分|非常)?复杂",
    r"不能简单(?:地)?理解",
    r"不同学者有不同(?:观点|看法)",
    r"传统说法已经过时",
)

ABSTRACT_OPENING_PATTERNS = (
    r"结构性(?:解读|问题|原因)",
    r"(?:男性|女性|殖民|权力|空间)凝视",
    r"现代性(?:危机|困境|经验)",
    r"(?:话语|身份|空间)建构",
    r"物质谱系",
    r"基础设施",
)

GENERIC_LINK_LABEL = re.compile(
    r"\[(?:点击这里|查看这里|更多|来源|链接|link|click here|learn more)\]"
    r"\s*\([^)]+\)",
    re.IGNORECASE,
)

URL_PATTERN = re.compile(r"https?://[^\s<>'\")\]]+")
MARKDOWN_LINK = re.compile(r"\[[^\]]+\]\(https?://[^)]+\)")
HTML_URL_ATTRIBUTE = re.compile(
    r"(?:href|src)\s*=\s*[\"']https?://[^\"']+[\"']", re.IGNORECASE
)

EARLY_ABSTRACT_HEADING = re.compile(
    r"^\s{0,3}#{1,6}\s*(?:Context|Why|Evidence|Analysis|Reflect|"
    r"背景|为什么|证据|分析|反思|争议|意义)\s*$",
    re.IGNORECASE,
)

EXPLANATORY_NUMBER_CONNECTORS = re.compile(
    r"因此|因而|总计|合计|分别|每(?:个|人|组)|形成|交叉|重复|"
    r"because|therefore|total|each|respectively|=|×|\*"
)


@dataclass(frozen=True)
class Finding:
    path: str
    line: int
    severity: str
    code: str
    message: str
    excerpt: str


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Scan text and website source for beginner-comprehension risks."
    )
    parser.add_argument("targets", nargs="+", help="Files or directories to scan")
    parser.add_argument(
        "--json", action="store_true", dest="as_json", help="Emit JSON output"
    )
    parser.add_argument(
        "--include-generated",
        action="store_true",
        help="Include common generated and dependency directories",
    )
    parser.add_argument(
        "--max-files",
        type=int,
        default=2000,
        help="Maximum number of files to scan (default: 2000)",
    )
    return parser.parse_args()


def is_supported(path: Path) -> bool:
    return path.is_file() and path.suffix.lower() in SUPPORTED_SUFFIXES


def iter_files(
    targets: Iterable[str], include_generated: bool, max_files: int
) -> tuple[list[Path], list[str]]:
    files: list[Path] = []
    errors: list[str] = []

    for raw_target in targets:
        target = Path(raw_target).expanduser()
        if not target.exists():
            errors.append(f"Target does not exist: {target}")
            continue

        if target.is_file():
            if is_supported(target):
                files.append(target)
            else:
                errors.append(f"Unsupported file type: {target}")
            continue

        for candidate in target.rglob("*"):
            if not include_generated and any(
                part in IGNORED_DIRS for part in candidate.parts
            ):
                continue
            if is_supported(candidate):
                files.append(candidate)
                if len(files) >= max_files:
                    errors.append(
                        f"Stopped after {max_files} files; narrow the target or "
                        "raise --max-files."
                    )
                    return sorted(set(files)), errors

    return sorted(set(files)), errors


def compact_excerpt(line: str, limit: int = 180) -> str:
    excerpt = re.sub(r"\s+", " ", line).strip()
    if len(excerpt) <= limit:
        return excerpt
    return excerpt[: limit - 1] + "…"


def mask_valid_urls(line: str) -> str:
    masked = MARKDOWN_LINK.sub("", line)
    return HTML_URL_ATTRIBUTE.sub("", masked)


def count_cjk(text: str) -> int:
    return len(re.findall(r"[\u3400-\u4dbf\u4e00-\u9fff]", text))


def scan_file(path: Path) -> tuple[list[Finding], str | None]:
    try:
        text = path.read_text(encoding="utf-8")
    except UnicodeDecodeError:
        try:
            text = path.read_text(encoding="utf-8-sig")
        except UnicodeDecodeError:
            return [], f"Could not decode as UTF-8: {path}"
    except OSError as exc:
        return [], f"Could not read {path}: {exc}"

    findings: list[Finding] = []
    lines = text.splitlines()
    disclaimer_hits: list[tuple[int, str]] = []
    nonblank_position = 0

    for number, line in enumerate(lines, start=1):
        stripped = line.strip()
        if stripped:
            nonblank_position += 1
        excerpt = compact_excerpt(line)

        for pattern in DISCLAIMER_PATTERNS:
            if re.search(pattern, line, re.IGNORECASE):
                disclaimer_hits.append((number, excerpt))

        for pattern in EMPTY_CAUTION_PATTERNS:
            if re.search(pattern, line, re.IGNORECASE):
                findings.append(
                    Finding(
                        str(path),
                        number,
                        "P2",
                        "EMPTY_CAUTION",
                        "Caution or dispute language may be replacing the actual "
                        "positions, evidence, or result.",
                        excerpt,
                    )
                )
                break

        if nonblank_position <= 40:
            if EARLY_ABSTRACT_HEADING.search(line):
                findings.append(
                    Finding(
                        str(path),
                        number,
                        "P2",
                        "EARLY_ANALYSIS_HEADING",
                        "An analysis-oriented heading appears early; verify that "
                        "the object and necessary context already appear.",
                        excerpt,
                    )
                )
            for pattern in ABSTRACT_OPENING_PATTERNS:
                if re.search(pattern, line, re.IGNORECASE):
                    findings.append(
                        Finding(
                            str(path),
                            number,
                            "P3",
                            "EARLY_ABSTRACTION",
                            "Abstract framing appears near the opening; verify "
                            "that a newcomer already knows the concrete object.",
                            excerpt,
                        )
                    )
                    break

        if GENERIC_LINK_LABEL.search(line):
            findings.append(
                Finding(
                    str(path),
                    number,
                    "P2",
                    "GENERIC_LINK_LABEL",
                    "Link text does not explain the destination.",
                    excerpt,
                )
            )

        unlinked_line = mask_valid_urls(line)
        if URL_PATTERN.search(unlinked_line):
            findings.append(
                Finding(
                    str(path),
                    number,
                    "P2",
                    "BARE_URL",
                    "A URL appears outside a descriptive Markdown or HTML link.",
                    excerpt,
                )
            )

        sentence_chunks = re.split(r"[。！？!?；;]", stripped)
        for sentence in sentence_chunks:
            if count_cjk(sentence) >= 72 or len(sentence) >= 190:
                findings.append(
                    Finding(
                        str(path),
                        number,
                        "P3",
                        "MERGED_SENTENCE",
                        "A long sentence may be compressing definition, process, "
                        "result, and meaning into one unit.",
                        compact_excerpt(sentence),
                    )
                )
                break

        number_tokens = re.findall(r"(?<!\w)\d+(?:[.,]\d+)?%?", stripped)
        if (
            len(number_tokens) >= 3
            and not EXPLANATORY_NUMBER_CONNECTORS.search(stripped)
            and not stripped.startswith("|")
        ):
            findings.append(
                Finding(
                    str(path),
                    number,
                    "P3",
                    "NUMBER_RELATIONSHIP",
                    "Several numbers appear without an obvious relationship; "
                    "verify that their origin or comparison is explained.",
                    excerpt,
                )
            )

    if len(disclaimer_hits) >= 2:
        first_line, first_excerpt = disclaimer_hits[0]
        findings.append(
            Finding(
                str(path),
                first_line,
                "P2",
                "REPEATED_DISCLAIMER",
                f"Found {len(disclaimer_hits)} disclaimer-like statements. "
                "Review whether one concrete closing boundary note is enough.",
                first_excerpt,
            )
        )

    unique = {
        (finding.path, finding.line, finding.code, finding.excerpt): finding
        for finding in findings
    }
    return sorted(
        unique.values(), key=lambda item: (item.path, item.line, item.code)
    ), None


def emit_text(
    findings: list[Finding], files_scanned: int, errors: list[str]
) -> None:
    for finding in findings:
        print(
            f"{finding.path}:{finding.line} "
            f"[{finding.severity} {finding.code}] {finding.message}"
        )
        if finding.excerpt:
            print(f"  {finding.excerpt}")

    counts = Counter(finding.severity for finding in findings)
    print(
        "\nSummary: "
        f"{files_scanned} file(s), {len(findings)} signal(s), "
        f"P0={counts['P0']} P1={counts['P1']} "
        f"P2={counts['P2']} P3={counts['P3']}"
    )
    print("These are heuristic signals. Review every match with the audit rubric.")

    for error in errors:
        print(f"Warning: {error}", file=sys.stderr)


def emit_json(
    findings: list[Finding], files_scanned: int, errors: list[str]
) -> None:
    counts = Counter(finding.severity for finding in findings)
    payload = {
        "files_scanned": files_scanned,
        "signal_count": len(findings),
        "severity_counts": {
            severity: counts[severity] for severity in ("P0", "P1", "P2", "P3")
        },
        "findings": [asdict(finding) for finding in findings],
        "warnings": errors,
        "disclaimer": (
            "Heuristic signals only; review every match with the semantic rubric."
        ),
    }
    print(json.dumps(payload, ensure_ascii=False, indent=2))


def main() -> int:
    args = parse_args()
    files, errors = iter_files(
        args.targets, args.include_generated, max(1, args.max_files)
    )

    findings: list[Finding] = []
    for path in files:
        file_findings, error = scan_file(path)
        findings.extend(file_findings)
        if error:
            errors.append(error)

    if args.as_json:
        emit_json(findings, len(files), errors)
    else:
        emit_text(findings, len(files), errors)

    return 2 if not files else 0


if __name__ == "__main__":
    raise SystemExit(main())
