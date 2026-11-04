import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Náyra Zanini" },
      {
        name: "description",
        content:
          "Entre em contato com Náyra Zanini. Email, LinkedIn, GitHub e WhatsApp para oportunidades em tecnologia.",
      },
      { property: "og:title", content: "Contato — Náyra Zanini" },
      {
        property: "og:description",
        content: "Vamos conversar sobre oportunidades em desenvolvimento e dados.",
      },
    ],
  }),
  component: ContatoPage,
});

const CHANNELS = [
  {
    label: "Email",
    value: "zanini.n@outlook.com.br",
    href: "mailto:zanini.n@outlook.com.br",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/nayra-zanini",
    href: "https://linkedin.com/in/nayra-zanini/",
  },
  {
    label: "GitHub",
    value: "github.com/nayrazanini",
    href: "https://github.com/nayrazanini",
  },
  {
    label: "Instagram",
    value: "@nazanini_",
    href: "https://instagram.com/nazanini_",
  },
  {
    label: "WhatsApp",
    value: "(11) 9.8136-8778",
    href: "https://wa.me/5511981368778",
  },
];

function ContatoPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-4xl px-5 sm:px-6 pt-12 sm:pt-20 pb-16 sm:pb-24">
        <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-terracotta font-medium">
          Contato
        </p>
        <h1 className="mt-4 sm:mt-6 font-display text-3xl sm:text-5xl md:text-7xl font-medium leading-tight">
          Vamos{" "}
          <span className="italic text-terracotta">conversar</span>.
        </h1>
        <p className="mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
          Estou aberta a oportunidades como programadora Jr., analista de
          dados, QA ou áreas adjacentes em tecnologia. Se você acha que posso
          contribuir com seu time, me chame por qualquer canal abaixo.
        </p>

        <div className="mt-10 sm:mt-14 grid sm:grid-cols-2 gap-3 sm:gap-4">
          {CHANNELS.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group p-4 sm:p-6 rounded-2xl border border-border/60 bg-card hover:border-terracotta/50 hover:shadow-hover transition-all flex items-center justify-between gap-3 sm:gap-4"
            >
              <div className="min-w-0">
                <p className="text-xs sm:text-sm uppercase tracking-wider text-muted-foreground">
                  {c.label}
                </p>
                <p className="mt-1 font-display text-base sm:text-xl group-hover:text-terracotta transition-colors break-all">
                  {c.value}
                </p>
              </div>
              <span className="text-terracotta text-xl group-hover:translate-x-1 transition-transform shrink-0">
                →
              </span>
            </a>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-plum-radial text-white shadow-hover">
          <p className="font-display text-lg sm:text-2xl leading-snug">
            "Estou escrevendo um novo capítulo da minha trajetória com
            coragem, resiliência e uma vontade genuína de fazer a diferença na
            área de tecnologia."
          </p>
          <p className="mt-3 sm:mt-4 text-white/60 text-xs sm:text-sm">— Náyra Zanini</p>
        </div>
      </section>
    </SiteLayout>
  );
}