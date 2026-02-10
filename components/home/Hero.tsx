"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative text-white min-h-screen overflow-hidden">
        {/* Background Desktop */}
        <div className="absolute inset-0 hidden lg:block">
          <Image
            src="/hero-desktop.webp"
            alt="Equipe MedGM"
            fill
            priority
            quality={100}
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Background Mobile */}
        <div className="absolute inset-0 lg:hidden">
          <Image
            src="/hero-mobile.webp"
            alt="Equipe MedGM"
            fill
            priority
            quality={100}
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Overlay escuro sutil */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Conteúdo */}
        <div className="relative z-10 min-h-screen flex flex-col justify-start pt-24 md:pt-32 lg:pt-36 pb-20 px-4">
          <div className="w-full max-w-7xl mx-auto">
            {/* Tarja NO TOPO - Centralizada */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center mb-8 md:mb-10"
            >
              <div className="relative px-4">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-gold to-transparent mb-2"></div>
                <div className="px-4 md:px-6 py-2">
                  <p className="text-gold font-body font-semibold text-xs md:text-sm tracking-[0.15em] uppercase leading-tight text-center">
                    EXCLUSIVO PARA CLÍNICAS QUE FATURAM ACIMA DE R$ 50 MIL/MÊS
                  </p>
                </div>
                <div className="h-px w-full bg-gradient-to-r from-transparent via-gold to-transparent mt-2"></div>
              </div>
            </motion.div>

            {/* Conteúdo de Texto */}
            <div className="w-full max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-light text-white mb-4 md:mb-5 leading-[1.15]"
              >
                Profissional da saúde não precisa aprender marketing.{" "}
                <span className="font-normal">
                  Precisa de quem faça por ele.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-base md:text-lg text-gray-200 mb-6 md:mb-8 font-body leading-relaxed"
              >
                Assessoria de growth exclusiva para clínicas médicas. Desde 2021 estruturando o crescimento de mais de 250 projetos na área da saúde.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex justify-center lg:justify-start"
              >
                <motion.a
                  href="/contato"
                  className="bg-gold text-dark font-body font-bold text-sm px-8 py-3 rounded-full hover:bg-gold-light transition-all inline-flex items-center justify-center shadow-gold-glow"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Agendar diagnóstico gratuito
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Gradiente divisor */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#0A0A0A] pointer-events-none z-20"></div>
      </section>

      {/* Stats Section */}
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
    <section className="bg-[#0A0A0A] border-t border-gold/20 border-b border-gold/20 py-16 md:py-20">
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
