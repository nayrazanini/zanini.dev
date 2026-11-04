import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/projetos/meu-espaco")({
  head: () => ({
    meta: [
      { title: "Meu Espaço — Case study — nayra.dev" },
      { name: "description", content: "Case study do Meu Espaço: painel pessoal fictício, local e sem integrações reais." },
      { property: "og:title", content: "Meu Espaço — Case study" },
      { property: "og:description", content: "Objetivo, funcionalidades e decisões de privacidade de uma demonstração que roda só no navegador." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <article className="mx-auto max-w-4xl px-5 sm:px-6 pt-10 sm:pt-16 pb-16">
        <p className="text-xs uppercase tracking-[0.2em] text-terracotta font-medium">Case study · Demonstração interativa</p>
        <h1 className="mt-4 font-display text-3xl md:text-5xl font-medium">Meu Espaço</h1>
        <p className="mt-4 text-foreground/85 leading-relaxed max-w-2xl">
          Um painel pessoal para reunir a rotina em um só lugar. Esta versão é uma demonstração com dados fictícios: tudo o que você altera fica salvo apenas no seu navegador.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link to="/demo/meu-espaco" className="px-4 py-2 rounded-full bg-gradient-plum-radial text-white text-sm font-medium hover:opacity-90">Ver demonstração</Link>
          <Link to="/projetos" className="px-4 py-2 rounded-full border border-terracotta/60 text-terracotta text-sm font-medium">Voltar ao portfólio</Link>
        </div>
        <h2 className="mt-12 font-display text-2xl">Privacidade</h2>
        <p className="mt-3 text-foreground/85 leading-relaxed">
          Não há login, banco de dados nem conexão real com Spotify, WhatsApp ou notícias. Os dados são fictícios, guardados localmente e podem ser restaurados a qualquer momento.
        </p>
      </article>
    </SiteLayout>
  );
}
