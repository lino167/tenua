# Tenua — Studio Showcase

Site vitrine da marca Tenua, construído com React, Vite, TypeScript e Tailwind CSS (componentes acessíveis via shadcn/ui/Radix UI). Projeto estático, pronto para deploy em host de arquivos.

## Visão Geral

- Página única com seções: Hero, Sobre, Essência, Produtos, Galeria, Depoimentos, Cuidados, Processo de Pedido, FAQ e Contato.
- Botão de WhatsApp integrado para conversão direta.
- Conteúdo centralizado para fácil manutenção.

## Stack

- React 18, Vite 5 (SWC), TypeScript 5.
- Tailwind CSS + animações.
- shadcn/ui + Radix UI, React Router.
- Suporte: React Hook Form + Zod, Sonner, Embla, Recharts, Lucide, next-themes.

## Requisitos

- Node.js 18+.
- Use npm ou Bun (mantenha o mesmo gestor de pacotes).

## Instalação

```bash
npm install
# ou
bun install
```

## Uso

```bash
npm run dev
# abre em http://localhost:8080
```

## Build e Preview

```bash
npm run build
npm run preview
```

## Scripts

- dev: servidor de desenvolvimento (Vite).
- build: build de produção.
- build:dev: build em modo desenvolvimento.
- preview: serve a build localmente.
- lint: verifica qualidade do código.

## Estrutura

- tenua-studio-showcase-main/
  - public/ (favicon, og-image, robots.txt)
  - src/
    - assets/ (imagens e logos)
    - components/ (seções e UI/shadcn)
    - pages/ (Index, NotFound)
    - data/ (siteContent.ts)
    - hooks/, lib/

## Conteúdo

- Editar `src/data/siteContent.ts` para textos, listas e configurações.
- Número do WhatsApp em `whatsapp` (formato com código do país, sem espaços/símbolos).
- Imagens em `src/assets`.

## Estilos

- Tailwind configurado com paleta da marca, animações e tipografia (Playfair Display e Montserrat).
- Estilos globais em `index.css` e `src/App.css`.

## Deploy

- Publicar a pasta `tenua-studio-showcase-main/dist/` em host estático (Vercel, Netlify, GitHub Pages, Cloudflare Pages ou servidor web).

## Qualidade

- ESLint e TypeScript configurados.
