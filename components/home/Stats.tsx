"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Stat {
  number: string;
  label: string;
  suffix?: string;
}

const stats: Stat[] = [
  { number: "500", label: "Clínicas Atendidas", suffix: "+" },
  { number: "15", label: "Anos de Experiência", suffix: "+" },
  { number: "98", label: "Taxa de Satisfação", suffix: "%" },
  { number: "10M", label: "Em Faturamento Gerado", suffix: "+" },
];

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("stats-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section
      id="stats-section"
      className="py-20 md:py-32 bg-gradient-to-br from-dark-deeper via-dark to-dark-deep relative overflow-hidden"
    >
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
            Resultados que{" "}
            <span className="text-gold bg-gradient-to-r from-gold-dark via-gold to-gold-light bg-clip-text text-transparent">
              Transformam Clínicas
            </span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Números que comprovam nossa excelência em marketing médico
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div
                className="bg-dark-deep rounded-[24px] p-6 md:p-8 text-center transition-all duration-700 hover:scale-105"
                style={{
                  border: "1px solid rgba(202, 170, 130, 0.3)",
                  boxShadow:
                    "rgba(202, 170, 130, 0.2) 0px 0px 20px 0px inset, rgba(0, 0, 0, 0.5) 0px 10px 40px",
                }}
              >
                <div className="text-4xl md:text-5xl lg:text-6xl font-display text-gold mb-3 font-bold">
                  {isVisible ? stat.number : "0"}
                  {stat.suffix}
                </div>
                <div className="text-sm md:text-base text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-xl bg-gradient-to-br from-gold/20 to-transparent"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
