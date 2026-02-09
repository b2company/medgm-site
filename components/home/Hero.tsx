"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-dark text-white min-h-[90vh] flex items-center pt-24 pb-16">
      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Qualificação no topo com tarja */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-12"
          >
            <div className="inline-block bg-gradient-to-r from-gold to-gold-light px-8 py-4 rounded-full border-2 border-gold-light shadow-gold-glow">
              <p className="text-dark font-body font-bold text-base md:text-lg tracking-wide uppercase">
                EXCLUSIVO PARA CLÍNICAS QUE FATURAM ACIMA DE R$ 100 MIL AO MÊS
              </p>
            </div>
          </motion.div>

          {/* Título principal */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-center mb-6 leading-[1.1]"
          >
            Tenha um time{" "}
            <span className="text-gold bg-gradient-to-r from-gold-dark via-gold to-gold-light bg-clip-text text-transparent">
              feito sob medida
            </span>{" "}
            para sua clínica
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl text-gray-300 mb-12 text-center font-body font-normal max-w-4xl mx-auto"
          >
            Assessoria completa de marketing e vendas para clínicas médicas que querem crescer de forma previsível
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <motion.a
              href="#form"
              className="bg-gold text-dark font-body font-bold text-lg uppercase px-12 py-5 rounded-full hover:bg-gold-light transition-all duration-300 inline-flex items-center gap-3 shadow-gold-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Quero mais informações
              <ArrowRight size={20} />
            </motion.a>

            <motion.a
              href="https://wa.me/5521999999999?text=Olá!%20Já%20quero%20contratar"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-gold text-gold font-body font-bold text-lg uppercase px-12 py-5 rounded-full hover:bg-gold hover:text-dark transition-all duration-300 inline-flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Já tomei essa decisão
            </motion.a>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-center"
          >
            <p className="text-gold font-display text-6xl md:text-7xl font-bold mb-2">
              R$ 47,3 Milhões
            </p>
            <p className="text-gray-400 font-body text-xl uppercase tracking-wide">
              Receita gerada para nossos clientes médicos
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
