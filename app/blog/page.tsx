import { getAllPosts, getAllCategories } from "@/lib/blog";
import BlogClient from "@/components/BlogClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog MedGM",
  description:
    "Artigos, guias e dicas sobre marketing médico, SEO para clínicas, gestão comercial e como atrair mais pacientes. Conteúdo gratuito da MedGM.",
};

export default function Blog() {
  const allPosts = getAllPosts();
  const categories = getAllCategories();

  return <BlogClient posts={allPosts} categories={categories} />;
}
