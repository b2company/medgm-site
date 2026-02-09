"use client";

import { motion } from "framer-motion";

const methodSteps = [
  {
    number: "01",
    title: "Posicionamento",
    description:
      "Audiência, autoridade e diferenciação de mercado. Construímos a base que faz sua clínica ser encontrada e escolhida.",
  },
  {
    number: "02",
    title: "Captação",
    description:
      "Branding, conversão e otimização. Atraímos pacientes qualificados através dos canais certos, com mensagens que funcionam.",
  },
  {
    number: "03",
    title: "Agendamento",
    description:
      "Inteligência de dados e método de agendamento. Sua equipe recebe scripts validados que convertem leads em consultas.",
  },
  {
    number: "04",
    title: "Vendas",
    description:
      "Business intelligence, campanhas, precificação e experiência do cliente. Fechamos o ciclo com previsibilidade e controle.",
  },
];

export default function ScientificMethod() {
  return (
    <section className="bg-dark py-12 md:py-20 lg:py-32 relative overflow-hidden">
      {/* Separador visual superior */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-dark to-[#0A0A0A] pointer-events-none"></div>

      <div className="container-custom relative z-10">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 leading-tight">
            Existe um método para que sua clínica nunca pare de ter pacientes.
          </h2>
          <p className="text-lg md:text-xl font-body text-gray-400">
            Se você não segui-lo, ela não vai sair do lugar.
          </p>
        </motion.div>

        {/* Grid 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {methodSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              <div className="bg-[#111] border border-white/10 rounded-2xl p-10 hover:border-gold/40 transition-all duration-500 h-full hover:shadow-xl hover:shadow-gold/5">
                {/* Número grande */}
                <div className="text-8xl font-display font-bold text-gold mb-6 opacity-90 group-hover:opacity-100 transition-opacity">
                  {step.number}
                </div>

                {/* Linha decorativa */}
                <div className="h-px w-16 bg-gold/30 mb-4 group-hover:w-24 transition-all duration-300"></div>

                {/* Título */}
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 group-hover:text-gold-light transition-colors">
                  {step.title}
                </h3>

                {/* Descrição */}
                <p className="text-base md:text-lg font-body text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Separador visual inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
    </section>
  );
}
