"use client";

import { motion } from "framer-motion";
import type { Metadata } from "next";
import WhatsAppLink from "@/components/WhatsAppLink";

export default function Sobre() {
  const numbers = [
    { value: "R$ 60M+", label: "em faturamento gerado" },
    { value: "R$ 15M+", label: "investidos em tráfego" },
    { value: "+250", label: "projetos na área da saúde" },
    { value: "+13", label: "estados atendidos" },
  ];

  const values = [
    {
      title: "Resultado mensurável > métricas de vaidade",
      description: "Focamos em números que importam: agendamentos, conversão e receita.",
    },
    {
      title: "Ética e conformidade com o CFM, sempre",
      description: "Todo nosso trabalho segue a Resolução CFM 2.336/2023.",
    },
    {
      title: "Implementação > teoria",
      description: "Em 5 semanas, montamos o sistema completo para funcionar dentro da sua clínica.",
    },
    {
      title: "Estratégia específica, nunca genérica",
      description: "Cada especialidade e mercado recebe uma abordagem personalizada.",
    },
    {
      title: "Autonomia do cliente",
      description: "O sistema funciona sem nós. Você domina seu próprio crescimento.",
    },
  ];

  return (
    <main className="bg-dark min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 md:py-32 bg-[#0A0A0A]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight"
            >
              Nascemos para trazer de volta a era de ouro da medicina.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl font-body font-light text-gray-300 leading-relaxed"
            >
              A MedGM é a ponte entre a excelência clínica que você já tem e o reconhecimento de mercado que você merece.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Por que existimos */}
      <section className="py-20 md:py-32">
        <div className="container-custom">
          <div className="max-w-[680px] mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-display font-bold text-white mb-8"
            >
              Por que existimos
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base md:text-lg font-body text-gray-300 leading-relaxed mb-6"
            >
              A MedGM nasceu de uma constatação: o médico não precisa de mais seguidores. Precisa de mais pacientes. E para ter mais pacientes, não basta fazer marketing genérico. Precisa de uma estratégia de crescimento que funcione de ponta a ponta.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base md:text-lg font-body text-gray-300 leading-relaxed mb-6"
            >
              O mercado está saturado de mensagens iguais. Agências que tratam todos os nichos da mesma forma. Modelos de marketing que priorizam vaidade ao invés de retorno real. Enquanto isso, médicos brilhantes continuam com agendas instáveis, dependentes de indicações e sem previsibilidade.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base md:text-lg font-body text-white font-semibold leading-relaxed"
            >
              Nós existimos para mudar isso. Somos uma assessoria de growth que combina marketing digital de alto nível com estruturação comercial, tudo adaptado às regras do CFM e à realidade do médico brasileiro. Não fazemos marketing de vaidade. Construímos a era de ouro da sua clínica.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Números */}
      <section className="bg-[#111] py-16 md:py-20">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-5xl mx-auto">
            {numbers.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-[#FFEBC3] mb-2">
                  {stat.value}
                </p>
                <p className="text-xs md:text-sm font-body uppercase tracking-wider text-[#888]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="py-20 md:py-32">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-16 text-center"
          >
            Nossos Valores
          </motion.h2>

          <div className="max-w-3xl mx-auto space-y-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border-l-2 border-gold pl-6"
              >
                <h3 className="text-xl md:text-2xl font-display font-bold text-gold mb-2">
                  {value.title}
                </h3>
                <p className="text-base font-body text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A0A0A] py-20 md:py-32">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6"
            >
              Vamos construir a era de ouro da sua clínica?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl font-body text-gray-300 mb-8"
            >
              Agende seu diagnóstico gratuito e descubra como podemos ajudar.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <WhatsAppLink
                message="Olá! Quero falar com a MedGM"
                className="inline-block bg-gold text-dark font-body font-bold text-lg px-12 py-5 rounded-full hover:bg-gold-light transition-all duration-300 shadow-gold-glow"
              >
                Falar com a MedGM
              </WhatsAppLink>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
