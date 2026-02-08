"use client";

import { motion } from "framer-motion";
import {
  PhoneOff,
  CircleDollarSign,
  UserX,
  Shuffle,
  EyeOff,
  ThumbsDown,
} from "lucide-react";
import SectionTitle from "@/components/SectionTitle";

export default function Problem() {
  const painPoints = [
    {
      icon: PhoneOff,
      text: "Sua secretária recebe leads, mas não sabe converter em agendamentos",
    },
    {
      icon: CircleDollarSign,
      text: "Você gasta com tráfego pago, mas não sabe de onde vêm seus pacientes",
    },
    {
      icon: UserX,
      text: "Pacientes fazem a primeira consulta e nunca mais voltam",
    },
    {
      icon: Shuffle,
      text: "Você depende de indicações e não tem previsibilidade de receita",
    },
    {
      icon: EyeOff,
      text: "Sua clínica tem ótimos profissionais, mas ninguém sabe disso",
    },
    {
      icon: ThumbsDown,
      text: "Você tentou agências de marketing, mas os resultados não apareceram",
    },
  ];

  return (
    <section className="section-padding bg-neutral">
      <div className="container-custom">
        <SectionTitle
          title="Você investe em marketing, mas sua agenda continua com buracos?"
          subtitle="O problema não é falta de marketing. É falta de estrutura comercial."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.4 } }}
              className="card group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <point.icon
                  className="text-gold mb-4 transition-colors duration-500 group-hover:text-gold-light"
                  size={40}
                />
              </motion.div>
              <p className="text-gray-700 leading-relaxed">{point.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center max-w-3xl mx-auto"
        >
          <p className="text-lg text-gray-700 leading-relaxed">
            O mercado está cheio de agências que priorizam métricas de vaidade:
            likes, seguidores, engajamento. Mas nada disso paga boletos. O que
            sua clínica precisa é de um{" "}
            <strong className="text-gold">
              processo comercial que transforma atenção online em consultas
              marcadas e pacientes fiéis
            </strong>
            . É exatamente isso que fazemos.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
