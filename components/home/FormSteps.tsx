"use client";

import { motion } from "framer-motion";
import { FileText, Phone, Calendar } from "lucide-react";
import { useState } from "react";

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
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    especialidade: "",
    faturamento: "",
    cidade: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Vim pelo site MedGM.

Nome: ${formData.nome}
Telefone: ${formData.telefone}
Email: ${formData.email}
Especialidade: ${formData.especialidade}
Faturamento mensal: ${formData.faturamento}
Cidade: ${formData.cidade}`;

    window.open(
      `https://wa.me/5521999999999?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

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
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nome */}
            <div>
              <label
                htmlFor="nome"
                className="block text-white font-body font-semibold mb-2"
              >
                Nome completo *
              </label>
              <input
                type="text"
                id="nome"
                required
                value={formData.nome}
                onChange={(e) =>
                  setFormData({ ...formData, nome: e.target.value })
                }
                className="w-full bg-dark-deeper border border-gold/30 rounded-xl px-6 py-4 text-white font-body focus:outline-none focus:border-gold transition-all"
                placeholder="Dr. João Silva"
              />
            </div>

            {/* Telefone e Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="telefone"
                  className="block text-white font-body font-semibold mb-2"
                >
                  Telefone/WhatsApp *
                </label>
                <input
                  type="tel"
                  id="telefone"
                  required
                  value={formData.telefone}
                  onChange={(e) =>
                    setFormData({ ...formData, telefone: e.target.value })
                  }
                  className="w-full bg-dark-deeper border border-gold/30 rounded-xl px-6 py-4 text-white font-body focus:outline-none focus:border-gold transition-all"
                  placeholder="(21) 99999-9999"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-white font-body font-semibold mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-dark-deeper border border-gold/30 rounded-xl px-6 py-4 text-white font-body focus:outline-none focus:border-gold transition-all"
                  placeholder="contato@clinica.com.br"
                />
              </div>
            </div>

            {/* Especialidade */}
            <div>
              <label
                htmlFor="especialidade"
                className="block text-white font-body font-semibold mb-2"
              >
                Especialidade *
              </label>
              <select
                id="especialidade"
                required
                value={formData.especialidade}
                onChange={(e) =>
                  setFormData({ ...formData, especialidade: e.target.value })
                }
                className="w-full bg-dark-deeper border border-gold/30 rounded-xl px-6 py-4 text-white font-body focus:outline-none focus:border-gold transition-all"
              >
                <option value="">Selecione...</option>
                <option value="Dermatologia">Dermatologia</option>
                <option value="Ortopedia">Ortopedia</option>
                <option value="Cardiologia">Cardiologia</option>
                <option value="Ginecologia">Ginecologia / Obstetrícia</option>
                <option value="Pediatria">Pediatria</option>
                <option value="Cirurgia Plástica">Cirurgia Plástica</option>
                <option value="Oftalmologia">Oftalmologia</option>
                <option value="Psiquiatria">Psiquiatria</option>
                <option value="Clínica Geral">Clínica Geral</option>
                <option value="Outra">Outra</option>
              </select>
            </div>

            {/* Faturamento */}
            <div>
              <label
                htmlFor="faturamento"
                className="block text-white font-body font-semibold mb-2"
              >
                Qual o faturamento mensal da sua clínica? *
              </label>
              <select
                id="faturamento"
                required
                value={formData.faturamento}
                onChange={(e) =>
                  setFormData({ ...formData, faturamento: e.target.value })
                }
                className="w-full bg-dark-deeper border border-gold/30 rounded-xl px-6 py-4 text-white font-body focus:outline-none focus:border-gold transition-all"
              >
                <option value="">Selecione...</option>
                <option value="De 51 mil à 70 mil">De 51 mil à 70 mil</option>
                <option value="De 71 mil à 100 mil">De 71 mil à 100 mil</option>
                <option value="De 101 mil à 200 mil">De 101 mil à 200 mil</option>
                <option value="De 201 mil à 400 mil">De 201 mil à 400 mil</option>
                <option value="De 401 mil à 1 milhão">De 401 mil à 1 milhão</option>
                <option value="De 1 à 4 milhões">De 1 à 4 milhões</option>
                <option value="Mais de 4 milhões">Mais de 4 milhões</option>
              </select>
            </div>

            {/* Cidade */}
            <div>
              <label
                htmlFor="cidade"
                className="block text-white font-body font-semibold mb-2"
              >
                Cidade *
              </label>
              <input
                type="text"
                id="cidade"
                required
                value={formData.cidade}
                onChange={(e) =>
                  setFormData({ ...formData, cidade: e.target.value })
                }
                className="w-full bg-dark-deeper border border-gold/30 rounded-xl px-6 py-4 text-white font-body focus:outline-none focus:border-gold transition-all"
                placeholder="São Paulo - SP"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="w-full bg-gold text-dark font-body font-bold text-xl uppercase px-12 py-6 rounded-full hover:bg-gold-light transition-all duration-300 shadow-gold-glow"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Receber mais informações
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
