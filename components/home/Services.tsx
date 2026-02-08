"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";

export default function Services() {
  const plans = [
    {
      name: "START",
      description: "Para médicos começando no digital",
      popular: false,
      features: [
        "Gestão de redes sociais",
        "Tráfego pago básico",
        "Criação de conteúdo mensal",
        "Google Meu Negócio",
        "Relatório mensal",
      ],
    },
    {
      name: "SELECT",
      description: "Para clínicas estruturando o comercial",
      popular: true,
      features: [
        "Tudo do Start",
        "Consultoria de posicionamento",
        "Implementação comercial",
        "Hotseat mensal para secretárias",
        "Scripts de venda",
        "Dashboard de métricas",
      ],
    },
    {
      name: "EXCLUSIVE",
      description: "Para clínicas que querem dominar o mercado",
      popular: false,
      features: [
        "Tudo do Select",
        "CRM dedicado",
        "Secretária em IA",
        "Treinamento individual",
        "Trilhas de conteúdo gravadas",
        "Consultoria estratégica mensal",
      ],
    },
  ];

  return (
    <section className="section-padding bg-dark text-white">
      <div className="container-custom">
        <SectionTitle
          title="Soluções completas para cada fase da sua clínica"
          light
        />

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative bg-dark-deep backdrop-blur-sm rounded-[40px] p-8 transition-all duration-500 ${
                plan.popular ? "scale-105" : ""
              }`}
              style={
                plan.popular
                  ? {
                      border: "1px solid rgb(202, 170, 130)",
                      boxShadow:
                        "rgba(202, 170, 130, 0.5) 0px 0px 20px 0px inset, rgba(202, 170, 130, 0.3) 0px 0px 40px 0px",
                    }
                  : {
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      boxShadow: "rgba(0, 0, 0, 0.5) 0px 10px 40px",
                    }
              }
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gold text-dark px-4 py-1 rounded-full text-sm font-bold">
                    Mais Popular
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold text-gold mb-2">
                {plan.name}
              </h3>
              <p className="text-gray-300 mb-6">{plan.description}</p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="text-gold flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/5521999999999?text=Olá! Quero saber mais sobre o plano ${plan.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full ${
                  plan.popular ? "btn-primary" : "btn-secondary"
                } justify-center`}
              >
                Saber Mais
                <ArrowRight size={20} />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://wa.me/5521999999999?text=Olá! Qual plano é ideal para mim?"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg"
          >
            Qual Plano é Ideal Para Mim?
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
