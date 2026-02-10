"use client";

import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";
import CTASection from "@/components/CTASection";

const pains = [
  "Concorrência crescente no digital.",
  "Profissionais menos qualificados que vendem mais do que você.",
  "Dificuldade de construir audiência.",
  "Já passou por agências e nunca teve resultado expressivo.",
  "Muita energia e pouco resultado.",
  "A sensação de que \"quando faço sozinho, tenho mais resultados.\"",
];

export default function Problem() {
  return (
    <section className="bg-dark py-12 md:py-20 lg:py-32 relative overflow-hidden px-4">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-dark to-[#0A0A0A] pointer-events-none"></div>

      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Título */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-4xl font-display font-bold text-white mb-8 md:mb-16 text-center px-2"
          >
            Se isso soa familiar, você não está sozinho.
          </motion.h2>

          {/* Grid de dores */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-16">
            {pains.map((pain, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-[#111] border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-6 h-full hover:border-gold/30 transition-all duration-300 hover:shadow-lg hover:shadow-gold/10">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="flex-shrink-0 mt-0.5">
                      <AlertCircle className="text-gold/60 group-hover:text-gold transition-colors" size={20} />
                    </div>
                    <p className="text-sm md:text-base lg:text-lg font-body text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                      {pain}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Card de estatística 83% */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-br from-[#111] to-[#0A0A0A] border-2 border-gold/40 rounded-2xl md:rounded-3xl p-6 md:p-12 mb-8 md:mb-12 relative overflow-hidden"
          >
            {/* Glow effect */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gold/20 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <div className="mb-4 md:mb-6">
                <span className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-gold">
                  83%
                </span>
              </div>
              <p className="text-lg md:text-xl lg:text-2xl font-body text-white leading-relaxed px-2">
                dos profissionais de saúde relatam sintomas de <span className="text-gold font-semibold">burnout</span>.
              </p>
              <p className="text-base md:text-lg lg:text-xl font-body text-gray-400 mt-3 md:mt-4 leading-relaxed px-2">
                A conta do marketing que não funciona não é só financeira. É física e mental.
              </p>
            </div>
          </motion.div>

          {/* Frase de virada */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-block bg-gradient-to-r from-gold/10 to-gold-light/10 border border-gold/30 rounded-2xl px-8 md:px-12 py-6 md:py-8">
              <p className="text-2xl md:text-3xl lg:text-4xl font-display font-semibold text-gold-light leading-tight">
                O problema não é você. O problema é estratégia genérica aplicada a um mercado específico.
              </p>
            </div>
          </motion.div>

          {/* CTA */}
          <CTASection
            variant="minimal"
            buttonText="Receber Diagnóstico Gratuito"
            className="mt-12"
          />
        </div>
      </div>
    </section>
  );
}
