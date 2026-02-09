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
    <section className="bg-[#111] py-12 md:py-16 border-t border-b border-white/5">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <p className="text-4xl md:text-5xl font-display font-bold text-[#FFEBC3] mb-2">
                {stat.number}
              </p>
              <p className="text-xs md:text-sm font-body uppercase tracking-wider text-[#888]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
