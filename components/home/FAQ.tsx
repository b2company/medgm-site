import SectionTitle from "@/components/SectionTitle";
import FAQItem from "@/components/FAQItem";

export default function FAQ() {
  const faqs = [
    {
      question: "Qual a diferença da MedGM para uma agência de marketing comum?",
      answer:
        "Agências entregam campanhas. Nós implementamos processos. Além do marketing, estruturamos seu comercial: treinamos secretárias, criamos scripts de agendamento, implementamos CRM e medimos cada etapa do funil. É por isso que nossos clientes não dependem só de tráfego pago para encher a agenda.",
    },
    {
      question: "Vocês atendem qual especialidade?",
      answer:
        "Todas. Já atendemos dermatologistas, ortopedistas, cardiologistas, cirurgiões plásticos, clínicos gerais e muitas outras. Adaptamos a estratégia para o perfil de cada público e cada especialidade.",
    },
    {
      question: "Como funciona o Diagnóstico Gratuito?",
      answer:
        "Em uma reunião online de 30 minutos, analisamos sua presença digital, seu processo comercial e identificamos as maiores oportunidades de crescimento. Sem compromisso, sem cartão de crédito.",
    },
    {
      question: "O marketing médico é permitido pelo CFM?",
      answer:
        "Sim. A Resolução CFM 2.336/2023 permite marketing de caráter educativo e informativo. Todo nosso trabalho é 100% conforme as normas. Focamos em conteúdo que educa e posiciona — nunca em sensacionalismo.",
    },
    {
      question: "Quanto tempo para ver resultados?",
      answer:
        "Tráfego pago: primeiros contatos em 15-30 dias. SEO: resultados consistentes a partir de 3-6 meses. Estruturação comercial: retorno já no primeiro mês com a melhora da taxa de conversão da equipe.",
    },
    {
      question: "Vocês atendem fora do Rio de Janeiro?",
      answer:
        "Sim. Atendimento 100% remoto com reuniões online semanais. Já atendemos médicos em todo o Brasil.",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle title="Perguntas Frequentes" />

        <div className="max-w-3xl mx-auto mt-12">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
