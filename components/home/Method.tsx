"use client";

import { motion } from "framer-motion";
import { Megaphone, Target, Heart, TrendingUp } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";

export default function Method() {
  const pillars = [
    {
      icon: Megaphone,
      title: "ATRAÇÃO",
      description:
        "Posicionamos você como autoridade na sua especialidade. SEO médico, tráfego pago no Google e Meta, conteúdo estratégico para redes sociais e Google Meu Negócio otimizado. Tudo conforme as normas do CFM. O objetivo não é ganhar seguidores — é atrair pacientes que precisam de você.",
    },
    {
      icon: Target,
      title: "CONVERSÃO",
      description:
        "De nada adianta gerar leads se sua equipe não sabe convertê-los. Treinamos suas secretárias com scripts de agendamento, implementamos CRM, criamos fluxos de follow-up e automatizamos o primeiro contato. Resultado: mais pacientes na agenda, menos leads perdidos no WhatsApp.",
    },
    {
      icon: Heart,
      title: "RETENÇÃO",
      description:
        "Paciente que volta custa 5x menos do que conquistar um novo. Implementamos pesquisas de satisfação, campanhas de reativação, programas de indicação e estratégias de upsell ético para procedimentos complementares. Sua clínica para de girar na roda do tráfego pago.",
    },
    {
      icon: TrendingUp,
      title: "ESCALA",
      description:
        "Com a base comercial estruturada, escalamos seus resultados com dashboards de métricas, análise de CAC, LTV e ROI por canal. Você toma decisões baseadas em dados, não em achismo. É assim que se constrói a era de ouro da sua clínica.",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle
          title="O Método MedGM: Marketing que converte, comercial que retém."
          subtitle="Não somos uma agência. Somos a consultoria que guia o médico de um cenário de incerteza para um de autoridade reconhecida, agenda cheia e crescimento previsível. Não apenas criamos campanhas — implementamos o sistema completo dentro da sua clínica."
        />

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="card"
            >
              <pillar.icon className="text-gold mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-3 text-dark">
                {pillar.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
