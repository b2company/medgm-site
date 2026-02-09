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
    <section className="bg-dark py-20 md:py-32 relative">
      {/* Textura sutil */}
      <div className="absolute inset-0 opacity-5"></div>

      <div className="container-custom relative z-10">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4 leading-tight">
            Existe um método para que sua clínica nunca pare de ter pacientes.
          </h2>
          <p className="text-xl md:text-2xl font-body text-gray-400">
            Se você não segui-lo, ela não vai sair do lugar.
          </p>
        </motion.div>

        {/* Grid 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-5xl mx-auto">
          {methodSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              <div className="bg-[#111] border border-white/10 rounded-2xl p-8 hover:border-gold/40 transition-all duration-500 h-full">
                {/* Número grande */}
                <div className="text-7xl font-display font-bold text-[#FFEBC3] mb-4 opacity-90">
                  {step.number}
                </div>

                {/* Título */}
                <h3 className="text-2xl font-display font-bold text-white mb-3">
                  {step.title}
                </h3>

                {/* Descrição */}
                <p className="text-base font-body text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
