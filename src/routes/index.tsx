
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Briefcase, Camera, Code2, Download, Mail, MessageCircle } from "lucide-react";
import { ArtigosCarousel } from "@/components/ArtigosCarousel";
import { ProjectsCarousel } from "@/components/ProjectsCarousel";
import { useLanguage } from "@/context/LanguageContext";
import { ARTIGOS_TODOS as ARTIGOS, ARTIGOS_EN_TODOS as ARTIGOS_EN, dataEn } from "@/data/artigos.todos";

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

// Os 6 artigos mais recentes (carrossel automático), mostrados na seção "Artigos" da página inicial.
const ULTIMOS_ARTIGOS = [...ARTIGOS]
  .sort((x, y) => y.publishedAt.localeCompare(x.publishedAt))
  .slice(0, 6);

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
              {en ? "Journey" : "Trajetória"}
            </p>

            <h2 className={SECTION_TITLE}>
              {en ? "From Caring to Technology" : "Do cuidado à tecnologia"}
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
                    ? "In 2008, while I was still in college, my grandmother needed care and I began helping to look after her. I kept studying and graduated in Business Administration with an emphasis in IT from FIAP in 2014."
                    : "Em 2008, ainda na faculdade, minha vó precisou de cuidados e eu passei a ajudar a cuidar dela. Segui estudando e me formei em Administração com ênfase em TI pela FIAP, em 2014."}
                </p>

                <p>
                  {en
                    ? "In 2015 I joined UNIP, working with academic and administrative processes and the Lyceum ERP. Her situation had become more demanding: for years, my focus was on working and caring for her, together with my mother."
                    : "Em 2015 entrei na UNIP, atuando com processos acadêmicos e administrativos e com o ERP Lyceum. A situação dela ficou mais exigente: por anos, meu foco foi trabalhar e cuidar dela, junto com a minha mãe."}
                </p>

                <p>
                  {en
                    ? "There were 13 years of dedication, until 2021. Studying had to wait, but the interest in understanding how systems work behind the processes never stopped growing."
                    : "Foram 13 anos de dedicação, até 2021. Estudar precisou esperar, mas a curiosidade de entender como os sistemas funcionam por trás dos processos nunca parou de crescer."}
                </p>
              </div>
            </article>

            <article>
              <h3 className="text-lg md:text-xl font-semibold text-ink mb-3">
                {en ? "Starting Again" : "O recomeço"}
              </h3>

              <div className="space-y-3 text-sm md:text-[15px] leading-relaxed text-muted-foreground">
                <p>
                  {en
                    ? "In 2022, I went back to studying with a clear goal: moving into technology. I started with Software Testing and DevOps & Agile Culture courses at FIAP, and then I pursued the Systems Analysis and Development degree at UNIP, which I completed in December 2024."
                    : "Em 2022, voltei a estudar com um objetivo claro: migrar para a tecnologia. Comecei com os cursos de Testes de Software e DevOps & Agile Culture, na FIAP, e depois cursei Análise e Desenvolvimento de Sistemas, na UNIP, concluído em dezembro de 2024."}
                </p>

                <p>
                  {en
                    ? "That is where SQL Server, queries, and data analysis stopped being just everyday tools and became my path."
                    : "Foi ali que SQL Server, consultas e análise de dados deixaram de ser apenas ferramentas do dia a dia e se tornaram o meu caminho."}
                </p>
              </div>
            </article>

            <article>
              <h3 className="text-lg md:text-xl font-semibold text-ink mb-3">
                {en ? "Where I Am Today" : "Onde estou hoje"}
              </h3>

              <div className="space-y-3 text-sm md:text-[15px] leading-relaxed text-muted-foreground">
                <p>
                  {en
                    ? "In September 2025, I was promoted to Junior Programmer at UNIP. Alongside that, I pursued a postgraduate degree in Software Engineering, which I completed in April 2026."
                    : "Em setembro de 2025, fui promovida a Programadora Júnior na UNIP. Em paralelo, cursei a pós-graduação em Engenharia de Software, concluída em abril de 2026."}
                </p>

                <p>
                  {en
                    ? "Today I work with SQL Server and T-SQL, developing and maintaining queries, Views, and Stored Procedures, analyzing business rules, investigating incidents in the Lyceum ERP, and taking part in functional testing and fix validation."
                    : "Hoje trabalho com SQL Server e T-SQL, desenvolvendo e mantendo consultas, Views e Stored Procedures, analisando regras de negócio, investigando incidentes no ERP Lyceum e participando de testes funcionais e validações de correções."}
                </p>

                <p>
                  {en
                    ? "I keep studying every day, because I want to build better systems, and I carry with me everything that caring for someone taught me."
                    : "Sigo estudando todos os dias porque quero construir sistemas melhores, e levo comigo tudo o que cuidar de alguém me ensinou."}
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

            <ArtigosCarousel
              en={en}
              artigos={ULTIMOS_ARTIGOS.map((original) => {
                const artigo = en ? { ...original, ...ARTIGOS_EN[original.slug] } : original;
                return {
                  slug: artigo.slug,
                  title: artigo.title,
                  subject: artigo.subject,
                  summary: artigo.summary,
                  dataLabel: en ? dataEn(artigo.publishedAt) : artigo.date,
                };
              })}
            />
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="scroll-mt-24 border-b border-border/60">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 py-10 md:py-12">
          <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-7 lg:gap-14 items-start">
            <div>
              <p className={SECTION_LABEL}>
                {en ? "Let's talk" : "Vamos conversar"}
              </p>

              <h2 className={SECTION_TITLE}>
                {en ? "Contact" : "Contato"}
              </h2>

              <p className="mt-3 text-sm md:text-[15px] leading-relaxed text-muted-foreground">
                {en
                  ? "Open to opportunities in systems analysis and support, SQL Server, data and QA."
                  : "Aberta a oportunidades em análise e sustentação de sistemas, SQL Server, dados e QA."}
              </p>
            </div>

            <div className="grid grid-cols-2 xl:grid-cols-3 gap-3">
              {[
                { label: "E-mail", href: "mailto:zanini.n@outlook.com.br", icon: Mail },
                {
                  label: "WhatsApp",
                  href: `https://wa.me/5511981368778?text=${encodeURIComponent(
                    en
                      ? "Hi Náyra! I found your portfolio and would like to talk."
                      : "Olá, Náyra! Vi seu portfólio e gostaria de conversar.",
                  )}`,
                  icon: MessageCircle,
                },
                { label: "LinkedIn", href: "https://linkedin.com/in/nayra-zanini/", icon: Briefcase },
                { label: "GitHub", href: "https://github.com/nayrazanini", icon: Code2 },
                { label: "Instagram", href: "https://instagram.com/nazanini_", icon: Camera },
                {
                  label: en ? "Résumé" : "Currículo",
                  href: "/CV_Nayra_Zanini.pdf",
                  icon: Download,
                  download: true,
                },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  {...(c.download
                    ? { download: "CV_Nayra_Zanini.pdf" }
                    : c.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  className="group h-14 rounded-xl border border-border/60 px-4 flex items-center justify-center gap-2.5 text-sm text-ink hover:border-terracotta/60 hover:text-terracotta transition-colors"
                >
                  <c.icon className="h-4 w-4 text-terracotta" aria-hidden="true" />
                  {c.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
