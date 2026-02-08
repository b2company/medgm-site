# 🚀 Guia de Deploy do Site MedGM

## Passo 1: Preparar o Projeto

### 1.1 Inicializar Git

```bash
cd /Users/odavi.feitosa/Desktop/medgm-site
git init
git add .
git commit -m "Initial commit: MedGM website"
```

### 1.2 Criar Repositório no GitHub

1. Acesse [github.com](https://github.com)
2. Clique em **New Repository**
3. Nome: `medgm-site`
4. Descrição: "Site institucional MedGM - Consultoria de Marketing Médico"
5. **Público** ou **Privado** (sua escolha)
6. **NÃO** marque "Initialize with README"
7. Clique em **Create Repository**

### 1.3 Conectar Local ao GitHub

```bash
# Substitua SEU-USUARIO pelo seu usuário do GitHub
git remote add origin https://github.com/SEU-USUARIO/medgm-site.git
git branch -M main
git push -u origin main
```

## Passo 2: Deploy na Vercel (Recomendado)

### 2.1 Criar Conta na Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Clique em **Sign Up**
3. Faça login com sua conta do GitHub

### 2.2 Importar Projeto

1. No dashboard da Vercel, clique em **Add New Project**
2. Selecione **Import Git Repository**
3. Escolha o repositório `medgm-site`
4. Clique em **Import**

### 2.3 Configurar Deploy

**Framework Preset:** Next.js (detectado automaticamente)

**Build Command:** `npm run build`

**Output Directory:** `.next` (padrão)

**Install Command:** `npm install`

**Environment Variables (Opcional):**
```
SITE_URL=https://seudominio.com.br
```

### 2.4 Deploy

1. Clique em **Deploy**
2. Aguarde 2-5 minutos
3. Seu site estará no ar em: `https://medgm-site.vercel.app`

## Passo 3: Configurar Domínio Personalizado

### 3.1 Comprar Domínio

Recomendações:
- [Registro.br](https://registro.br) (domínios .br)
- [GoDaddy](https://godaddy.com)
- [Namecheap](https://namecheap.com)

### 3.2 Conectar Domínio na Vercel

1. No dashboard do projeto, vá em **Settings** > **Domains**
2. Adicione seu domínio: `medgm.com.br`
3. Siga as instruções para configurar DNS

**Opção A - Nameservers (Recomendado):**
```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

**Opção B - Registro A:**
```
Tipo: A
Nome: @
Valor: 76.76.21.21
```

```
Tipo: CNAME
Nome: www
Valor: cname.vercel-dns.com
```

### 3.3 Aguardar Propagação

- DNS pode levar de 10 minutos a 48 horas para propagar
- Verifique em: [dnschecker.org](https://dnschecker.org)

## Passo 4: Configurações Finais

### 4.1 Atualizar Números de Contato

Edite os arquivos:
- `components/Header.tsx` (linha do WhatsApp)
- `components/Footer.tsx` (telefone, email)
- `components/WhatsAppButton.tsx` (link do WhatsApp)

### 4.2 Adicionar Google Analytics

1. Crie uma propriedade no [Google Analytics](https://analytics.google.com)
2. Copie o ID (formato: `G-XXXXXXXXXX`)
3. Adicione em `app/layout.tsx`:

```typescript
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
  `}
</Script>
```

4. Adicione variável de ambiente na Vercel:
   - `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX`

### 4.3 Configurar Google Search Console

1. Acesse [search.google.com/search-console](https://search.google.com/search-console)
2. Adicione sua propriedade: `medgm.com.br`
3. Verifique com método DNS ou HTML
4. Envie o sitemap: `https://medgm.com.br/sitemap.xml`

### 4.4 Adicionar Imagens

Crie as imagens necessárias em `public/`:
- `/favicon.ico` (32x32px)
- `/og-image.jpg` (1200x630px - para redes sociais)
- `/blog/default.jpg` (imagem padrão para artigos)

## Passo 5: SEO e Performance

### 5.1 Verificar Core Web Vitals

```bash
# Instalar Lighthouse
npm install -g lighthouse

# Rodar auditoria
lighthouse https://seusite.com.br --view
```

### 5.2 Comprimir Imagens

Use ferramentas online:
- [TinyPNG](https://tinypng.com)
- [Squoosh](https://squoosh.app)

### 5.3 Testar Responsividade

Teste em:
- Chrome DevTools (F12 > Toggle device toolbar)
- Dispositivos reais (iPhone, Android)

## Passo 6: Manutenção e Atualizações

### Atualizar Conteúdo

```bash
# Editar arquivos localmente
# Fazer commit
git add .
git commit -m "Atualização de conteúdo"
git push

# Vercel faz deploy automático!
```

### Adicionar Novo Artigo

1. Crie arquivo em `content/blog/novo-artigo.mdx`
2. Adicione frontmatter completo
3. Escreva o conteúdo
4. Commit e push
5. Deploy automático

## 🎯 Checklist Pós-Deploy

- [ ] Site acessível no domínio
- [ ] HTTPS funcionando (cadeado verde)
- [ ] Todas as páginas carregando
- [ ] Links do WhatsApp funcionando
- [ ] Formulário de contato funcionando
- [ ] Blog com artigos visíveis
- [ ] Google Analytics rastreando
- [ ] Sitemap enviado ao Google
- [ ] Site responsivo (mobile)
- [ ] Core Web Vitals > 90
- [ ] Lighthouse Score > 90

## 🆘 Problemas Comuns

### Site não carrega

- Verifique build logs na Vercel
- Confira se todas as dependências estão em `package.json`
- Teste localmente: `npm run build && npm start`

### Erro 404 em páginas

- Verifique se os arquivos estão em `app/` (não `pages/`)
- Confirme nomes dos arquivos (case-sensitive)

### Imagens não aparecem

- Imagens devem estar em `public/`
- Referências sem `/public` (ex: `/blog/image.jpg`, não `/public/blog/image.jpg`)

### Blog vazio

- Verifique se há arquivos `.mdx` em `content/blog/`
- Confirme frontmatter completo em cada artigo

## 📞 Suporte

Dúvidas?
- Documentação Next.js: [nextjs.org/docs](https://nextjs.org/docs)
- Documentação Vercel: [vercel.com/docs](https://vercel.com/docs)
- Suporte MedGM: contato@medgm.com.br

---

**Boa sorte com o lançamento! 🚀**
