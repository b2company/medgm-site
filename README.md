# MedGM - Site Institucional

Site institucional completo da MedGM, consultoria de marketing médico e gestão comercial para clínicas.

## 🚀 Tecnologias

- **Next.js 14+** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animações)
- **MDX** (blog)
- **Lucide React** (ícones)

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar produção
npm start
```

## 🌐 Deploy

### Vercel (Recomendado)

1. Faça push do projeto para o GitHub
2. Conecte seu repositório no [Vercel](https://vercel.com)
3. Configure as variáveis de ambiente (se necessário)
4. Deploy automático!

### Outras Plataformas

O projeto é compatível com:
- Netlify
- AWS Amplify
- Cloudflare Pages
- Railway

## 📂 Estrutura do Projeto

```
medgm-site/
├── app/                    # Páginas (Next.js App Router)
│   ├── page.tsx           # Home
│   ├── sobre/             # Página Sobre
│   ├── servicos/          # Página Serviços
│   ├── contato/           # Página Contato
│   ├── blog/              # Blog
│   │   ├── page.tsx       # Listagem de artigos
│   │   └── [slug]/        # Artigo individual
│   ├── layout.tsx         # Layout principal
│   └── globals.css        # Estilos globais
├── components/            # Componentes reutilizáveis
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── WhatsAppButton.tsx
│   ├── SectionTitle.tsx
│   ├── CTABox.tsx
│   ├── FAQItem.tsx
│   └── home/             # Componentes da Home
├── content/              # Conteúdo do blog (MDX)
│   └── blog/
├── lib/                  # Utilitários
│   └── blog.ts          # Funções do blog
├── public/              # Arquivos estáticos
└── tailwind.config.ts   # Configuração Tailwind
```

## 🎨 Identidade Visual

### Cores

```css
--gold: #CAAA82      /* Primária - CTAs, destaques */
--cream: #FFEBC3     /* Secundária - Backgrounds */
--dark: #191919      /* Textos, headers */
--neutral: #F5F5F0   /* Backgrounds alternados */
```

### Tipografia

- **Headlines:** Playfair Display (serif)
- **Body:** Inter (sans-serif)

## 📝 Blog

### Adicionar Novo Artigo

1. Crie um arquivo `.mdx` em `content/blog/`
2. Adicione o frontmatter:

```mdx
---
title: "Título do Artigo"
description: "Descrição curta"
date: "2026-02-07"
author: "MedGM"
category: "Marketing Médico"
tags: ["tag1", "tag2"]
image: "/blog/image.jpg"
---

# Conteúdo do artigo aqui...
```

3. O artigo aparecerá automaticamente no blog

### Categorias Disponíveis

- Marketing Médico
- SEO
- Tráfego Pago
- Redes Sociais
- Gestão Comercial
- Conformidade CFM

## 🔧 Configurações

### WhatsApp

Atualize o número do WhatsApp em:
- `components/Header.tsx`
- `components/Footer.tsx`
- `components/WhatsAppButton.tsx`
- Todas as páginas com CTAs

Formato: `5521999999999` (código do país + DDD + número)

### Google Analytics

Adicione seu ID do GA4 em `app/layout.tsx`:

```typescript
// Adicionar script do Google Analytics
```

### SEO

Atualize `app/layout.tsx` com:
- URL do site
- Imagem Open Graph
- Informações da empresa

## 📊 Métricas

### Core Web Vitals (Metas)

- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

### Lighthouse (Metas)

- Performance: > 90
- SEO: > 95
- Accessibility: > 90
- Best Practices: > 90

## 🔒 Segurança

- HTTPS obrigatório
- Headers de segurança configurados
- Formulários com validação
- Proteção contra XSS e CSRF

## 📱 Responsividade

O site é 100% responsivo:
- Mobile-first design
- Breakpoints: 640px, 768px, 1024px, 1280px
- Testado em iOS e Android

## 🤝 Suporte

Para dúvidas ou problemas:
- Email: contato@medgm.com.br
- WhatsApp: (21) 99999-9999

## 📄 Licença

© 2026 MedGM. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para construir a era de ouro da medicina**
