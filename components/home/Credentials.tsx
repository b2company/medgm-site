"use client";

import { motion } from "framer-motion";
import { Award, Shield, Zap } from "lucide-react";

const credentials = [
  {
    icon: Award,
    title: "Especialização em saúde",
    description:
      "+250 projetos exclusivamente na área da saúde. +12 especialidades médicas atendidas. Conhecemos as regras do CFM, as dores dos médicos e o que realmente gera crescimento.",
  },
  {
    icon: Shield,
    title: "Conformidade com o CFM",
    description:
      "Todo nosso trabalho segue a Resolução CFM 2.336/2023. Conteúdo revisado por especialistas em marketing médico antes de ser publicado.",
  },
  {
    icon: Zap,
    title: "Implementação, não teoria",
    description:
      "Em 5 semanas você recebe: diagnóstico do consultório, diagnóstico do marketing, diagnóstico comercial, guia de comunicação e growth planning. Tudo implementado e adaptado para seu consultório.",
  },
];

export default function Credentials() {
  return (
    <section className="bg-[#151515] py-20 md:py-32">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {credentials.map((credential, index) => (
            <motion.div
              key={credential.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full mb-6">
                <credential.icon className="text-gold" size={32} />
              </div>
              <h3 className="text-xl font-display font-bold text-gold mb-4">
                {credential.title}
              </h3>
              <p className="text-base font-body text-gray-300 leading-relaxed">
                {credential.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
