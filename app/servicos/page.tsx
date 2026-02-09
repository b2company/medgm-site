"use client";

import { motion } from "framer-motion";
import { TrendingUp, Megaphone, FileText, BarChart3, Users } from "lucide-react";
import WhatsAppLink from "@/components/WhatsAppLink";

const services = [
  {
    icon: TrendingUp,
    title: "Gestão de Anúncios",
    description:
      "Tráfego pago no Google e Meta para atrair pacientes qualificados ao seu funil de agendamentos. Previsibilidade e retorno mensurável.",
  },
  {
    icon: Megaphone,
    title: "Criativos & Copywriting",
    description:
      "Anúncios e materiais criados por especialistas em marketing médico. Foco em conversão, com base na experiência de mais de 250 projetos.",
  },
  {
    icon: FileText,
    title: "Landing Pages",
    description:
      "Páginas projetadas para converter visitantes em agendamentos. Compliance total com o CFM. Fáceis de implementar e editar.",
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description:
      "Dashboards com os indicadores que importam: custo por lead, agendamentos, taxa de conversão, receita. Acessíveis a qualquer momento.",
  },
  {
    icon: Users,
    title: "Estruturação Comercial",
    description:
      "Treinamento de secretárias, scripts de conversão para WhatsApp e processos de agendamento. Estruturamos o comercial da sua clínica para que o growth se converta em consultas.",
  },
];

const timeline = [
  {
    week: "01",
    title: "Diagnóstico do consultório",
    description:
      "Análise profunda dos seus serviços e pacientes. Mapeamos o que você vende, o que deveria vender, o que tem margem, o que trava, quem é o cliente certo e qual caminho gera o maior retorno no menor tempo.",
  },
  {
    week: "02",
    title: "Diagnóstico do marketing",
    description:
      "Auditoria completa do seu Instagram, criação de pilares de conteúdo, roteiros para reels específicos para sua especialidade e direcionamento para construir um perfil que atrai e converte.",
  },
  {
    week: "03",
    title: "Diagnóstico comercial",
    description:
      "Metodologia para aumentar em 30% os seus agendamentos. Estrutura de CRM com scripts validados, prontos para sua secretária replicar.",
  },
  {
    week: "04",
    title: "Guia de comunicação",
    description:
      "Setup de identidade visual, landing page personalizada, criativos de alta conversão e perfil estratégico no Instagram.",
  },
  {
    week: "05",
    title: "Growth Planning",
    description:
      "Planejamento de crescimento com planilhas de controle diário de contatos, controle de pacientes agendados e calendário de conteúdo.",
  },
];

export default function Servicos() {
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
              Assessoria de growth para clínicas médicas.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl font-body font-light text-gray-300"
            >
              Projetamos o crescimento da sua clínica conforme a necessidade dela. Você pode personalizar o escopo que mais se adeque ao seu momento.
            </motion.p>
          </div>
        </div>
      </section>

      {/* O que fazemos */}
      <section className="py-20 md:py-32">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-6 max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4 leading-tight">
              Soluções de growth feitas sob medida para sua clínica
            </h2>
            <p className="text-lg md:text-xl font-body text-gray-400">
              Tenha um braço a mais para ajudar seu time ou terceirize todo o seu marketing com a MedGM. Sem preocupação com contratação, gestão de equipe ou burocracias.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-[#111] border border-white/10 rounded-2xl p-8 hover:border-gold/40 transition-all duration-500 h-full">
                  <div className="bg-gold/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-300">
                    <service.icon className="text-gold" size={32} />
                  </div>
                  <h3 className="text-xl font-display font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-base font-body text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona - Timeline */}
      <section className="bg-[#0A0A0A] py-20 md:py-32">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
              Em 5 semanas, você recebe:
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={item.week}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-6 group"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gold/10 border-2 border-gold rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-all duration-300">
                    <span className="text-2xl font-display font-bold text-gold">
                      {item.week}
                    </span>
                  </div>
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-2xl font-display font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-base font-body text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Acompanhamento contínuo */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-[#111] border border-gold/30 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-display font-bold text-gold mb-4">
                + Acompanhamento contínuo
              </h3>
              <p className="text-base font-body text-gray-300 leading-relaxed">
                Suporte direto por 60 dias no WhatsApp para tirar dúvidas, revisar decisões e ajustar o plano conforme os resultados surgem.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6"
            >
              Não tem certeza por onde começar?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl font-body text-gray-300 mb-8"
            >
              Agende um diagnóstico gratuito e vamos analisar juntos qual a melhor solução para o seu momento.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <WhatsAppLink
                message="Olá! Quero agendar diagnóstico gratuito"
                className="inline-block bg-gold text-dark font-body font-bold text-lg px-12 py-5 rounded-full hover:bg-gold-light transition-all duration-300 shadow-gold-glow"
              >
                Agendar Diagnóstico Gratuito
              </WhatsAppLink>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
