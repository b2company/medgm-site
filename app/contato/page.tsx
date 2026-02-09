"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    especialidade: "",
    mensagem: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Vim pelo site MedGM.

Nome: ${formData.nome}
Email: ${formData.email}
WhatsApp: ${formData.whatsapp}
Especialidade: ${formData.especialidade}

Mensagem: ${formData.mensagem}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5521965116943?text=${encodedMessage}`, "_blank");
  };

  return (
    <main className="bg-dark min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 md:py-32 bg-[#0A0A0A]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight"
            >
              Vamos conversar sobre o futuro da sua clínica?
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl font-body font-light text-gray-300"
            >
              Entre em contato e descubra como podemos acelerar o crescimento da sua prática médica.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Informações + Formulário */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Informações de Contato */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="flex items-start gap-4"
                >
                  <div className="bg-gold/10 p-3 rounded-lg">
                    <Phone className="text-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-body font-semibold text-white mb-1">WhatsApp</h3>
                    <a href="https://wa.me/5521965116943" className="text-gray-300 hover:text-gold transition-colors">
                      +55 21 96511-6943
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="bg-gold/10 p-3 rounded-lg">
                    <Mail className="text-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-body font-semibold text-white mb-1">E-mail</h3>
                    <a href="mailto:contato@medgm.com.br" className="text-gray-300 hover:text-gold transition-colors">
                      contato@medgm.com.br
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex items-start gap-4"
                >
                  <div className="bg-gold/10 p-3 rounded-lg">
                    <MapPin className="text-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-body font-semibold text-white mb-1">Localização</h3>
                    <p className="text-gray-300">Rio de Janeiro, RJ</p>
                    <p className="text-sm text-gray-400 mt-1">Atendimento 100% remoto</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Formulário */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <form onSubmit={handleSubmit} className="bg-[#111] border border-white/10 rounded-2xl p-8 space-y-6">
                <div>
                  <label htmlFor="nome" className="block text-white font-body font-semibold mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    required
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    className="w-full bg-dark border border-white/10 rounded-xl px-6 py-4 text-white font-body focus:outline-none focus:border-gold transition-all"
                    placeholder="Dr. João Silva"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-white font-body font-semibold mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-dark border border-white/10 rounded-xl px-6 py-4 text-white font-body focus:outline-none focus:border-gold transition-all"
                      placeholder="contato@clinica.com.br"
                    />
                  </div>

                  <div>
                    <label htmlFor="whatsapp" className="block text-white font-body font-semibold mb-2">
                      WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="whatsapp"
                      required
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className="w-full bg-dark border border-white/10 rounded-xl px-6 py-4 text-white font-body focus:outline-none focus:border-gold transition-all"
                      placeholder="(21) 99999-9999"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="especialidade" className="block text-white font-body font-semibold mb-2">
                    Especialidade *
                  </label>
                  <select
                    id="especialidade"
                    required
                    value={formData.especialidade}
                    onChange={(e) => setFormData({ ...formData, especialidade: e.target.value })}
                    className="w-full bg-dark border border-white/10 rounded-xl px-6 py-4 text-white font-body focus:outline-none focus:border-gold transition-all"
                  >
                    <option value="">Selecione...</option>
                    <option value="Dermatologia">Dermatologia</option>
                    <option value="Ortopedia">Ortopedia</option>
                    <option value="Cardiologia">Cardiologia</option>
                    <option value="Cirurgia Plástica">Cirurgia Plástica</option>
                    <option value="Clínico Geral">Clínico Geral</option>
                    <option value="Pediatria">Pediatria</option>
                    <option value="Ginecologia">Ginecologia</option>
                    <option value="Outra">Outra</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-white font-body font-semibold mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="mensagem"
                    required
                    rows={5}
                    value={formData.mensagem}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                    className="w-full bg-dark border border-white/10 rounded-xl px-6 py-4 text-white font-body focus:outline-none focus:border-gold transition-all resize-none"
                    placeholder="Conte-nos sobre sua clínica..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold text-dark font-body font-bold text-lg uppercase px-12 py-5 rounded-full hover:bg-gold-light transition-all duration-300 shadow-gold-glow"
                >
                  Enviar Mensagem
                </button>

                <p className="text-sm text-gray-400 text-center">
                  Ao enviar, você concorda em receber contato da MedGM via e-mail e WhatsApp.
                </p>
                <p className="text-sm text-gray-400 text-center">
                  Atendemos todo o Brasil com consultoria 100% remota via reuniões online.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
