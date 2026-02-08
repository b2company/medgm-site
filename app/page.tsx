import Hero from "@/components/home/Hero";
import ProofBar from "@/components/home/ProofBar";
import Problem from "@/components/home/Problem";
import Method from "@/components/home/Method";
import Services from "@/components/home/Services";
import Cases from "@/components/home/Cases";
import BlogPreview from "@/components/home/BlogPreview";
import FAQ from "@/components/home/FAQ";
import FinalCTA from "@/components/home/FinalCTA";
import Stats from "@/components/home/Stats";
import DecorativeLine from "@/components/DecorativeLine";

export default function Home() {
  return (
    <>
      <Hero />
      <ProofBar />
      <DecorativeLine />
      <Stats />
      <DecorativeLine />
      <Problem />
      <Method />
      <DecorativeLine />
      <Services />
      <DecorativeLine />
      <Cases />
      <BlogPreview />
      <FAQ />
      <FinalCTA />
    </>
  );
}
