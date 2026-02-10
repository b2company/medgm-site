"use client";

import { motion } from "framer-motion";
import { CheckCircle2, MessageCircle, ClipboardCheck, TrendingUp, Target } from "lucide-react";
import Link from "next/link";
import WhatsAppLink from "@/components/WhatsAppLink";

export default function Obrigado() {
  const steps = [
    {
      icon: ClipboardCheck,
      number: "01",
      title: "Análise do formulário",
      description: "Nosso time está revisando suas informações para entender o momento atual da sua clínica."
    },
    {
      icon: MessageCircle,
      number: "02",
      title: "Contato personalizado",
      description: "Um especialista em marketing médico entrará em contato por ligação ou WhatsApp."
    },
    {
      icon: Target,
      number: "03",
      title: "Diagnóstico gratuito",
      description: "Você receberá uma análise personalizada sobre posicionamento e oportunidades de crescimento."
    },
    {
      icon: TrendingUp,
      number: "04",
      title: "Plano de ação",
      description: "Apresentaremos as melhores estratégias para transformar sua presença digital em pacientes reais."
    }
  ];

  return (
    <main className="bg-dark min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
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

            {/* Título Principal */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight"
            >
              Cadastro realizado com sucesso!
            </motion.h1>

            {/* Descrição */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl font-body font-light text-gray-300 mb-4"
            >
              Um especialista da MedGM entrará em contato em até 24 horas.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg font-body text-gold"
            >
              Enquanto isso, veja o que acontece agora:
            </motion.p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-[#0A0A0A] to-dark">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="relative bg-gradient-to-br from-[#111] to-[#0A0A0A] border border-white/10 rounded-2xl p-8 hover:border-gold/30 transition-all duration-300"
                >
                  {/* Número */}
                  <div className="absolute top-6 right-6 text-6xl font-display font-bold text-gold/10">
                    {step.number}
                  </div>

                  {/* Conteúdo */}
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-gold/10 p-3 rounded-xl">
                        <step.icon className="text-gold" size={28} />
                      </div>
                      <h3 className="text-xl md:text-2xl font-display font-bold text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-base font-body text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="bg-gradient-to-br from-gold/5 to-transparent border border-gold/20 rounded-3xl p-8 md:p-12 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Não quer esperar?
              </h2>
              <p className="text-lg md:text-xl font-body text-gray-300 mb-8 max-w-2xl mx-auto">
                Fale agora com nosso time pelo WhatsApp e comece a transformar sua clínica hoje mesmo.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <WhatsAppLink
                  message="Olá! Acabei de preencher o formulário no site e gostaria de conversar agora sobre o crescimento da minha clínica."
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
            className="text-center text-sm text-gray-500"
          >
            Resposta em até 24 horas úteis
          </motion.p>
        </div>
      </section>
    </main>
  );
}
