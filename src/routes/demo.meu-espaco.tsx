import { createFileRoute } from "@tanstack/react-router";
import { MeuEspacoDemo } from "@/components/MeuEspacoDemo";

export const Route = createFileRoute("/demo/meu-espaco")({
  head: () => ({
    meta: [
      { title: "Demonstração Meu Espaço — nayra.dev" },
      { name: "description", content: "Demonstração interativa e fictícia do Meu Espaço, com dados salvos apenas no seu navegador." },
      { property: "og:title", content: "Demonstração Meu Espaço — nayra.dev" },
      { property: "og:description", content: "Painel pessoal fictício para organizar a rotina, sem login nem integrações reais." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: MeuEspacoDemo,
});
