"use client";

import { useEffect, useState } from "react";

interface UTMParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
}

export function useUTM() {
  const [utmParams, setUtmParams] = useState<UTMParams>({});

  useEffect(() => {
    // Captura UTMs da URL
    const searchParams = new URLSearchParams(window.location.search);
    const params: UTMParams = {};

    // Lista de parâmetros UTM para capturar
    const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];

    utmKeys.forEach(key => {
      const value = searchParams.get(key);
      if (value) {
        params[key as keyof UTMParams] = value;
      }
    });

    // Se encontrou UTMs, salva no sessionStorage
    if (Object.keys(params).length > 0) {
      sessionStorage.setItem('utm_params', JSON.stringify(params));
      setUtmParams(params);
    } else {
      // Se não tem UTMs na URL, tenta recuperar do sessionStorage
      const stored = sessionStorage.getItem('utm_params');
      if (stored) {
        setUtmParams(JSON.parse(stored));
      }
    }
  }, []);

  // Função para adicionar UTMs a uma mensagem de WhatsApp
  const addUTMToMessage = (message: string): string => {
    const stored = sessionStorage.getItem('utm_params');
    if (!stored) return message;

    const params: UTMParams = JSON.parse(stored);
    const utmString = Object.entries(params)
      .filter(([_, value]) => value)
      .map(([key, value]) => `${key}: ${value}`)
      .join(' | ');

    if (utmString) {
      return `${message}\n\n📊 Origem: ${utmString}`;
    }

    return message;
  };

  // Função para obter UTMs como string
  const getUTMString = (): string => {
    const stored = sessionStorage.getItem('utm_params');
    if (!stored) return '';

    const params: UTMParams = JSON.parse(stored);
    return Object.entries(params)
      .filter(([_, value]) => value)
      .map(([key, value]) => `${key}: ${value}`)
      .join(' | ');
  };

  return { utmParams, addUTMToMessage, getUTMString };
}
