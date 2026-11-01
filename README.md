# Portfólio — Matheus Polli

Site estático (HTML/CSS/JS puro) publicado no GitHub Pages.

## Como a listagem se atualiza sozinha
O workflow `.github/workflows/update-projects.yml` roda a cada push, todo dia às 06:00 (BRT) e manualmente.
Ele executa `scripts/build-projects.mjs`, que lê os repositórios **públicos** do GitHub e gera `projects.json`.

- Repos privados, forks, arquivados e sem descrição **nunca** aparecem.
- Para esconder um repo público: adicione a topic `no-portfolio`.
- Para destacar no topo: adicione a topic `destaque`.
- Link "Ver demo" vem do campo *Website* do repo.
- A categoria é deduzida da descrição (IA, Fiscal & ERP, Integrações, Estudos).

## Publicar
1. Crie o repo `MaatheusPolli.github.io` e faça push deste conteúdo na branch `main`.
2. Em *Settings → Pages*, escolha **Source: GitHub Actions**.
3. Site em `https://maatheuspolli.github.io`.

## Rodar local
```bash
node scripts/build-projects.mjs
npx serve .
```
