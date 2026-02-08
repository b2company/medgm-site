import Hero from "@/components/home/Hero";
import ProofBar from "@/components/home/ProofBar";
import Problem from "@/components/home/Problem";
import Method from "@/components/home/Method";
import Services from "@/components/home/Services";
import Cases from "@/components/home/Cases";
import BlogPreview from "@/components/home/BlogPreview";
import FAQ from "@/components/home/FAQ";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ProofBar />
      <Problem />
      <Method />
      <Services />
      <Cases />
      <BlogPreview />
      <FAQ />
      <FinalCTA />
    </>
  );
}
