// Gera projects.json a partir dos repositórios PÚBLICOS do GitHub.
// Regras: ignora forks, arquivados, o repo de perfil, repos sem descrição
// e qualquer repo com a topic "no-portfolio" (ou em EXCLUDE). Topic "destaque" (ou FEATURED) fixa no topo.
import { readFile, writeFile } from "node:fs/promises";

const USER = process.env.GH_USER || "MaatheusPolli";
const FEATURED = ["delphi-twin", "fiscal-mind", "order-agent", "mcp-brasil"];
const EXCLUDE = ["portifolio"];
// Repos publicados no npm (repo -> pacote)
const NPM = { "doc-guard": "@matheuspolli/doc-guard", "brasil-kit": "brasil-sdk" };
// Descrições em inglês, mantidas à mão; repo sem tradução mostra a descrição em português
const EN = JSON.parse(await readFile("descriptions-en.json", "utf8"));
const headers = { "User-Agent": "portfolio-build", Accept: "application/vnd.github+json" };
if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

const res = await fetch(`https://api.github.com/users/${USER}/repos?per_page=100&type=owner&sort=pushed`, { headers });
if (!res.ok) throw new Error(`GitHub API ${res.status}`);
const repos = await res.json();

const CATS = [
  ["ia", /\b(ia|ai|llm|rag|claude|gemini|mcp|agente|neural|tensorflow|prompt|semântica|embedding)\b/i],
  ["fiscal", /\b(nf-?e|nfc-?e|danfe|fiscal|tribut|icms|ncm|cpf|cnpj|erp|cupons?)\b/i],
  ["integracoes", /\b(api|webhook|sdk|frete|integra|rest|horse|hooks?)\b/i],
];
const category = (r) => {
  const text = `${r.name} ${r.description} ${(r.topics || []).join(" ")}`;
  if (/projeto de estudo|acadêmico|curso/i.test(text)) return "estudos";
  return (CATS.find(([, re]) => re.test(text)) || ["outros"])[0];
};

const projects = repos
  .filter((r) => !r.private && !r.fork && !r.archived && r.name !== USER && r.description)
  .filter((r) => !EXCLUDE.includes(r.name) && !(r.topics || []).includes("no-portfolio"))
  .map((r) => ({
    name: r.name,
    description: r.description,
    description_en: EN[r.name] || null,
    url: r.html_url,
    homepage: r.homepage || null,
    npm: NPM[r.name] ? `https://www.npmjs.com/package/${NPM[r.name]}` : null,
    language: r.language,
    stars: r.stargazers_count,
    topics: r.topics || [],
    featured: FEATURED.includes(r.name) || (r.topics || []).includes("destaque"),
    category: category(r),
    pushed_at: r.pushed_at,
  }))
  .sort((a, b) => b.featured - a.featured || b.pushed_at.localeCompare(a.pushed_at));

await writeFile("projects.json", JSON.stringify({ generated_at: new Date().toISOString(), projects }, null, 2));
console.log(`${projects.length} projetos gravados em projects.json`);
