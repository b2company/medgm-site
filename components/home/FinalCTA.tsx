"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="section-padding bg-dark text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gold mb-6">
            Sua clínica pode mais. Vamos provar.
          </h2>

          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Agende agora seu Diagnóstico Gratuito e descubra como a MedGM pode
            transformar sua presença digital em uma máquina de agendamentos
            previsíveis.
          </p>

          <a
            href="https://wa.me/5521999999999?text=Olá! Quero agendar meu diagnóstico gratuito"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg inline-flex"
          >
            Agendar Diagnóstico Gratuito
            <ArrowRight size={20} />
          </a>

          <p className="text-sm text-gray-400 mt-4">
            Sem compromisso. 30 minutos que podem mudar o futuro da sua clínica.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
