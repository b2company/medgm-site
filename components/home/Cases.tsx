"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const cases = [
  {
    specialty: "Dermatologia Estética",
    name: "Dra. Ana Beatriz Ferreira",
    location: "São Paulo - SP",
    role: "Dermatologista | Proprietária Clínica Pele Saudável",
    before: "R$ 60.000",
    after: "R$ 240.000",
    period: "de faturamento ao mês",
    story:
      "A Clínica Pele Saudável é uma clínica de dermatologia estética em São Paulo.",
    challenge:
      "Antes da MedGM, a clínica não tinha um funil de vendas estruturado, muito menos um processo de aquisição de pacientes organizado. Com alguns meses de trabalho, eles atingiram esse resultado.",
    quote: "Quando a MedGM entrou, no primeiro mês a gente já viu resultado",
  },
  {
    specialty: "Cirurgia Plástica",
    name: "Dr. Roberto Almeida",
    location: "Rio de Janeiro - RJ",
    role: "Cirurgião Plástico",
    before: "23",
    after: "147",
    period: "Cirurgias realizadas em 1 ano",
    story:
      "O Dr. Roberto é um cirurgião plástico reconhecido no Rio de Janeiro com mais de 15 anos de experiência.",
    challenge:
      "Alinhando marketing e vendas em um mesmo time, o médico, em parceria com a MedGM, fez um ano histórico no volume de procedimentos cirúrgicos realizados.",
    quote:
      "A empresa, em parceria com a MedGM, fez um ano histórico no volume de cirurgias.",
  },
  {
    specialty: "Ortodontia",
    name: "Dr. Paulo Henrique Costa",
    location: "Belo Horizonte - MG",
    role: "Ortodontista | Clínica Sorrir Bem",
    before: "Meta de 30",
    after: "Meta batida em 190%",
    period: "durante campanha de alinhadores",
    story:
      "A Clínica Sorrir Bem começou como um pequeno consultório e hoje é referência em ortodontia na região.",
    challenge:
      "Pensando na oportunidade de gerar maior volume de vendas de alinhadores invisíveis, a MedGM entrou em cena com a missão de estruturar uma campanha de alta conversão.",
    quote:
      "A MedGM entrou em cena e superamos a meta em quase 200%. Foi incrível.",
  },
];

export default function Cases() {
  return (
    <section className="bg-dark-deep py-20 md:py-32">
      <div className="container-custom">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
            Mais de{" "}
            <span className="text-gold">200 cases de sucesso registrados</span>
          </h2>
          <p className="text-2xl text-gray-400 font-body max-w-3xl mx-auto">
            Projetos com resultados acima da média são transformados em cases de
            sucesso. Conheça alguns deles abaixo.
          </p>
        </motion.div>

        {/* Cases */}
        <div className="mt-16 space-y-16 max-w-6xl mx-auto">
          {cases.map((caseItem, index) => (
            <motion.div
              key={caseItem.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-dark border-2 border-gold/30 rounded-3xl p-8 md:p-12 hover:border-gold/60 transition-all duration-500">
                {/* Badge Especialidade */}
                <div className="inline-block bg-gold/20 text-gold font-body font-bold text-sm uppercase px-6 py-2 rounded-full mb-6">
                  {caseItem.specialty}
                </div>

                {/* Números Destaque */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-dark-deep border border-gold/20 rounded-2xl p-6">
                    <p className="text-gray-400 font-body text-sm uppercase mb-2">
                      Antes
                    </p>
                    <p className="text-3xl md:text-4xl font-display font-bold text-white">
                      {caseItem.before}
                    </p>
                  </div>
                  <div className="bg-gold/10 border border-gold rounded-2xl p-6">
                    <p className="text-gold font-body text-sm uppercase mb-2">
                      Depois
                    </p>
                    <p className="text-3xl md:text-4xl font-display font-bold text-gold">
                      {caseItem.after}
                    </p>
                  </div>
                </div>

                <p className="text-xl text-gray-300 font-body font-medium mb-8">
                  {caseItem.period}
                </p>

                {/* História */}
                <div className="mb-8">
                  <p className="text-lg text-gray-300 font-body mb-4 leading-relaxed">
                    {caseItem.story}
                  </p>
                  <p className="text-lg text-gray-400 font-body leading-relaxed">
                    {caseItem.challenge}
                  </p>
                </div>

                {/* Depoimento */}
                <div className="bg-dark-deep border-l-4 border-gold rounded-r-xl p-6 relative">
                  <Quote className="absolute -top-2 -left-2 text-gold opacity-20" size={40} />
                  <blockquote className="relative z-10">
                    <p className="text-xl text-white font-body italic mb-6 leading-relaxed">
                      &ldquo;{caseItem.quote}&rdquo;
                    </p>
                    <div>
                      <p className="text-gold font-display font-bold text-lg">
                        {caseItem.name}
                      </p>
                      <p className="text-gray-400 font-body text-sm">
                        {caseItem.role}
                      </p>
                    </div>
                  </blockquote>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <a
            href="#form"
            className="inline-flex items-center gap-3 bg-gold text-dark font-body font-bold text-xl uppercase px-16 py-6 rounded-full hover:bg-gold-light transition-all duration-300 shadow-gold-glow"
          >
            Ser o Próximo Case de Sucesso
          </a>
        </motion.div>
      </div>
    </section>
  );
}
