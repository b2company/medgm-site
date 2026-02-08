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
      <section className="bg-neutral pt-24 pb-6">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-gold hover:underline mb-4"
            >
              <ArrowLeft size={20} />
              Voltar para o blog
            </Link>
            <div className="text-sm text-gray-600">
              <Link href="/" className="hover:text-gold">
                Home
              </Link>
              {" > "}
              <Link href="/blog" className="hover:text-gold">
                Blog
              </Link>
              {" > "}
              <span className="text-dark">{post.category}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Header */}
      <section className="bg-neutral pb-12">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="bg-gold text-dark px-4 py-2 rounded-full text-sm font-bold">
                {post.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-gray-700 mb-6">{post.description}</p>

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
      <article className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3 prose-p:leading-relaxed prose-p:text-gray-700 prose-strong:text-gold prose-a:text-gold prose-a:no-underline hover:prose-a:underline prose-ul:my-6 prose-li:my-2">
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
      <section className="section-padding bg-neutral">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">
            Artigos Relacionados
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {getAllPosts()
              .filter((p) => p.slug !== post.slug && p.category === post.category)
              .slice(0, 3)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="card group"
                >
                  <span className="bg-gold text-dark px-3 py-1 rounded-full text-xs font-bold mb-4 inline-block">
                    {relatedPost.category}
                  </span>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-gold transition-colors line-clamp-2">
                    {relatedPost.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {relatedPost.description}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
