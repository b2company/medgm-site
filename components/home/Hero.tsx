"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-[#0A0A0A] text-white min-h-screen flex items-center pt-24 pb-16">
      {/* Glow radial dourado */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container-custom relative z-10">
        {/* Badge superior centralizado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-block bg-gradient-to-r from-gold to-gold-light px-8 py-4 rounded-full border-2 border-gold-light shadow-gold-glow">
            <p className="text-dark font-body font-bold text-sm md:text-base tracking-wide uppercase">
              EXCLUSIVO PARA CLÍNICAS QUE FATURAM ACIMA DE R$ 50 MIL POR MÊS
            </p>
          </div>
        </motion.div>

        {/* Grid de duas colunas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Coluna esquerda - Conteúdo */}
          <div className="text-center lg:text-left">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-light text-white mb-8 leading-[1.1] tracking-tight"
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
              className="text-lg md:text-xl text-[#888] mb-12 font-body font-light leading-relaxed"
            >
              Assessoria de growth exclusiva para clínicas médicas. Desde 2021 estruturando o crescimento de mais de 250 projetos na área da saúde.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center"
            >
              <motion.a
                href="#form"
                className="bg-transparent border-2 border-gold text-gold font-body font-semibold text-base md:text-lg px-12 py-5 rounded-full hover:bg-gold/10 transition-all duration-300 inline-flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Quero saber mais
                <ArrowRight size={20} />
              </motion.a>

              <motion.a
                href="https://wa.me/5521965116943?text=Olá!%20Quero%20agendar%20diagnóstico%20gratuito"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold text-dark font-body font-bold text-base md:text-lg px-12 py-5 rounded-full hover:bg-gold-light transition-all duration-300 inline-flex items-center gap-3 shadow-gold-glow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Agendar diagnóstico gratuito
              </motion.a>
            </motion.div>
          </div>

          {/* Coluna direita - Imagem dos fundadores */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-lg">
              <Image
                src="/fundadores.png"
                alt="Fundadores da MedGM"
                width={600}
                height={600}
                priority
                quality={100}
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
