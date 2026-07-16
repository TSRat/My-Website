(() => {
  const init = () => {
    const site = document.querySelector(".hypatia-site");
    if (!site || site.dataset.hypatiaBound === "true") return;
    site.dataset.hypatiaBound = "true";

    const all = (selector, root = document) => Array.from(root.querySelectorAll(selector));
    const setText = (selector, value, root = document) => {
      const element = root.querySelector(selector);
      if (element) element.textContent = value;
    };
    const activate = (buttons, selected) => {
      buttons.forEach((button) => {
        const active = button === selected;
        button.classList.toggle("is-active", active);
        button.setAttribute("aria-selected", String(active));
        if (button.hasAttribute("aria-pressed")) button.setAttribute("aria-pressed", String(active));
      });
    };
    const bindTabs = (buttons, callback) => {
      buttons.forEach((button, index) => {
        button.addEventListener("click", () => callback(button));
        button.addEventListener("keydown", (event) => {
          if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)) return;
          event.preventDefault();
          const step = event.key === 'ArrowLeft' || event.key === 'ArrowUp' ? -1 : 1;
          const next = buttons[(index + step + buttons.length) % buttons.length];
          next.focus();
          callback(next);
        });
      });
    };

    const header = document.querySelector("[data-header]");
    const progress = document.querySelector(".reading-progress span");
    const backToTop = document.querySelector(".back-to-top");
    const menuButton = document.querySelector(".menu-button");
    const nav = document.querySelector(".site-nav");
    const navLinks = all("[data-nav]");
    const closeMenu = () => {
      document.body.classList.remove("nav-open");
      menuButton?.setAttribute("aria-expanded", "false");
    };
    const updateChrome = () => {
      const scrollTop = window.scrollY;
      const scrollable = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      if (progress) progress.style.width = `${Math.min(100, (scrollTop / scrollable) * 100)}%`;
      header?.classList.toggle("is-scrolled", scrollTop > 28);
      backToTop?.classList.toggle("is-visible", scrollTop > 720);
      const candidates = navLinks
        .map((link) => ({ link, section: document.getElementById(link.dataset.nav || "") }))
        .filter((item) => item.section);
      const active = candidates.filter(({ section }) => section.getBoundingClientRect().top <= 220).at(-1);
      candidates.forEach(({ link }) => {
        const current = link === active?.link;
        link.classList.toggle("is-active", current);
        if (current) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    };
    window.addEventListener("scroll", updateChrome, { passive: true });
    menuButton?.addEventListener("click", () => {
      const open = document.body.classList.toggle("nav-open");
      menuButton.setAttribute("aria-expanded", String(open));
    });
    nav?.addEventListener("click", (event) => {
      if (event.target.closest("a")) closeMenu();
    });
    backToTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    updateChrome();

    const evidenceButtons = all("[data-evidence-filter]");
    evidenceButtons.forEach((button) => button.setAttribute("aria-pressed", String(button.classList.contains("is-active"))));
    bindTabs(evidenceButtons, (selected) => {
      const filter = selected.dataset.evidenceFilter;
      activate(evidenceButtons, selected);
      all("[data-evidence]").forEach((card) => {
        card.classList.toggle("is-filtered", filter !== "all" && card.dataset.evidence !== filter);
      });
    });

    const philosophy = {
      one: {
        title: "太一：不可被完全定义的本源",
        copy: "太一不是一位拥有普通人格的‘最高神’，而是所有存在、秩序与善的终极根源。语言只能指向它，不能把它说尽。",
      },
      nous: {
        title: "理智：可以被理解的完整秩序",
        copy: "理智不是日常的小聪明，而是理念与形式的整体。人借助论证、数学和沉思，学习在变化中辨认稳定结构。",
      },
      soul: {
        title: "灵魂：能够转向理智，也能照料世界",
        copy: "灵魂位于可理解秩序与可见世界之间。它会被欲望牵引，也能通过德性、节制和学习重新校准自己的方向。",
      },
      world: {
        title: "物质世界：会变化，却不是纯粹邪恶",
        copy: "可见世界并不完美，也不是应被仇恨的牢笼。它仍保留更高秩序的痕迹，数学比例和天体运动正是理解这些痕迹的入口。",
      },
    };
    const philosophyRoot = document.querySelector("[data-philosophy]");
    const philosophyButtons = all("[data-step]", philosophyRoot || document);
    bindTabs(philosophyButtons, (selected) => {
      const entry = philosophy[selected.dataset.step];
      if (!entry) return;
      activate(philosophyButtons, selected);
      setText("[data-step-title]", entry.title, philosophyRoot);
      setText("[data-step-copy]", entry.copy, philosophyRoot);
    });

    const comparisons = {
      source: {
        mainstream: ["最高者超越一切，众神位于其下", "太一超越语言；传统众神和宇宙力量被放进层级秩序，祭仪也因此被赋予哲学意义。"],
        christian: ["一位创造世界并关怀人的上帝", "上帝自由创造世界；基督、启示与教会规定人与上帝建立关系的道路。"],
        hypatia: ["保留最高本源，减少对祭仪的依赖", "她很可能接受太一、理智与灵魂的结构，却不要求学生先参加多神祭仪。"],
      },
      world: {
        mainstream: ["世界是更高秩序逐层展开的结果", "可见世界来自更高层级，神圣象征和祭仪能帮助人重新连接那套秩序。"],
        christian: ["世界由上帝自由创造", "受造世界是好的，却会因人的罪与有限性而受损；它不是太一自然流出的最后一层。"],
        hypatia: ["从数学比例中辨认世界秩序", "天文、几何和仪器让学生看见变化背后的结构，知识训练因此也有伦理意义。"],
      },
      return: {
        mainstream: ["理智训练还不够，祭仪帮助灵魂上升", "推理与德性很重要，但神术、神名、象征物与传统仪式也被视为不可替代。"],
        christian: ["恩典、基督与教会带来救赎", "灵魂不能只靠自己的理性返回上帝；信仰、恩典与教会生活具有决定性地位。"],
        hypatia: ["德性、节制、数学与沉思训练灵魂", "学生通过判断论证、管理欲望和追求稳定秩序，让心灵逐渐转向更高的善。"],
      },
      knowledge: {
        mainstream: ["传统文本与祭仪共同授权", "哲学论证与古老宗教传统彼此支撑，教师也解释神圣象征的正确用法。"],
        christian: ["圣经、基督与教会共同授权", "理性可以服务信仰，但启示和教会传统对终极问题拥有更高权威。"],
        hypatia: ["教师判断、论证与共同文本", "课堂以柏拉图、亚里士多德、数学和天文学为共同材料，让不同信仰的学生一起判断。"],
      },
      coexist: {
        mainstream: ["公开多神祭仪让边界更明显", "当哲学训练要求参加传统祭仪时，基督徒学生更难把它与自己的信仰分开。"],
        christian: ["能否共学取决于对古典知识的态度", "一些基督徒吸收柏拉图训练，另一些人则把多神教哲学视为危险竞争者。"],
        hypatia: ["课堂不要求学生先放弃基督教身份", "现存可识别学生都是基督徒，这说明共同学习在她的课堂中真实发生过。"],
      },
    };
    const comparisonRoot = document.querySelector("[data-comparison]");
    const comparisonButtons = all("[data-compare]", comparisonRoot || document);
    bindTabs(comparisonButtons, (selected) => {
      const entry = comparisons[selected.dataset.compare];
      if (!entry) return;
      activate(comparisonButtons, selected);
      Object.entries(entry).forEach(([column, values]) => {
        setText(`[data-compare-title="${column}"]`, values[0], comparisonRoot);
        setText(`[data-compare-copy="${column}"]`, values[1], comparisonRoot);
      });
    });

    const letters = {
      address: {
        quote: "母亲、姐妹、教师、恩人，以及一切在名义和行动上值得尊敬的人。",
        english: "“Mother, sister, teacher, and withal benefactress, and whatsoever is honored in name and deed.”",
        note: "《书信》第16封。亲属称呼不是生物学关系，而是哲学共同体亲密性的语言。",
      },
      trust: {
        quote: "如果你认为这些作品应当发表，我便把它们交给雄辩者与哲学家共同评判。",
        english: "“If you decree that I ought to publish my book…”",
        note: "《书信》第154封，意译。把是否公开作品交给老师判断，说明信任首先是一种知识判断。",
      },
      network: {
        quote: "你总是拥有力量；愿你运用这份力量，使事情获得最好的结果。",
        english: "“You have, and will always have, power…”",
        note: "《书信》第81封，意译。这里的“力量”指声望、人际网络与道德劝说，不是正式官职。",
      },
    };
    const letterRoot = document.querySelector("[data-letter-stage]");
    const letterButtons = all("[data-letter]", letterRoot || document);
    bindTabs(letterButtons, (selected) => {
      const entry = letters[selected.dataset.letter];
      if (!entry) return;
      activate(letterButtons, selected);
      setText("[data-letter-quote]", entry.quote, letterRoot);
      setText("[data-letter-english]", entry.english, letterRoot);
      setText("[data-letter-note]", entry.note, letterRoot);
    });

    const memories = {
      martyr: ["6 世纪 · 多神教哲学记忆", "哲学的殉道者", "达马斯基奥斯等哲学家把她的死变成对基督教权力的控诉，强调她的智慧、公开声望与政治性死亡。", "她确实是哲学家，也确实死于基督徒人群实施的政治暴力。", "她与基督徒学生的合作、温和道路，以及多神教作者自身的立场。", "把它作为古代记忆政治，而非透明传记。"],
      saint: ["中世纪 · 圣徒传说", "圣徒的镜像", "一些研究讨论希帕蒂娅的传说是否影响了亚历山大的圣凯瑟琳形象：博学、贞洁、公开辩论与殉难被重新组合。", "城市记忆会跨宗教保存对博学女性的敬意。", "两个人物不能被简单证明为同一个人，影响关系也仍有争议。", "把相似看作记忆迁移的线索，不当作身份合并。"],
      liberty: ["18 世纪 · 启蒙论战", "自由思想的斗士", "托兰与吉本用她批判教权、宗教狂热和罗马帝国的衰落，把谋杀写成自由理性遭受迫害的象征。", "宗教权威与群众暴力确实参与了她的死亡。", "城市行政、派系竞争和她的教师网络被压缩成理性对宗教。", "保留其批判锋芒，同时补回具体政治结构。"],
      goddess: ["19 世纪 · 小说与绘画", "异域化的女神", "小说与学院绘画常把她塑造成美丽、贞洁、即将消失的异教女神，让裸体与殉难取代教学工作。", "她的性别确实影响了后人如何解释她的公共出现。", "对身体与美貌的凝视遮住了课堂、文本和学生。", "观看图像如何生产欲望，不把图像误认成肖像。"],
      feminist: ["20 世纪后期 · 女性主义知识史", "父权制中的女性哲学家", "女性主义研究重新追索她作为教师、数学家与公共知识分子的空间，并让她的名字进入期刊与教育项目。", "女性知识劳动长期被忽视，她的公开权威确实罕见。", "若只把她写成男性暴力的受害者，仍会削弱她主动建立的关系。", "把性别作为结构问题，也保留她的能动性。"],
      science: ["20—21 世纪 · 大众科学叙事", "现代科学的先驱", "《宇宙》和电影《城市广场》把她与图书馆、日心说和实验精神相连，使她成为科学自由的醒目象征。", "她确实教授数学、天文学，并重视论证和仪器知识。", "没有证据证明她发现日心说或椭圆轨道，图书馆也未在她死时一同燃烧。", "把电影当作当代寓言，再用史料修正传记细节。"],
    };
    const memoryRoot = document.querySelector("[data-memory]");
    const memoryButtons = all("[data-memory-id]", memoryRoot || document);
    bindTabs(memoryButtons, (selected) => {
      const entry = memories[selected.dataset.memoryId];
      if (!entry) return;
      activate(memoryButtons, selected);
      ["era", "title", "summary", "sees", "hides", "verdict"].forEach((field, index) => {
        setText(`[data-memory-${field}]`, entry[index], memoryRoot);
      });
    });
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
})();
