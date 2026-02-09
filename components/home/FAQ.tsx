"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Plus, X } from "lucide-react";

const faqs = [
  {
    question: "Qual a diferença da MedGM para uma agência de marketing comum?",
    answer:
      "Agências tratam todos os nichos da mesma forma. A MedGM é uma assessoria de growth especializada 100% no mercado médico. Unimos posicionamento, captação, agendamento, vendas e estruturação comercial em um único ecossistema, tudo adaptado às regras do CFM e à realidade do médico brasileiro.",
  },
  {
    question: "Vocês atendem qual especialidade?",
    answer:
      "Já trabalhamos com mais de 12 especialidades médicas diferentes, de dermatologia e cirurgia plástica a ortopedia, cardiologia, nutrição e clínica geral. A metodologia se adapta às particularidades de cada especialidade.",
  },
  {
    question: "Como funciona o Diagnóstico Gratuito?",
    answer:
      "É uma reunião onde analisamos o cenário atual da sua clínica, identificamos gargalos e apresentamos um direcionamento personalizado de crescimento. Sem compromisso.",
  },
  {
    question: "O marketing médico é permitido pelo CFM?",
    answer:
      "Sim. Desde a Resolução CFM 2.336/2023, o marketing médico é permitido dentro de regras específicas. Todo nosso trabalho é 100% conforme com essas diretrizes.",
  },
  {
    question: "Quanto tempo para ver resultados?",
    answer:
      "Em 5 semanas você recebe a estrutura completa: diagnóstico, auditoria de marketing, auditoria comercial, guia de comunicação e planejamento de crescimento.",
  },
  {
    question: "Vocês atendem fora do Rio de Janeiro?",
    answer:
      "Sim. Atendemos todo o Brasil com consultoria 100% remota. Já atuamos em mais de 13 estados.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
            Perguntas Frequentes
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border-b border-gold/20"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 flex items-center justify-between text-left group"
              >
                <span className="text-lg font-body font-semibold text-white pr-8">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <X className="text-gold" size={24} />
                  ) : (
                    <Plus className="text-gold group-hover:scale-110 transition-transform" size={24} />
                  )}
                </div>
              </button>
              {openIndex === index && (
                <div className="pb-6">
                  <p className="text-base font-body text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
