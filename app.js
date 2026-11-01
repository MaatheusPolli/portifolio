document.getElementById("year").textContent = new Date().getFullYear();

const grid = document.getElementById("grid");
let projects = [];

const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const pretty = (n) => n.replace(/[-_]/g, " ");

function render(cat) {
  const list = cat === "all" ? projects : projects.filter((p) => p.category === cat);
  grid.innerHTML = list.length
    ? list.map((p) => `
      <article class="project${p.featured ? " featured" : ""}">
        <h3><a href="${esc(p.url)}" target="_blank" rel="noopener">${esc(pretty(p.name))}</a></h3>
        <p>${esc(p.description)}</p>
        <div class="meta">
          ${p.language ? `<span class="tag">${esc(p.language)}</span>` : ""}
          ${p.stars ? `<span>★ ${p.stars}</span>` : ""}
          ${p.homepage ? `<a class="demo" href="${esc(p.homepage)}" target="_blank" rel="noopener">Ver demo</a>` : ""}
        </div>
      </article>`).join("")
    : `<p class="muted">Nenhum projeto nesta categoria ainda.</p>`;
}

document.querySelectorAll(".filters button").forEach((b) =>
  b.addEventListener("click", () => {
    document.querySelectorAll(".filters button").forEach((x) => x.classList.remove("on"));
    b.classList.add("on");
    render(b.dataset.cat);
  })
);

fetch("projects.json", { cache: "no-store" })
  .then((r) => r.json())
  .then((d) => {
    projects = d.projects;
    document.getElementById("stat-count").textContent = projects.length;
    render("all");
  })
  .catch(() => { grid.innerHTML = `<p class="muted">Não foi possível carregar. Veja no <a href="https://github.com/MaatheusPolli">GitHub</a>.</p>`; });
