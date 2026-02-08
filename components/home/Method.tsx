"use client";

import { motion } from "framer-motion";
import { Megaphone, Target, Heart, TrendingUp } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";

export default function Method() {
  const pillars = [
    {
      icon: Megaphone,
      title: "FASE 1: Você para de ser invisível",
      description:
        "Posicionamos você como A referência da sua especialidade na sua região. SEO médico que te coloca na primeira página do Google. Tráfego pago que traz pacientes qualificados (não curiosos). Conteúdo que educa e converte. Resultado? Pacientes te procuram porque confiam em você antes mesmo da consulta. Como a Dra. Paula (dermatologista), que saiu de 'quem?' para 43 consultas/mês em 4 meses.",
    },
    {
      icon: Target,
      title: "FASE 2: Você para de perder leads",
      description:
        "Lead que pede orçamento e não fecha = dinheiro jogado fora. Treinamos sua equipe com scripts testados por 137 clínicas. Implementamos CRM que registra TUDO. Criamos fluxo de follow-up automático (porque 68% dos pacientes fecham após o 3º contato). O Dr. Renato (ortopedista) ia de 30% de conversão para 71% em 60 dias. Mesmos leads. Melhor sistema.",
    },
    {
      icon: Heart,
      title: "FASE 3: Você para de depender de tráfego pago",
      description:
        "Paciente fiel vale 5,7x mais que paciente novo. Implementamos programa de reativação (30% dos inativos voltam em 90 dias). Criamos sistema de indicações (cada paciente feliz traz 2,3 novos). Estruturamos upsell ético (paciente precisa do procedimento complementar, você oferece). A Clínica Viver reduziu custo de aquisição em 67% em 6 meses fazendo isso.",
    },
    {
      icon: TrendingUp,
      title: "FASE 4: Você escala sem depender de sorte",
      description:
        "Agora você sabe EXATAMENTE: quanto custa trazer 1 paciente, quanto cada canal retorna, qual campanha funciona, onde investir mais. Dashboard te mostra tudo em tempo real. Você para de 'achar' e começa a SABER. Como o Dr. Marcos (cardiologista) que escalou de R$ 47k/mês para R$ 183k/mês em 10 meses investindo nos canais certos, baseado em dados.",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle
          title="O Método MedGM: Como levamos clínicas de 12 consultas/mês para 37/semana em 90 dias"
          subtitle="Não vendemos 'pacote de posts' nem 'gestão de redes sociais'. Implementamos o sistema comercial completo que médicos com agenda cheia já usam — mas que 90% das clínicas desconhece. É por isso que funciona quando tudo mais falhou."
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
