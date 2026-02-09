import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Serviços de Marketing Médico",
  description:
    "Conheça os planos da MedGM: Start, Select e Exclusive. Soluções completas de marketing médico e gestão comercial para cada fase da sua clínica.",
};

export default function Servicos() {
  const plans = [
    {
      id: "start",
      name: "START",
      subtitle: "Para médicos começando no digital",
      description:
        "Presença digital estruturada com gestão de redes sociais, tráfego pago e conteúdo estratégico.",
      features: [
        "Gestão de redes sociais (Instagram e Facebook)",
        "Criação de 12 posts mensais",
        "Tráfego pago básico (Google Ads e Meta Ads)",
        "Google Meu Negócio otimizado",
        "Relatório mensal de métricas",
        "1 reunião estratégica mensal",
      ],
      forWho: "Médicos com faturamento até R$ 30k/mês que precisam estabelecer presença digital",
    },
    {
      id: "select",
      name: "SELECT",
      subtitle: "Para clínicas estruturando o comercial",
      description:
        "Tudo do Start + estruturação comercial completa com treinamento de equipe e CRM.",
      popular: true,
      features: [
        "Tudo do plano Start",
        "Consultoria de posicionamento estratégico",
        "Implementação completa de CRM",
        "Scripts de agendamento e conversão",
        "Hotseat mensal para secretárias",
        "Dashboard de métricas (CAC, LTV, ROI)",
        "Fluxos de follow-up automatizados",
        "Pesquisa de satisfação (NPS)",
        "2 reuniões estratégicas mensais",
      ],
      forWho: "Clínicas com R$ 50k+ de faturamento que querem estrutura comercial e previsibilidade",
    },
    {
      id: "exclusive",
      name: "EXCLUSIVE",
      subtitle: "Para clínicas que querem dominar o mercado",
      description:
        "Tudo do Select + automação avançada, IA e consultoria estratégica dedicada.",
      features: [
        "Tudo do plano Select",
        "CRM dedicado e personalizado",
        "Secretária em IA para atendimento 24/7",
        "Treinamento individual gravado",
        "Trilhas de conteúdo exclusivas",
        "Consultoria estratégica semanal com sócios",
        "Análise de concorrência mensal",
        "Programa de indicação estruturado",
        "Campanhas de reativação de pacientes",
        "Suporte prioritário via WhatsApp",
      ],
      forWho: "Clínicas premium que querem dominar o mercado da sua região e especialidade",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-dark-deep via-dark to-dark-deeper text-white pt-32 pb-20 shadow-dark-inset">
        <div className="absolute inset-0 bg-black/30 z-0"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display mb-8 leading-tight">
              Soluções completas para cada fase da{" "}
              <span className="text-gold bg-gradient-to-r from-gold-dark via-gold to-gold-light bg-clip-text text-transparent">sua clínica</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light">
              Do início da jornada digital até a dominância de mercado. Escolha o
              plano ideal para o seu momento.
            </p>
          </div>
        </div>
      </section>

      {/* Planos Detalhados */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <div className="space-y-16">
            {plans.map((plan, index) => (
              <div
                key={plan.id}
                id={plan.id}
                className={`relative ${
                  plan.popular ? "border-2 border-gold rounded-2xl p-8 bg-neutral" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-8">
                    <span className="bg-gold text-dark px-4 py-1 rounded-full text-sm font-bold">
                      Mais Popular
                    </span>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-3xl font-heading font-bold text-gold mb-2">
                      {plan.name}
                    </h2>
                    <p className="text-xl font-heading font-semibold mb-4">{plan.subtitle}</p>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {plan.description}
                    </p>
                    <div className="bg-white rounded-lg p-6 border-2 border-gold">
                      <p className="text-sm font-bold text-gold mb-2">IDEAL PARA:</p>
                      <p className="text-gray-700">{plan.forWho}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-4">O que está incluído:</h3>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="text-gold flex-shrink-0 mt-1" size={20} />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={`https://wa.me/5521999999999?text=Olá! Quero saber mais sobre o plano ${plan.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full justify-center"
                    >
                      Quero Este Plano
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparação */}
      <section className="section-padding bg-neutral">
        <div className="container-custom">
          <SectionTitle title="Comparação de Planos" />
          <div className="overflow-x-auto mt-12">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead className="bg-dark text-white">
                <tr>
                  <th className="p-4 text-left">Recurso</th>
                  <th className="p-4 text-center">START</th>
                  <th className="p-4 text-center bg-gold text-dark">SELECT</th>
                  <th className="p-4 text-center">EXCLUSIVE</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="p-4">Gestão de Redes Sociais</td>
                  <td className="p-4 text-center"><Check className="mx-auto text-gold" size={20} /></td>
                  <td className="p-4 text-center bg-cream"><Check className="mx-auto text-gold" size={20} /></td>
                  <td className="p-4 text-center"><Check className="mx-auto text-gold" size={20} /></td>
                </tr>
                <tr>
                  <td className="p-4">Tráfego Pago</td>
                  <td className="p-4 text-center"><Check className="mx-auto text-gold" size={20} /></td>
                  <td className="p-4 text-center bg-cream"><Check className="mx-auto text-gold" size={20} /></td>
                  <td className="p-4 text-center"><Check className="mx-auto text-gold" size={20} /></td>
                </tr>
                <tr>
                  <td className="p-4">Estruturação Comercial</td>
                  <td className="p-4 text-center">-</td>
                  <td className="p-4 text-center bg-cream"><Check className="mx-auto text-gold" size={20} /></td>
                  <td className="p-4 text-center"><Check className="mx-auto text-gold" size={20} /></td>
                </tr>
                <tr>
                  <td className="p-4">CRM Implementado</td>
                  <td className="p-4 text-center">-</td>
                  <td className="p-4 text-center bg-cream"><Check className="mx-auto text-gold" size={20} /></td>
                  <td className="p-4 text-center"><Check className="mx-auto text-gold" size={20} /></td>
                </tr>
                <tr>
                  <td className="p-4">Secretária em IA</td>
                  <td className="p-4 text-center">-</td>
                  <td className="p-4 text-center bg-cream">-</td>
                  <td className="p-4 text-center"><Check className="mx-auto text-gold" size={20} /></td>
                </tr>
                <tr>
                  <td className="p-4">Consultoria Estratégica</td>
                  <td className="p-4 text-center">Mensal</td>
                  <td className="p-4 text-center bg-cream">2x/mês</td>
                  <td className="p-4 text-center">Semanal</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-dark-deep via-dark to-dark-deeper text-white">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            Não tem certeza qual{" "}
            <span className="text-gold bg-gradient-to-r from-gold-dark via-gold to-gold-light bg-clip-text text-transparent">
              plano escolher?
            </span>
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Agende um diagnóstico gratuito e vamos analisar juntos qual a melhor
            solução para o seu momento.
          </p>
          <a
            href="https://wa.me/5521999999999?text=Olá! Quero ajuda para escolher o plano ideal"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg"
          >
            Agendar Diagnóstico Gratuito
          </a>
        </div>
      </section>
    </>
  );
}
