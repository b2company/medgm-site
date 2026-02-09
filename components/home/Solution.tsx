"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

export default function Solution() {
  return (
    <section className="bg-[#0A0A0A] py-12 md:py-20 lg:py-32 relative overflow-hidden px-4">
      {/* Separador visual superior */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>

      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Título */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-4xl font-display font-bold text-white mb-8 md:mb-16 text-center px-2"
          >
            Uma assessoria com um método específico para o seu mercado.
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-16">
            {/* Card: Não somos agência */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#111] border border-red-500/20 rounded-xl md:rounded-2xl p-5 md:p-8 relative group hover:border-red-500/40 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                  <X className="text-red-500" size={24} />
                </div>
                <h3 className="text-xl md:text-2xl font-display font-bold text-white mt-2">
                  Não somos agência
                </h3>
              </div>
              <p className="text-base md:text-lg font-body text-gray-300 leading-relaxed">
                Agências tratam todos os nichos da mesma forma, entregam ações genéricas e medem sucesso em likes e seguidores. <span className="text-white font-semibold">Nós medimos sucesso em pacientes na agenda e receita no caixa.</span>
              </p>
            </motion.div>

            {/* Card: Não somos consultoria */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#111] border border-red-500/20 rounded-xl md:rounded-2xl p-5 md:p-8 relative group hover:border-red-500/40 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                  <X className="text-red-500" size={24} />
                </div>
                <h3 className="text-xl md:text-2xl font-display font-bold text-white mt-2">
                  Não somos consultoria genérica
                </h3>
              </div>
              <p className="text-base md:text-lg font-body text-gray-300 leading-relaxed">
                Consultorias não entendem o mercado médico. <span className="text-white font-semibold">Sabemos que médico tem regra do CFM para seguir, tem secretária que precisa ser treinada, tem paciente que chega pelo Google e precisa ser convertido por WhatsApp.</span> É para isso que existimos.
              </p>
            </motion.div>
          </div>

          {/* Card principal: Somos assessoria */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-gradient-to-br from-gold/10 via-[#111] to-gold-light/10 border-2 border-gold/40 rounded-3xl p-10 md:p-12 relative overflow-hidden"
          >
            {/* Glow effect */}
            <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-gold/20 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center">
                  <Check className="text-gold" size={32} strokeWidth={3} />
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-gold-light mt-2">
                  Somos uma assessoria de growth para clínicas médicas
                </h3>
              </div>
              <p className="text-lg md:text-xl font-body text-white leading-relaxed">
                Unimos <span className="text-gold font-semibold">posicionamento, captação, agendamento e vendas</span> em um único ecossistema. Estruturamos o seu marketing e o comercial da sua clínica para que nenhum lead se perca no caminho entre o primeiro contato e a consulta.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Separador visual inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
    </section>
  );
}
