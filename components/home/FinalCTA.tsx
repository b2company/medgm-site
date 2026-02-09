"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import WhatsAppLink from "@/components/WhatsAppLink";

export default function FinalCTA() {
  return (
    <section className="relative bg-gradient-to-b from-[#0A0A0A] to-dark py-12 md:py-20 lg:py-32 overflow-hidden px-4">
      {/* Gradiente dourado sutil */}
      <div className="absolute inset-0 bg-gradient-to-t from-gold/5 to-transparent pointer-events-none"></div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4 md:mb-6 leading-tight px-2"
          >
            Sua clínica pode mais. Vamos provar.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-xl lg:text-2xl font-body text-gray-300 mb-8 md:mb-12 leading-relaxed px-2"
          >
            Agende seu diagnóstico gratuito e descubra o caminho que gera o maior retorno no menor tempo possível.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="px-2"
          >
            <WhatsAppLink
              message="Olá! Quero agendar diagnóstico gratuito"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-gold text-dark font-body font-bold text-sm md:text-base lg:text-lg uppercase px-6 md:px-12 lg:px-16 py-4 md:py-5 lg:py-6 rounded-full hover:bg-gold-light transition-all duration-300 shadow-gold-glow"
            >
              Agendar Diagnóstico Gratuito
              <ArrowRight size={20} />
            </WhatsAppLink>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
