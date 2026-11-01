# Portfólio de Matheus Polli

Site pessoal com minha trajetória, os setores em que já atuei e meus projetos públicos.

**No ar:** https://maatheuspolli.github.io/portifolio/

Site estático em HTML, CSS e JavaScript puro, publicado no GitHub Pages. Não precisa de build nem de dependências.

## Recursos
- Português por padrão, com botão para trocar para inglês (a escolha fica salva no navegador).
- Tema claro e escuro: segue o sistema na primeira visita e depois lembra a escolha.
- Lista de projetos atualizada sozinha a partir do GitHub.
- SEO: meta tags, Open Graph, dados estruturados (schema.org `Person`), `sitemap.xml` e `robots.txt`.

## Como a lista de projetos se atualiza
O workflow `.github/workflows/update-projects.yml` roda a cada push na `main`, todo dia às 06:00 (horário de Brasília) e quando disparado manualmente em **Actions**.
Ele executa `scripts/build-projects.mjs`, que lê os repositórios **públicos** e gera `projects.json`.

- Repositórios privados, forks, arquivados e sem descrição nunca aparecem.
- Para esconder um repositório público: adicione a topic `no-portfolio`.
- Para destacar no topo: adicione a topic `destaque`.
- O botão "Ver demo" usa o campo *Website* do repositório.
- A categoria (IA, Fiscal e ERP, Integrações e APIs, Estudos, Outros) é deduzida pela descrição.

## Estrutura
| Arquivo | Para que serve |
| --- | --- |
| `index.html` | Conteúdo em português e SEO |
| `i18n.js` | Traduções para inglês e troca de tema |
| `app.js` | Lista e filtros de projetos |
| `style.css` | Visual e temas claro/escuro |
| `scripts/build-projects.mjs` | Gera `projects.json` a partir da API do GitHub |
| `docs/` | Anotações locais, fora do git |

## Editar textos
Texto em português: direto no `index.html`. Ao adicionar um elemento com `data-i18n="chave"`, crie a mesma chave em `I18N.en` no `i18n.js`.

## Rodar local
```bash
node scripts/build-projects.mjs
```

```bash
python -m http.server 8000
```

Depois abra `http://localhost:8000`.

## Licença
Código livre para consulta. Textos e informações pessoais pertencem a Matheus Gasparotto Polli.
