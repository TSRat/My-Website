const buttons = [...document.querySelectorAll("[data-filter]")];
const cards = [...document.querySelectorAll(".story-card")];
const entries = [...document.querySelectorAll(".archive-entry")];
const search = document.querySelector("#story-search");
let filter = "全部";

function applyFilters() {
  const query = search?.value.trim().toLowerCase() ?? "";
  for (const card of cards) {
    const matchesFilter = filter === "全部" || card.dataset.category?.includes(filter);
    const matchesQuery = !query || card.dataset.search?.includes(query);
    card.hidden = !(matchesFilter && matchesQuery);
  }
  for (const entry of entries) {
    const matchesFilter = filter === "全部" || entry.dataset.topics?.includes(filter);
    const matchesQuery = !query || entry.dataset.search?.includes(query);
    entry.hidden = !(matchesFilter && matchesQuery);
  }
}

for (const button of buttons) {
  button.addEventListener("click", () => {
    filter = button.dataset.filter;
    buttons.forEach((item) => item.classList.toggle("active", item === button));
    applyFilters();
  });
}
search?.addEventListener("input", applyFilters);
