export const CLINIC_INFO = {
  name: "Clínica Rafá Vacinas",
  shortName: "Rafá Vacinas",
  slogan: "Vacinação humanizada para toda a família",
  phone: "(49) 98846-7825",
  phoneRaw: "5549988467825",
  whatsappUrl: (message?: string) => {
    const text = message
      ? encodeURIComponent(message)
      : encodeURIComponent(
          "Olá! Gostaria de consultar informações sobre vacinas e agendar um atendimento na Clínica Rafá Vacinas."
        );
    return `https://wa.me/5549988467825?text=${text}`;
  },
  instagram: {
    handle: "@rafavacinasclinica",
    url: "https://www.instagram.com/rafavacinasclinica/",
  },
  address: {
    street: "Rua Santos Dumont, 449",
    complement: "Edifício Evolution, Segundo Andar, Sala 2",
    neighborhood: "Centro",
    city: "Herval d'Oeste",
    state: "SC",
    cep: "89610-000",
    full: "Rua Santos Dumont, 449 — Edifício Evolution, 2º Andar, Sala 2 - Centro, Herval d'Oeste – SC",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Rua+Santos+Dumont+449+Edificio+Evolution+Herval+d+Oeste+SC",
  },
  hours: [
    { days: "Segunda a Sexta-feira", time: "08:00 às 12:00 e das 13:00 às 17:00", open: true },
    { days: "Sábado", time: "08:00 às 12:00", open: true },
    { days: "Domingo", time: "Fechado", open: false },
  ],
  rating: {
    score: "5.0",
    max: "5",
    totalReviews: "Nota Máxima no Google",
  },
};

export const REVIEWS = [
  {
    quote: "Atendimento impecável! Indico de olhos fechados.",
    author: "Julia Pedron",
    role: "Mãe • Avaliação no Google",
    rating: 5,
  },
  {
    quote:
      "Atendimento muito profissional, competente e humano. Não é só aplicação de vacina, você recebe uma aula sobre a vacina e procedimento...",
    author: "Francieli Dalros",
    role: "Cliente • Avaliação no Google",
    rating: 5,
  },
  {
    quote: "Atendimento maravilhoso. Super atencioso e cuidadoso.",
    author: "Rosangela Silva",
    role: "Cliente • Avaliação no Google",
    rating: 5,
  },
  {
    quote: "Profissionais competentes, cuidadosos e preocupados! Excelente trabalho.",
    author: "Fernanda Rossdeutscher",
    role: "Cliente • Avaliação no Google",
    rating: 5,
  },
  {
    quote: "Atendimento Impecável",
    author: "Daniele Cunha",
    role: "Cliente • Avaliação no Google",
    rating: 5,
  },
];

export const VACCINATION_NUCLEI = [
  {
    id: "bebes",
    title: "Bebês & Primeiros Meses",
    subtitle: "Técnicas de alívio da dor & cuidado sem traumas",
    description:
      "Sabemos o quanto os primeiros meses exigem sensibilidade. Utilizamos métodos comprovados de alívio da dor (dispositivos vibratórios e térmicos, postura acolhedora no colo materno e respeito ao tempo do bebê) para transformar a imunização em um momento tranquilo de afeto.",
    highlights: [
      "Ambiente lúdico e livre de jalecos intimidadores",
      "Métodos de alívio e distração sensorial",
      "Acolhimento da família e orientação sobre reações esperadas",
      "Vacinas do recém-nascido: BCG, Hepatite B, Hexavalente, Rotavírus, Pneumocócica",
    ],
    badge: "Especialidade Pediátrica",
  },
  {
    id: "infantil",
    title: "Infantil & Adolescente",
    subtitle: "Calendário vacinal completo com carinho e transparência",
    description:
      "Acompanhamento rigoroso das diretrizes da Sociedade Brasileira de Imunizações (SBIm) e Sociedade Brasileira de Pediatria (SBP). Proteção ampliada com vacinas acelulares mais confortáveis.",
    highlights: [
      "Vacina Meningocócica ACWY e Meningo B",
      "HPV Nonavalente (proteção ampliada)",
      "Tríplice e Tetra Viral sem dor residual excessiva",
      "Atualização completa da caderneta de saúde",
    ],
    badge: "Calendário SBIm / SBP",
  },
  {
    id: "adulto",
    title: "Adulto, Gestante & 60+",
    subtitle: "Longevidade, proteção materno-fetal e imunidade ativa",
    description:
      "A imunização é um cuidado contínuo por todas as fases da vida. Proteção essencial para a futura mamãe e o feto, além de reforços para adultos e vacinas de alta proteção para a melhor idade.",
    highlights: [
      "Gestantes: dTpa (coqueluche/tétano) e Influenza",
      "Idosos: Pneumocócica Conjugada 13/15 e 23-valente",
      "Herpes Zóster Recombinante (Shingrix)",
      "Proteção contra gripes sazonais e reforços decenais",
    ],
    badge: "Saúde Integral",
  },
  {
    id: "ocupacional",
    title: "Ocupacional & Viagens Especiais",
    subtitle: "Soluções corporativas e imunização para viajantes",
    description:
      "Vacinas para profissionais expostos a riscos biológicos, campanhas anuais in company para empresas do Vale do Rio do Peixe e orientação personalizada para destinos nacionais e internacionais.",
    highlights: [
      "Campanhas corporativas de gripe in company",
      "Febre Amarela com certificado e Febre Tifoide",
      "Hepatites A e B ocupacionais",
      "Emissão de orientações vacinais personalizadas",
    ],
    badge: "Empresas & Destinos",
  },
];
