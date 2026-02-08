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
      text: "Lead pede orçamento às 22h. Sua secretária responde às 9h. Ele já fechou com o concorrente que tem chatbot.",
    },
    {
      icon: CircleDollarSign,
      text: "R$ 8 mil/mês em Meta Ads. Você não sabe quantos viraram pacientes. Nem quanto cada um custou. Nem se vale a pena.",
    },
    {
      icon: UserX,
      text: "Paciente faz 1 consulta e some. 6 meses depois aparece no Google pedindo indicação de 'outro médico da área'.",
    },
    {
      icon: Shuffle,
      text: "Segunda-feira = 12 consultas. Quinta = 3. Você vive na montanha-russa porque depende de quem lembra de te indicar.",
    },
    {
      icon: EyeOff,
      text: "Você é referência na sua especialidade. Mas o Dr. Fulano (que é mediano) tem fila de espera. Por quê? Ele tem sistema.",
    },
    {
      icon: ThumbsDown,
      text: "Já contratou 3 agências. Todas prometeram 'resultado rápido'. Entregaram posts bonitos. Sua agenda continuou vazia.",
    },
  ];

  return (
    <section className="section-padding bg-neutral">
      <div className="container-custom">
        <SectionTitle
          title="Por que médicos gastam R$ 15 mil/mês em tráfego e ainda têm agenda vazia?"
          subtitle="Porque 90% das agências entregam likes, seguidores e 'engajamento'. Mas nenhuma delas estrutura o comercial que transforma lead em paciente fiel. É por isso que você vê resultado no Instagram, mas não no caixa."
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
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            <strong className="text-dark">Reconheceu sua clínica em algum desses cenários?</strong>
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            O problema não é você. É que 90% das agências vendem <em>&ldquo;solução de marketing&rdquo;</em> quando
            o que você precisa é de <strong className="text-gold">estrutura comercial completa</strong>.
            Elas entregam visualizações. Nós entregamos pacientes. Elas vendem posts. Nós implementamos
            o sistema que transforma lead em consulta, consulta em fidelização, e fidelização em receita
            previsível. <strong className="text-gold">É exatamente isso que separa clínicas que sobrevivem
            das que prosperam.</strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
