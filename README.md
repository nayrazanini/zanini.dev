# zanini.dev — Portfólio de Náyra Zanini

Site em React + TanStack Start (Vite), Tailwind CSS v4 e Supabase (usado só no projeto "Finanças Pessoais").

## Rodar localmente

```bash
npm install
cp .env.example .env   # preencha com os dados do seu Supabase
npm run dev
```

Outros comandos: `npm run build`, `npm run preview`, `npm test`, `npm run lint`.

## Variáveis de ambiente

| Variável | Para que serve |
| --- | --- |
| `VITE_SUPABASE_URL` | URL do projeto Supabase |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Chave publishable/anon do Supabase |
| `VITE_SITE_URL` | URL pública do site (sitemap e imagem de compartilhamento) |

Na hospedagem, cadastre as mesmas variáveis no painel do provedor.

## Supabase (Finanças Pessoais)

1. Crie um projeto em https://supabase.com.
2. No SQL Editor, cole e rode o arquivo `supabase/setup.sql` (cria tabelas, RLS, triggers e o onboarding automático).
3. Em Authentication > URL Configuration, coloque a URL do site em *Site URL* e *Redirect URLs*.
4. (Opcional) Para o botão "Entrar com Google": Authentication > Providers > Google.

## Deploy

O build usa o Nitro, que detecta a plataforma automaticamente (Vercel, Netlify, Cloudflare).
Na Vercel: *Add New > Project*, escolha este repositório, cadastre as 3 variáveis em *Environment Variables* e clique em *Deploy* (o Vite/Nitro é detectado sozinho). Depois, cadastre o domínio em *Settings > Domains*.
**Importante:** as variáveis `VITE_*` entram no build; se alterá-las, faça um novo deploy.
Para forçar um destino: `NITRO_PRESET=cloudflare_pages npm run build`.

## Arquivos que você precisa manter em `public/`

- `CV_Nayra_Zanini.pdf` — link do cabeçalho
- `Curriculo_Nayra_Zanini_2026.pdf` — botão "Baixar currículo" em /experiencia
- `og-image.png` — imagem de pré-visualização ao compartilhar o link (1200×630)
