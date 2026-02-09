"use client";

import { motion } from "framer-motion";

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
    <section className="bg-dark py-20 md:py-32">
      <div className="container-custom">
        <div className="max-w-[680px] mx-auto text-center">
          {/* Título */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-12"
          >
            Se isso soa familiar, você não está sozinho.
          </motion.h2>

          {/* Lista de dores */}
          <div className="space-y-4 mb-12">
            {pains.map((pain, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{
                  opacity: 0.5 + (index * 0.1), // Gradiente de opacidade
                }}
                className="text-lg md:text-xl font-body text-gray-300 leading-relaxed"
              >
                {pain}
              </motion.div>
            ))}
          </div>

          {/* Frase de transição */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl font-body text-gray-400 mb-8 leading-relaxed"
          >
            83% dos profissionais de saúde relatam sintomas de burnout. A conta do marketing que não funciona não é só financeira. É física e mental.
          </motion.p>

          {/* Frase de virada */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-2xl md:text-3xl font-display font-semibold text-[#FFEBC3] leading-tight"
          >
            O problema não é você. O problema é estratégia genérica aplicada a um mercado específico.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
