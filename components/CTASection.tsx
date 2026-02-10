"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  variant?: "default" | "compact" | "minimal";
  className?: string;
}

export default function CTASection({
  title = "Pronto para transformar sua clínica?",
  description = "Preencha o formulário e receba um diagnóstico gratuito de crescimento.",
  buttonText = "Quero Crescer Minha Clínica",
  variant = "default",
  className = "",
}: CTASectionProps) {
  if (variant === "minimal") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`text-center ${className}`}
      >
        <Link
          href="/contato"
          className="inline-flex items-center gap-3 bg-gold text-dark font-body font-bold text-lg uppercase px-8 py-4 rounded-full hover:bg-gold-light transition-all duration-300 shadow-gold-glow group"
        >
          {buttonText}
          <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
        </Link>
      </motion.div>
    );
  }

  if (variant === "compact") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`text-center ${className}`}
      >
        <p className="text-xl md:text-2xl font-body text-gray-300 mb-6">
          {description}
        </p>
        <Link
          href="/contato"
          className="inline-flex items-center gap-3 bg-gold text-dark font-body font-bold text-lg uppercase px-10 py-5 rounded-full hover:bg-gold-light transition-all duration-300 shadow-gold-glow group"
        >
          {buttonText}
          <ArrowRight className="group-hover:translate-x-1 transition-transform" size={22} />
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`bg-gradient-to-br from-[#111] to-[#0A0A0A] border border-gold/20 rounded-3xl p-8 md:p-12 text-center ${className}`}
    >
      <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
        {title}
      </h3>
      <p className="text-xl md:text-2xl font-body text-gray-300 mb-8 max-w-3xl mx-auto">
        {description}
      </p>
      <Link
        href="/contato"
        className="inline-flex items-center gap-3 bg-gold text-dark font-body font-bold text-xl uppercase px-12 py-6 rounded-full hover:bg-gold-light transition-all duration-300 shadow-gold-glow group"
      >
        {buttonText}
        <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
      </Link>
    </motion.div>
  );
}
