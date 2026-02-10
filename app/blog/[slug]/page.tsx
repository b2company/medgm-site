import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { Clock, Calendar, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import CTABox from "@/components/CTABox";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Artigo não encontrado",
    };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const shareUrl = `https://medgm.com.br/blog/${post.slug}`;
  const shareText = post.title;

  return (
    <>
      {/* Breadcrumb */}
      <section className="bg-white pt-24 pb-6 border-b border-gray-200">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-gold hover:gap-3 font-semibold transition-all duration-300 mb-4"
            >
              <ArrowLeft size={20} />
              Voltar para o blog
            </Link>
            <div className="text-sm text-gray-500 flex items-center gap-2">
              <Link href="/" className="hover:text-gold transition-colors">
                Home
              </Link>
              <span className="text-gray-400">/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">
                Blog
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-gold font-semibold">{post.category}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Header */}
      <section className="relative bg-gradient-to-br from-dark-deep via-dark to-dark-deeper text-white pb-16 pt-8">
        <div className="absolute inset-0 bg-black/20 z-0"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <span className="bg-gold text-dark px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
                {post.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-8 leading-tight">
              {post.title}
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed font-light">{post.description}</p>

            <div className="flex flex-wrap gap-6 text-sm text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-gold" />
                <span>{new Date(post.date).toLocaleDateString("pt-BR")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-gold" />
                <span>{post.readingTime}</span>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="flex gap-3">
              <span className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                <Share2 size={18} className="text-gold" />
                Compartilhar:
              </span>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(
                  shareText + " - " + shareUrl
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#25D366] text-white rounded-lg hover:opacity-90 transition text-sm font-semibold"
              >
                WhatsApp
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                  shareUrl
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#0077B5] text-white rounded-lg hover:opacity-90 transition text-sm font-semibold"
              >
                LinkedIn
              </a>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  shareText
                )}&url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-black text-white rounded-lg hover:opacity-90 transition text-sm font-semibold"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto px-4">
            {/* Linha decorativa */}
            <div className="h-1 w-24 bg-gradient-to-r from-gold-dark via-gold to-gold-light mb-16 rounded-full"></div>

            <div className="prose prose-xl max-w-none
              prose-headings:font-display prose-headings:font-bold prose-headings:text-dark prose-headings:tracking-tight

              prose-h1:text-4xl prose-h1:md:text-5xl prose-h1:mb-8 prose-h1:leading-tight

              prose-h2:text-3xl prose-h2:md:text-4xl prose-h2:mt-20 prose-h2:mb-8 prose-h2:text-dark prose-h2:border-b-2 prose-h2:border-gold/30 prose-h2:pb-6 prose-h2:leading-snug
              prose-h2:before:content-[''] prose-h2:before:block prose-h2:before:w-12 prose-h2:before:h-1 prose-h2:before:bg-gold prose-h2:before:mb-4 prose-h2:before:rounded-full

              prose-h3:text-2xl prose-h3:md:text-3xl prose-h3:mt-16 prose-h3:mb-6 prose-h3:text-dark prose-h3:font-bold prose-h3:leading-snug

              prose-h4:text-xl prose-h4:md:text-2xl prose-h4:mt-12 prose-h4:mb-5 prose-h4:text-gray-800 prose-h4:font-semibold

              prose-p:leading-[1.9] prose-p:text-gray-800 prose-p:text-[1.125rem] prose-p:mb-8 prose-p:font-normal

              prose-strong:text-dark prose-strong:font-bold prose-strong:bg-gold/10 prose-strong:px-1 prose-strong:rounded

              prose-em:text-gray-700 prose-em:italic prose-em:font-medium

              prose-a:text-gold prose-a:font-semibold prose-a:no-underline prose-a:border-b-2 prose-a:border-gold/30 hover:prose-a:border-gold prose-a:transition-all prose-a:duration-300

              prose-ul:my-10 prose-ul:space-y-4 prose-ul:pl-6
              prose-ol:my-10 prose-ol:space-y-4 prose-ol:pl-6

              prose-li:text-gray-800 prose-li:text-[1.125rem] prose-li:leading-[1.8] prose-li:pl-3
              prose-li:marker:text-gold prose-li:marker:font-bold prose-li:marker:text-xl

              prose-ul:prose-li:before:content-[''] prose-ul:prose-li:before:absolute prose-ul:prose-li:before:left-0 prose-ul:prose-li:before:top-[0.6em] prose-ul:prose-li:before:w-2 prose-ul:prose-li:before:h-2 prose-ul:prose-li:before:bg-gold prose-ul:prose-li:before:rounded-full prose-ul:prose-li:relative

              prose-blockquote:border-l-4 prose-blockquote:border-gold prose-blockquote:bg-gradient-to-r prose-blockquote:from-neutral prose-blockquote:to-white prose-blockquote:py-8 prose-blockquote:px-8 prose-blockquote:my-12 prose-blockquote:italic prose-blockquote:text-gray-800 prose-blockquote:text-xl prose-blockquote:rounded-r-xl prose-blockquote:shadow-md

              prose-code:text-gold prose-code:bg-neutral/80 prose-code:px-2.5 prose-code:py-1.5 prose-code:rounded-md prose-code:text-base prose-code:font-mono prose-code:font-medium prose-code:before:content-[''] prose-code:after:content-[''] prose-code:border prose-code:border-gold/20

              prose-pre:bg-dark prose-pre:text-white prose-pre:p-8 prose-pre:rounded-2xl prose-pre:my-12 prose-pre:overflow-x-auto prose-pre:shadow-xl prose-pre:border prose-pre:border-gold/20

              prose-img:rounded-2xl prose-img:shadow-2xl prose-img:my-12 prose-img:border prose-img:border-gray-200

              prose-hr:border-gold/30 prose-hr:my-16 prose-hr:border-t-2

              prose-table:my-12 prose-table:border-collapse prose-table:w-full
              prose-th:bg-gold prose-th:text-dark prose-th:font-bold prose-th:py-4 prose-th:px-6 prose-th:text-left prose-th:border prose-th:border-gold-dark
              prose-td:py-4 prose-td:px-6 prose-td:border prose-td:border-gray-300 prose-td:text-gray-800
              prose-tr:even:bg-neutral/30
            ">
              <MDXRemote source={post.content} />
            </div>

            {/* CTA Inline */}
            <div className="my-16">
              <CTABox
                title="Quer implementar isso na sua clínica?"
                description="Agende um diagnóstico gratuito e descubra como a MedGM pode ajudar você a colocar essas estratégias em prática."
                buttonText="Falar com a MedGM"
                dark
              />
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-16 md:py-24 bg-neutral">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
              Continue{" "}
              <span className="text-gold bg-gradient-to-r from-gold-dark via-gold to-gold-light bg-clip-text text-transparent">
                Aprendendo
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Artigos relacionados que vão te ajudar a dominar marketing médico
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {getAllPosts()
              .filter((p) => p.slug !== post.slug && p.category === post.category)
              .slice(0, 3)
              .map((relatedPost, index) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group relative overflow-hidden rounded-[24px] bg-white transition-all duration-500 hover:scale-105"
                  style={{
                    border: "1px solid rgba(202, 170, 130, 0.2)",
                    boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 40px",
                  }}
                >
                  {/* Header com gradiente */}
                  <div
                    className="h-24 relative overflow-hidden flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${
                        index % 2 === 0
                          ? 'rgba(202, 170, 130, 0.8), rgba(196, 160, 83, 0.9)'
                          : 'rgba(25, 25, 25, 0.8), rgba(16, 16, 16, 0.9)'
                      })`
                    }}
                  >
                    <span className="bg-white/90 text-dark px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide">
                      {relatedPost.category}
                    </span>
                  </div>

                  {/* Conteúdo */}
                  <div className="p-6">
                    <h3 className="text-lg font-heading font-bold mb-3 group-hover:text-gold transition-colors duration-300 line-clamp-2 leading-tight">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-3 leading-relaxed text-sm">
                      {relatedPost.description}
                    </p>
                  </div>

                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-xl bg-gradient-to-br from-gold/10 to-transparent"></div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
