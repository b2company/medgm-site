"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative bg-gradient-to-b from-[#0A0A0A] to-dark py-20 md:py-32 overflow-hidden">
      {/* Gradiente dourado sutil */}
      <div className="absolute inset-0 bg-gradient-to-t from-gold/5 to-transparent pointer-events-none"></div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight"
          >
            Sua clínica pode mais. Vamos provar.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl font-body text-gray-300 mb-12 leading-relaxed"
          >
            Agende seu diagnóstico gratuito e descubra o caminho que gera o maior retorno no menor tempo possível.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="https://wa.me/5521965116943?text=Olá!%20Quero%20agendar%20diagnóstico%20gratuito"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gold text-dark font-body font-bold text-xl uppercase px-16 py-6 rounded-full hover:bg-gold-light transition-all duration-300 shadow-gold-glow"
            >
              Agendar Diagnóstico Gratuito
              <ArrowRight size={24} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
