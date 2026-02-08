"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative bg-gradient-to-br from-dark-deep via-dark to-dark-deeper text-white min-h-screen flex items-center pt-20 shadow-dark-inset">
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      <div className="container-custom py-20 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif mb-8 leading-tight"
          >
            Sua clínica merece mais do que likes.{" "}
            <span className="text-gold bg-gradient-to-r from-gold-dark via-gold to-gold-light bg-clip-text text-transparent">
              Merece a era de ouro.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed font-light max-w-3xl mx-auto"
          >
            A MedGM é a consultoria que combina marketing de alto nível e
            estruturação comercial para médicos que querem parar de depender de
            indicações e construir uma agenda previsível, cheia de pacientes
            ideais.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.a
              href="https://wa.me/5521999999999?text=Olá! Quero agendar meu diagnóstico gratuito"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-10 py-5 font-black uppercase tracking-wide"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Quero Meu Diagnóstico Gratuito
              <ArrowRight size={20} />
            </motion.a>

            <motion.button
              onClick={scrollToContent}
              className="btn-secondary text-lg px-10 py-5 font-bold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Veja Como Funciona
              <ArrowDown size={20} />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="drop-shadow-[0_0_10px_rgba(202,170,130,0.5)]"
        >
          <ArrowDown className="text-gold" size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
}
