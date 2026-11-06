
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ProjectsCarousel } from "@/components/ProjectsCarousel";
import { useLanguage } from "@/context/LanguageContext";
import { ARTIGOS } from "@/data/artigos";
import { ARTIGOS_EN, dataEn } from "@/data/artigos.en";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "zanini.dev | Náyra Zanini" },
      {
        name: "description",
        content:
          "Portfólio de Náyra Zanini, Programadora Júnior com foco em SQL Server, T-SQL, sustentação de sistemas e engenharia de software.",
      },
      { property: "og:title", content: "nayra.dev | Náyra Zanini" },
      {
        property: "og:description",
        content:
          "Projetos, dados e soluções desenvolvidos a partir de problemas reais, lógica de negócio e tecnologia.",
      },
    ],
  }),
  component: Index,
});

// Os 3 artigos mais recentes, mostrados na seção "Artigos" da página inicial.
const ULTIMOS_ARTIGOS = [...ARTIGOS]
  .sort((x, y) => y.publishedAt.localeCompare(x.publishedAt))
  .slice(0, 3);

const SECTION_TITLE =
  "font-moderno text-3xl md:text-4xl tracking-[0.08em] leading-tight text-ink";

const SECTION_LABEL =
  "text-[11px] uppercase tracking-[0.18em] text-terracotta mb-2";

const BODY_TEXT =
  "text-sm md:text-[15px] leading-relaxed text-muted-foreground";

function Index() {
  return (
    <SiteLayout>
      <IndexContent />
    </SiteLayout>
  );
}

function IndexContent() {
  const { language } = useLanguage();
  const en = language === "en";

  const education = en
    ? [
        {
          title: "Postgraduate Degree in Software Engineering",
          place: "UNIP · Completed: April 2026",
        },
        {
          title: "Associate Degree in Systems Analysis and Development",
          place: "UNIP · Completed: December 2024",
        },
        {
          title: "Bachelor's Degree in Business Administration — IT Focus",
          place: "FIAP · Completed: December 2014",
        },
      ]
    : [
        {
          title: "Pós-graduação em Engenharia de Software",
          place: "UNIP · Conclusão: abril/2026",
        },
        {
          title: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
          place: "UNIP · Conclusão: dezembro/2024",
        },
        {
          title: "Bacharelado em Administração — Ênfase em TI",
          place: "FIAP · Conclusão: dezembro/2014",
        },
      ];

  const certifications = en
    ? [
        {
          name: "Scrum Fundamentals Certified (SFC™)",
          issuer: "ScrumStudy",
          date: "01/2026",
        },
        {
          name: "Kanban Foundation Certification (KBFC™)",
          issuer: "Certiprof",
          date: "12/2025",
        },
        {
          name: "Relational Databases (SQL)",
          issuer: "DIO",
          date: "08/2025",
        },
        {
          name: "Programming Logic Training",
          issuer: "DIO",
          date: "07/2025",
        },
      ]
    : [
        {
          name: "Scrum Fundamentals Certified (SFC™)",
          issuer: "ScrumStudy",
          date: "01/2026",
        },
        {
          name: "Kanban Foundation Certification (KBFC™)",
          issuer: "Certiprof",
          date: "12/2025",
        },
        {
          name: "Banco de Dados Relacionais (SQL)",
          issuer: "DIO",
          date: "08/2025",
        },
        {
          name: "Formação em Lógica de Programação",
          issuer: "DIO",
          date: "07/2025",
        },
      ];

  return (
    <>
      {/* INÍCIO */}
      <section
        id="inicio"
        className="scroll-mt-24 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 pt-10 md:pt-14 pb-8"
      >
        <div className="animate-fade-up flex flex-col items-center text-center">
          <p className="text-[11px] uppercase tracking-[0.18em] text-white mb-4">
            {en ? "Technology · Development" : "Tecnologia · Desenvolvimento"}
          </p>

          <h1 className="font-moderno text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-ink uppercase max-w-full">
            Think.
            <span className="text-terracotta"> Query.</span>
            {" "}Build.
          </h1>

          <p className="mt-4 max-w-2xl text-sm md:text-[15px] text-muted-foreground leading-relaxed">
            {en
              ? "Projects, data, and solutions built from real-world problems, business logic, and technology."
              : "Projetos, dados e soluções desenvolvidos a partir de problemas reais, lógica de negócio e tecnologia."}
          </p>
        </div>
      </section>

      {/* PROJETOS */}
      <ProjectsCarousel />

      {/* SOBRE MIM */}
      <section
        id="sobre"
        className="scroll-mt-24 border-y border-border/60"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 py-10 md:py-12">
          <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-7 lg:gap-14">
            <div>
              <p className={SECTION_LABEL}>
                {en ? "Get to know my journey" : "Conheça minha trajetória"}
              </p>

              <h2 className={SECTION_TITLE}>
                {en ? "About me" : "Sobre mim"}
              </h2>
            </div>

            <div className="space-y-3 text-sm md:text-[15px] leading-relaxed text-muted-foreground">
              <p>
                {en
                  ? "I am a technology professional with experience in enterprise systems, ERP support, and databases, mainly working in the education sector."
                  : "Sou profissional de tecnologia, com experiência em sistemas corporativos, sustentação de ERP e banco de dados, atuando principalmente no ambiente educacional."}
              </p>

              <p>
                {en
                  ? "My journey at Universidade Paulista gave me in-depth knowledge of academic processes and the Lyceum ERP. This experience also contributed to my transition into software development, connecting functional knowledge with technical solutions."
                  : "Minha trajetória na Universidade Paulista me proporcionou conhecimento aprofundado dos processos acadêmicos e do ERP Lyceum. Essa experiência também contribuiu para minha transição profissional para a área de desenvolvimento, aproximando o conhecimento funcional das soluções técnicas."}
              </p>

              <p>
                {en
                  ? "I currently work as a Junior Programmer, focusing on SQL Server and T-SQL, working with queries, Views, Stored Procedures, data analysis, inconsistency investigation, and systems support."
                  : "Atualmente, atuo como Programadora Júnior, com foco em SQL Server e T-SQL, trabalhando com consultas, Views, Stored Procedures, análise de dados, investigação de inconsistências e sustentação de sistemas."}
              </p>

              <p>
                {en
                  ? "I am interested in software development, data engineering, continuous improvement, and solutions that connect technology to real business needs."
                  : "Tenho interesse em desenvolvimento de software, engenharia de dados, melhoria contínua e soluções que conectem tecnologia às necessidades reais do negócio."}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {(en
                  ? [
                      "SQL Server",
                      "T-SQL",
                      "Lyceum ERP",
                      "Systems Support",
                      "Software Engineering",
                      "Scrum",
                      "Kanban",
                    ]
                  : [
                      "SQL Server",
                      "T-SQL",
                      "ERP Lyceum",
                      "Sustentação de Sistemas",
                      "Engenharia de Software",
                      "Scrum",
                      "Kanban",
                    ]
                ).map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full border border-border text-xs text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIÊNCIA PROFISSIONAL */}
      <section
        id="experiencia"
        className="scroll-mt-24 border-y border-border/60"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 py-10 md:py-12">
          <div className="mb-8">
            <p className={SECTION_LABEL}>
              {en ? "My journey" : "Minha trajetória"}
            </p>

            <h2 className={SECTION_TITLE}>
              {en ? "Professional Experience" : "Experiência profissional"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-8 lg:gap-10">
            <article>
              <h3 className="text-lg md:text-xl font-semibold text-ink mb-3">
                {en ? "Where It All Began" : "Onde tudo começou"}
              </h3>

              <div className="space-y-3 text-sm md:text-[15px] leading-relaxed text-muted-foreground">
                <p>
                  {en
                    ? "My journey at Universidade Paulista began in 2015, working with academic and administrative processes. It was there that I built solid experience with the Lyceum ERP and the daily operations of an educational institution."
                    : "Minha trajetória na Universidade Paulista começou em 2015, em uma atuação voltada aos processos acadêmicos e administrativos. Foi nesse ambiente que construí uma experiência sólida com o ERP Lyceum e com as rotinas de uma instituição de ensino."}
                </p>

                <p>
                  {en
                    ? "Daily contact with systems, academic information, and requests from different departments sparked my interest in understanding how technology works behind these processes."
                    : "O contato diário com sistemas, informações acadêmicas e demandas de diferentes áreas despertou meu interesse em compreender melhor como a tecnologia funciona por trás dos processos."}
                </p>

                <p>
                  {en
                    ? "Rather than simply using systems, I began to see opportunities to analyze, question, and improve how they meet business needs."
                    : "Mais do que utilizar sistemas, passei a enxergar as possibilidades de analisar, questionar e melhorar a maneira como eles atendem às necessidades do negócio."}
                </p>
              </div>
            </article>

            <article>
              <h3 className="text-lg md:text-xl font-semibold text-ink mb-3">
                {en
                  ? "Between Processes and Technology"
                  : "Entre processos e tecnologia"}
              </h3>

              <div className="space-y-3 text-sm md:text-[15px] leading-relaxed text-muted-foreground">
                <p>
                  {en
                    ? "The desire to deepen my knowledge led me to pursue a degree in Systems Analysis and Development, beginning a new stage in my professional journey."
                    : "A vontade de aprofundar meus conhecimentos me levou à formação em Análise e Desenvolvimento de Sistemas, iniciando uma nova etapa da minha trajetória profissional."}
                </p>

                <p>
                  {en
                    ? "Throughout this journey, I connected my experience in the education sector with technical knowledge in SQL Server, queries, data analysis, functional testing, and inconsistency investigation."
                    : "Ao longo dessa jornada, aproximei minha experiência com o ambiente educacional de conhecimentos técnicos em SQL Server, consultas, análise de dados, testes funcionais e investigação de inconsistências."}
                </p>

                <p>
                  {en
                    ? "Later, my postgraduate studies in Software Engineering broadened my perspective on development, quality, architecture, and the processes involved in building solutions."
                    : "Posteriormente, a pós-graduação em Engenharia de Software ampliou minha perspectiva sobre desenvolvimento, qualidade, arquitetura e processos envolvidos na construção de soluções."}
                </p>
              </div>
            </article>

            <article>
              <h3 className="text-lg md:text-xl font-semibold text-ink mb-3">
                {en ? "Development in Practice" : "Desenvolvimento em prática"}
              </h3>

              <div className="space-y-3 text-sm md:text-[15px] leading-relaxed text-muted-foreground">
                <p>
                  {en
                    ? "I currently work as a Junior Programmer at Universidade Paulista, combining the functional knowledge I have gained over the years with technical work on enterprise systems."
                    : "Atualmente, atuo como Programadora Júnior na Universidade Paulista, unindo o conhecimento funcional adquirido ao longo dos anos à atuação técnica em sistemas corporativos."}
                </p>

                <p>
                  {en
                    ? "My work involves SQL Server and T-SQL, developing and maintaining queries, Views, and Stored Procedures, as well as analyzing business rules and investigating incidents in the Lyceum ERP."
                    : "Meu trabalho envolve SQL Server e T-SQL, desenvolvimento e manutenção de consultas, Views e Stored Procedures, além da análise de regras de negócio e investigação de incidentes no ERP Lyceum."}
                </p>

                <p>
                  {en
                    ? "I also participate in functional testing and correction validation, aiming to understand problems in depth and contribute to consistent solutions aligned with users' needs."
                    : "Também participo de testes funcionais e validações de correções, buscando compreender os problemas em profundidade e contribuir para soluções consistentes e alinhadas às necessidades dos usuários."}
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* FORMAÇÃO ACADÊMICA E CERTIFICAÇÕES */}
      <section
        id="formacao"
        className="scroll-mt-24 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 py-10 md:py-12"
      >
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <p className={SECTION_LABEL}>
              {en ? "Continuous Learning" : "Aprendizado contínuo"}
            </p>

            <h2 className={`${SECTION_TITLE} mb-5`}>
              {en ? "Education" : "Formação acadêmica"}
            </h2>

            <ul className="divide-y divide-border/60 border-y border-border/60">
              {education.map((item) => (
                <li key={item.title} className="py-3">
                  <p className="text-sm font-medium leading-snug text-ink">
                    {item.title}
                  </p>

                  <p className="text-xs text-muted-foreground mt-1">
                    {item.place}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className={SECTION_LABEL}>
              {en ? "Professional Development" : "Desenvolvimento profissional"}
            </p>

            <h2 className={`${SECTION_TITLE} mb-5`}>
              {en ? "Certifications & Learning" : "Certificações e Estudo"}
            </h2>

            <ul className="divide-y divide-border/60 border-y border-border/60">
              {certifications.map((item) => (
                <li
                  key={item.name}
                  className="py-3 flex items-start justify-between gap-4"
                >
                  <div className="min-w-0">
                    <p className="text-sm font-medium leading-snug text-ink">
                      {item.name}
                    </p>

                    <p className="text-xs text-muted-foreground mt-1">
                      {item.issuer}
                    </p>
                  </div>

                  <span className="text-xs font-mono text-terracotta whitespace-nowrap">
                    {item.date}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ARTIGOS */}
      <section
        id="artigos"
        className="scroll-mt-24 border-y border-border/60 bg-background/40"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 py-10 md:py-12">
          <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-7 lg:gap-14">
            <div>
              <p className={SECTION_LABEL}>
                {en ? "Knowledge Sharing" : "Compartilhamento de conhecimento"}
              </p>

              <h2 className={SECTION_TITLE}>
                {en ? "Articles" : "Artigos"}
              </h2>

              <p className="mt-3 text-sm md:text-[15px] leading-relaxed text-muted-foreground">
                {en
                  ? "Thoughts, studies, and content related to technology and software engineering."
                  : "Reflexões, estudos e conteúdos relacionados à tecnologia e à engenharia de software."}
              </p>
            </div>

            <div className="grid gap-4">
              {ULTIMOS_ARTIGOS.map((original) => {
                const artigo = en ? { ...original, ...ARTIGOS_EN[original.slug] } : original;
                return (
                  <Link
                    key={artigo.slug}
                    to="/artigos/$slug"
                    params={{ slug: artigo.slug }}
                    className="group block border border-border/60 rounded-xl p-5 md:p-6 hover:border-terracotta/50 transition-colors"
                  >
                    <p className="text-[11px] uppercase tracking-[0.15em] text-terracotta mb-2">
                      {artigo.subject}
                    </p>

                    <h3 className="text-lg md:text-xl font-semibold text-ink leading-snug group-hover:text-terracotta transition-colors">
                      {artigo.title}
                    </h3>

                    <p className="mt-3 text-sm md:text-[15px] leading-relaxed text-muted-foreground line-clamp-3">
                      {artigo.summary}
                    </p>

                    <p className="mt-4 flex items-center justify-between gap-3 text-xs text-muted-foreground">
                      <span className="font-mono">
                        {en ? dataEn(artigo.publishedAt) : artigo.date}
                      </span>
                      <span className="text-terracotta">
                        {en ? "Read article →" : "Ler artigo →"}
                      </span>
                    </p>
                  </Link>
                );
              })}

              <Link
                to="/artigos"
                className="inline-flex text-sm text-terracotta underline underline-offset-4 hover:opacity-80 transition-opacity"
              >
                {en ? "View all articles →" : "Ver todos os artigos →"}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
