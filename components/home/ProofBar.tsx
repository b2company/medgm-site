"use client";

import { motion } from "framer-motion";
import { Users, Stethoscope, Shield, MapPin } from "lucide-react";

export default function ProofBar() {
  const stats = [
    { icon: Users, label: "8.347 pacientes agendados em 2025" },
    { icon: Stethoscope, label: "R$ 12,4M em faturamento gerado" },
    { icon: Shield, label: "ROI médio de 4,7x em 6 meses" },
    { icon: MapPin, label: "137 clínicas transformadas" },
  ];

  return (
    <section className="bg-gold py-8">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <stat.icon className="text-dark mb-2" size={32} />
              <p className="font-bold text-dark">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
