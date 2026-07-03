const menuButton = document.querySelector("[data-menu]");
const langButton = document.querySelector("[data-lang-toggle]");
const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navLinks = [...document.querySelectorAll(".nav a")];
const sections = [...document.querySelectorAll("main section[id]")];
const revealItems = [...document.querySelectorAll(".reveal")];

let currentLang = "en";

const translations = {
  en: {
    nav: ["Home", "About", "Skills", "Projects", "Experience", "Contact"],
    hire: "Hire Me",
    heroEyebrow: "Web developer | Data & systems",
    heroTitle: 'Hi, I am <span>Guilherme</span><br />I build systems that make work clearer.',
    heroText:
      "I connect web development, operational data, and technical support to create practical tools for teams, workflows, and decision-making.",
    viewProjects: "View Projects",
    downloadCv: "Download CV",
    tech: ["Frontend", "Backend", "Data", "Automation"],
    codeTitle: "</> Code",
    codeGoal: "build efficient solutions",
    aboutEyebrow: "About me",
    aboutTitle: "I like building the bridge between people, processes, and clean software.",
    aboutText:
      "My background mixes IT support, process analysis, documentation, ERP routines, web technologies, databases, REDCap, Drupal, and Microsoft tools. That gives me a practical eye for systems that need to be useful, organized, and easy to maintain.",
    contactMe: "Contact Me",
    stats: [
      "Systems Analyst & Developer",
      "Core technologies",
      "Languages",
      "Computer Science student",
    ],
    skillsEyebrow: "My skills",
    skillsTitle: "Tools I bring to the table",
    skills: [
      ["Frontend Development", "HTML, CSS, JavaScript, React, responsive interfaces, and component-based layouts."],
      ["Backend Development", "PHP, Laravel, Node.js, APIs, authentication flows, and server-side application logic."],
      ["Databases & Data", "SQL, MongoDB, operational data analysis, reports, and structured information management."],
      ["Platforms & Tools", "REDCap, Drupal, ERP support, Microsoft tools, Git, GitHub, and technical documentation."],
      ["Design & Reporting", "Figma, Power BI, interface organization, dashboards, and visual communication."],
      ["AI & Automation", "Prompt engineering, workflow automation, process improvement, and productivity tooling."],
    ],
    projectsEyebrow: "Featured projects",
    projectsTitle: "Work I can build and improve",
    projects: [
      ["React / Vite", "NexusFX", "Financial education and market intelligence platform with news, Forex studies, premium flows, demo checkout, and subscriber hub."],
      ["Data", "Operational data dashboards", "Reports and decision-support views using SQL, MongoDB, Power BI, ERP data, documentation, and process indicators."],
      ["HTML / CSS / JavaScript", "Trivox", "Institutional website for a 3D printing brand, featuring a responsive landing page, animated 3D printer, service sections, and contact flow."],
      ["Automation", "AI-assisted workflows", "Prompt engineering, task automation, documentation helpers, and workflow improvements for repetitive technical routines."],
    ],
    projectLinks: ["Repository", "Live preview", "Repository", "Live preview"],
    experienceEyebrow: "Experience",
    experienceTitle: "Recent work and education",
    work: [
      ["Systems Analyst & Developer", "Fiocruz / Fiotec | 2026", "Development and analysis work focused on systems, technical routines, and structured problem solving."],
      ["Process Analyst & IT Support", "OGMA / Aeronautical Industry | 2024 - 2026", "Internal systems support, operational data analysis, ERP maintenance, documentation, quality control, and process improvement."],
      ["Aerostructure Mechanic", "Embraer | 2024 - 2025", "Technical processes, operational documentation, quality control, routine improvement, and standardized procedures."],
    ],
    educationTitle: "Education & courses",
    education: [
      "Computer Science - University of the Federal District, 2025 - 2029",
      "Full Stack Web Development Program - TripleTen, 2024 - 2025",
      "Flight Operations Officer - AWA Academy, 2018 - 2020",
      "PHP, Laravel & Vue.js; Algorithms & Programming Logic; Figma UI Design; Prompt Engineering with AI; CS50 AI with Python; Blockchain Fundamentals.",
    ],
    contactEyebrow: "Let's work together",
    contactTitle: "Have a project, system, or data challenge in mind?",
    contactText: "I am available for opportunities in IT, data, technical support, and development.",
    getInTouch: "Get In Touch",
    contactLabels: ["Email", "Phone", "Location", "LinkedIn", "GitHub", "Languages"],
    languages: "Portuguese | English | Spanish",
    footer: "© 2026 Guilherme Galvao. All rights reserved.",
    backTop: "Back to top",
  },
  pt: {
    nav: ["Inicio", "Sobre", "Competencias", "Projetos", "Experiencia", "Contato"],
    hire: "Contratar",
    heroEyebrow: "Desenvolvedor web | Dados & sistemas",
    heroTitle: 'Ola, eu sou <span>Guilherme</span><br />Desenvolvo sistemas que tornam processos mais claros.',
    heroText:
      "Conecto desenvolvimento web, dados operacionais e suporte tecnico para criar ferramentas praticas para equipes, fluxos de trabalho e tomada de decisao.",
    viewProjects: "Ver projetos",
    downloadCv: "Baixar CV",
    tech: ["Frontend", "Backend", "Dados", "Automacao"],
    codeTitle: "</> Codigo",
    codeGoal: "criar solucoes eficientes",
    aboutEyebrow: "Sobre mim",
    aboutTitle: "Atuo na conexao entre pessoas, processos e software bem estruturado.",
    aboutText:
      "Minha experiencia combina suporte de TI, analise de processos, documentacao, rotinas de ERP, tecnologias web, bancos de dados, REDCap, Drupal e ferramentas Microsoft. Isso me ajuda a construir sistemas uteis, organizados e sustentaveis.",
    contactMe: "Entrar em contato",
    stats: [
      "Analista de Sistemas & Desenvolvedor",
      "Tecnologias principais",
      "Idiomas",
      "Estudante de Ciencia da Computacao",
    ],
    skillsEyebrow: "Competencias",
    skillsTitle: "Areas de atuacao tecnica",
    skills: [
      ["Desenvolvimento Frontend", "HTML, CSS, JavaScript, React, interfaces responsivas e layouts baseados em componentes."],
      ["Desenvolvimento Backend", "PHP, Laravel, Node.js, APIs, fluxos de autenticacao e logica de aplicacoes no servidor."],
      ["Bancos de Dados & Dados", "SQL, MongoDB, analise de dados operacionais, relatorios e gestao estruturada de informacoes."],
      ["Plataformas & Ferramentas", "REDCap, Drupal, suporte a ERP, ferramentas Microsoft, Git, GitHub e documentacao tecnica."],
      ["Design & Relatorios", "Figma, Power BI, organizacao de interfaces, dashboards e comunicacao visual."],
      ["IA & Automacao", "Engenharia de prompts, automacao de fluxos, melhoria de processos e ferramentas de produtividade."],
    ],
    projectsEyebrow: "Projetos em destaque",
    projectsTitle: "Solucoes que posso construir e aprimorar",
    projects: [
      ["React / Vite", "NexusFX", "Plataforma de educacao financeira e inteligencia de mercado com noticias, estudos de Forex, fluxos premium, checkout demo e hub do assinante."],
      ["Dados", "Dashboards de dados operacionais", "Relatorios e visualizacoes de apoio a decisao com SQL, MongoDB, Power BI, dados de ERP, documentacao e indicadores de processo."],
      ["HTML / CSS / JavaScript", "Trivox", "Website institucional para uma marca de impressao 3D, com landing page responsiva, animacao de impressora 3D, secoes de servicos e fluxo de contato."],
      ["Automacao", "Fluxos assistidos por IA", "Engenharia de prompts, automacao de tarefas, apoio a documentacao e melhorias para rotinas tecnicas repetitivas."],
    ],
    projectLinks: ["Repositorio", "Ver online", "Repositorio", "Ver online"],
    experienceEyebrow: "Experiencia",
    experienceTitle: "Experiencia recente e formacao",
    work: [
      ["Analista de Sistemas & Desenvolvedor", "Fiocruz / Fiotec | 2026", "Atuacao em desenvolvimento e analise com foco em sistemas, rotinas tecnicas e resolucao estruturada de problemas."],
      ["Analista de Processos & Suporte de TI", "OGMA / Industria Aeronautica | 2024 - 2026", "Suporte a sistemas internos, analise de dados operacionais, manutencao de ERP, documentacao, controle de qualidade e melhoria de processos."],
      ["Mecanico de Aeroestruturas", "Embraer | 2024 - 2025", "Processos tecnicos, documentacao operacional, controle de qualidade, melhoria de rotinas e procedimentos padronizados."],
    ],
    educationTitle: "Formacao & cursos",
    education: [
      "Ciencia da Computacao - Universidade do Distrito Federal, 2025 - 2029",
      "Programa Full Stack Web Development - TripleTen, 2024 - 2025",
      "Flight Operations Officer - AWA Academy, 2018 - 2020",
      "PHP, Laravel & Vue.js; Algoritmos & Logica de Programacao; Figma UI Design; Prompt Engineering with AI; CS50 AI with Python; Blockchain Fundamentals.",
    ],
    contactEyebrow: "Vamos trabalhar juntos",
    contactTitle: "Tem um projeto, sistema ou desafio de dados em mente?",
    contactText: "Estou disponivel para oportunidades em TI, dados, suporte tecnico e desenvolvimento.",
    getInTouch: "Entrar em contato",
    contactLabels: ["Email", "Telefone", "Localizacao", "LinkedIn", "GitHub", "Idiomas"],
    languages: "Portugues | Ingles | Espanhol",
    footer: "© 2026 Guilherme Galvao. Todos os direitos reservados.",
    backTop: "Voltar ao topo",
  },
};

const setText = (selector, value) => {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
};

const setHtml = (selector, value) => {
  const element = document.querySelector(selector);
  if (element) element.innerHTML = value;
};

const applyLanguage = (lang) => {
  const copy = translations[lang];
  document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";

  navLinks.forEach((link, index) => {
    link.textContent = copy.nav[index];
  });

  setText(".header-cta", copy.hire);
  setText(".hero .eyebrow", copy.heroEyebrow);
  setHtml(".hero h1", copy.heroTitle);
  setText(".hero-text", copy.heroText);
  setText(".hero-actions .primary", copy.viewProjects);
  setText(".hero-actions .ghost", copy.downloadCv);
  document.querySelectorAll(".tech-strip span").forEach((item, index) => {
    item.innerHTML = `<b>${String(index + 1).padStart(2, "0")}</b>${copy.tech[index]}`;
  });

  setText(".card-top span", copy.codeTitle);
  setText(
    ".code-card code",
    `const developer = {
  name: "Guilherme",
  focus: ["Web", "Data", "Systems"],
  stack: ["React", "Laravel", "Node.js"],
  goal: "${copy.codeGoal}"
};`
  );

  setText("#about .eyebrow", copy.aboutEyebrow);
  setText("#about h2", copy.aboutTitle);
  setText("#about .section-copy p:not(.eyebrow)", copy.aboutText);
  setText("#about .button", copy.contactMe);
  document.querySelectorAll(".stats-grid article p").forEach((item, index) => {
    item.textContent = copy.stats[index];
  });

  setText("#skills .eyebrow", copy.skillsEyebrow);
  setText("#skills h2", copy.skillsTitle);
  document.querySelectorAll(".skill").forEach((item, index) => {
    const number = String(index + 1).padStart(2, "0");
    item.querySelector("span").innerHTML = `<i>${number}</i>${copy.skills[index][0]}`;
    item.querySelector("p").textContent = copy.skills[index][1];
  });

  setText("#projects .eyebrow", copy.projectsEyebrow);
  setText("#projects h2", copy.projectsTitle);
  document.querySelectorAll(".project-card").forEach((item, index) => {
    item.querySelector("span").textContent = copy.projects[index][0];
    item.querySelector("h3").textContent = copy.projects[index][1];
    item.querySelector("p").textContent = copy.projects[index][2];
  });
  document.querySelectorAll(".project-links a").forEach((item, index) => {
    item.textContent = copy.projectLinks[index];
  });

  setText("#experience .eyebrow", copy.experienceEyebrow);
  setText("#experience .section-heading h2", copy.experienceTitle);
  document.querySelectorAll(".work-card").forEach((item, index) => {
    item.querySelector("h3").textContent = copy.work[index][0];
    item.querySelector(".meta").textContent = copy.work[index][1];
    item.querySelector("p:not(.meta)").textContent = copy.work[index][2];
  });
  setText(".education-panel h3", copy.educationTitle);
  document.querySelectorAll(".education-panel li").forEach((item, index) => {
    item.textContent = copy.education[index];
  });

  setText("#contact .eyebrow", copy.contactEyebrow);
  setText("#contact h2", copy.contactTitle);
  setText("#contact > div:first-child p:not(.eyebrow)", copy.contactText);
  setText("#contact .button", copy.getInTouch);
  document.querySelectorAll(".contact-card strong").forEach((item, index) => {
    item.textContent = copy.contactLabels[index];
  });
  const languageRow = document.querySelector(".contact-card > span:last-child");
  if (languageRow) languageRow.lastChild.textContent = copy.languages;

  setText("footer span", copy.footer);
  setText("footer a", copy.backTop);
};

menuButton.addEventListener("click", () => {
  nav.classList.toggle("open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 16);
});

langButton.addEventListener("click", () => {
  currentLang = currentLang === "en" ? "pt" : "en";
  langButton.textContent = currentLang === "en" ? "PT" : "EN";
  applyLanguage(currentLang);
});

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  { rootMargin: "-45% 0px -45% 0px" }
);

sections.forEach((section) => sectionObserver.observe(section));

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("in-view");
      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.12 }
);

revealItems.forEach((item) => revealObserver.observe(item));
applyLanguage(currentLang);
