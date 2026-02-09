"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  { text: "Estou recebendo pacientes do Google.", author: "Dra. Gabi Koeddermann" },
  { text: "Acabei de converter uma paciente no direct.", author: "Dra. Luiza Castro" },
  { text: "10 mil seguidores hoje, galera. 800 seguidores em 3 semanas.", author: "Paula Fernandes" },
  { text: "Saí de todas as reuniões com a cabeça girando.", author: "Kamila Andrade" },
];

const growthData = [
  { name: "Eduardo Leze", before: "13,3 mil", after: "29,8 mil", label: "seguidores" },
  { name: "Dr. Julio Gazolla", before: "5.509", after: "7.029", label: "seguidores" },
];

export default function Testimonials() {
  return (
    <section className="bg-dark py-20 md:py-32">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            O que nossos parceiros dizem
          </h2>
        </motion.div>

        {/* Depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#111] border border-white/10 rounded-2xl p-6 relative"
            >
              <Quote className="text-gold opacity-20 mb-4" size={32} />
              <p className="text-base md:text-lg font-body text-white mb-4 leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <p className="text-sm font-body font-semibold text-gold">
                {testimonial.author}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Dados de crescimento */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {growthData.map((data, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="bg-[#111] border border-gold/30 rounded-2xl p-8 text-center"
            >
              <p className="text-lg font-body text-white mb-4">{data.name}</p>
              <div className="flex items-center justify-center gap-4">
                <span className="text-2xl font-display text-gray-400">{data.before}</span>
                <span className="text-gold">→</span>
                <span className="text-2xl font-display text-gold font-bold">{data.after}</span>
              </div>
              <p className="text-sm font-body text-gray-400 mt-2">{data.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
