import { createFileRoute } from "@tanstack/react-router";
import {
  Briefcase,
  Camera,
  Code2,
  Download,
  Mail,
  MessageCircle,
} from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { useLanguage } from "@/context/LanguageContext";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Náyra Zanini" },
      {
        name: "description",
        content:
          "Entre em contato com Náyra Zanini. E-mail, WhatsApp, LinkedIn, GitHub e Instagram para oportunidades em tecnologia.",
      },
      { property: "og:title", content: "Contato — Náyra Zanini" },
      {
        property: "og:description",
        content:
          "Vamos conversar sobre oportunidades em desenvolvimento, dados e sustentação de sistemas.",
      },
    ],
  }),
  component: ContatoPage,
});

const CANAIS = [
  {
    label: "E-mail",
    labelEn: "Email",
    hint: "Enviar e-mail",
    hintEn: "Send an email",
    icon: Mail,
    tipo: "email",
  },
  {
    label: "WhatsApp",
    labelEn: "WhatsApp",
    hint: "Iniciar conversa",
    hintEn: "Start a conversation",
    icon: MessageCircle,
    tipo: "whatsapp",
  },
  {
    label: "LinkedIn",
    labelEn: "LinkedIn",
    hint: "Ver perfil",
    hintEn: "View profile",
    icon: Briefcase,
    href: "https://linkedin.com/in/nayra-zanini/",
  },
  {
    label: "GitHub",
    labelEn: "GitHub",
    hint: "Ver repositórios",
    hintEn: "View repositories",
    icon: Code2,
    href: "https://github.com/nayrazanini",
  },
  {
    label: "Instagram",
    labelEn: "Instagram",
    hint: "Ver perfil",
    hintEn: "View profile",
    icon: Camera,
    href: "https://instagram.com/nazanini_",
  },
] as const;

function ContatoPage() {
  const { language } = useLanguage();
  const en = language === "en";

  const mensagem = en
    ? "Hi Náyra! I found your portfolio and would like to talk."
    : "Olá, Náyra! Vi seu portfólio e gostaria de conversar.";

  // E-mail e WhatsApp só são montados no clique, para não ficarem expostos na página
  function abrirCanal(tipo: string) {
    if (tipo === "email") {
      window.location.href = `mailto:${["zanini.n", "outlook.com.br"].join("@")}`;
    } else if (tipo === "whatsapp") {
      const numero = ["55", "11", "98136", "8778"].join("");
      window.open(
        `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`,
        "_blank",
        "noopener,noreferrer",
      );
    }
  }

  const cardClass =
    "group p-5 sm:p-6 rounded-2xl border border-border/60 bg-card hover:border-terracotta/50 transition-all flex items-center justify-between gap-3 text-left w-full";

  return (
    <SiteLayout>
      <section className="mx-auto max-w-4xl px-5 sm:px-6 pt-12 sm:pt-20 pb-16 sm:pb-24">
        <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-terracotta font-medium">
          {en ? "Contact" : "Contato"}
        </p>
        <h1 className="mt-4 sm:mt-6 font-display text-3xl sm:text-5xl md:text-7xl font-medium leading-tight">
          {en ? "Let's " : "Vamos "}
          <span className="italic text-terracotta">
            {en ? "talk" : "conversar"}
          </span>
          .
        </h1>
        <p className="mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
          {en
            ? "I'm open to opportunities in systems analysis and support, SQL Server development, data and QA. If you think I can contribute to your team, reach out through any channel below."
            : "Estou aberta a oportunidades em análise e sustentação de sistemas, desenvolvimento com SQL Server, dados e QA. Se você acha que posso contribuir com seu time, me chame por qualquer canal abaixo."}
        </p>

        {/* Canais — só itens clicáveis, sem dados expostos */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {CANAIS.map((c) => {
            const conteudo = (
              <>
                <div className="flex items-center gap-3 min-w-0">
                  <c.icon
                    className="h-5 w-5 text-terracotta shrink-0"
                    aria-hidden="true"
                  />
                  <div className="min-w-0">
                    <p className="text-sm sm:text-base font-medium group-hover:text-terracotta transition-colors">
                      {en ? c.labelEn : c.label}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {en ? c.hintEn : c.hint}
                    </p>
                  </div>
                </div>
                <span className="text-terracotta text-lg group-hover:translate-x-1 transition-transform shrink-0">
                  ↗
                </span>
              </>
            );

            return "href" in c ? (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClass}
              >
                {conteudo}
              </a>
            ) : (
              <button
                key={c.label}
                type="button"
                onClick={() => abrirCanal(c.tipo)}
                className={cardClass}
              >
                {conteudo}
              </button>
            );
          })}

          {/* Currículo */}
          <a
            href="/CV_Nayra_Zanini.pdf"
            download="CV_Nayra_Zanini.pdf"
            className={cardClass}
          >
            <div className="flex items-center gap-3 min-w-0">
              <Download
                className="h-5 w-5 text-terracotta shrink-0"
                aria-hidden="true"
              />
              <div className="min-w-0">
                <p className="text-sm sm:text-base font-medium group-hover:text-terracotta transition-colors">
                  {en ? "Résumé" : "Currículo"}
                </p>
                <p className="text-xs text-muted-foreground">
                  {en ? "Download PDF" : "Baixar PDF"}
                </p>
              </div>
            </div>
            <span className="text-terracotta text-lg group-hover:translate-y-0.5 transition-transform shrink-0">
              ↓
            </span>
          </a>
        </div>

        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-plum-radial text-white shadow-hover">
          <p className="font-display text-lg sm:text-2xl leading-snug">
            {en
              ? "“I am writing a new chapter of my journey with courage, resilience and a genuine desire to make a difference in technology.”"
              : "“Estou escrevendo um novo capítulo da minha trajetória com coragem, resiliência e uma vontade genuína de fazer a diferença na área de tecnologia.”"}
          </p>
          <p className="mt-3 sm:mt-4 text-white/60 text-xs sm:text-sm">
            — Náyra Zanini
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
