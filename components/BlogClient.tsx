"use client";

import { useState } from "react";
import Link from "next/link";
import { Clock, ArrowRight, Search } from "lucide-react";
import type { BlogPost } from "@/lib/blog";

interface BlogClientProps {
  posts: BlogPost[];
  categories: string[];
}

export default function BlogClient({ posts, categories }: BlogClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-dark-deep via-dark to-dark-deeper text-white pt-32 pb-20 shadow-dark-inset overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-0"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display mb-6">
              Blog <span className="text-gold bg-gradient-to-r from-gold-dark via-gold to-gold-light bg-clip-text text-transparent">MedGM</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
              Conteúdo direto, sem enrolação. Marketing médico que funciona, estruturação comercial que gera resultado.
            </p>

            {/* Barra de Busca */}
            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Buscar artigos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pl-12 rounded-full text-dark focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categorias */}
      <section className="bg-neutral py-8 sticky top-20 z-30 border-b-2 border-gold">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === "all"
                  ? "bg-gold text-dark"
                  : "bg-white text-dark hover:bg-gold/20"
              }`}
            >
              Todos
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? "bg-gold text-dark"
                    : "bg-white text-dark hover:bg-gold/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Artigos */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">
                Nenhum artigo encontrado. Tente outra busca ou categoria.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group relative overflow-hidden rounded-[24px] bg-white transition-all duration-500 hover:scale-105"
                  style={{
                    border: "1px solid rgba(202, 170, 130, 0.2)",
                    boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 40px",
                  }}
                >
                  {/* Header com gradiente */}
                  <div
                    className="h-32 relative overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${
                        index % 3 === 0
                          ? 'rgba(202, 170, 130, 0.8), rgba(196, 160, 83, 0.9)'
                          : index % 3 === 1
                          ? 'rgba(25, 25, 25, 0.8), rgba(16, 16, 16, 0.9)'
                          : 'rgba(202, 170, 130, 0.6), rgba(25, 25, 25, 0.8)'
                      })`
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="bg-white/90 text-dark px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Conteúdo */}
                  <div className="p-6">
                    <h2 className="text-xl font-heading font-bold mb-3 group-hover:text-gold transition-colors duration-300 line-clamp-2 leading-tight">
                      {post.title}
                    </h2>

                    <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                      {post.description}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-200">
                      <div className="flex items-center gap-2">
                        <Clock size={16} className="text-gold" />
                        <span className="font-medium">{post.readingTime}</span>
                      </div>
                      <ArrowRight
                        className="text-gold group-hover:translate-x-2 transition-transform duration-300"
                        size={20}
                      />
                    </div>
                  </div>

                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-xl bg-gradient-to-br from-gold/10 to-transparent"></div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
