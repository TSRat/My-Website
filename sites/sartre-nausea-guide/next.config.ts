import type { NextConfig } from "next";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const requestedBasePath =
  process.env.SITE_BASE_PATH ?? "/My-Website/sartre-nausea-guide";
const siteBasePath =
  requestedBasePath === "/"
    ? ""
    : `/${requestedBasePath.replace(/^\/+|\/+$/g, "")}`;
const requestedAssetPrefix = process.env.SITE_ASSET_PREFIX;
const assetPrefix =
  requestedAssetPrefix === undefined
    ? siteBasePath
    : requestedAssetPrefix === "/"
      ? ""
      : requestedAssetPrefix === "."
        ? "."
        : `/${requestedAssetPrefix.replace(/^\/+|\/+$/g, "")}`;
const publicAssetBasePath =
  requestedAssetPrefix === "." ? "." : siteBasePath;
const projectRoot = dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  output: "export",
  basePath: siteBasePath,
  assetPrefix,
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_SITE_BASE_PATH: publicAssetBasePath,
  },
  images: { unoptimized: true },
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
