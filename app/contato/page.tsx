"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import WhatsAppLink from "@/components/WhatsAppLink";
import Script from "next/script";

export default function Contato() {
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
                    <WhatsAppLink
                      message="Olá! Quero falar com a MedGM"
                      className="text-gray-300 hover:text-gold transition-colors"
                    >
                      +55 21 96511-6943
                    </WhatsAppLink>
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

            {/* Formulário Embedado */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <div className="bg-[#111] border border-white/10 rounded-2xl p-8">
                <iframe
                  src="https://admin.b2company.co/widget/survey/lgr3ErIPvgmEaTq7ZsO2"
                  style={{ border: 'none', width: '100%' }}
                  scrolling="no"
                  id="lgr3ErIPvgmEaTq7ZsO2"
                  title="Formulário de Contato MedGM"
                />
                <Script
                  src="https://admin.b2company.co/js/form_embed.js"
                  strategy="afterInteractive"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
