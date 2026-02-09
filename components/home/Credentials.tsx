"use client";

import { motion } from "framer-motion";
import { Award, Target, TrendingUp } from "lucide-react";

const credentials = [
  {
    icon: Award,
    badge: "200+ Clínicas Atendidas",
    title: "Especialização em Saúde",
    description:
      "Única assessoria focada 100% no segmento médico. Conhecemos as regras do CFM, as dores dos médicos e o que realmente converte pacientes.",
  },
  {
    icon: Target,
    badge: "Certificado CFM 2.336/2023",
    title: "Marketing Ético e Conforme",
    description:
      "Garantimos 100% de conformidade com as regras do CFM. Todo conteúdo é revisado por especialistas em marketing médico antes de ser publicado.",
  },
  {
    icon: TrendingUp,
    badge: "ROI Médio de 4.7x",
    title: "Resultados Comprovados",
    description:
      "Para cada R$ 1,00 investido, nossos clientes médicos faturam em média R$ 4,70 em novos agendamentos. Dados auditados de jan/2025 a dez/2025.",
  },
];

export default function Credentials() {
  return (
    <section className="bg-dark py-20 md:py-32">
      <div className="container-custom">
        {/* Grid de Credenciais */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {credentials.map((credential, index) => (
            <motion.div
              key={credential.badge}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-dark-deep border-2 border-gold/20 rounded-2xl p-8 hover:border-gold/60 transition-all duration-500 h-full text-center">
                {/* Ícone */}
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gold/10 rounded-full mb-6 group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-300">
                  <credential.icon className="text-gold" size={36} />
                </div>

                {/* Badge */}
                <div className="inline-block bg-gold/20 text-gold font-montserrat font-bold text-sm uppercase px-6 py-2 rounded-full mb-6">
                  {credential.badge}
                </div>

                {/* Título */}
                <h3 className="text-2xl font-display font-bold text-white mb-4">
                  {credential.title}
                </h3>

                {/* Descrição */}
                <p className="text-gray-400 font-montserrat leading-relaxed">
                  {credential.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
