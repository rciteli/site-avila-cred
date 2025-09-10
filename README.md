# ÁvilaCred — Website (Next.js + TypeScript + Tailwind)

Site institucional da **ÁvilaCred** com páginas de **Home**, **Sobre**, **Precatórios** (com rotas dinâmicas), **Blog** (lista e posts) e **Contato** (formulário + WhatsApp).  
Design baseado no Figma e PDFs fornecidos.
## ✨ Destaques

- **Next.js App Router** (SSR/SSG) + **TypeScript**
- **Tailwind CSS** para estilos
- **Lucide Icons** para ícones
- **Arquitetura por componentes** (Nav, Header, Hero, Main, Footer, etc.)
- **/precatorios/[tipo]** (federal/estadual/municipal) com **breadcrumb** e **nav secundária**
- **Blog** estático com 6 posts e **metadata dinâmica** (compatível com Next 15 / Dynamic APIs)
- **Contato** com formulário acessível e botão **WhatsApp** (CTA primário + flutuante opcional)
## 🧱 Stack

- **Node.js** ≥ 18.17
- **Next.js** 14.2+ / 15
- **React** 18
- **TypeScript**
- **Tailwind CSS**
- **lucide-react**
- (Opcional) **ESLint/Prettier** + Husky
## 📁 Estrutura de Pastas (principal)
avilacred/
├─ app/
│  ├─ globals.css         
│  ├─ layout.tsx
│  ├─ page.tsx                  # Home
│  ├─ sobre/
│  │  └─ page.tsx
│  ├─ precatorios/
│  │  ├─ page.tsx               # Landing de Precatórios
│  │  └─ [tipo]/
│  │     └─ page.tsx            # Federal | Estadual | Municipal (dinâmico)
│  ├─ blog/
│  │  ├─ page.tsx               # Lista de posts
│  │  └─ [slug]/
│  │     └─ page.tsx            # Post individual
│  └─ contato/
│     └─ page.tsx
│
├─ components/
│  ├─ Breadcrumb.tsx
│  ├─ ContactForm.tsx
│  ├─ WhatsAppButton.tsx
│  ├─ ProcessoEtapas.tsx
│  ├─ ProcessoEtapasVender.tsx
│  ├─ PrecatoriosHero.tsx
│  ├─ TiposPrecatorios.tsx
│  ├─ ChecklistDocumentos.tsx
│  ├─ ComparativoVendaAguardar.tsx
│  ├─ PersonasCards.tsx
│  ├─ FaqPrecatorios.tsx
│  ├─ CTASection.tsx
│  ├─ PrecatoriosTypeNav.tsx
│  └─ Trajetoria.tsx
│
├─ lib/
│  └─ content/
│     ├─ blog.ts
│     ├─ precatorios.ts
│     └─ precatorios-tipos.ts
│
├─ public/
│  ├─ favicon.ico
│  └─ (assets opcionais: logos, imagens)
│
├─ .env.local.example
├─ next.config.mjs
├─ package.json
├─ postcss.config.js
├─ tailwind.config.ts
├─ tsconfig.json
└─ README.md
## 🚀 Começando

### 1) Clonar e instalar

```bash
git clone <repo-url> avilacred
cd avilacred
pnpm install   # ou yarn / npm

### 2) Variáveis de ambiente

Crie .env.local na raiz:
NEXT_PUBLIC_SITE_URL=https://www.seudominio.com
NEXT_PUBLIC_WHATSAPP_NUMBER=5511999999999

### 3) Desenvolvimento

pnpm dev
# http://localhost:3000

### 4) Build e produção

pnpm build
pnpm start

## 🧭 Rotas Principais

- `/` — Home  
- `/sobre` — Sobre a ÁvilaCred  
- `/precatorios` — Landing de Precatórios  
- `/precatorios/[tipo]` — Dinâmico: `federal | estadual | municipal`  
- `/blog` — Lista de artigos  
- `/blog/[slug]` — Artigo individual  
- `/contato` — Formulário + WhatsApp

## 🧩 Componentes-chave

- **Breadcrumb**: navegação hierárquica (Blog > Post, Precatórios > Federal)
- **PrecatoriosTypeNav**: alternância entre tipos com tamanho padronizado
- **ProcessoEtapas / ProcessoEtapasVender**: etapas do fluxo
- **SimuladorPrecatorio**: formulário simplificado (CTA principal)
- **WhatsAppButton**: botão `wa.me` (primário e flutuante)
- **Trajetoria**: linha do tempo elegante (página Sobre)

## 📝 Blog (conteúdo estático)

Os 6 posts residem em `lib/content/blog.ts`. Para criar novos:
1. Adicione um objeto à lista `BLOG_POSTS`.
2. Defina `slug`, `title`, `date` (ISO), `readingTime`, `tags`, `excerpt` e `content` (blocos tipados).
3. A rota `/blog/[slug]` renderiza automaticamente e gera metadata dinâmica.

## 🔎 SEO & Next 15 (Dynamic APIs)

- Use **`generateMetadata` assíncrono** e **tipado** (`Promise<Metadata>`).
- Em rotas dinâmicas do Next 15, `params` pode ser **Promise** — faça `await`:
```ts
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  // ...
}
export default async function Page(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  // ...
}


```markdown
## 🔒 Acessibilidade & UX

- Labels e foco visível em inputs
- Contraste alto (fundo `#000030`, texto branco)
- Ícones com descrição visual clara
- CTAs consistentes (dourado `#EBBD46` para destaque)

## 🧰 Scripts

```json
{
  "scripts": {
    "dev": "next dev -p 3000",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "typecheck": "tsc --noEmit"
  }
}


```markdown
## 🚢 Deploy

- **Vercel** recomendado (suporte nativo ao Next.js)
- Configure domínios, previews e variáveis de ambiente no painel

## 🧩 Roadmap (sugestões)

- Busca e filtro por **tags** no Blog  
- Integração real do **/api/contato** (Resend/SMTP) + captcha (Turnstile)  
- CMS leve (MDX/Contentlayer) para posts  
- Testes e auditoria de performance (Lighthouse)  
- i18n (pt-BR/en) se necessário

## 🤝 Contribuindo

1. Branch: `feat/nome-da-feature`  
2. Commits pequenos e descritivos (ex.: `feat: adiciona componente X`)  
3. Abra PR com descrição e screenshots

## 📬 Contato

- **Site:** https://www.site.grouparc.com.br
- **E-mail:** rciteli@gmail.com 
- **WhatsApp:** +55 (21) 983324011