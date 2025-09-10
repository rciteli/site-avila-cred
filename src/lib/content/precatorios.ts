// lib/content/precatorios.ts
export const TIPOS = [
  { slug: "federal",  titulo: "Precatórios Federais",  resumo: "União, autarquias e TRFs (Justiça Federal)." },
  { slug: "estadual", titulo: "Precatórios Estaduais", resumo: "Governos estaduais e suas secretarias." },
  { slug: "municipal",titulo: "Precatórios Municipais",resumo: "Prefeituras e autarquias municipais." },
];

export const CHECKLIST = [
  { item: "Documento de identificação", tip: "RG/CPF ou CNH" },
  { item: "Comprovante de residência", tip: "Últimos 3 meses" },
  { item: "Procuração/mandato", tip: "Se representado por advogado" },
  { item: "Cópia do processo/espelho do precatório", tip: "Número, órgão/UF e situação" },
  { item: "Certidões pertinentes", tip: "Quando aplicável" },
];

export const FAQ = [
  {
    q: "O que é um precatório? É diferente de RPV?",
    a: "Precatório é uma ordem de pagamento acima do teto de RPV emitida pelo Judiciário contra ente público. RPV é para valores menores e costuma ter prazo mais curto.",
  },
  {
    q: "Como é calculada a proposta (deságio)?",
    a: "Considera riscos, prazos e liquidez. Buscamos condições competitivas com parceiros e fundos para maximizar o valor para o credor.",
  },
  {
    q: "Quais custos e impostos existem?",
    a: "Podem incidir tributos conforme o caso (ex.: IR). Esclarecemos tudo previamente, com total transparência.",
  },
  {
    q: "A cessão é segura juridicamente?",
    a: "Sim. O contrato segue requisitos legais e conta com análise jurídica e contábil especializada.",
  },
  {
    q: "Depois de assinar, quando recebo?",
    a: "Após a formalização e aprovações, o pagamento é liberado conforme prazos bancários.",
  },
];

export const PERSONAS = [
  { titulo: "Pessoa Física credora", desc: "Liquidez para organizar finanças e novos projetos." },
  { titulo: "Herdeiros", desc: "Orientação em sucessão e cessão de crédito com segurança." },
  { titulo: "Pessoa Jurídica", desc: "Antecipação para capital de giro e investimentos." },
  { titulo: "Advogados", desc: "Canal dedicado, SLA e acompanhamento da esteira." },
];
