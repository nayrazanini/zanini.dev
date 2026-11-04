import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { V as notFound } from "../_libs/tanstack__router-core.mjs";
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/seroval.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
const appCss = "/assets/styles-Dwe2UrWk.css";
const LanguageContext = reactExports.createContext(
  void 0
);
function LanguageProvider({
  children
}) {
  const [language, setLanguage] = reactExports.useState("pt");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(LanguageContext.Provider, { value: { language, setLanguage }, children });
}
function useLanguage() {
  const context = reactExports.useContext(LanguageContext);
  if (!context) {
    throw new Error(
      "useLanguage deve ser utilizado dentro de LanguageProvider."
    );
  }
  return context;
}
const __vite_import_meta_env__$1 = {};
const SITE_URL = (__vite_import_meta_env__$1["VITE_SITE_URL"] ?? "").replace(/\/$/, "");
const OG_IMAGE = `${SITE_URL}/og-image.png`;
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$f = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "nayra.dev" },
      {
        name: "description",
        content: "Portfólio de Náyra Zanini,  Analista de Dados com foco em SQL Server, testes funcionais e engenharia de software."
      },
      { name: "author", content: "Náyra Zanini" },
      { property: "og:title", content: "nayra.dev" },
      {
        property: "og:description",
        content: "Portfólio de Náyra Zanini,  Analista de Dados com foco em SQL Server, testes funcionais e engenharia de software."
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "nayra.dev" },
      {
        name: "twitter:description",
        content: "Portfólio de Náyra Zanini,  Analista de Dados com foco em SQL Server, testes funcionais e engenharia de software."
      },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:image", content: OG_IMAGE }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Anton&family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=Josefin+Sans:wght@300;400;600&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$f.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(LanguageProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }) });
}
const $$splitComponentImporter$d = () => import("./index-Ci7uCGmS.mjs");
const Route$e = createFileRoute()({
  head: () => ({
    meta: [{
      title: "zanini.dev | Náyra Zanini"
    }, {
      name: "description",
      content: "Portfólio de Náyra Zanini, Programadora Júnior com foco em SQL Server, T-SQL, sustentação de sistemas e engenharia de software."
    }, {
      property: "og:title",
      content: "nayra.dev | Náyra Zanini"
    }, {
      property: "og:description",
      content: "Projetos, dados e soluções desenvolvidos a partir de problemas reais, lógica de negócio e tecnologia."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$d, "component")
});
const $$splitComponentImporter$c = () => import("./contato-Pjd99L8W.mjs");
const Route$d = createFileRoute()({
  head: () => ({
    meta: [{
      title: "Contato — Náyra Zanini"
    }, {
      name: "description",
      content: "Entre em contato com Náyra Zanini. Email, LinkedIn, GitHub e WhatsApp para oportunidades em tecnologia."
    }, {
      property: "og:title",
      content: "Contato — Náyra Zanini"
    }, {
      property: "og:description",
      content: "Vamos conversar sobre oportunidades em desenvolvimento e dados."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import("./experiencia-C3REsOCT.mjs");
const Route$c = createFileRoute()({
  head: () => ({
    meta: [{
      title: "Experiência & Formação — Náyra Zanini"
    }, {
      name: "description",
      content: "Experiência profissional, formação acadêmica, certificações e competências técnicas de Náyra Zanini."
    }, {
      property: "og:title",
      content: "Experiência — Náyra Zanini"
    }, {
      property: "og:description",
      content: "10+ anos na UNIP, SQL Server, testes funcionais, pós em Engenharia de Software e certificações ágeis."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./projetos-BFsOu0JM.mjs");
const Route$b = createFileRoute()({
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const ARTIGOS = [
  {
    slug: "como-o-exercicio-fisico-transformou-minha-rotina-de-estudos",
    title: "Como o exercício físico transformou minha rotina de estudos?",
    subject: "Experiência pessoal · LinkedIn",
    date: "27/06/2025",
    publishedAt: "2025-06-27",
    summary: "Disciplina, foco e organização que vieram da constância nos treinos: como o exercício físico se tornou parte central do meu planejamento de estudos e produtividade — com vivência e ciência.",
    paragraphs: [
      "Disciplina, foco e organização não vieram só dos livros, vieram da constância nos treinos. O exercício físico mudou minha rotina de estudos e aumentou meu rendimento profissional. É mais estratégia do que estilo de vida.",
      "Na minha rede vizinha fica um pouco mais claro sobre a minha ligação com esportes. Não é novidade para ninguém que a atividade física nos ajuda em muitos aspectos da vida. Mas hoje, quero compartilhar minha experiência pessoal.",
      "Em 2020, a empresa em que trabalho adotou o home office por um período. Era um momento turbulento e cheio de incertezas. Naquela época, descobri um problema no joelho causado pelo sobrepeso e pela falta de fortalecimento muscular. Desde então, decidi transformar minha vida. E não, não é papo de “coach de academia”, é a realidade: eu estava com dores físicas e enfrentando desafios emocionais no pior momento para isso: em plena pandemia.",
      "Com tudo isso, decidi que não queria mais conviver com dores de nenhum tipo. Comprei uns halteres e comecei a praticar exercícios em casa, além de iniciar a fisioterapia. Ali eu me redescobri. Quando a pandemia acalmou e as coisas foram liberadas, voltei pra academia e a jogar futebol, sendo esse último minha paixão desde pequena.",
      "A proposta deste artigo é te mostrar o quão benéfico tem sido incorporar o exercício físico à minha rotina, especialmente para meus estudos e desenvolvimento profissional. Não se trata de virar atleta ou “influencer fitness”. É sobre cuidar da mente e do corpo para evoluir com mais constância e equilíbrio.",
      "Como o exercício físico me transformou? Hoje, sou uma pessoa: com mais disciplina e clareza mental; muito mais focada e produtiva; mais organizada, com uma rotina estruturada e metas realistas; que compreende que autocuidado é ferramenta de crescimento; e que dorme melhor e respeita o próprio ritmo.",
      "Hoje, o exercício físico não é algo que “encaixo quando dá”, ele é parte central da minha rotina. Não sou eu que ajusto meus treinos à rotina. São as outras tarefas que se organizam ao redor do meu momento de autocuidado. Esse pensamento me deu mais constância e equilíbrio para lidar com tudo o que preciso no dia a dia, dos estudos à vida profissional.",
      "Não é só sobre mim. A ciência confirma que o exercício físico é uma poderosa ferramenta para o cérebro e a performance cognitiva. Um estudo com mais de 250 mil pessoas, publicado no British Journal of Sports Medicine, mostrou que exercícios como caminhada rápida, yoga e jogos interativos melhoram a memória, o foco e as funções cognitivas executivas.",
      "A University College London descobriu que praticar 30 minutos de atividade física e dormir bem pode aumentar de 2% a 5% a capacidade de memória no dia seguinte. Em um estudo com milhares de adolescentes, os que praticavam atividades físicas regulares, mesmo fora da escola, apresentaram melhor desempenho em matemática, maior atenção e menos sinais de burnout. Pesquisas europeias mostraram ainda que fazer exercício cerca de 4h após o estudo ajuda a consolidar melhor as informações na memória de longo prazo (Instituto Einstein / FAPESP).",
      "Incorporar o movimento ao meu dia a dia mudou minha relação com os estudos, com o trabalho e comigo mesma. Hoje, o exercício físico é parte do meu planejamento de produtividade. Preciso fazer para me sentir bem e conseguir com as coisas do meu dia. É onde encontro foco, criatividade e regulação emocional para dar conta da minha rotina na área de tecnologia e nos meus projetos pessoais.",
      "Se você também está buscando mais foco, organização, equilíbrio mental e rendimento nos estudos, talvez o primeiro passo não esteja apenas em um novo curso, mas em colocar o corpo em movimento."
    ],
    footer: "Artigo originalmente publicado no LinkedIn por Náyra Zanini em 27/06/2025.",
    externalUrl: "https://www.linkedin.com/pulse/como-o-exerc%C3%ADcio-f%C3%ADsico-transformou-minha-rotina-de-estudos-zanini-bkeof/"
  },
  {
    slug: "testes-software-decisao-estrategica",
    title: "Testes de Software como Decisão Estratégica: Qualidade, Risco e Continuidade de Negócio",
    subject: "Testes de Software · Aula 28/01",
    date: "28/01/2026",
    publishedAt: "2026-01-28",
    summary: "Da visão tradicional de caça a defeitos à gestão consciente de risco: por que qualidade nasce nas decisões ao longo do ciclo, e como a ISO 22301 reforça a resiliência como foco central dos testes.",
    paragraphs: [
      "A primeira aula da disciplina de Testes de Software rompe com a visão tradicional que associa testes exclusivamente à identificação de defeitos técnicos. Desde o início, o material apresentado propõe uma mudança de mentalidade: testar não é uma atividade operacional ou uma etapa final do desenvolvimento, mas sim uma decisão estratégica diretamente relacionada à continuidade do negócio.",
      "Um dos principais aprendizados da aula foi compreender que qualidade de software não nasce na fase de testes, mas nas escolhas feitas ao longo de todo o ciclo de vida do sistema. Cada decisão carrega riscos que impactam diretamente o negócio. Dessa forma, o papel do profissional de testes deixa de ser reativo, focado apenas em executar casos de teste, e passa a ser estratégico, atuando na gestão consciente de riscos.",
      "Nesse contexto, a disciplina reforça que métricas tradicionais, como quantidade de bugs encontrados ou cobertura de requisitos, são insuficientes para medir qualidade real. Um sistema pode apresentar poucos defeitos técnicos e ainda assim falhar de forma crítica em produção, seja por indisponibilidade, lentidão, falhas de integração ou incapacidade de recuperação diante de incidentes. Assim, o foco dos testes deve migrar do “funciona ou não funciona” para a pergunta central: qual impacto essa falha gera para o negócio?",
      "A introdução da ISO 22301, norma de Gestão de Continuidade de Negócios, aprofunda ainda mais essa visão. A norma evidencia que falhas são inevitáveis e que o verdadeiro desafio está em garantir que os processos críticos continuem operando ou sejam rapidamente recuperados. Aplicada aos testes de software, essa perspectiva reforça a necessidade de validar não apenas funcionalidades, mas também resiliência, recuperação, desempenho sob estresse e tratamento de exceções. Testar, portanto, passa a significar assegurar que o negócio sobreviva mesmo quando algo sai do planejado.",
      "O bootcamp prático da aula consolidou esse aprendizado ao deslocar o foco da técnica para a decisão. Ao longo das atividades, ficou evidente que testar tudo é impossível e que a maturidade profissional está na capacidade de justificar tecnicamente e estrategicamente as escolhas feitas, inclusive perante níveis executivos. Essa abordagem exige domínio técnico, mas sobretudo capacidade analítica, comunicação clara e entendimento do contexto organizacional.",
      "Conclui-se, portanto, que o principal aprendizado da primeira aula é a redefinição do papel do teste de software: ele não existe para garantir perfeição técnica, mas para proteger o negócio de riscos inaceitáveis, assumindo conscientemente os trade-offs envolvidos. A disciplina não forma apenas testadores, mas profissionais capazes de sustentar decisões críticas, alinhando tecnologia, negócio e continuidade operacional."
    ],
    footer: "Artigo produzido por Náyra Zanini, com base nos aprendizados da disciplina Testes de Software durante a Pós-Graduação em Engenharia de Software (UNIP)."
  },
  {
    slug: "evolucao-qa-bootcamps-testes-software",
    title: "Da Execução à Decisão: A Evolução do Papel do QA nos Bootcamps de Testes de Software",
    subject: "Testes de Software · Aula 18/03",
    date: "18/03/2026",
    publishedAt: "2026-03-18",
    summary: "Uma síntese dos Bootcamps 11 a 14: do registro de defeitos à priorização por risco, passando pela sprint ágil até chegar às decisões de Go/No-Go em pipelines CI/CD.",
    paragraphs: [
      "Ao longo dos Bootcamps 11, 12, 13 e 14, ficou evidente que a área de testes de software vai muito além da execução técnica e está diretamente ligada à tomada de decisões estratégicas dentro de um projeto. O que começou como identificação e registro de defeitos evoluiu gradualmente para uma visão mais ampla, onde qualidade, risco e negócio passam a caminhar juntos.",
      "No Bootcamp 11, o foco esteve na identificação e no registro estruturado de defeitos, utilizando ferramentas como Qase e Jira. Nesse momento, ficou claro que um defeito não é apenas um erro no sistema, mas um problema que impacta diretamente o usuário. Além disso, percebi que a forma como o defeito é descrito influencia diretamente na sua resolução. Um defeito mal documentado pode gerar retrabalho, falhas de comunicação e atrasos, mostrando que qualidade também está na clareza da informação.",
      "Já no Bootcamp 12, a análise se aprofundou ao introduzir os conceitos de severidade e prioridade. Foi possível entender que nem todo defeito deve ser tratado imediatamente e que a decisão de correção depende do contexto. A ideia de aceitar riscos de forma consciente trouxe uma visão mais realista do desenvolvimento de software, onde o objetivo não é eliminar todos os problemas, mas sim gerenciar o impacto deles. Isso reforça que qualidade não é perfeição, mas sim equilíbrio entre risco e valor entregue.",
      "No Bootcamp 13, o cenário se aproximou ainda mais da realidade ao simular uma sprint ágil. A limitação de tempo obrigou a priorização de testes e mostrou que tentar validar tudo pode ser uma estratégia ineficiente. Nesse contexto, os testes passaram a ser vistos como ferramenta de apoio à decisão, e não apenas como validação técnica. Além disso, ficou evidente como os defeitos impactam diretamente o andamento da sprint, influenciando backlog, planejamento e entregas.",
      "Por fim, o Bootcamp 14 consolidou todo esse aprendizado ao introduzir o conceito de pipeline CI/CD e decisões de liberação. Nesse momento, o foco deixou de ser apenas identificar e priorizar problemas, passando a ser decidir se o sistema está pronto para produção. A análise de falhas em diferentes níveis, o uso de quality gates e a avaliação de riscos mostraram que a decisão de “Go ou No-Go” não é técnica apenas, mas envolve também impacto no negócio e confiança no sistema. A reflexão final reforçou que um pipeline confiável é aquele que representa a realidade, e não apenas aquele que sempre passa.",
      "Dessa forma, é possível perceber uma evolução clara: do registro de defeitos para a priorização, da priorização para a execução em contexto real, e da execução para a tomada de decisão baseada em evidências. Esse processo mostra que o papel do QA não está limitado à validação, mas sim à garantia de qualidade em um sentido amplo, atuando como um elo entre tecnologia, processo e negócio.",
      "Ao final desses bootcamps, a principal mudança de percepção foi entender que testar não é apenas encontrar erros, mas sim fornecer informações confiáveis para que decisões sejam tomadas com segurança. Isso posiciona o profissional de testes não apenas como executor, mas como parte essencial na estratégia de desenvolvimento de software."
    ],
    footer: "Artigo produzido por Náyra Zanini, com base nos aprendizados dos Bootcamps 11, 12, 13 e 14 da disciplina Testes de Software durante a Pós-Graduação em Engenharia de Software (UNIP)."
  },
  {
    slug: "evolucao-qualidade-engenharia-software",
    title: "Evolução, Qualidade e Desafios da Engenharia de Software na Era Contemporânea",
    subject: "Paradigmas da Engenharia de Software · Aula 01",
    date: "02/07/2025",
    publishedAt: "2025-07-02",
    summary: "Da evolução dos anos 60 ao DevOps, passando pelo Modelo Espiral, Qualidade na fonte, o Chaos Report e a metodologia Shape Up — uma síntese crítica sobre o estado atual da Engenharia de Software.",
    paragraphs: [
      "Durante a aula foram realizados diversos prompts para que a Inteligência Artificial colaborasse com o aprendizado em sala, junto com a explicação do Professor Marcelo Nogueira.",
      "Abordamos a evolução da tecnologia desde os anos 60 até os dias atuais, reforçando a importância de Pesquisa e Desenvolvimento (P&D), o aumento dos investimentos estratégicos e a adaptação dos processos de engenharia ao mercado moderno com metodologias como o DevOps.",
      "Foi discutido o Modelo Espiral de Boehm, estruturado em fases como definição de objetivos, análise de riscos, desenvolvimento, validação e planejamento contínuo, ideal para projetos complexos.",
      "A leitura do livro “Da imitação à inovação: A dinâmica do aprendizado tecnológico da Coréia” trouxe o aprendizado sobre a importância da imitação estratégica e do investimento em conhecimento para superação de barreiras tecnológicas.",
      "Também foi discutido o conceito de “Qualidade na fonte” e sua relação com metodologias ágeis, destacando a prevenção de defeitos desde o início do projeto, responsabilidade coletiva e melhoria contínua, conectando com o conceito de “Kaizen na Engenharia”.",
      "O relatório Chaos Report nos fez refletir sobre os desafios reais do desenvolvimento de software, com taxas baixas de sucesso e altos índices de falhas e cancelamentos de projetos.",
      "A definição de Engenharia de Software pelo Prof. Dr. Marcelo Nogueira foi comparada com a visão da IA, com linguagens diferentes, mas a mesma essência: métodos, procedimentos e ferramentas para entregar software com qualidade.",
      "Exploramos a técnica AIDA (Atenção, Interesse, Desejo e Ação) para explicar conceitos técnicos a pessoas leigas. Testei isso com meus familiares no intervalo e percebi que, embora desafiador, é possível comunicar bem com paciência e clareza.",
      "Analisamos o caso do Project Ara e os conceitos de acoplamento e coesão, além da noção de Ad-hoc, soluções criadas sem padronização, específicas para determinado propósito.",
      "Também mencionamos o texto “No Silver Bullet”, que reforça que não há solução mágica para todos os problemas de software. Cada desafio exige abordagem específica, experiência e adaptação.",
      "O relatório “Best Jobs in America” mostrou que a maioria das carreiras promissoras estão ligadas à tecnologia, reforçando a importância da educação contínua para acompanhar essa demanda.",
      "O professor compartilhou sua experiência com o PBQP-SW que é um programa brasileiro que busca aumentar a competitividade nacional em desenvolvimento de software, ainda pouco aproveitado no país.",
      "Por fim, foi apresentada a metodologia ágil Shape Up, alternativa ao Scrum, baseada em ciclos de seis semanas para entrega de projetos com mais clareza e autonomia.",
      "Esta aula proporcionou uma visão crítica e atual da Engenharia de Software, exigindo estudo constante, adaptação às mudanças e conexão entre teoria e prática."
    ],
    footer: "Artigo produzido por Náyra Zanini, com base nos aprendizados da disciplina Paradigmas da Engenharia de Software, ministrada pelo Prof. Dr. Marcelo Nogueira durante a Pós-Graduação em Engenharia de Software (UNIP). O estudo durante a aula foi feito com o apoio de Inteligência Artificial, por meio de prompts elaborados pelo professor, e este artigo é o resultado."
  },
  {
    slug: "engenharia-de-requisitos",
    title: "Engenharia de Requisitos: A Base Humana e Estratégica para Soluções Tecnológicas",
    subject: "Paradigmas da Engenharia de Software · Aula 02",
    date: "02/07/2025",
    publishedAt: "2025-07-02",
    summary: "Por que fazer certo desde a primeira vez importa: elicitação, análise, comunicação, PoC, modelo espiral e fatores humanos na engenharia de requisitos.",
    paragraphs: [
      "A aula de Engenharia de Requisitos teve por objetivo apresentar algo extremamente fundamental para o desenvolvimento de software. Foi uma aula para iniciar as informações de como estabelecer uma base para que todo o projeto seja construído, tendo por objetivo identificar, analisar, especificar e gerenciar as necessidades dos usuários, clientes e demais partes interessadas.",
      "Com a Engenharia de Requisitos, podemos perceber o quão importante é fazer bem feito da primeira vez, para evitar retrabalho, gastos desnecessários no futuro e alinhar expectativas. Podemos destacar nessa área a interdependência de fatores humanos, técnicos e organizacionais, uma vez que precisam de sua conexão para que o projeto funcione.",
      "A Engenharia de Requisitos se apresenta como o elo entre o mundo real e a solução técnica e a definição proposta pelo Professor Marcelo Nogueira deixa claro isso: elicitar, analisar e negociar, especificar, modelar, verificar, validar e gerir funções e restrições de sistema, cobrindo integralmente o ciclo de vida dos requisitos, englobando os aspectos funcionais e não funcionais que são funcionalidades do sistema e suas restrições.",
      "Ter requisitos bem definidos é reforçado pela ideia de grandes teóricos como Frederick Brooks e Philip Crosby, sendo o primeiro um autor que traz à tona a complexidade dos projetos de software e a necessidade de planejar cuidadosamente, enquanto Crosby defende o princípio de fazer certo desde a primeira vez, o qual se conecta com a Engenharia de Requisitos e a cultura da qualidade e prevenção de erros.",
      "Também houve um momento em aula mencionando o Efeito Borboleta, e tem extrema ligação com o tema, uma vez que qualquer alteração, boa ou ruim, no projeto, pode impactar grandemente todo o sistema e seu desenvolvimento.",
      "Em um tópico já verificado por mim em outros cursos, temos PoC (Prova de Conceito), que é uma ferramenta estratégica para validar a viabilidade técnica de uma solução antes de desenvolver completamente, servindo de experimento prático.",
      "Elicitar os requisitos é o que dá início ao processo, uma vez que é onde coletamos as informações por meio de entrevistas, questionários, observações, prototipagem, etc. para converter desejos e expectativas dos stakeholders em requisitos claros e alcançáveis. Demanda habilidades técnicas e empatia, como uma escuta ativa e comunicação eficaz.",
      "A comunicação é um dos problemas mais apontados para a Engenharia de Requisitos, pois entender o que é desejado, excluir a ambiguidade e realizar mudanças constantes torna-se extremamente difícil quando o cliente não sabe exatamente o que deseja e não sabe externalizar a informação.",
      "O modelo espiral é uma abordagem que influencia diretamente no tratamento de requisitos, uma vez que propõe ciclos iterativos de planejamento, construção, avaliação e refinamento da informação. É extremamente ideal para requisitos que evoluem ao longo do tempo.",
      "Notamos que há uma crescente valorização dos fatores humanos no desenvolvimento de software, utilizando a ciência e ergonomia cognitiva. Podemos perceber como os usuários se comportam na utilização de um sistema, suas travas e, assim, deixá-lo mais acessível e eficiente.",
      "Em conclusão, a área de Engenharia de Requisitos é ampla e multidisciplinar, integrando conceitos de tecnologia, psicologia, gestão e comunicação. É importante entendermos o lado humano para desenvolver um sistema, dessa forma podemos realizar projetos eficientes e consistentes, com soluções estratégicas e facilitadoras do processo. Quando são dominados os fundamentos dessa disciplina, podemos atuar com excelência no desenvolvimento de soluções tecnológicas que envolvem pessoas e resultados."
    ],
    footer: "Artigo produzido por Náyra Zanini, com base nos aprendizados da disciplina Paradigmas da Engenharia de Software, ministrada pelo Prof. Dr. Marcelo Nogueira durante a Pós-Graduação em Engenharia de Software (UNIP). O estudo durante a aula foi feito com o apoio de Inteligência Artificial, por meio de prompts elaborados pelo professor, e este artigo é o resultado."
  },
  {
    slug: "qualidade-de-software",
    title: "Qualidade de Software: Cultura, Métricas e Responsabilidade no Desenvolvimento",
    subject: "Paradigmas da Engenharia de Software · Aula 03",
    date: "02/07/2025",
    publishedAt: "2025-07-02",
    summary: "De Crosby, Juran e Deming a ISO 25010, CMMI e GQM: qualidade como cultura, prevenção e responsabilidade compartilhada ao longo de todo o ciclo de desenvolvimento.",
    paragraphs: [
      "A crescente dependência de sistemas computacionais torna indispensável garantir sua qualidade. Falhas como as da sonda Mars Climate Orbiter e do Boeing 737 MAX demonstram o impacto que defeitos de software podem gerar, reforçando a importância de processos que assegurem qualidade desde as etapas iniciais do desenvolvimento.",
      "Qualidade não é apenas atender a requisitos, mas antecipar necessidades e evitar falhas. A ISO 8402 define qualidade como “a totalidade das características de uma entidade que lhe confere a capacidade de satisfazer necessidades explícitas e implícitas”. Contribuições de Crosby, Juran e Deming reforçam que qualidade deve ser planejada, construída e monitorada sistematicamente.",
      "A qualidade resulta da excelência nos processos internos, como modularidade e manutenibilidade, e se manifesta externamente na eficiência e confiabilidade percebidas pelo usuário. O ciclo de desenvolvimento — requisitos, projeto, implementação, validação e evolução — deve ser conduzido com rigor e integração. O método GQM auxilia na definição de métricas alinhadas a objetivos estratégicos, como a redução do retrabalho, mensurada pelo MTTR, que avalia a eficiência na correção de falhas.",
      "A Garantia da Qualidade (QA) tradicional foca em testes finais e ações corretivas, enquanto a Cultura de Qualidade envolve prevenção e participação de todos os envolvidos no ciclo de desenvolvimento. Modelos como ISO 25010 e CMMI orientam essa transição, promovendo maturidade organizacional e melhoria contínua.",
      "Definir claramente quem faz o que é essencial para garantir qualidade. Responsabilidade implica executar tarefas; responsabilização exige prestar contas pelos resultados. Ferramentas como Jira e práticas como retrospectivas promovem transparência e evolução contínua.",
      "Qualidade de software é construída ao longo de todo o processo, mediante cultura organizacional comprometida, processos estruturados e uso adequado de métricas. O foco na prevenção, na melhoria contínua e na clara definição de responsabilidades é indispensável para garantir produtos confiáveis e alinhados às necessidades dos usuários."
    ],
    footer: "Artigo produzido por Náyra Zanini, com base nos aprendizados da disciplina Paradigmas da Engenharia de Software, ministrada pelo Prof. Dr. Marcelo Nogueira durante a Pós-Graduação em Engenharia de Software (UNIP). O estudo durante a aula foi feito com o apoio de Inteligência Artificial, por meio de prompts elaborados pelo professor, e este artigo é o resultado."
  }
];
function getArtigo(slug) {
  return ARTIGOS.find((a) => a.slug === slug);
}
const PROJETOS = [
  {
    n: "01",
    slug: "financas-pessoais",
    title: "CONTROLE FINANCEIRO",
    tagline: "Aplicação full-stack + SQL Server",
    description: "Sistema de controle financeiro pessoal desenhado para aplicar, na prática, modelagem relacional e T-SQL: o banco concentra as regras de negócio e a aplicação orquestra a experiência.",
    tags: [
      "SQL Server 2022",
      "T-SQL",
      "Stored Procedures",
      "Views",
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Zod",
      "JWT",
      "Docker Compose"
    ],
    repo: "https://github.com/nayrazanini/financas-pessoais",
    appPath: "/projetos/financas-pessoais/app",
    sqlPath: "https://github.com/nayrazanini/financas-pessoais/tree/main/sql",
    problem: "Planilhas de controle financeiro não garantem integridade, não mantêm um histórico confiável e dificultam análises sem retrabalho manual. A proposta foi resolver isso com um banco relacional bem modelado e uma interface prática para o uso diário.",
    highlights: [
      {
        n: "01",
        title: "Escrita concentrada em stored procedures",
        text: "As operações de inclusão, alteração e exclusão são centralizadas em procedures, com regras de negócio no banco, validação de propriedade dos dados e transações explícitas."
      },
      {
        n: "02",
        title: "Leitura por views de consolidação",
        text: "Saldos por conta, resumo mensal por categoria e acompanhamento de orçamento são disponibilizados por views, evitando remontar as agregações na aplicação."
      },
      {
        n: "03",
        title: "Consultas analíticas",
        text: "O projeto reúne consultas com CTEs, LAG para variação entre períodos, DENSE_RANK para classificação de gastos e total acumulado."
      },
      {
        n: "04",
        title: "Autenticação e isolamento de dados",
        text: "A aplicação utiliza senha com bcrypt, sessão JWT httpOnly e proteção de rotas privadas. As operações no banco consideram o identificador do usuário para restringir o acesso aos próprios dados."
      }
    ],
    model: [
      { label: "Usuario", desc: "Credenciais e perfil, com e-mail único." },
      { label: "Conta", desc: "Contas do usuário e saldo inicial." },
      { label: "Categoria", desc: "Categorias de receitas e despesas por usuário." },
      { label: "Transacao", desc: "Lançamentos associados à conta, categoria, tipo, valor e data." },
      { label: "Orcamento", desc: "Limite mensal por categoria e usuário." }
    ],
    modules: [
      {
        title: "Dashboard",
        text: "Saldo consolidado, receitas e despesas do mês e evolução por categoria."
      },
      {
        title: "Lançamentos",
        text: "Cadastro, listagem paginada e exclusão de transações, com filtros por período e tipo."
      },
      {
        title: "Orçamentos",
        text: "Definição de limite mensal por categoria e acompanhamento do percentual consumido."
      }
    ],
    sections: [
      {
        title: "Engenharia de software",
        paragraphs: [
          "O repositório inclui docker-compose.yml para execução local do SQL Server, scripts SQL numerados e decisões técnicas documentadas.",
          "A aplicação utiliza validação de entrada com Zod, autenticação baseada em JWT e uma organização que separa a interface das regras de persistência."
        ]
      },
      {
        title: "Banco de dados",
        paragraphs: [
          "O modelo utiliza constraints e índices de apoio às consultas por período. O saldo e os indicadores são obtidos a partir dos registros financeiros e das consultas de consolidação.",
          "O repositório contém scripts de schema, procedures, views e consultas analíticas para reproduzir a estrutura do banco."
        ]
      }
    ],
    learnings: [
      "Centralizar regras de negócio no banco ajuda a manter consistência entre operações.",
      "Views podem simplificar consultas recorrentes e separar leitura da lógica da interface.",
      "Transações e validações são fundamentais para proteger a integridade dos dados.",
      "Autenticação e autorização precisam ser consideradas também na camada de acesso aos dados."
    ]
  },
  {
    n: "02",
    slug: "pr-gerencia-menu",
    title: "PR_GERENCIA_MENU",
    tagline: "Gerenciador de menus dinâmicos em T-SQL",
    description: "Procedure parametrizada por sistema que cria hierarquias de menus, gera códigos de perfil de acesso com proteção contra concorrência e associa usuários em uma única operação transacional. Versão unificada baseada em projeto real, com nomes genéricos.",
    tags: ["SQL Server", "T-SQL", "Stored Procedures", "Transações", "Concorrência"],
    repo: "https://github.com/nayrazanini/pr_gerencia_menu",
    problem: "Sistemas diferentes compartilhavam catálogos de transações, módulos e perfis, mas mantinham regras próprias de nomenclatura e árvores de menu. A existência de procedures quase idênticas aumentava o esforço de manutenção e tornava a liberação de acessos um processo sujeito a inconsistências.",
    highlights: [
      {
        n: "01",
        title: "Uma procedure para múltiplos sistemas",
        text: "O parâmetro de sistema concentra as diferenças de prefixos e regras de perfil, mantendo compartilhadas as etapas de validação, criação da hierarquia e tratamento de erros."
      },
      {
        n: "02",
        title: "Geração segura de códigos de perfil",
        text: "A geração considera a sequência já utilizada e utiliza sp_getapplock para proteger a operação contra condições de corrida em execuções simultâneas."
      },
      {
        n: "03",
        title: "Criação validada da hierarquia",
        text: "A procedure valida os níveis de submenu, verifica a existência do módulo e cria os níveis ausentes dentro de uma transação, com TRY/CATCH, XACT_ABORT e XACT_STATE."
      }
    ],
    model: [
      { label: "catalogo.TB_USUARIO", desc: "Usuários cadastrados e compartilhados entre sistemas." },
      { label: "catalogo.TB_MODULO", desc: "Módulos cadastrados por sistema." },
      { label: "catalogo.TB_TRANSACAO_MENU", desc: "Catálogo de telas e transações disponíveis." },
      { label: "catalogo.TB_PERFIL_ACESSO", desc: "Perfis de acesso gerados pela procedure." },
      { label: "catalogo.TB_PERFIL_TRANSACAO", desc: "Vínculo entre perfil de acesso e transação." },
      { label: "catalogo.TB_PERFIL_USUARIO", desc: "Associação entre perfis de acesso e usuários." },
      { label: "dbo.TB_MENU", desc: "Árvore de navegação mantida localmente por sistema." }
    ],
    sections: [
      {
        title: "Regras específicas e lógica compartilhada",
        paragraphs: [
          "Cada sistema pode possuir um padrão próprio de prefixo de menu e geração de perfil. A procedure concentra essas variações em regras parametrizadas, evitando manter uma cópia independente para cada sistema.",
          "A hierarquia é processada dinamicamente por meio de uma variável do tipo TABLE e estrutura de repetição, permitindo tratar diferentes níveis sem duplicar blocos de código."
        ]
      },
      {
        title: "Contrato de retorno e tratamento de erros",
        paragraphs: [
          "A procedure utiliza códigos de retorno explícitos para diferenciar sucesso, falhas de validação, ausência de menu raiz quando a criação não foi autorizada e erros técnicos inesperados.",
          "As operações são agrupadas em transação para garantir que a criação da estrutura e os vínculos relacionados sejam confirmados em conjunto ou desfeitos em caso de falha."
        ]
      },
      {
        title: "Estado atual",
        paragraphs: [
          "Esta versão unificada substitui implementações anteriores separadas por sistema. O repositório disponibiliza o script de criação do banco de demonstração, a procedure comentada e exemplos de execução.",
          "Os nomes de tabelas, sistemas e módulos são genéricos. A lógica e a arquitetura refletem um projeto real desenvolvido em parceria."
        ]
      }
    ],
    learnings: [
      "Gerar sequências sob um mecanismo de bloqueio é essencial para evitar códigos duplicados em execuções concorrentes.",
      "Uma procedure parametrizada reduz duplicação e centraliza a manutenção.",
      "Separar catálogo compartilhado de dados específicos por sistema facilita a reutilização.",
      "Códigos de retorno explícitos tornam a procedure mais previsível para quem a consome."
    ]
  },
  {
    n: "04",
    slug: "ponto-sql-server",
    title: "PONTO SQL SERVER",
    tagline: "Sistema de controle de ponto em SQL Server",
    description: "Projeto de banco de dados para registro e controle de ponto, com procedures e scripts T-SQL voltados ao cadastro de funcionários, marcações de entrada e saída e geração de relatórios.",
    tags: ["SQL Server", "T-SQL", "Stored Procedures", "Modelagem", "Relatórios"],
    repo: "https://github.com/nayrazanini/ponto-sql-server",
    problem: "O fechamento de folha depende de marcações confiáveis. O desafio do projeto é estruturar jornadas, marcações e ocorrências para permitir consultas consistentes de horas trabalhadas, atrasos e horas extras.",
    highlights: [
      {
        n: "01",
        title: "Marcações versus jornada esperada",
        text: "Cada funcionário possui uma jornada de referência. As marcações são comparadas com ela para calcular horas trabalhadas, atrasos e horas extras."
      },
      {
        n: "02",
        title: "Regras aplicadas no banco",
        text: "Procedures validam a sequência das marcações, impedindo saída sem entrada anterior e tratando registros duplicados no mesmo instante."
      },
      {
        n: "03",
        title: "Relatórios por período",
        text: "Consultas permitem gerar espelhos de ponto mensais e consolidações por setor, funcionário e data."
      }
    ],
    model: [
      { label: "Funcionario", desc: "Cadastro, setor e jornada contratada." },
      { label: "Marcacao", desc: "Registros de entrada e saída com data e hora." },
      { label: "Ocorrencia", desc: "Faltas, abonos e justificativas." }
    ],
    sections: [
      {
        title: "T-SQL aplicado a data e hora",
        paragraphs: [
          "O projeto trabalha situações comuns em sistemas de ponto, como diferenças entre DATE e DATETIME, virada de dia, arredondamento de minutos e agrupamento por competência mensal.",
          "As consultas utilizam funções de data, CASE para classificação de ocorrências e agregações condicionais para separar horas normais de horas extras."
        ]
      }
    ],
    learnings: [
      "Tratar data e hora com rigor evita divergências silenciosas no fechamento.",
      "Validar a sequência de eventos no banco é mais seguro do que depender apenas da interface.",
      "Os relatórios devem ser considerados desde a modelagem dos dados."
    ]
  },
  {
    n: "05",
    slug: "estoque-sql-server",
    title: "ESTOQUE SQL SERVER",
    tagline: "Sistema de controle de estoque em SQL Server",
    description: "Modelagem e implementação de um sistema de controle de estoque em SQL Server, com tabelas, relacionamentos, procedures e scripts T-SQL para entrada, saída e consulta de produtos.",
    tags: ["SQL Server", "T-SQL", "Stored Procedures", "Modelagem", "Integridade"],
    repo: "https://github.com/nayrazanini/estoque-sql-server",
    problem: "Controlar estoque em planilhas pode gerar saldos negativos, movimentações sem histórico e falta de garantia de que uma baixa foi realizada corretamente. O objetivo é utilizar um banco relacional para manter o histórico e impedir estados inválidos.",
    highlights: [
      {
        n: "01",
        title: "Modelagem relacional",
        text: "Produtos, fornecedores, movimentações e usuários são organizados em tabelas relacionadas, com chaves estrangeiras e constraints para garantir integridade referencial."
      },
      {
        n: "02",
        title: "Movimentações por procedures",
        text: "Entradas e saídas são processadas por stored procedures que validam a quantidade disponível dentro de uma transação."
      },
      {
        n: "03",
        title: "Saldo derivado das movimentações",
        text: "O saldo atual é obtido a partir do histórico de movimentações por meio de views, preservando a rastreabilidade em vez de sobrescrever uma quantidade manualmente."
      }
    ],
    model: [
      { label: "Produto", desc: "Cadastro, unidade de medida e estoque mínimo." },
      { label: "Fornecedor", desc: "Dados dos fornecedores associados às entradas." },
      { label: "Movimentacao", desc: "Entradas e saídas com data, quantidade e responsável." }
    ],
    sections: [
      {
        title: "Consultas de apoio à operação",
        paragraphs: [
          "Além das operações de cadastro, o projeto reúne consultas para identificar produtos abaixo do estoque mínimo, analisar movimentações por período e consultar o histórico de cada produto.",
          "As consultas exercitam JOINs, agregações e funções de janela, utilizando o banco também como camada de análise."
        ]
      }
    ],
    learnings: [
      "Uma constraint bem definida reduz a necessidade de validações duplicadas na aplicação.",
      "Transações explícitas tornam as movimentações de estoque mais confiáveis.",
      "Scripts numerados e idempotentes facilitam a reprodução do ambiente."
    ]
  }
];
function getProjeto(slug) {
  return PROJETOS.find((projeto) => projeto.slug === slug);
}
const __vite_import_meta_env__ = {};
const BASE_URL = (__vite_import_meta_env__["VITE_SITE_URL"] ?? "").replace(/\/$/, "");
const Route$a = createFileRoute()({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/sobre", changefreq: "monthly", priority: "0.9" },
          { path: "/experiencia", changefreq: "monthly", priority: "0.9" },
          { path: "/projetos", changefreq: "monthly", priority: "0.8" },
          {
            path: "/projetos/financas-pessoais",
            changefreq: "monthly",
            priority: "0.7"
          },
          { path: "/artigos", changefreq: "monthly", priority: "0.8" },
          { path: "/contato", changefreq: "yearly", priority: "0.6" }
        ];
        for (const p of PROJETOS) {
          entries.push({
            path: `/projetos/${p.slug}`,
            changefreq: "yearly",
            priority: "0.7"
          });
        }
        for (const a of ARTIGOS) {
          entries.push({
            path: `/artigos/${a.slug}`,
            changefreq: "yearly",
            priority: "0.7"
          });
        }
        const urls = entries.map(
          (e) => [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`
          ].filter(Boolean).join("\n")
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`
        ].join("\n");
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600"
          }
        });
      }
    }
  }
});
const $$splitComponentImporter$9 = () => import("./sobre-C9wdbLVF.mjs");
const Route$9 = createFileRoute()({
  head: () => ({
    meta: [{
      title: "Sobre — Náyra Zanini"
    }, {
      name: "description",
      content: "A história de Náyra Zanini: da Administração com ênfase em TI à transição para programação, com 13 anos dedicados ao cuidado familiar."
    }, {
      property: "og:title",
      content: "Sobre — Náyra Zanini"
    }, {
      property: "og:description",
      content: "Coragem, resiliência e propósito: a trajetória de uma programadora Jr. reescrevendo sua carreira na tecnologia."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./artigos.index-BQ8FkxTV.mjs");
const Route$8 = createFileRoute()({
  head: () => ({
    meta: [{
      title: "Artigos — Náyra Zanini"
    }, {
      name: "description",
      content: "Artigos escritos por Náyra Zanini sobre tecnologia, dados, qualidade de software e as experiências que moldam sua trajetória profissional."
    }, {
      property: "og:title",
      content: "Artigos — Náyra Zanini"
    }, {
      property: "og:description",
      content: "Reflexões autorais sobre tecnologia, dados e desenvolvimento pessoal e profissional."
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:card",
      content: "summary"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitNotFoundComponentImporter$1 = () => import("./artigos._slug-Ctm5Dvfs.mjs");
const $$splitComponentImporter$7 = () => import("./artigos._slug-BMYrJC3v.mjs");
const Route$7 = createFileRoute()({
  loader: ({
    params
  }) => {
    const artigo = getArtigo(params.slug);
    if (!artigo) throw notFound();
    return {
      artigo
    };
  },
  head: ({
    loaderData
  }) => {
    if (!loaderData) {
      return {
        meta: [{
          title: "Artigo não encontrado — Náyra Zanini"
        }, {
          name: "robots",
          content: "noindex"
        }]
      };
    }
    const {
      artigo
    } = loaderData;
    return {
      meta: [{
        title: `${artigo.title} — Náyra Zanini`
      }, {
        name: "description",
        content: artigo.summary
      }, {
        property: "og:title",
        content: artigo.title
      }, {
        property: "og:description",
        content: artigo.summary
      }, {
        property: "og:type",
        content: "article"
      }, {
        name: "twitter:card",
        content: "summary"
      }]
    };
  },
  component: lazyRouteComponent($$splitComponentImporter$7, "component"),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$1, "notFoundComponent")
});
const $$splitComponentImporter$6 = () => import("./demo.meu-espaco-CfqXP6Dr.mjs");
const Route$6 = createFileRoute()({
  head: () => ({
    meta: [{
      title: "Demonstração Meu Espaço — nayra.dev"
    }, {
      name: "description",
      content: "Demonstração interativa e fictícia do Meu Espaço, com dados salvos apenas no seu navegador."
    }, {
      property: "og:title",
      content: "Demonstração Meu Espaço — nayra.dev"
    }, {
      property: "og:description",
      content: "Painel pessoal fictício para organizar a rotina, sem login nem integrações reais."
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:card",
      content: "summary"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./projetos.index-D2dkpuBz.mjs");
const Route$5 = createFileRoute()({
  head: () => ({
    meta: [{
      title: "Projetos — Náyra Zanini"
    }, {
      name: "description",
      content: "Projetos autorais de Náyra Zanini em SQL Server, T-SQL e desenvolvimento web, cada um com case study próprio."
    }, {
      property: "og:title",
      content: "Projetos — Náyra Zanini"
    }, {
      property: "og:description",
      content: "Bancos de dados relacionais, automações e aplicações web — com decisões técnicas documentadas."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitNotFoundComponentImporter = () => import("./projetos._slug-DovtSfHx.mjs");
const $$splitComponentImporter$4 = () => import("./projetos._slug-ae35Bd47.mjs");
const Route$4 = createFileRoute()({
  loader: ({
    params
  }) => {
    const projeto = getProjeto(params.slug);
    if (!projeto) throw notFound();
    return {
      projeto
    };
  },
  head: ({
    loaderData
  }) => {
    if (!loaderData) {
      return {
        meta: [{
          title: "Projeto não encontrado — Náyra Zanini"
        }, {
          name: "robots",
          content: "noindex"
        }]
      };
    }
    const {
      projeto
    } = loaderData;
    return {
      meta: [{
        title: `${projeto.title} — Náyra Zanini`
      }, {
        name: "description",
        content: projeto.description
      }, {
        property: "og:title",
        content: `${projeto.title} — Náyra Zanini`
      }, {
        property: "og:description",
        content: projeto.description
      }, {
        property: "og:type",
        content: "article"
      }, {
        name: "twitter:card",
        content: "summary"
      }]
    };
  },
  component: lazyRouteComponent($$splitComponentImporter$4, "component"),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
const $$splitComponentImporter$3 = () => import("./projetos.financas-pessoais-BFsOu0JM.mjs");
const Route$3 = createFileRoute()({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./projetos.meu-espaco-CHZqsDOn.mjs");
const Route$2 = createFileRoute()({
  head: () => ({
    meta: [{
      title: "Meu Espaço — Case study — nayra.dev"
    }, {
      name: "description",
      content: "Case study do Meu Espaço: painel pessoal fictício, local e sem integrações reais."
    }, {
      property: "og:title",
      content: "Meu Espaço — Case study"
    }, {
      property: "og:description",
      content: "Objetivo, funcionalidades e decisões de privacidade de uma demonstração que roda só no navegador."
    }, {
      property: "og:type",
      content: "article"
    }, {
      name: "twitter:card",
      content: "summary"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./projetos.financas-pessoais.index-BfjQxgT0.mjs");
const Route$1 = createFileRoute()({
  head: () => ({
    meta: [{
      title: "financas-pessoais — Case study | Náyra Zanini"
    }, {
      name: "description",
      content: "Case study do projeto financas-pessoais: controle financeiro com SQL Server, stored procedures em T-SQL, views de consolidação e app Next.js 15."
    }, {
      property: "og:title",
      content: "financas-pessoais — Case study | Náyra Zanini"
    }, {
      property: "og:description",
      content: "Arquitetura, modelagem de dados e decisões técnicas do sistema de controle financeiro pessoal em SQL Server e Next.js 15."
    }, {
      property: "og:type",
      content: "article"
    }, {
      name: "twitter:card",
      content: "summary"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./projetos.financas-pessoais.app-OAV6ZJj0.mjs");
const Route = createFileRoute()({
  head: () => ({
    meta: [{
      title: "App de Finanças Pessoais — Náyra Zanini"
    }, {
      name: "description",
      content: "Aplicação web de controle financeiro pessoal: crie sua conta, registre receitas e despesas, defina orçamentos e acompanhe o saldo do mês."
    }, {
      property: "og:title",
      content: "App de Finanças Pessoais — Náyra Zanini"
    }, {
      property: "og:description",
      content: "Demonstração utilizável do projeto financas-pessoais: login, lançamentos, orçamentos e dashboard do mês."
    }, {
      name: "robots",
      content: "noindex"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const IndexRoute = Route$e.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$f
});
const ContatoRoute = Route$d.update({
  id: "/contato",
  path: "/contato",
  getParentRoute: () => Route$f
});
const ExperienciaRoute = Route$c.update({
  id: "/experiencia",
  path: "/experiencia",
  getParentRoute: () => Route$f
});
const ProjetosRoute = Route$b.update({
  id: "/projetos",
  path: "/projetos",
  getParentRoute: () => Route$f
});
const SitemapDotxmlRoute = Route$a.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$f
});
const SobreRoute = Route$9.update({
  id: "/sobre",
  path: "/sobre",
  getParentRoute: () => Route$f
});
const ArtigosIndexRoute = Route$8.update({
  id: "/artigos/",
  path: "/artigos/",
  getParentRoute: () => Route$f
});
const ArtigosSlugRoute = Route$7.update({
  id: "/artigos/$slug",
  path: "/artigos/$slug",
  getParentRoute: () => Route$f
});
const DemoMeuEspacoRoute = Route$6.update({
  id: "/demo/meu-espaco",
  path: "/demo/meu-espaco",
  getParentRoute: () => Route$f
});
const ProjetosIndexRoute = Route$5.update({
  id: "/",
  path: "/",
  getParentRoute: () => ProjetosRoute
});
const ProjetosSlugRoute = Route$4.update({
  id: "/$slug",
  path: "/$slug",
  getParentRoute: () => ProjetosRoute
});
const ProjetosFinancasPessoaisRoute = Route$3.update({
  id: "/financas-pessoais",
  path: "/financas-pessoais",
  getParentRoute: () => ProjetosRoute
});
const ProjetosMeuEspacoRoute = Route$2.update({
  id: "/meu-espaco",
  path: "/meu-espaco",
  getParentRoute: () => ProjetosRoute
});
const ProjetosFinancasPessoaisIndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => ProjetosFinancasPessoaisRoute
});
const ProjetosFinancasPessoaisAppRoute = Route.update({
  id: "/app",
  path: "/app",
  getParentRoute: () => ProjetosFinancasPessoaisRoute
});
const ProjetosFinancasPessoaisRouteChildren = {
  ProjetosFinancasPessoaisAppRoute,
  ProjetosFinancasPessoaisIndexRoute
};
const ProjetosFinancasPessoaisRouteWithChildren = ProjetosFinancasPessoaisRoute._addFileChildren(
  ProjetosFinancasPessoaisRouteChildren
);
const ProjetosRouteChildren = {
  ProjetosSlugRoute,
  ProjetosFinancasPessoaisRoute: ProjetosFinancasPessoaisRouteWithChildren,
  ProjetosMeuEspacoRoute,
  ProjetosIndexRoute
};
const ProjetosRouteWithChildren = ProjetosRoute._addFileChildren(
  ProjetosRouteChildren
);
const rootRouteChildren = {
  IndexRoute,
  ContatoRoute,
  ExperienciaRoute,
  ProjetosRoute: ProjetosRouteWithChildren,
  SitemapDotxmlRoute,
  SobreRoute,
  ArtigosSlugRoute,
  DemoMeuEspacoRoute,
  ArtigosIndexRoute
};
const routeTree = Route$f._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  ARTIGOS as A,
  PROJETOS as P,
  Route$7 as R,
  Route$4 as a,
  router as r,
  useLanguage as u
};
