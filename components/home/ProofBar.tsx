"use client";

import { motion } from "framer-motion";
import { Users, Stethoscope, Shield, MapPin } from "lucide-react";

export default function ProofBar() {
  const stats = [
    { icon: Users, label: "+150 médicos atendidos" },
    { icon: Stethoscope, label: "+30 especialidades" },
    { icon: Shield, label: "100% Conforme CFM" },
    { icon: MapPin, label: "Atuação Nacional" },
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
