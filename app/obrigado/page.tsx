"use client";

import { motion } from "framer-motion";
import { CheckCircle2, MessageCircle, ClipboardCheck, TrendingUp, Target } from "lucide-react";
import Link from "next/link";
import WhatsAppLink from "@/components/WhatsAppLink";

export default function Obrigado() {
  const steps = [
    {
      icon: ClipboardCheck,
      title: "Análise do formulário",
      description: "Nosso time recebeu suas informações e já está analisando o momento atual da sua clínica."
    },
    {
      icon: MessageCircle,
      title: "Contato personalizado",
      description: "Um especialista em marketing médico entrará em contato em até 24h, por ligação ou WhatsApp."
    },
    {
      icon: Target,
      title: "Diagnóstico gratuito",
      description: "Receba um diagnóstico personalizado sobre o crescimento e posicionamento da sua clínica."
    },
    {
      icon: TrendingUp,
      title: "Estratégia de crescimento",
      description: "É hora de transformar sua presença digital em pacientes reais e aumentar seu faturamento."
    }
  ];

  return (
    <main className="bg-dark min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            {/* Ícone de Sucesso */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="flex justify-center mb-8"
            >
              <div className="bg-gold/10 p-8 rounded-full">
                <CheckCircle2 className="text-gold" size={80} />
              </div>
            </motion.div>

            {/* Subtítulo */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl font-body text-gold mb-4 uppercase tracking-wider"
            >
              Seu cadastro foi concluído. Em até 24 horas entraremos em contato!
            </motion.p>

            {/* Título Principal */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight"
            >
              SEU CADASTRO FOI REALIZADO COM SUCESSO
            </motion.h1>

            {/* Descrição */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl font-body font-light text-gray-300 mb-12"
            >
              Um especialista da MedGM entrará em contato em até 24h.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-12 md:py-20 bg-[#0A0A0A]">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="bg-gold/10 p-4 rounded-lg">
                      <step.icon className="text-gold" size={32} />
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl font-body font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-base font-body text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="bg-gradient-to-br from-[#111] to-[#0A0A0A] border border-white/10 rounded-2xl p-8 md:p-12 text-center"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white mb-4">
                Quer falar agora?
              </h2>
              <p className="text-lg md:text-xl font-body text-gray-300 mb-8">
                Não espere! Clique no botão abaixo e converse com nosso time imediatamente.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <WhatsAppLink
                  message="Olá! Acabei de preencher o formulário e quero conversar agora sobre o crescimento da minha clínica."
                  className="bg-gold text-dark font-body font-bold text-lg uppercase px-10 py-5 rounded-full hover:bg-gold-light transition-all duration-300 shadow-gold-glow inline-block w-full sm:w-auto"
                >
                  Falar no WhatsApp Agora
                </WhatsAppLink>

                <Link
                  href="/"
                  className="bg-transparent border-2 border-white/20 text-white font-body font-bold text-lg uppercase px-10 py-5 rounded-full hover:border-gold hover:text-gold transition-all duration-300 inline-block w-full sm:w-auto"
                >
                  Voltar para o Início
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="pb-20">
        <div className="container-custom">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="text-center text-sm text-gray-400"
          >
            Nosso time especializado em marketing médico entrará em contato em até 24 horas úteis.
          </motion.p>
        </div>
      </section>
    </main>
  );
}
