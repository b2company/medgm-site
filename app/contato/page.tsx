"use client";

import { useState } from "react";
import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contato() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    specialty: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Aqui você pode integrar com seu backend ou serviço de email
    // Por enquanto, vamos redirecionar para o WhatsApp
    const whatsappMessage = `Olá! Meu nome é ${formData.name}. ${formData.message}`;
    const whatsappUrl = `https://wa.me/5521999999999?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");
    setIsSubmitting(false);

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      specialty: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-dark text-white pt-32 pb-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Vamos conversar sobre o{" "}
              <span className="text-gold">futuro da sua clínica?</span>
            </h1>
            <p className="text-xl text-gray-300">
              Entre em contato e descubra como podemos ajudar a construir a era de
              ouro da medicina na sua prática.
            </p>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Informações de Contato */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Fale Conosco</h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-gold p-3 rounded-lg">
                    <Phone className="text-dark" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">WhatsApp</h3>
                    <a
                      href="https://wa.me/5521999999999"
                      className="text-gold hover:underline"
                    >
                      (21) 99999-9999
                    </a>
                    <p className="text-sm text-gray-600">
                      Seg - Sex: 9h às 18h
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gold p-3 rounded-lg">
                    <Mail className="text-dark" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">E-mail</h3>
                    <a
                      href="mailto:contato@medgm.com.br"
                      className="text-gold hover:underline"
                    >
                      contato@medgm.com.br
                    </a>
                    <p className="text-sm text-gray-600">
                      Respondemos em até 24h
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gold p-3 rounded-lg">
                    <MapPin className="text-dark" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Localização</h3>
                    <p className="text-gray-700">
                      Rio de Janeiro, RJ
                      <br />
                      <span className="text-sm text-gray-600">
                        Atendimento 100% remoto
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-neutral p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">Horário de Atendimento</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex justify-between">
                    <span>Segunda a Sexta:</span>
                    <span className="font-semibold">9h às 18h</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sábado:</span>
                    <span className="font-semibold">Fechado</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Domingo:</span>
                    <span className="font-semibold">Fechado</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Formulário */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Envie uma Mensagem</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-bold mb-2"
                  >
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-gold focus:outline-none transition-colors"
                    placeholder="Dr. João Silva"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold mb-2"
                  >
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-gold focus:outline-none transition-colors"
                    placeholder="contato@clinica.com.br"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-bold mb-2"
                  >
                    WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-gold focus:outline-none transition-colors"
                    placeholder="(21) 99999-9999"
                  />
                </div>

                <div>
                  <label
                    htmlFor="specialty"
                    className="block text-sm font-bold mb-2"
                  >
                    Especialidade
                  </label>
                  <select
                    id="specialty"
                    name="specialty"
                    value={formData.specialty}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-gold focus:outline-none transition-colors"
                  >
                    <option value="">Selecione...</option>
                    <option value="dermatologia">Dermatologia</option>
                    <option value="ortopedia">Ortopedia</option>
                    <option value="cardiologia">Cardiologia</option>
                    <option value="cirurgia-plastica">Cirurgia Plástica</option>
                    <option value="clinico-geral">Clínico Geral</option>
                    <option value="pediatria">Pediatria</option>
                    <option value="ginecologia">Ginecologia</option>
                    <option value="outra">Outra</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-bold mb-2"
                  >
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-gold focus:outline-none transition-colors resize-none"
                    placeholder="Conte-nos sobre sua clínica e como podemos ajudar..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full justify-center text-lg"
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                  <Send size={20} />
                </button>

                <p className="text-sm text-gray-600 text-center">
                  Ao enviar, você concorda em receber contato da MedGM via e-mail
                  e WhatsApp.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa (opcional) */}
      <section className="bg-neutral py-12">
        <div className="container-custom text-center">
          <p className="text-gray-700 text-lg">
            <strong className="text-gold">Atendemos todo o Brasil</strong> com
            consultoria 100% remota via reuniões online.
          </p>
        </div>
      </section>
    </>
  );
}
