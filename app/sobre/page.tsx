import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import { Target, Shield, Lightbulb, Users, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre a MedGM",
  description:
    "Conheça a MedGM, consultoria especializada em marketing médico e gestão comercial para clínicas. Nossa missão é trazer de volta a era de ouro da medicina.",
};

export default function Sobre() {
  const values = [
    {
      icon: Target,
      title: "Resultado mensurável > métricas de vaidade",
      description: "Focamos em números que importam: agendamentos, ROI e receita.",
    },
    {
      icon: Shield,
      title: "Ética e conformidade com o CFM, sempre",
      description: "Todo nosso trabalho segue rigorosamente a Resolução CFM 2.336/2023.",
    },
    {
      icon: Lightbulb,
      title: "Implementação > teoria",
      description: "Montamos o sistema completo para funcionar dentro da sua clínica.",
    },
    {
      icon: Users,
      title: "Estratégia específica, nunca genérica",
      description: "Cada especialidade e mercado recebe uma abordagem personalizada.",
    },
    {
      icon: Award,
      title: "Autonomia do cliente",
      description: "O sistema funciona sem nós. Você domina seu próprio crescimento.",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-dark text-white pt-32 pb-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nascemos para trazer de volta a{" "}
              <span className="text-gold">era de ouro da medicina</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              A MedGM é mais do que uma consultoria de marketing médico. Somos a
              ponte entre a excelência clínica que você já tem e o reconhecimento
              de mercado que você merece.
            </p>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <SectionTitle
              title="Por que existimos"
              centered={false}
            />
            <div className="prose prose-lg max-w-none mt-8 text-gray-700 leading-relaxed">
              <p className="text-lg mb-6">
                A MedGM nasceu de uma constatação: <strong>o médico não precisa de mais seguidores. Precisa de mais pacientes.</strong> E para ter mais pacientes, não basta fazer marketing genérico. Precisa de uma estratégia comercial que funcione de ponta a ponta.
              </p>
              <p className="text-lg mb-6">
                O mercado está saturado de mensagens iguais. Agências que tratam todos os nichos da mesma forma. Modelos de marketing que priorizam vaidade ao invés de retorno real. Enquanto isso, médicos brilhantes continuam com agendas instáveis, dependentes de indicações e sem previsibilidade.
              </p>
              <p className="text-lg mb-6">
                Nós existimos para mudar isso. Somos a ponte entre a excelência clínica que você já tem e o reconhecimento de mercado que você merece. Combinamos estratégia comercial profunda com marketing digital de alto nível — tudo adaptado às regras do CFM e à realidade do médico brasileiro.
              </p>
              <p className="text-lg font-bold text-gold">
                Não fazemos marketing de vaidade. Construímos a era de ouro da sua clínica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="section-padding bg-neutral">
        <div className="container-custom">
          <SectionTitle title="Nossos Valores" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {values.map((value, index) => (
              <div key={index} className="card">
                <value.icon className="text-gold mb-4" size={40} />
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-dark text-white">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gold mb-6">
            Vamos construir a era de ouro da sua clínica?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Agende seu diagnóstico gratuito e descubra como podemos ajudar.
          </p>
          <a
            href="https://wa.me/5521999999999?text=Olá! Quero agendar meu diagnóstico gratuito"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg"
          >
            Falar com a MedGM
          </a>
        </div>
      </section>
    </>
  );
}
