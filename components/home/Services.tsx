"use client";

import { motion } from "framer-motion";
import {
  Users,
  Megaphone,
  Database,
  FileText,
  TrendingUp,
  BarChart3,
  Headphones,
} from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Soluções Comerciais",
    subtitle: "A expertise do nosso time de vendas à disposição da sua clínica",
    features: [
      "Estruturamos todo o seu comercial do zero",
      "Treinamos e desenvolvemos sua secretária e equipe",
      "Fornecemos scripts de conversão para vendas por WhatsApp",
    ],
  },
  {
    icon: Megaphone,
    title: "Criativos & Copywriting",
    subtitle:
      "Seus anúncios criados pelos copywriters e designers especializados em medicina",
    features: [
      "Mais foco em conversão, não apenas em estética",
      "Criados com base na experiência de 200+ clínicas atendidas",
      "Feitos por profissionais que recebem treinamento constantemente",
    ],
  },
  {
    icon: Database,
    title: "CRM Médico",
    subtitle: "Gerencie o relacionamento com seu paciente em um só lugar",
    features: [
      "Visualize todo o seu funil de vendas e consultas",
      "Mantenha conexão com seus pacientes e aumente retenção",
      "Faça upsell de procedimentos e campanhas promocionais",
    ],
  },
  {
    icon: FileText,
    title: "Landing Pages",
    subtitle: "Landing pages projetadas para trazer oportunidades de consultas",
    features: [
      "Feitas com as melhores práticas do mercado médico",
      "Fácil de implementar e editar conforme necessário",
      "Projetadas para alta conversão e compliance com CFM",
    ],
  },
  {
    icon: TrendingUp,
    title: "Gestão de Anúncios",
    subtitle: "Gestão dos seus anúncios online no Google e Meta",
    features: [
      "Atraia seus pacientes ideais para seu funil de agendamentos",
      "Abasteça seu atendimento com oportunidades de consulta",
      "Tenha mais previsibilidade e mensure o retorno do seu investimento",
    ],
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    subtitle: "Gerencie as principais métricas do seu negócio médico",
    features: [
      "Tenha controle sobre os principais indicadores da sua clínica",
      "Transforme dados em insights e insights em boas decisões",
      "Acesse os dados a qualquer momento, em qualquer dispositivo",
    ],
  },
  {
    icon: Headphones,
    title: "Gestão e Atendimento",
    subtitle: "O seu marketing gerenciado por especialistas em growth médico",
    features: [
      "Especialistas treinados, geridos e desenvolvidos por nós",
      "Atendimento ágil e eficaz dedicado à sua clínica",
      "A expertise da MedGM trabalhando na sua empresa",
    ],
  },
];

export default function Services() {
  return (
    <section className="bg-dark-deep py-20 md:py-32" id="services">
      <div className="container-custom">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight max-w-5xl mx-auto">
            A MedGM estrutura o marketing da sua clínica com{" "}
            <span className="text-gold">soluções feitas sob medida</span>
          </h2>
          <p className="text-2xl text-gray-400 font-montserrat max-w-3xl mx-auto">
            Conheça todos os serviços que oferecemos para que sua clínica tenha
            mais resultados
          </p>
        </motion.div>

        {/* Grid de Serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-dark border-2 border-gold/20 rounded-2xl p-8 hover:border-gold/60 transition-all duration-500 h-full">
                {/* Ícone */}
                <div className="bg-gold/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-300">
                  <service.icon className="text-gold" size={32} />
                </div>

                {/* Título */}
                <h3 className="text-2xl font-display font-bold text-white mb-3">
                  {service.title}
                </h3>

                {/* Subtítulo */}
                <p className="text-gray-400 font-montserrat mb-6 text-lg">
                  {service.subtitle}
                </p>

                {/* Features */}
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300 font-montserrat leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <a
            href="#form"
            className="inline-flex items-center gap-3 bg-gold text-black font-montserrat font-bold text-xl uppercase px-16 py-6 rounded-full hover:bg-gold-light transition-all duration-300 shadow-gold-glow"
          >
            Impulsionar Meu Marketing
          </a>
        </motion.div>
      </div>
    </section>
  );
}
