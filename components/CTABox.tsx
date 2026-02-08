"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface CTABoxProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref?: string;
  dark?: boolean;
}

export default function CTABox({
  title,
  description,
  buttonText,
  buttonHref = "https://wa.me/5521999999999?text=Olá! Quero saber mais sobre os serviços da MedGM",
  dark = false,
}: CTABoxProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`p-8 md:p-12 rounded-2xl border-2 ${
        dark ? "bg-dark border-gold text-white" : "bg-neutral border-gold"
      }`}
    >
      <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${dark ? "text-gold" : "text-dark"}`}>
        {title}
      </h3>
      <p className={`text-lg mb-6 ${dark ? "text-gray-300" : "text-gray-700"}`}>
        {description}
      </p>
      <a href={buttonHref} target="_blank" rel="noopener noreferrer" className="btn-primary">
        {buttonText}
        <ArrowRight size={20} />
      </a>
    </motion.div>
  );
}
