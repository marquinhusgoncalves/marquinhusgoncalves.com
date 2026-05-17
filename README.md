# marquinhusgoncalves.com

[![Netlify Status](https://api.netlify.com/api/v1/badges/d8e55540-27bc-4252-80de-b2b4d3145a99/deploy-status)](https://app.netlify.com/sites/gatsby-marquinhus/deploys)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Site pessoal e blog — [marquinhusgoncalves.com](https://www.marquinhusgoncalves.com)

---

## Stack

| Camada | Tecnologia |
|---|---|
| Framework | Gatsby 5 + React 18 |
| Linguagem | TypeScript 5 (strict) |
| Styling | styled-components 6 + CSS vars + Dark Mode |
| CMS | Decap CMS (CDN) via `/admin/` |
| Hosting | Netlify |
| Serverless | Netlify Functions |
| Database | Supabase (newsletter subscribers) |
| Email | MailerLite |
| Monitoramento | Sentry + Google Analytics 4 |
| i18n | react-i18next (PT-BR + EN) |

---

## Pré-requisitos

- **Node.js 24.x** — use `.nvmrc` com `nvm use`
- **Yarn 1.x** — `npm install -g yarn` (apenas para instalação inicial)
- **Gatsby CLI** — `yarn global add gatsby-cli`
- **Netlify CLI** (para testar functions localmente) — `yarn global add netlify-cli`

---

## Setup

```bash
# 1. Clone o repositório
git clone https://github.com/marquinhusgoncalves/marquinhusgoncalves.com.git
cd marquinhusgoncalves.com

# 2. Instale as dependências
yarn

# 3. Configure as variáveis de ambiente
cp .env.example .env
# Edite .env com seus valores reais (veja seção abaixo)

# 4. Inicie o servidor de desenvolvimento
gatsby develop
```

O site estará em `http://localhost:8000`.

---

## Variáveis de Ambiente

Copie `.env.example` para `.env` e preencha:

| Variável | Descrição |
|---|---|
| `SUPABASE_URL` | URL do projeto Supabase |
| `SUPABASE_KEY` | Chave anon do Supabase |
| `ML_API_URL` | URL da API MailerLite |
| `ML_API_KEY` | API key da MailerLite |
| `ML_GROUP_ID` | ID do grupo de subscribers na MailerLite |
| `ML_WEBHOOK_SECRET` | Secret para validação de webhooks (32+ chars recomendado) |
| `GATSBY_NETLIFY_FUNCTIONS_URL` | URL base das Netlify Functions (`http://localhost:8888/.netlify/functions` em dev) |
| `GOOGLE_ANALYTICS_ID` | ID do GA4 (formato `G-XXXXXXXXXX`) |
| `GATSBY_SENTRY_DSN` | DSN do projeto no Sentry |
| `GATSBY_SENTRY_ORG` | Slug da organização no Sentry |
| `GATSBY_SENTRY_PROJECT` | Slug do projeto no Sentry |

> Variáveis com prefixo `GATSBY_` são expostas ao browser. As demais ficam apenas no servidor (Netlify Functions).

---

## Comandos

| Comando | Descrição |
|---|---|
| `gatsby develop` | Servidor de desenvolvimento em `localhost:8000` |
| `gatsby build` | Build de produção (output em `public/`) |
| `gatsby serve` | Serve o build de produção localmente |
| `gatsby clean` | Limpa cache (`.cache/` e `public/`) — use quando algo estiver estranho |
| `yarn typecheck` | Verifica tipos TypeScript |
| `yarn format` | Formata o código com Prettier |
| `yarn test` | Roda a suite de testes (Jest + React Testing Library) |

---

## CMS — Decap CMS

O CMS permite criar e editar posts, projetos, dicas e viagens via interface visual.

### Em desenvolvimento

O CMS em desenvolvimento usa o **local backend** — os ficheiros são lidos/escritos diretamente do disco, sem autenticação GitHub.

```bash
# Terminal 1 — proxy local do Decap CMS
npx decap-server

# Terminal 2 — Gatsby
gatsby develop

# Acesse
open http://localhost:8000/admin/
```

> ⚠️ Use sempre `/admin/` **com barra final**. Sem ela (`/admin`) o redirect não funciona corretamente.

O `local_backend: true` já está no `config.yml` e pode ser commitado sem problema — em produção, o Decap CMS 3.x tenta conectar no proxy local (porta 8081) e, ao não encontrá-lo, cai automaticamente no backend GitHub com OAuth.

### Em produção (Netlify)

O CMS usa GitHub como backend com OAuth configurado no Netlify. Basta acessar `https://www.marquinhusgoncalves.com/admin/` e autenticar com sua conta GitHub.

### Estrutura do CMS

| Coleção | Pasta | Rota no site |
|---|---|---|
| Posts | `posts/` | `/blog/` |
| Projetos | `projects/` | `/projetos/` |
| Dicas | `dicas/` | `/dicas/` |
| Viagens | `viagens/` | `/viagens/` |

---

## Netlify Functions

As functions ficam em `netlify/functions/` e são acessíveis em `/.netlify/functions/<nome>`.

| Function | Endpoint | Descrição |
|---|---|---|
| `subscribe.mts` | `POST /subscribe` | Inscrição na newsletter (Supabase + MailerLite) |
| `webhook-mailerlite.mts` | `POST /webhook-mailerlite` | Webhook de eventos da MailerLite (HMAC-SHA256) |
| `supabase-keepalive.mts` | Scheduled diário | Ping para manter conexão Supabase ativa |

Para testar localmente com Netlify CLI:

```bash
netlify dev
```

As functions ficam em `http://localhost:8888/.netlify/functions/<nome>`.

---

## Conteúdo (posts, projetos, etc.)

Posts são arquivos Markdown em `posts/` com frontmatter:

```markdown
---
title: Título do post
date: 2025-01-15T10:00:00.000Z
slug: /titulo-do-post/
tags:
  - react
  - typescript
---

Conteúdo do post em Markdown...
```

Projetos seguem o mesmo padrão em `projects/`.

---

## SEO

- **Sitemap**: gerado automaticamente em `/sitemap-index.xml`
- **RSS Feed**: disponível em `/rss.xml`
- **Robots.txt**: em `public/robots.txt`
- **hreflang**: configurado para PT-BR e EN em `src/components/Seo.tsx`
- **Schema.org**: Article, WebSite, Person via `src/components/SchemaOrg/`
- **Open Graph + Twitter Cards**: configurados no componente `Seo.tsx`

Após deploy, submeta o sitemap no [Google Search Console](https://search.google.com/search-console).

---

## Internacionalização

O site tem suporte a PT-BR e EN. As traduções ficam em arquivos JSON por idioma:

| Arquivo | Idioma |
|---|---|
| `src/locales/pt/translation.json` | Português (PT-BR) |
| `src/locales/en/translation.json` | Inglês (EN) |

O arquivo `src/i18n.ts` carrega esses JSONs e inicializa o `react-i18next`. Para adicionar ou editar uma string, edite o JSON do idioma correspondente — não é necessário mexer em código TypeScript.

- Rotas PT: `/blog/`, `/projetos/`, `/sobre/`, etc.
- Rotas EN: `/en/blog/`, `/en/projetos/`, `/en/sobre/`, etc.

A troca de idioma é automática com base na URL via `gatsby-browser.tsx`.

---

## Segurança

Headers de segurança configurados em `netlify.toml`:

- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: geolocation=(), microphone=(), camera=()`

Cache de assets estáticos: 1 ano (`immutable`). HTML: sem cache (atualizações imediatas).

---

## Analytics e Monitoramento

- **GA4**: configurado via `GOOGLE_ANALYTICS_ID`. Eventos customizados: `newsletter_signup`.
- **Web Vitals**: CLS, FCP, INP, LCP, TTFB reportados automaticamente para GA4 via `src/utils/analytics.ts`.
- **Sentry**: captura erros em runtime. Configurado em `sentry.config.ts` com 10% de sample rate para performance.

---

## Deploy

O deploy é automático via Netlify ao fazer push na branch `master`.

```bash
git push origin master
```

Build command: `gatsby build`  
Publish directory: `public/`

As variáveis de ambiente de produção são configuradas no painel do Netlify em **Settings → Environment variables**.

---

## Licença

MIT — veja [LICENSE](LICENSE) para detalhes.
