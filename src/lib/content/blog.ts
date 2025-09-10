// lib/content/blog.ts
export type BlogPost = {
  slug: string;
  title: string;
  date: string;          // ISO string
  readingTime: string;   // ex.: "6 min"
  tags: string[];
  excerpt: string;
  content: Array<
    | { type: "h2"; text: string }
    | { type: "p"; text: string }
    | { type: "ul"; items: string[] }
    | { type: "quote"; text: string }
  >;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "o-que-e-precatorio-e-diferenca-para-rpv",
    title: "O que é Precatório? E qual a diferença para RPV?",
    date: "2025-08-20",
    readingTime: "6 min",
    tags: ["Conceitos", "RPV", "Educação Financeira"],
    excerpt:
      "Entenda o que é um precatório, como ele é gerado e por que é diferente da Requisição de Pequeno Valor (RPV).",
    content: [
      { type: "p", text: "Precatório é uma ordem de pagamento emitida pelo Judiciário para quitar dívidas acima do teto da RPV devidas por entes públicos (União, estados e municípios)." },
      { type: "p", text: "Já a RPV (Requisição de Pequeno Valor) é utilizada para débitos menores, com regras de prazos frequentemente mais curtos do que os dos precatórios." },
      { type: "h2", text: "Como um precatório nasce?" },
      { type: "p", text: "Após decisão judicial definitiva (trânsito em julgado), o valor é inscrito para pagamento pelo orçamento do ente devedor. Esse registro dá origem ao precatório." },
      { type: "h2", text: "Principais diferenças para RPV" },
      { type: "ul", items: [
        "Teto de valor: RPVs obedecem limites por ente; precatórios são para valores acima do teto.",
        "Prazos: RPVs têm prazos legais mais curtos; precatórios seguem cronogramas orçamentários.",
        "Fila e previsibilidade: precatórios podem enfrentar filas/atrasos; RPVs costumam ser mais previsíveis.",
      ]},
      { type: "quote", text: "Saber se seu crédito é RPV ou precatório muda totalmente a estratégia de liquidez." },
      { type: "p", text: "Para quem precisa de liquidez, a venda do precatório é uma alternativa para antecipar recursos com segurança jurídica." },
    ],
  },
  {
    slug: "como-funciona-a-cessao-de-credito-de-precatorios",
    title: "Como funciona a cessão de crédito de precatórios",
    date: "2025-08-27",
    readingTime: "7 min",
    tags: ["Processo", "Cessão", "Juridico"],
    excerpt:
      "Da análise ao pagamento: veja as etapas da cessão de crédito e o que garantir em termos de documentação e segurança.",
    content: [
      { type: "p", text: "A cessão de crédito é o mecanismo jurídico que permite transferir o direito de receber o precatório para um cessionário (investidor/fundo)." },
      { type: "h2", text: "Etapas resumidas" },
      { type: "ul", items: [
        "Envio de dados e elegibilidade preliminar.",
        "Proposta de compra com base em risco, prazo e liquidez.",
        "Checklist e conferência documental.",
        "Assinatura dos instrumentos e averbação quando aplicável.",
        "Pagamento conforme prazos bancários do cessionário.",
      ]},
      { type: "h2", text: "Pontos de atenção" },
      { type: "ul", items: [
        "Transparência nos custos: entenda taxas, tributos e deságio.",
        "Conferência de titularidade e eventuais gravames.",
        "Assessoria jurídica e contábil durante todo o fluxo.",
      ]},
      { type: "p", text: "Com parceiros sérios, a cessão é um procedimento claro e seguro, reduzindo incertezas de prazo." },
    ],
  },
  {
    slug: "documentos-necessarios-para-vender-um-precatorio",
    title: "Documentos necessários para vender um precatório",
    date: "2025-09-01",
    readingTime: "5 min",
    tags: ["Checklist", "Documentação"],
    excerpt:
      "Organize-se: veja o checklist de documentos que costuma acelerar a análise e a proposta de compra.",
    content: [
      { type: "p", text: "Uma documentação bem organizada acelera a análise, reduz dúvidas e antecipa a proposta." },
      { type: "ul", items: [
        "Documento de identificação (RG/CPF ou CNH).",
        "Comprovante de residência recente.",
        "Procuração/mandato (se representado por advogado/herdeiro).",
        "Cópia do processo/espelho do precatório com número, órgão/UF e situação.",
        "Certidões pertinentes (quando aplicável).",
        "Dados bancários do titular para o recebimento.",
      ]},
      { type: "p", text: "Sempre que possível, envie PDFs legíveis e atualizados para evitar retrabalho." },
    ],
  },
  {
    slug: "desagio-em-precatorios-como-e-calculado",
    title: "Deságio em precatórios: como é calculado?",
    date: "2025-09-05",
    readingTime: "6 min",
    tags: ["Deságio", "Mercado", "Liquidez"],
    excerpt:
      "Risco, prazo e liquidez: os principais componentes que influenciam o valor de compra do seu precatório.",
    content: [
      { type: "p", text: "O deságio reflete riscos e o tempo de espera que o investidor assume ao comprar um precatório." },
      { type: "h2", text: "Componentes do deságio" },
      { type: "ul", items: [
        "Risco jurídico e documental.",
        "Prazo estimado de pagamento do ente devedor.",
        "Cenário macro e apetite dos compradores.",
        "Custos de diligência e formalização.",
      ]},
      { type: "p", text: "Mercados mais líquidos tendem a reduzir o deságio; filas e incertezas orçamentárias tendem a aumentá-lo." },
    ],
  },
  {
    slug: "federal-estadual-ou-municipal-qual-a-diferenca",
    title: "Federal, Estadual ou Municipal: qual a diferença?",
    date: "2025-09-07",
    readingTime: "7 min",
    tags: ["Tipos", "Educação Financeira"],
    excerpt:
      "Entenda as diferenças práticas entre precatórios federais, estaduais e municipais, e como isso impacta prazos e apetite de compra.",
    content: [
      { type: "p", text: "Cada ente tem orçamento, regras e histórico de pagamento diferentes — isso impacta prazos e o interesse de compra." },
      { type: "ul", items: [
        "Federais: frequentemente maior previsibilidade orçamentária.",
        "Estaduais: variam bastante de UF para UF.",
        "Municipais: exigências locais e rotinas específicas de cada município.",
      ]},
      { type: "p", text: "Entender em qual categoria está o seu crédito ajuda a antecipar condições da proposta." },
    ],
  },
  {
    slug: "faq-antecipacao-de-precatorios",
    title: "FAQ: Antecipação de precatórios",
    date: "2025-09-09",
    readingTime: "8 min",
    tags: ["FAQ", "Guia rápido"],
    excerpt:
      "As dúvidas mais comuns: segurança, impostos, prazos, documentação e passo a passo da venda.",
    content: [
      { type: "h2", text: "É seguro vender um precatório?" },
      { type: "p", text: "Sim, desde que o processo siga requisitos legais e conte com análise jurídica e contábil." },
      { type: "h2", text: "Quais impostos podem incidir?" },
      { type: "p", text: "Depende do caso. É fundamental consultar sua assessoria para entender impactos tributários." },
      { type: "h2", text: "Em quanto tempo recebo?" },
      { type: "p", text: "Após a formalização e aprovações, o pagamento ocorre conforme prazos bancários do cessionário." },
      { type: "h2", text: "O que acelera a proposta?" },
      { type: "ul", items: [
        "Documentação completa e atualizada.",
        "Clareza sobre titularidade e representantes.",
        "Informações do processo e do ente devedor.",
      ]},
    ],
  },
];

// utilitário
export function getPostBySlug(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
