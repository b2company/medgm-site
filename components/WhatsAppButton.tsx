"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import WhatsAppLink from "@/components/WhatsAppLink";

export default function WhatsAppButton() {
  return (
    <WhatsAppLink
      message="Olá! Quero conhecer os serviços da MedGM"
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle size={32} />
      </motion.div>
    </WhatsAppLink>
  );
}
