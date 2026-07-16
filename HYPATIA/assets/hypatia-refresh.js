const comparison = {
  source: {
    mainstream: ["太一之下安置众神", "太一超越存在与语言；传统众神、神灵与宇宙力量可被纳入层级秩序，祭仪因此具有哲学意义。"],
    christian: ["一位创造并关怀世界的上帝", "上帝不是从更高本源流溢出的层级，而是自由创造世界；基督、启示与教会共同规定通向上帝的道路。"],
    hypatia: ["强调不可言说的本源", "很可能保留太一—理智—灵魂的结构，却弱化必须通过多神祭仪才能上升的主张，因此为基督徒留下解释空间。"],
  },
  world: {
    mainstream: ["可见世界是更高秩序的低层显现", "物质变化不等于绝对邪恶，但灵魂容易被感官分散；宇宙仍充满可由祭仪接近的神圣关联。"],
    christian: ["受造世界本来是善的", "世界由上帝创造，罪使人和世界失序；最终盼望包括身体复活，而不只是灵魂逃离物质。"],
    hypatia: ["从变化中辨认不变结构", "数学与天文学训练学生透过可见现象看见比例与秩序；重点不是否定世界，而是不被表象完全支配。"],
  },
  return: {
    mainstream: ["哲学训练与神术共同上升", "推理、德性与沉思很重要，但扬布利柯传统认为人的理性不足以自救，还需要由神主动建立的祭仪联系。"],
    christian: ["恩典、基督与教会生活", "得救不是凭哲学精英的理智独自完成，而来自上帝恩典，并通过信仰、圣礼、伦理生活与共同体实践展开。"],
    hypatia: ["以德性和理智净化灵魂", "学生材料突出节制、超脱、沉思与心灵之眼；没有证据显示她要求学生参加多神教祭仪。"],
  },
  knowledge: {
    mainstream: ["古典文本、教师与祭司传统", "柏拉图、亚里士多德及其评注提供论证；神谕、神话和传统仪式也能传递超越理性的知识。"],
    christian: ["经文、教会传统与神学论证", "《圣经》和关于基督的启示居于中心，但亚历山大里亚基督徒早已借用柏拉图主义概念解释灵魂、上帝与创造。"],
    hypatia: ["文本校勘、数学证明与教师判断", "她的实践把可靠文本、计算、论证、德性与教师评判连在一起；西涅修斯甚至把作品能否出版交给她决定。"],
  },
  coexist: {
    mainstream: ["取决于是否把多神祭仪视为核心", "越把传统祭仪等同哲学救赎，就越难与排斥祭神的基督教共存；391 年塞拉皮翁冲突显示了这种张力。"],
    christian: ["内部立场并不一致", "有人吸收柏拉图哲学，有人把多神教教师视为危险；苏格拉底谴责谋杀，尼基乌的约翰却在后世赞许它。"],
    hypatia: ["课堂实践证明可以共同学习", "现存可识别学生都是基督徒。她不要求改宗，学生也能把哲学训练带回基督教生活与主教职务。"],
  },
};

const comparisonRoot = document.querySelector("[data-comparison]");
if (comparisonRoot) {
  const buttons = [...comparisonRoot.querySelectorAll("[data-compare]")];
  const titles = {
    mainstream: comparisonRoot.querySelector('[data-compare-title="mainstream"]'),
    christian: comparisonRoot.querySelector('[data-compare-title="christian"]'),
    hypatia: comparisonRoot.querySelector('[data-compare-title="hypatia"]'),
  };
  const copies = {
    mainstream: comparisonRoot.querySelector('[data-compare-copy="mainstream"]'),
    christian: comparisonRoot.querySelector('[data-compare-copy="christian"]'),
    hypatia: comparisonRoot.querySelector('[data-compare-copy="hypatia"]'),
  };

  const showComparison = (button) => {
    const topic = comparison[button.dataset.compare];
    buttons.forEach((item) => {
      const active = item === button;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-selected", String(active));
    });
    Object.keys(titles).forEach((key) => {
      titles[key].textContent = topic[key][0];
      copies[key].textContent = topic[key][1];
    });
  };

  buttons.forEach((button) => button.addEventListener("click", () => showComparison(button)));
}
const letterEnglish = {
  address: "“Mother, sister, teacher, and withal benefactress, and whatsoever is honored in name and deed.”",
  trust: "“If you decree that I ought to publish my book, I will dedicate it to orators and philosophers together.”",
  network: "“You have, and will always have power, by reason of the excellent use you make of your credit.”",
};

const letterStage = document.querySelector("[data-letter-stage]");
if (letterStage) {
  const english = letterStage.querySelector(".bilingual-quote > span");
  letterStage.querySelectorAll("[data-letter]").forEach((button) => {
    button.addEventListener("click", () => {
      english.textContent = letterEnglish[button.dataset.letter];
    });
  });
}

const memoryChinese = {
  martyr: {
    era: "6 世纪 · 多神教哲学记忆",
    title: "哲学的殉道者",
    summary: "达马斯基奥斯等多神教哲学家把她的死变成对基督教权力的控诉，强调西里尔对她智慧与声望的嫉妒。",
    sees: "她确实是哲学家，也确实死于基督徒人群实施的政治暴力。",
    hides: "她与基督徒学生的合作、她的温和道路，以及多神教作者自身的性别偏见。",
    verdict: "把它作为古代记忆政治，而不是透明传记。",
  },
  saint: {
    era: "中世纪 · 基督教传说",
    title: "圣徒的镜像",
    summary: "亚历山大里亚的圣凯瑟琳同样被讲述为博学、贞洁、敢于在男性权贵面前辩论并惨遭杀害的女性；有人提出其传说吸收了希帕蒂娅元素。",
    sees: "女性智慧、贞洁与殉道在亚历山大记忆中具有强大叙事吸引力。",
    hides: "凯瑟琳传说形成过程复杂；“她就是基督教版希帕蒂娅”是学术假说，不是已证实的身份转换。",
    verdict: "使用“可能的叙事借鉴”，不要写成确定事实。",
  },
  liberty: {
    era: "18 世纪 · 启蒙运动论战",
    title: "自由的斗士",
    summary: "约翰·托兰、伏尔泰与爱德华·吉本把希帕蒂娅变成理性反抗教权暴政的证人，她的死亡成为批判宗教制度的有力场景。",
    sees: "制度化宗教权力确实能够动员暴力，也必须接受历史审问。",
    hides: "冲突中的帝国政治、基督徒内部分歧，以及希帕蒂娅自身深刻的宗教哲学。",
    verdict: "既读它的历史判断，也读它的反教权时代语境。",
  },
  goddess: {
    era: "19 世纪 · 浪漫主义希腊想象",
    title: "异域的女神",
    summary: "查尔斯·金斯利的小说与大量绘画把她塑造成古典美人；米切尔的裸体画正属于这种维多利亚时代凝视。",
    sees: "她作为女性公共知识分子的异常地位，确实刺激了后世想象。",
    hides: "她的年龄、教学劳动与政治判断被青春、裸体、美貌和受害场面取代。",
    verdict: "把图像当作维多利亚文化的证据，而不是她的肖像。",
  },
  feminist: {
    era: "20 世纪至今 · 女性主义寻回",
    title: "父权制下的知识女性",
    summary: "朱迪·芝加哥《晚宴》、Hypatia 期刊与女性知识史研究，把她放回长期被排除、遗忘或性化的女性思想者谱系。",
    sees: "她的公共成功与死后形象都受性别秩序影响；女性学术劳动也更容易从文本传统中消失。",
    hides: "若只把她视作男性压迫的被动受害者，会低估她的精英地位、关系网络与主动政治判断。",
    verdict: "同时看见结构性限制与她真实拥有的行动能力。",
  },
  science: {
    era: "20—21 世纪 · 科普与电影",
    title: "现代科学的先驱",
    summary: "卡尔·萨根把她与大图书馆的毁灭连在一起；电影《城市广场》又让她几乎发现日心说与椭圆轨道。",
    sees: "她确有高水平数学、天文学训练，也代表知识在政治暴力面前的脆弱。",
    hides: "她首先以哲学教师闻名；图书馆时间线、现代实验方法与天文突破多属戏剧改编。",
    verdict: "可以为电影感动，但要把情节与古代证据分开。",
  },
};

const memoryRoot = document.querySelector("[data-memory]");
if (memoryRoot) {
  const fields = {
    era: memoryRoot.querySelector("[data-memory-era]"),
    title: memoryRoot.querySelector("[data-memory-title]"),
    summary: memoryRoot.querySelector("[data-memory-summary]"),
    sees: memoryRoot.querySelector("[data-memory-sees]"),
    hides: memoryRoot.querySelector("[data-memory-hides]"),
    verdict: memoryRoot.querySelector("[data-memory-verdict]"),
  };
  memoryRoot.querySelectorAll("[data-memory-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const record = memoryChinese[button.dataset.memoryId];
      Object.entries(fields).forEach(([key, element]) => {
        element.textContent = record[key];
      });
    });
  });
}
