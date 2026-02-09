"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const stats = [
  { number: "+250", label: "Projetos na área da saúde" },
  { number: "+5", label: "Anos de mercado" },
  { number: "+12", label: "Especialidades atendidas" },
  { number: "+13", label: "Estados do Brasil" },
];

export default function Hero() {
  return (
    <section className="relative bg-[#0A0A0A] text-white min-h-screen flex flex-col justify-center pt-24 pb-12">
      {/* Glow radial dourado */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Tarja superior centralizada */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-10"
          >
            <div className="relative">
              {/* Linha superior */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-gold to-transparent mb-3"></div>

              {/* Tarja */}
              <div className="px-6 py-2">
                <p className="text-gold font-body font-semibold text-xs md:text-sm tracking-[0.2em] uppercase">
                  EXCLUSIVO PARA CLÍNICAS QUE FATURAM ACIMA DE R$ 50 MIL POR MÊS
                </p>
              </div>

              {/* Linha inferior */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-gold to-transparent mt-3"></div>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-white mb-6 leading-[1.1] tracking-tight"
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
            className="text-lg md:text-xl text-[#888] mb-12 font-body font-light leading-relaxed max-w-3xl mx-auto"
          >
            Assessoria de growth exclusiva para clínicas médicas. Desde 2021 estruturando o crescimento de mais de 250 projetos na área da saúde.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.a
              href="#form"
              className="bg-transparent border-2 border-gold text-gold font-body font-semibold text-base px-10 py-4 rounded-full hover:bg-gold/10 transition-all duration-300 inline-flex items-center gap-3"
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
              className="bg-gold text-dark font-body font-bold text-base px-10 py-4 rounded-full hover:bg-gold-light transition-all duration-300 inline-flex items-center gap-3 shadow-gold-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Agendar diagnóstico gratuito
            </motion.a>
          </motion.div>

          {/* Stats integrados no Hero */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="pt-12 border-t border-gold/10"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                  className="text-center group"
                >
                  <p className="text-3xl md:text-4xl font-display font-bold text-gold mb-2 group-hover:text-gold-light transition-colors">
                    {stat.number}
                  </p>
                  <div className="h-px w-8 bg-gold/30 mx-auto mb-2"></div>
                  <p className="text-xs md:text-sm font-body uppercase tracking-[0.15em] text-gray-400">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
