"use client";

import { motion } from "framer-motion";
import { Target, Users, DollarSign, Repeat } from "lucide-react";

const methodSteps = [
  {
    number: "01",
    icon: Target,
    title: "Adquirir Pacientes Qualificados",
    description:
      "Atrair pacientes ideais através de Google Ads, SEO e redes sociais com mensagens que convertem.",
  },
  {
    number: "02",
    icon: Users,
    title: "Construir Confiança e Interesse",
    description:
      "Nutrir leads com conteúdo educativo, depoimentos e autoridade para transformar curiosidade em decisão.",
  },
  {
    number: "03",
    icon: DollarSign,
    title: "Converter em Consultas",
    description:
      "Treinar equipe comercial e criar scripts que convertem 40%+ dos leads em agendamentos confirmados.",
  },
  {
    number: "04",
    icon: Repeat,
    title: "Fidelizar e Gerar Recorrência",
    description:
      "Implementar sistema de follow-up e retenção para que pacientes retornem e indiquem novos pacientes.",
  },
];

export default function ScientificMethod() {
  return (
    <section className="bg-dark py-20 md:py-32 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight max-w-5xl mx-auto">
            Existe um <span className="text-gold">método científico</span> para
            que sua clínica{" "}
            <span className="text-gold">nunca pare de ter pacientes</span>
          </h2>
          <p className="text-2xl text-gray-400 font-body max-w-3xl mx-auto">
            Se você não segui-lo, ela não vai sair do lugar
          </p>
        </motion.div>

        {/* 4 Etapas */}
        <div className="max-w-6xl mx-auto mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {methodSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative group"
              >
                {/* Card */}
                <div className="bg-dark-deep border-2 border-gold/20 rounded-2xl p-8 hover:border-gold/60 transition-all duration-500 h-full relative overflow-hidden">
                  {/* Número de fundo */}
                  <div className="absolute -top-8 -right-8 text-gold/10 font-display text-9xl font-bold group-hover:text-gold/20 transition-all duration-500">
                    {step.number}
                  </div>

                  <div className="relative z-10">
                    {/* Ícone */}
                    <div className="bg-gold/10 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-all duration-300">
                      <step.icon className="text-gold" size={36} />
                    </div>

                    {/* Título */}
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                      {step.title}
                    </h3>

                    {/* Descrição */}
                    <p className="text-gray-400 font-body text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Linha conectora (apenas nos primeiros 3) */}
                  {index < 3 && (
                    <div className="hidden md:block absolute -bottom-4 left-1/2 w-px h-8 bg-gradient-to-b from-gold/60 to-transparent"></div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <a
            href="#form"
            className="inline-flex items-center gap-3 bg-gold text-dark font-body font-bold text-xl uppercase px-16 py-6 rounded-full hover:bg-gold-light transition-all duration-300 shadow-gold-glow"
          >
            Impulsionar Meu Marketing Médico
          </a>
        </motion.div>
      </div>
    </section>
  );
}
