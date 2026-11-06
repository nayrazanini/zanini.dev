import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Check, Copy, Download, ExternalLink, Mail, MessageCircle } from "lucide-react";
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
        content: "Vamos conversar sobre oportunidades em desenvolvimento, dados e sustentação de sistemas.",
      },
    ],
  }),
  component: ContatoPage,
});

const EMAIL = "zanini.n@outlook.com.br";
const WHATSAPP_NUMBER = "5511981368778";

const SOCIAL = [
  { label: "LinkedIn", value: "linkedin.com/in/nayra-zanini", href: "https://linkedin.com/in/nayra-zanini/" },
  { label: "GitHub", value: "github.com/nayrazanini", href: "https://github.com/nayrazanini" },
  { label: "Instagram", value: "@nazanini_", href: "https://instagram.com/nazanini_" },
];

function ContatoPage() {
  const { language } = useLanguage();
  const en = language === "en";
  const [copiado, setCopiado] = useState(false);

  const mensagem = en
    ? "Hi Náyra! I found your portfolio and would like to talk."
    : "Olá, Náyra! Vi seu portfólio e gostaria de conversar.";
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;

  async function copiarEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  }

  return (
    <SiteLayout>
      <section className="mx-auto max-w-4xl px-5 sm:px-6 pt-12 sm:pt-20 pb-16 sm:pb-24">
        <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-terracotta font-medium">
          {en ? "Contact" : "Contato"}
        </p>
        <h1 className="mt-4 sm:mt-6 font-display text-3xl sm:text-5xl md:text-7xl font-medium leading-tight">
          {en ? "Let's " : "Vamos "}
          <span className="italic text-terracotta">{en ? "talk" : "conversar"}</span>.
        </h1>
        <p className="mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
          {en
            ? "I'm open to opportunities in systems analysis and support, SQL Server development, data and QA. If you think I can contribute to your team, reach out through any channel below."
            : "Estou aberta a oportunidades em análise e sustentação de sistemas, desenvolvimento com SQL Server, dados e QA. Se você acha que posso contribuir com seu time, me chame por qualquer canal abaixo."}
        </p>

        {/* Contato direto */}
        <div className="mt-10 sm:mt-14 grid sm:grid-cols-2 gap-3 sm:gap-4">
          <div className="p-5 sm:p-6 rounded-2xl border border-border/60 bg-card">
            <div className="flex items-center gap-3 text-terracotta">
              <Mail className="h-5 w-5" aria-hidden="true" />
              <p className="text-xs sm:text-sm uppercase tracking-wider text-muted-foreground">
                {en ? "Email" : "E-mail"}
              </p>
            </div>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-3 block font-display text-base sm:text-xl hover:text-terracotta transition-colors break-all"
            >
              {EMAIL}
            </a>
            <button
              type="button"
              onClick={copiarEmail}
              className="mt-4 inline-flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-terracotta transition-colors"
            >
              {copiado ? <Check className="h-4 w-4" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
              {copiado ? (en ? "Copied!" : "Copiado!") : en ? "Copy email" : "Copiar e-mail"}
            </button>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl border border-border/60 bg-card">
            <div className="flex items-center gap-3 text-terracotta">
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              <p className="text-xs sm:text-sm uppercase tracking-wider text-muted-foreground">WhatsApp</p>
            </div>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block font-display text-base sm:text-xl hover:text-terracotta transition-colors"
            >
              (11) 9.8136-8778
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-terracotta transition-colors"
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              {en ? "Start a conversation" : "Iniciar conversa"}
            </a>
          </div>
        </div>

        {/* Redes */}
        <div className="mt-3 sm:mt-4 grid sm:grid-cols-3 gap-3 sm:gap-4">
          {SOCIAL.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 sm:p-5 rounded-2xl border border-border/60 bg-card hover:border-terracotta/50 transition-all flex items-center justify-between gap-3"
            >
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</p>
                <p className="mt-1 text-sm sm:text-base group-hover:text-terracotta transition-colors break-all">
                  {c.value}
                </p>
              </div>
              <span className="text-terracotta text-lg group-hover:translate-x-1 transition-transform shrink-0">↗</span>
            </a>
          ))}
        </div>

        {/* Currículo */}
        <a
          href="/CV_Nayra_Zanini.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 sm:mt-4 group p-4 sm:p-5 rounded-2xl border border-dashed border-border/80 hover:border-terracotta/60 transition-all flex items-center justify-between gap-3"
        >
          <div className="flex items-center gap-3">
            <Download className="h-5 w-5 text-terracotta" aria-hidden="true" />
            <div>
              <p className="text-sm sm:text-base group-hover:text-terracotta transition-colors">
                {en ? "Download my résumé (PDF)" : "Baixar meu currículo (PDF)"}
              </p>
              <p className="text-xs text-muted-foreground">
                {en ? "Programmer · Systems analysis and support · SQL Server" : "Programadora · Análise e sustentação de sistemas · SQL Server"}
              </p>
            </div>
          </div>
          <span className="text-terracotta text-lg shrink-0">↗</span>
        </a>

        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-plum-radial text-white shadow-hover">
          <p className="font-display text-lg sm:text-2xl leading-snug">
            {en
              ? "“I am writing a new chapter of my journey with courage, resilience and a genuine desire to make a difference in technology.”"
              : "“Estou escrevendo um novo capítulo da minha trajetória com coragem, resiliência e uma vontade genuína de fazer a diferença na área de tecnologia.”"}
          </p>
          <p className="mt-3 sm:mt-4 text-white/60 text-xs sm:text-sm">— Náyra Zanini</p>
        </div>
      </section>
    </SiteLayout>
  );
}
