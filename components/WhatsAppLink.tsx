"use client";

import { useUTM } from "@/hooks/useUTM";
import { ReactNode } from "react";

interface WhatsAppLinkProps {
  phone?: string;
  message: string;
  className?: string;
  children: ReactNode;
  target?: string;
  rel?: string;
}

export default function WhatsAppLink({
  phone = "5521965116943",
  message,
  className = "",
  children,
  target = "_blank",
  rel = "noopener noreferrer",
}: WhatsAppLinkProps) {
  const { addUTMToMessage } = useUTM();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const messageWithUTM = addUTMToMessage(message);
    const encodedMessage = encodeURIComponent(messageWithUTM);
    const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
    window.open(whatsappUrl, target);
  };

  return (
    <a
      href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
      onClick={handleClick}
      className={className}
      target={target}
      rel={rel}
    >
      {children}
    </a>
  );
}
