"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import { TrendingUp } from "lucide-react";

export default function Cases() {
  const cases = [
    {
      specialty: "Dermatologia",
      challenge: "Agenda com buracos, dependência de indicações",
      result: "+180%",
      metric: "em agendamentos",
      testimonial:
        "Em 4 meses, minha agenda passou de 60% para 100% de ocupação. A MedGM estruturou todo o meu processo comercial.",
      author: "Dra. Maria Silva",
    },
    {
      specialty: "Ortopedia",
      challenge: "Tráfego sem conversão",
      result: "3.2x",
      metric: "ROI em Google Ads",
      testimonial:
        "Gastava R$5k/mês sem saber o retorno. Hoje sei exatamente quanto cada canal traz e já estou escalando.",
      author: "Dr. Carlos Mendes",
    },
    {
      specialty: "Cirurgia Plástica",
      challenge: "Pacientes não retornavam",
      result: "+250%",
      metric: "em retenção",
      testimonial:
        "O programa de reativação trouxe pacientes antigos de volta. Agora faço 3x mais procedimentos complementares.",
      author: "Dr. Pedro Costa",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle title="Números que falam mais alto do que promessas" />

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="card"
            >
              <div className="mb-4">
                <span className="bg-gold text-dark px-3 py-1 rounded-full text-sm font-bold">
                  {item.specialty}
                </span>
              </div>

              <p className="text-sm text-gray-600 mb-4">{item.challenge}</p>

              <div className="bg-neutral rounded-lg p-6 mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="text-gold" size={24} />
                  <span className="text-3xl font-bold text-gold">
                    {item.result}
                  </span>
                </div>
                <p className="text-sm text-gray-700">{item.metric}</p>
              </div>

              <blockquote className="border-l-4 border-gold pl-4 mb-4">
                <p className="text-gray-700 italic mb-2">&ldquo;{item.testimonial}&rdquo;</p>
              </blockquote>

              <p className="font-semibold text-dark">{item.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
