import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

// Arquivo em public/Curriculo_Nayra_Zanini_2026.pdf
const CV_URL = "/Curriculo_Nayra_Zanini_2026.pdf";

export const Route = createFileRoute("/experiencia")({
  head: () => ({
    meta: [
      { title: "Experiência & Formação — Náyra Zanini" },
      {
        name: "description",
        content:
          "Experiência profissional, formação acadêmica, certificações e competências técnicas de Náyra Zanini.",
      },
      { property: "og:title", content: "Experiência — Náyra Zanini" },
      {
        property: "og:description",
        content:
          "10+ anos na UNIP, SQL Server, testes funcionais, pós em Engenharia de Software e certificações ágeis.",
      },
    ],
  }),
  component: ExperienciaPage,
});

const JOBS = [
  {
    role: "Programadora Jr.",
    company: "Universidade Paulista (UNIP)",
    period: "Set/2025 — Atual",
    bullets: [
      "Desenvolvimento e otimização de consultas SQL Server (T-SQL)",
      "Análise e tratamento de inconsistências em bases de dados",
      "Validação de regras de negócio e testes funcionais",
      "Sustentação e melhoria contínua de processos sistêmicos",
    ],
  },
  {
    role: "Assistente Administrativo Jr.",
    company: "Universidade Paulista (UNIP)",
    period: "2015 — Set/2025",
    bullets: [
      "Manipulação e validação de grandes volumes de dados acadêmicos",
      "Desenvolvimento de planilhas automatizadas para cálculo de notas",
      "Automação e padronização de rotinas administrativas",
      "Implementação de soluções colaborativas com OneDrive e SharePoint",
      "Suporte técnico e testes funcionais em sistemas acadêmicos",
    ],
  },
];

const SKILLS = {
  "Competências Técnicas": [
    "SQL Server",
    "Modelagem Relacional",
    "Análise de Sistemas",
    "Engenharia de Requisitos",
    "Testes Funcionais",
    "Homologação",
    "UML",
    "BPMN",
    "Automação de Processos",
    "Scrum",
    "Kanban",
  ],
  "Em desenvolvimento": [
    "JavaScript",
    "Git / GitHub",
    "HTML / CSS",
    "Fundamentos DevOps",
    "Procedures",
    "Otimização SQL",
  ],
  Idiomas: ["Inglês — Intermediário (B2)"],
};

function ExperienciaPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-5xl px-5 sm:px-6 pt-12 sm:pt-20 pb-8 sm:pb-12">
        <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-terracotta font-medium">
          Currículo
        </p>
        <h1 className="mt-4 sm:mt-6 font-display text-3xl sm:text-5xl md:text-6xl font-medium leading-tight">
          Experiência & formação.
        </h1>
        <p className="mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
          Mais de 10 anos atuando na UNIP — da área administrativa à equipe
          técnica — somados a uma formação contínua em desenvolvimento de
          sistemas e engenharia de software.
        </p>
        <div className="mt-6 sm:mt-8">
          <a
            href={CV_URL}
            download="Curriculo_Nayra_Zanini_2026.pdf"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-terracotta/40 bg-terracotta/10 text-terracotta text-sm font-medium hover:bg-terracotta/20 transition-colors"
          >
            <span>Baixar currículo</span>
            <span aria-hidden>↓</span>
          </a>
        </div>
      </section>

      {/* Experience */}
      <section className="mx-auto max-w-5xl px-5 sm:px-6 py-8 sm:py-12">
        <h2 className="font-display text-2xl sm:text-3xl font-medium mb-6 sm:mb-10">
          Experiência profissional
        </h2>
        <div className="space-y-8 sm:space-y-10">
          {JOBS.map((job) => (
            <article
              key={job.role + job.period}
              className="grid md:grid-cols-[200px_1fr] gap-3 md:gap-6 pb-8 sm:pb-10 border-b border-border/60 last:border-0"
            >
              <div>
                <p className="font-display text-terracotta text-sm">{job.period}</p>
              </div>
              <div className="min-w-0">
                <h3 className="font-display text-xl sm:text-2xl font-medium">{job.role}</h3>
                <p className="text-sm sm:text-base text-muted-foreground mt-1">{job.company}</p>
                <ul className="mt-3 sm:mt-4 space-y-2 text-sm sm:text-base text-foreground/90">
                  {job.bullets.map((b) => (
                    <li key={b} className="flex gap-3 leading-relaxed">
                      <span className="text-terracotta mt-2 w-1.5 h-1.5 rounded-full bg-terracotta shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mx-auto max-w-5xl px-5 sm:px-6 py-8 sm:py-12">
        <h2 className="font-display text-2xl sm:text-3xl font-medium mb-6 sm:mb-10">Competências</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {Object.entries(SKILLS).map(([group, items]) => (
            <div key={group}>
              <h3 className="font-display text-base sm:text-lg font-medium text-terracotta mb-3 sm:mb-4">
                {group}
              </h3>
              <ul className="flex flex-wrap gap-1.5 sm:gap-2">
                {items.map((s) => (
                  <li
                    key={s}
                    className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm bg-paper-deep border border-border/60"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12 pb-24" />
    </SiteLayout>
  );
}