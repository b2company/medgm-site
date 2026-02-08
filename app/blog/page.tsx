"use client";

import { useState } from "react";
import Link from "next/link";
import { Clock, ArrowRight, Search } from "lucide-react";
import { getAllPosts, getAllCategories } from "@/lib/blog";

export default function Blog() {
  const allPosts = getAllPosts();
  const categories = getAllCategories();

  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = allPosts.filter((post) => {
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
      <section className="bg-dark text-white pt-32 pb-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Blog <span className="text-gold">MedGM</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Tudo sobre marketing médico, SEO, gestão comercial e como atrair
              mais pacientes para sua clínica.
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
              {filteredPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="card group"
                >
                  <div className="mb-4">
                    <span className="bg-gold text-dark px-3 py-1 rounded-full text-xs font-bold">
                      {post.category}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold mb-3 group-hover:text-gold transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      <span>{post.readingTime}</span>
                    </div>
                    <ArrowRight
                      className="text-gold group-hover:translate-x-1 transition-transform"
                      size={20}
                    />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
