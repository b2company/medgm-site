"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FileText, Phone, Calendar, ArrowRight } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: FileText,
    title: "Preencha o formulário",
    description:
      "Envie suas informações de contato. Todos os seus dados estarão seguros.",
  },
  {
    number: 2,
    icon: Phone,
    title: "Receba uma ligação",
    description:
      "Um especialista fará contato para agendar sua reunião de diagnóstico.",
  },
  {
    number: 3,
    icon: Calendar,
    title: "Participe da reunião",
    description:
      "Apresentamos um plano personalizado de crescimento para sua clínica.",
  },
];

export default function CTAFormSection() {
  return (
    <section id="form" className="bg-dark-deep py-20 md:py-32">
      <div className="container-custom">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
            Dar o próximo passo leva{" "}
            <span className="text-gold">menos de um minuto</span>
          </h2>
        </motion.div>

        {/* 3 Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Número */}
              <div className="absolute -top-4 -right-4 text-gold/20 font-display text-8xl font-bold">
                {step.number}
              </div>

              {/* Card */}
              <div className="relative bg-dark border-2 border-gold/20 rounded-2xl p-8 hover:border-gold/40 transition-all duration-300 h-full">
                {/* Ícone */}
                <div className="bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <step.icon className="text-gold" size={32} />
                </div>

                {/* Título */}
                <h3 className="text-2xl font-body font-bold text-white mb-3">
                  {step.title}
                </h3>

                {/* Descrição */}
                <p className="text-gray-400 font-body leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-3xl mx-auto bg-gradient-to-br from-gold/10 via-[#111] to-gold-light/10 border-2 border-gold/40 rounded-3xl p-12 shadow-2xl shadow-gold/20 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Pronto para transformar sua clínica em referência?
          </h3>
          <p className="text-xl font-body text-gray-300 mb-8 max-w-2xl mx-auto">
            Preencha o formulário e receba um diagnóstico gratuito sobre o crescimento da sua prática médica.
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center gap-3 bg-gold text-dark font-body font-bold text-xl uppercase px-12 py-6 rounded-full hover:bg-gold-light transition-all duration-300 shadow-gold-glow group"
          >
            Preencher Formulário
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
