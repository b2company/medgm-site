import Hero from "@/components/home/Hero";
import Problem from "@/components/home/Problem";
import Solution from "@/components/home/Solution";
import ScientificMethod from "@/components/home/ScientificMethod";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";
import Credentials from "@/components/home/Credentials";
import FAQ from "@/components/home/FAQ";
import FinalCTA from "@/components/home/FinalCTA";
import FormSteps from "@/components/home/FormSteps";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <ScientificMethod />
      <Services />
      <Testimonials />
      <Credentials />
      <FormSteps />
      <FAQ />
      <FinalCTA />
    </>
  );
}
