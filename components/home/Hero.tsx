"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative bg-dark text-white min-h-screen flex items-center pt-20">
      <div className="container-custom py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex justify-center"
          >
            <Image
              src="/Vector.png"
              alt="MedGM"
              width={200}
              height={100}
              priority
              className="w-auto h-auto max-w-[200px]"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            Sua clínica merece mais do que likes.{" "}
            <span className="text-gold">Merece a era de ouro.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed"
          >
            A MedGM é a consultoria que combina marketing de alto nível e
            estruturação comercial para médicos que querem parar de depender de
            indicações e construir uma agenda previsível, cheia de pacientes
            ideais.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="https://wa.me/5521999999999?text=Olá! Quero agendar meu diagnóstico gratuito"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg"
            >
              Quero Meu Diagnóstico Gratuito
              <ArrowRight size={20} />
            </a>

            <button onClick={scrollToContent} className="btn-secondary text-lg">
              Veja Como Funciona
              <ArrowDown size={20} />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="text-gold" size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
}
