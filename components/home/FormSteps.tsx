"use client";

import { motion } from "framer-motion";
import { FileText, Phone, Calendar } from "lucide-react";
import { useEffect } from "react";

const steps = [
  {
    number: 1,
    icon: FileText,
    title: "Preencha o formulário",
    description:
      "Envie suas informações de contato. Todos os seus dados estarão seguros, vamos cuidar bem deles.",
  },
  {
    number: 2,
    icon: Phone,
    title: "Receba uma ligação",
    description:
      "Um dos nossos especialistas fará uma ligação para agendar a reunião mais importante com você.",
  },
  {
    number: 3,
    icon: Calendar,
    title: "Participe da reunião",
    description:
      "Vamos apresentar um plano personalizado de crescimento para sua clínica, sem compromisso.",
  },
];

export default function FormSteps() {
  useEffect(() => {
    // Carregar script do formulário
    const script = document.createElement('script');
    script.src = 'https://admin.b2company.co/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup ao desmontar
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="form" className="bg-dark-deep py-20 md:py-32">
      <div className="container-custom">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
            Dar o próximo passo leva{" "}
            <span className="text-gold">menos de um minuto</span>
          </h2>
        </motion.div>

        {/* 3 Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Número */}
              <div className="absolute -top-4 -right-4 text-gold/20 font-display text-8xl font-bold">
                {step.number}
              </div>

              {/* Card */}
              <div className="relative bg-dark border-2 border-gold/20 rounded-2xl p-8 hover:border-gold/40 transition-all duration-300 h-full">
                {/* Ícone */}
                <div className="bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <step.icon className="text-gold" size={32} />
                </div>

                {/* Título */}
                <h3 className="text-2xl font-body font-bold text-white mb-3">
                  {step.title}
                </h3>

                {/* Descrição */}
                <p className="text-gray-400 font-body leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Formulário */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-3xl mx-auto bg-dark border-2 border-gold/30 rounded-3xl p-8 md:p-12 shadow-gold-glow"
        >
          <iframe
            src="https://admin.b2company.co/widget/survey/WjbrtUI2XiHyijECVzEG"
            className="w-full border-0"
            style={{ minHeight: '800px' }}
            id="WjbrtUI2XiHyijECVzEG"
            title="Formulário MedGM"
            allow="geolocation"
          />
        </motion.div>
      </div>
    </section>
  );
}
