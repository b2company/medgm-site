"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      {/* Hero Section - Primeira Dobra */}
      <section className="relative bg-[#0A0A0A] text-white min-h-screen flex flex-col justify-center pt-20 pb-0 px-4 overflow-hidden">
        {/* Glow radial dourado */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] max-w-[200vw] bg-gold/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container-custom relative z-10">
          {/* Tarja NO TOPO - acima de tudo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-12 md:mb-16"
          >
            <div className="relative px-2">
              {/* Linha superior */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-gold to-transparent mb-2"></div>

              {/* Tarja */}
              <div className="px-2 md:px-4 py-1.5">
                <p className="text-gold font-body font-semibold text-[9px] md:text-xs tracking-[0.15em] uppercase leading-tight text-center">
                  EXCLUSIVO PARA CLÍNICAS QUE FATURAM ACIMA DE R$ 50 MIL/MÊS
                </p>
              </div>

              {/* Linha inferior */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-gold to-transparent mt-2"></div>
            </div>
          </motion.div>

          {/* Grid: 40% texto (esquerda) + 60% imagem (direita) */}
          <div className="grid lg:grid-cols-[40%_60%] gap-8 items-center max-w-7xl mx-auto">

            {/* Coluna Esquerda - Conteúdo (40% - ALINHADO À ESQUERDA) */}
            <div className="text-center lg:text-left">
              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-3xl md:text-4xl lg:text-5xl font-display font-light text-white mb-6 leading-[1.2] tracking-tight"
              >
                Profissional da saúde não precisa aprender marketing.{" "}
                <span className="text-white">
                  Precisa de quem faça por ele.
                </span>
              </motion.h1>

              {/* Sub-headline */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-base md:text-lg text-[#888] mb-10 font-body font-light leading-relaxed"
              >
                Assessoria de growth exclusiva para clínicas médicas. Desde 2021 estruturando o crescimento de mais de 250 projetos na área da saúde.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start items-center"
              >
                <motion.a
                  href="#form"
                  className="w-full sm:w-auto bg-transparent border-2 border-gold text-gold font-body font-semibold text-sm md:text-base px-8 py-3 rounded-full hover:bg-gold/10 transition-all duration-300 inline-flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Quero saber mais
                  <ArrowRight size={18} />
                </motion.a>

                <motion.a
                  href="/contato"
                  className="w-full sm:w-auto bg-gold text-dark font-body font-bold text-sm md:text-base px-8 py-3 rounded-full hover:bg-gold-light transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-gold-glow"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Agendar diagnóstico gratuito
                </motion.a>
              </motion.div>
            </div>

            {/* Coluna Direita - Imagem GIGANTE (60%) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full h-[900px]">
                <Image
                  src="/team-medgm.webp"
                  alt="Time MedGM"
                  fill
                  priority
                  className="object-contain object-center"
                />
              </div>
            </motion.div>

          </div>
        </div>

        {/* Divisor com gradiente suave na parte inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#0A0A0A] pointer-events-none z-20"></div>
      </section>

      {/* Stats Section - ABAIXO da primeira dobra */}
      <StatsSection />
    </>
  );
}

// Componente Stats separado
function StatsSection() {
  const stats = [
    { number: "+250", label: "Projetos na área da saúde" },
    { number: "+5", label: "Anos de mercado" },
    { number: "+12", label: "Especialidades atendidas" },
    { number: "+13", label: "Estados do Brasil" },
  ];

  return (
    <section className="bg-[#0A0A0A] border-t border-gold/20 py-16 md:py-20">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <p className="text-3xl md:text-5xl font-display font-bold text-gold mb-3 group-hover:text-gold-light transition-colors">
                  {stat.number}
                </p>
                <div className="h-px w-12 bg-gold/30 mx-auto mb-3"></div>
                <p className="text-xs md:text-sm font-body uppercase tracking-[0.15em] text-gray-400 leading-tight">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
