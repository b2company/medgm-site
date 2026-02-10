"use client";

import { motion } from "framer-motion";
import Script from "next/script";

export default function Contato() {
  return (
    <main className="bg-dark min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-[#0A0A0A] to-dark">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight"
            >
              Transforme sua clínica em referência
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl font-body font-light text-gray-300"
            >
              Preencha o formulário e receba um diagnóstico gratuito sobre o crescimento da sua prática médica.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Formulário */}
      <section className="pb-20 md:pb-32">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-br from-[#111] to-[#0A0A0A] border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl"
            >
              <iframe
                src="https://admin.b2company.co/widget/survey/WjbrtUI2XiHyijECVzEG"
                style={{ border: 'none', width: '100%', minHeight: '600px' }}
                scrolling="no"
                id="WjbrtUI2XiHyijECVzEG"
                title="Formulário de Contato MedGM"
              />
              <Script
                src="https://admin.b2company.co/js/form_embed.js"
                strategy="afterInteractive"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
