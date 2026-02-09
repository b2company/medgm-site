"use client";

import { motion } from "framer-motion";

export default function Solution() {
  return (
    <section className="bg-[#0A0A0A] py-20 md:py-32">
      <div className="container-custom">
        <div className="max-w-[680px] mx-auto">
          {/* Título */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-12 text-center"
          >
            Uma assessoria com um método específico para o seu mercado.
          </motion.h2>

          {/* Parágrafo 1 */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg font-body text-gray-300 leading-relaxed mb-6"
          >
            A MedGM não é mais uma agência de marketing. Agências tratam todos os nichos da mesma forma, entregam ações genéricas e medem sucesso em likes e seguidores. Nós medimos sucesso em pacientes na agenda e receita no caixa.
          </motion.p>

          {/* Parágrafo 2 */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-lg font-body text-gray-300 leading-relaxed mb-6"
          >
            Também não somos uma consultoria que não entende o mercado médico. Sabemos que médico tem regra do CFM para seguir, tem secretária que precisa ser treinada, tem paciente que chega pelo Google e precisa ser convertido por WhatsApp. É para isso que existimos.
          </motion.p>

          {/* Parágrafo 3 */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base md:text-lg font-body text-white font-semibold leading-relaxed"
          >
            Somos uma assessoria de growth para clínicas médicas. Unimos posicionamento, captação, agendamento e vendas em um único ecossistema. Estruturamos o seu marketing e o comercial da sua clínica para que nenhum lead se perca no caminho entre o primeiro contato e a consulta.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
