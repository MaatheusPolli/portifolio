// Traduções. O português fica no próprio HTML; aqui só o inglês e os textos dinâmicos.
const I18N = {
  en: {
    "nav.about": "About",
    "nav.sectors": "Industries",
    "nav.career": "Career",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "hero.title": "Full Stack developer who gets ERP systems talking to the rest of the world, <em>now with AI in the mix.</em>",
    "hero.lead": "I have spent over 11 years inside business management systems. Today I am a Software Engineer at Linx, on the R&amp;D team, building integrations between the ERP and platforms such as VTEX, Magento, Mercado Livre and Walmart. I have built tax invoicing, shipping calculation and PIX payments, and modernized a lot of Delphi code. Now I combine that background with TypeScript, Node.js and artificial intelligence.",
    "hero.cta": "See projects",
    "stats.years": "11+ years",
    "stats.yearsTxt": "building ERP systems",
    "stats.platforms": "9 platforms",
    "stats.platformsTxt": "e-commerce and marketplace platforms integrated",
    "stats.cert": "Delphi Certified",
    "stats.certTxt": "official Embarcadero certification",
    "stats.repos": "public projects on GitHub",
    "about.title": "Why work with me",
    "about.c1t": "I understand the business",
    "about.c1": "Brazilian tax documents (NF-e, CT-e, MDF-e, SPED), shipping, bank slips and PIX have been part of my daily work since day one. I turn business rules into tested code.",
    "about.c2t": "From Delphi to TypeScript",
    "about.c2": "I have worked with everything from Delphi 5 to 10 Seattle and today I write Node.js and React. I know how to modernize a critical system step by step, without stopping the business that depends on it.",
    "about.c3t": "Practical AI",
    "about.c3": "I use AI where it actually helps. My assistants cite their sources or say they don't know, my agents never make critical decisions on their own, and everything is measured before it reaches production.",
    "sectors.title": "Industries I have worked in",
    "sectors.sub": "Every industry has its own rules. I had to learn all of them so the system would work in the client's daily routine.",
    "sectors.s1t": "Retail and e-commerce",
    "sectors.s1": "Physical stores, online stores and marketplaces connected to the same ERP: orders, stock, pricing, invoicing and delivery.",
    "sectors.s2t": "Compounding pharmacies",
    "sectors.s2": "Formula calculation, production control and traceability in a sector with strict health regulations.",
    "sectors.s3t": "Shoe and building supply stores",
    "sectors.s3": "Product variants, counter sales, stock control and tax invoicing for small and mid-sized retailers.",
    "sectors.s4t": "Funeral homes, cemeteries and clubs",
    "sectors.s4": "Contract, membership and service management, with recurring billing and close customer support.",
    "integ.title": "Integrations I have delivered",
    "integ.g1": "E-commerce and marketplaces",
    "integ.g2": "Tax documents (Brazil)",
    "integ.g3": "Logistics",
    "integ.g3t": "Correios (Brazilian postal service), carriers and shipping rates",
    "integ.g4": "Payments",
    "integ.g4t": "PIX, bank slips and payment gateways",
    "career.title": "My career",
    "career.j1d": "2021 to present",
    "career.j1t": "Software Engineer at Linx",
    "career.j1": "On the R&amp;D team of Latin America's largest retail software company, I build integrations between the ERP and VTEX, Magento, Mercado Livre, Walmart, Anymarket, Tray and other platforms. I take part in the whole cycle, from analysis to release, and I automated the GitLab delivery pipelines to make releases faster and more predictable.",
    "career.j2d": "2019 to 2021",
    "career.j2t": "Programmer Analyst at VSM Informática",
    "career.j2": "I worked on an ERP for compounding pharmacies and evolved the formula module, which automates production calculations. By improving how requirements were written, we cut delivery rework by about 25%.",
    "career.j3d": "2015 to 2019",
    "career.j3t": "Developer at Simbolus",
    "career.j3": "I started as an intern and became a developer. I built ERP systems for retail, building supply stores and funeral homes in Delphi 7 and 10 Seattle, with tax integrations through ACBr (NF-e, CT-e, MDF-e and SPED) and with Correios. In support, I helped reduce average response time by 20%.",
    "edu.title": "Education",
    "edu.e1t": "Applied AI Engineering",
    "edu.e1": "Postgraduate program at UNIPDS, 2026 to 2027 (in progress).",
    "edu.e2t": "Software Engineering",
    "edu.e2": "Postgraduate program at Descomplica, 2026 to 2027 (in progress).",
    "edu.e3t": "Databases",
    "edu.e3": "Specialization at UniCesumar, 2019 to 2020.",
    "edu.e4t": "Computer Science",
    "edu.e4": "Bachelor's degree at Universidade do Sagrado Coração, 2015 to 2018.",
    "edu.e5t": "Certifications",
    "edu.e5": "Embarcadero Certified Delphi Developer, DevOps and Agile Culture, and a Scrum track.",
    "proj.title": "Projects",
    "pro.title": "Custom-built systems",
    "pro.p1t": "Gerenciador Caixa",
    "pro.p1": "Web app that replaced Excel spreadsheets for managing car inventory and sales, loans with automatic interest and personal assets, with dashboard, reports, e-mail and WhatsApp alerts and encrypted backups. Private code.",
    "proj.gh": "Open source on GitHub",
    "pro.p2t": "M2 Motors website",
    "pro.p2": "Used car and motorcycle catalog for a dealership in Bauru (Brazil), with filters, Google-optimized vehicle pages, direct WhatsApp contact and an admin panel where the store manages inventory and photos. Private code.",
    "proj.sub": "This list updates itself with what I publish on GitHub. Descriptions are in Portuguese.",
    "cat.all": "All",
    "cat.ia": "AI",
    "cat.fiscal": "Tax and ERP",
    "cat.integracoes": "Integrations and APIs",
    "cat.estudos": "Studies",
    "cat.outros": "Other",
    "contact.title": "Let's talk",
    "contact.text": "Got a tricky integration, an annoying tax rule or an AI idea that needs to get off the ground? Reach out.",
    "contact.linkedin": "Message me on LinkedIn",
    "contact.github": "See GitHub",
    "js.demo": "See demo",
    "js.empty": "No projects in this category yet.",
    "js.loading": "Loading projects...",
    "js.error": "Could not load the list. See it on",
  },
  pt: {
    "js.demo": "Ver demo",
    "js.empty": "Nenhum projeto nesta categoria ainda.",
    "js.loading": "Carregando projetos...",
    "js.error": "Não foi possível carregar a lista. Veja no",
  },
};

const META = {
  pt: { title: document.title, desc: document.querySelector('meta[name="description"]').content },
  en: {
    title: "Matheus Polli | Full Stack Developer, ERP Integrations and AI",
    desc: "Matheus Polli, Software Engineer at Linx with 11+ years in ERP: marketplace integrations, Brazilian tax documents, Delphi, TypeScript, Node.js and applied AI.",
  },
};

const ptText = {};
document.querySelectorAll("[data-i18n]").forEach((el) => (ptText[el.dataset.i18n] = el.innerHTML));

let lang = "pt";
try { lang = localStorage.getItem("lang") || (navigator.language.startsWith("pt") ? "pt" : "en"); } catch (e) {}

function t(key) {
  return (I18N[lang] && I18N[lang][key]) || I18N.pt[key] || ptText[key] || key;
}

function applyLang(next) {
  lang = next;
  try { localStorage.setItem("lang", lang); } catch (e) {}
  document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const k = el.dataset.i18n;
    el.innerHTML = lang === "pt" ? ptText[k] : t(k);
  });
  document.title = META[lang].title;
  document.querySelector('meta[name="description"]').content = META[lang].desc;
  const btn = document.getElementById("lang-toggle");
  btn.textContent = lang === "pt" ? "EN" : "PT";
  btn.setAttribute("aria-label", lang === "pt" ? "Switch to English" : "Mudar para português");
  document.dispatchEvent(new Event("langchange"));
}

document.getElementById("lang-toggle").addEventListener("click", () => applyLang(lang === "pt" ? "en" : "pt"));

// Tema: segue o sistema até a pessoa escolher; depois lembra a escolha
document.getElementById("theme-toggle").addEventListener("click", () => {
  const root = document.documentElement;
  const current = root.dataset.theme || (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
  root.dataset.theme = current === "light" ? "dark" : "light";
  try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
});

if (lang !== "pt") applyLang(lang);
