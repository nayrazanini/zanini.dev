import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { nitro } from "nitro/vite";

// Configuração própria do Vite (antes vinha de um pacote que empacotava tudo isso).
// O alias "@" -> "src" vem do tsconfig.json via vite-tsconfig-paths.
// O Nitro detecta sozinho a plataforma de deploy (Vercel, Netlify, Cloudflare...).
// Para forçar um destino: NITRO_PRESET=cloudflare_pages npm run build
export default defineConfig({
  plugins: [
    tsConfigPaths(),
    tanstackStart({
      // Usa o src/server.ts como entrada do servidor
      server: { entry: "server" },
    }),
    viteReact(),
    tailwindcss(),
    nitro(),
  ],
});
