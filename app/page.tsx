import Hero from "@/components/home/Hero";
import FormSteps from "@/components/home/FormSteps";
import ScientificMethod from "@/components/home/ScientificMethod";
import Services from "@/components/home/Services";
import Personalization from "@/components/home/Personalization";
import Credentials from "@/components/home/Credentials";
import Cases from "@/components/home/Cases";
import BlogPreview from "@/components/home/BlogPreview";
import FAQ from "@/components/home/FAQ";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <FormSteps />
      <ScientificMethod />
      <Services />
      <Personalization />
      <Credentials />
      <Cases />
      <BlogPreview />
      <FAQ />
      <FinalCTA />
    </>
  );
}
