import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";

export default function BlogPreview() {
  const articles = [
    {
      slug: "marketing-medico-guia-completo",
      title: "Marketing Médico: O Guia Definitivo para 2026",
      category: "Marketing Médico",
      excerpt:
        "Descubra tudo sobre marketing médico em 2026: do que o CFM permite aos 7 canais mais eficazes para atrair pacientes.",
      readTime: 15,
    },
    {
      slug: "seo-para-medicos",
      title: "SEO para Médicos: Como Aparecer no Topo do Google",
      category: "SEO",
      excerpt:
        "Aprenda como otimizar seu site médico e aparecer nas primeiras posições do Google quando pacientes procuram sua especialidade.",
      readTime: 12,
    },
    {
      slug: "como-atrair-pacientes-particulares",
      title: "Como Atrair Pacientes Particulares pela Internet",
      category: "Marketing Médico",
      excerpt:
        "Estratégias práticas para posicionar sua clínica e atrair pacientes particulares de alto valor pela internet.",
      readTime: 10,
    },
  ];

  return (
    <section className="section-padding bg-neutral">
      <div className="container-custom">
        <SectionTitle title="Tudo que você precisa saber sobre marketing médico — em um só lugar" />

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {articles.map((article, index) => (
            <Link
              key={index}
              href={`/blog/${article.slug}`}
              className="card group"
            >
              <div className="mb-4">
                <span className="bg-gold text-dark px-3 py-1 rounded-full text-xs font-bold">
                  {article.category}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-gold transition-colors">
                {article.title}
              </h3>

              <p className="text-gray-600 mb-4 line-clamp-3">
                {article.excerpt}
              </p>

              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{article.readTime} min de leitura</span>
                </div>
                <ArrowRight
                  className="text-gold group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/blog" className="btn-primary">
            Ver Todos os Artigos
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
