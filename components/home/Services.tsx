"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Megaphone,
  FileText,
  BarChart3,
  Users,
} from "lucide-react";

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

export default function Services() {
  return (
    <section className="bg-[#0A0A0A] py-20 md:py-32">
      <div className="container-custom">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4 leading-tight">
            Estruturamos o growth da sua clínica com soluções feitas sob medida.
          </h2>
          <p className="text-lg md:text-xl font-body text-gray-400">
            Tenha um braço a mais para ajudar seu time ou terceirize todo o seu marketing com a MedGM. Sem preocupação com contratação, gestão de equipe ou burocracias.
          </p>
        </motion.div>

        {/* Grid de Serviços */}
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
                {/* Ícone */}
                <div className="bg-gold/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-300">
                  <service.icon className="text-gold" size={32} />
                </div>

                {/* Título */}
                <h3 className="text-xl font-display font-bold text-white mb-3">
                  {service.title}
                </h3>

                {/* Descrição */}
                <p className="text-base font-body text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
