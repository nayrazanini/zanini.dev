import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — Náyra Zanini" },
      {
        name: "description",
        content:
          "A história de Náyra Zanini: da Administração com ênfase em TI à transição para programação, com 13 anos dedicados a cuidar da família.",
      },
      { property: "og:title", content: "Sobre — Náyra Zanini" },
      {
        property: "og:description",
        content:
          "Coragem, resiliência e propósito: a trajetória de uma programadora Jr. reescrevendo sua carreira na tecnologia.",
      },
    ],
  }),
  component: SobrePage,
});

const TIMELINE = [
  {
    year: "2014",
    title: "Bacharelado em Administração com Ênfase em TI",
    text: "Concluí a graduação pela FIAP, com base sólida em gestão e tecnologia da informação.",
  },
  {
    year: "2015",
    title: "Assistente Administrativo Jr. na UNIP",
    text: "Início na área administrativa educacional, com trabalho intenso em dados acadêmicos, automações e sistemas internos.",
  },
  {
    year: "2008 – 2021",
    title: "Cuidando da minha vó",
    text: "Minha vó precisou de cuidados quando eu ainda estava na faculdade, e passei a ajudar. Depois da formatura, a situação ficou mais exigente e, por anos, meu foco foi trabalhar e cuidar dela, junto com a minha mãe. Foram 13 anos de dedicação, e estudar precisou esperar.",
  },
  {
    year: "2022",
    title: "Recomeço: primeiros passos formais na tecnologia",
    text: "Cursos de Testes de Software e DevOps & Agile Culture (FIAP), marcando o início consciente da transição de carreira.",
  },
  {
    year: "2024",
    title: "Tecnólogo em Análise e Desenvolvimento de Sistemas — UNIP",
    text: "Concluí o tecnólogo em ADS em dezembro de 2024, mergulhando em programação, banco de dados e engenharia de software.",
  },
  {
    year: "Set/2025",
    title: "Promovida a Programadora Jr.",
    text: "Transição oficial para a área técnica: SQL Server, testes funcionais e validação de regras de negócio em sistemas críticos da UNIP.",
  },
  {
    year: "2026",
    title: "Pós-graduação em Engenharia de Software",
    text: "Conclusão da pós na UNIP, em abril de 2026, com foco em arquitetura, qualidade e processos de desenvolvimento.",
  },
  {
    year: "Hoje",
    title: "Próximo capítulo",
    text: "Construindo projetos, estudando todos os dias e buscando unir minha bagagem administrativa à paixão por soluções tecnológicas.",
  },
];

function SobrePage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-4xl px-5 sm:px-6 pt-12 sm:pt-20 pb-10 sm:pb-16">
        <h1 className="mt-2 sm:mt-6 font-display text-3xl sm:text-4xl md:text-5xl font-medium leading-tight text-terracotta">
          Sobre mim
        </h1>

        <div className="mt-8 sm:mt-12 space-y-5 sm:space-y-6 text-base sm:text-lg leading-relaxed text-foreground/90">
          <p>
            Me formei em <strong>Administração com Ênfase em Tecnologia da
            Informação</strong> em 2014. Logo em seguida, tomei uma{" "}
            <strong>decisão consciente</strong>: pausar minha carreira
            profissional por <strong>13 anos</strong> para cuidar da minha{" "}
            <strong>avó</strong>. Foi um período de profunda dedicação e
            aprendizado pessoal, que contribuiu de forma definitiva para o meu
            crescimento humano.
          </p>
          <p>
            Após seu falecimento, retomei meu{" "}
            <strong>propósito profissional</strong> com foco total na{" "}
            <strong>transição para a área de tecnologia</strong>. Como ainda
            não possuo longa experiência formal na área técnica, venho
            construindo essa jornada com muito{" "}
            <strong>estudo, prática e determinação</strong>, investindo em
            minha formação para alavancar uma nova carreira.
          </p>
          <p>
            Me formei em{" "}
            <strong>Análise e Desenvolvimento de Sistemas</strong> (dezembro de
            2024) e concluí a{" "}
            <strong>Pós-graduação em Engenharia de Software</strong> (abril de
            2026), ambas pela UNIP.
            Minha meta é integrar minha bagagem na área{" "}
            <strong>Administrativa Educacional</strong> com minha paixão por{" "}
            <strong>soluções práticas e tecnológicas</strong>, unindo visão de
            negócio e análise de sistemas.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-4xl px-5 sm:px-6 pb-16 sm:pb-24">
        <div className="border-t border-border/60 pt-10 sm:pt-16">
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-terracotta font-medium">
            Linha do tempo
          </p>
          <h2 className="mt-3 sm:mt-4 font-display text-2xl sm:text-4xl md:text-5xl font-medium">
            A trajetória, ano a ano.
          </h2>

          <ol className="mt-10 sm:mt-14 relative">
            <span
              aria-hidden
              className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-terracotta via-border to-transparent"
            />
            {TIMELINE.map((item, i) => (
              <li
                key={i}
                className="relative pl-8 sm:pl-10 pb-8 sm:pb-12 last:pb-0 animate-fade-up"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <span
                  aria-hidden
                  className="absolute left-0 top-2 w-4 h-4 rounded-full bg-paper border-2 border-terracotta"
                />
                <p className="font-display text-terracotta text-xs sm:text-sm tracking-wide">
                  {item.year}
                </p>
                <h3 className="mt-1 font-display text-lg sm:text-2xl font-medium leading-snug">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {item.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </SiteLayout>
  );
}