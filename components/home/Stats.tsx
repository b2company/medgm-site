"use client";

import { motion } from "framer-motion";

const stats = [
  { number: "+250", label: "Projetos na área da saúde" },
  { number: "+5", label: "Anos de mercado" },
  { number: "+12", label: "Especialidades atendidas" },
  { number: "+13", label: "Estados do Brasil" },
];

export default function Stats() {
  return (
    <section className="bg-[#111] py-16 md:py-20 border-t border-b border-gold/10 relative">
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/50 via-transparent to-dark/50 pointer-events-none"></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <p className="text-5xl md:text-6xl font-display font-bold text-gold mb-3 group-hover:text-gold-light transition-colors">
                {stat.number}
              </p>
              <div className="h-px w-12 bg-gold/30 mx-auto mb-3"></div>
              <p className="text-xs md:text-sm font-body uppercase tracking-[0.15em] text-gray-400 group-hover:text-gray-300 transition-colors">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
