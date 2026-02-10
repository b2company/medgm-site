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

            {/* Informações de Contato */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 text-center"
            >
              <p className="text-gray-400 mb-6">
                Prefere falar diretamente com nosso time?
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a
                  href="https://wa.me/5521965116943?text=Olá!%20Quero%20falar%20com%20a%20MedGM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gold hover:text-gold-light transition-colors group"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span className="font-body font-semibold">WhatsApp: +55 21 96511-6943</span>
                </a>
                <span className="hidden sm:block text-gray-600">|</span>
                <a
                  href="mailto:contato@medgm.com.br"
                  className="flex items-center gap-3 text-gold hover:text-gold-light transition-colors group"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="font-body font-semibold">contato@medgm.com.br</span>
                </a>
              </div>
              <p className="text-sm text-gray-500 mt-8">
                Atendimento 100% remoto para todo o Brasil
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
