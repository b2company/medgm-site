"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function Personalization() {
  return (
    <section className="bg-dark py-20 md:py-32 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Ícone */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gold/10 rounded-full mb-8"
          >
            <Sparkles className="text-gold" size={40} />
          </motion.div>

          {/* Título */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight"
          >
            Montamos o marketing{" "}
            <span className="text-gold">do seu negócio conforme</span> a
            necessidade dele
          </motion.h2>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl text-gray-300 font-body mb-12 max-w-3xl mx-auto"
          >
            Você pode personalizar o plano que mais{" "}
            <span className="text-gold font-bold">
              se adeque ao seu momento
            </span>
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="#form"
              className="inline-flex items-center gap-3 bg-gold text-dark font-body font-bold text-xl uppercase px-16 py-6 rounded-full hover:bg-gold-light transition-all duration-300 shadow-gold-glow"
            >
              Agendar uma Reunião
            </a>
          </motion.div>

          {/* Linha decorativa */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-20 h-px bg-gradient-to-r from-transparent via-gold to-transparent"
          ></motion.div>
        </div>
      </div>
    </section>
  );
}
