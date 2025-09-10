// lib/content/precatorios-tipos.ts
export type TipoSlug = "federal" | "estadual" | "municipal";

export const TYPE_DETAILS: Record<
  TipoSlug,
  {
    titulo: string;
    heroResumo: string;
    descricao: string;
    elegibilidade: string[];
    orgaos?: string[];
    dicas?: string[];
  }
> = {
  federal: {
    titulo: "Precatórios Federais",
    heroResumo: "União e autarquias (TRFs). Análise jurídica e contábil especializada.",
    descricao:
      "Atuamos na antecipação de precatórios federais com fluxo claro e seguro, desde a verificação de elegibilidade até a formalização da cessão e pagamento.",
    elegibilidade: [
      "Precatório expedido (não apenas RPV) e identificável por número de processo/TRF",
      "Titularidade comprovada (ou representação por mandato/procuração)",
      "Ausência de impedimentos legais ou gravames impeditivos",
      "Documentação essencial disponível para conferência",
    ],
    orgaos: [
      "Justiça Federal (TRF1–TRF6)",
      "Autarquias federais (ex.: INSS, DNIT, IBAMA)",
      "União (AGU/PGFN como parte)",
    ],
    dicas: [
      "Separe o espelho do precatório, decisão e dados bancários do titular.",
      "Se houver herdeiros, mantenha a documentação de sucessão acessível.",
    ],
  },
  estadual: {
    titulo: "Precatórios Estaduais",
    heroResumo: "Governos e secretarias estaduais. Cobertura nacional.",
    descricao:
      "Para títulos estaduais, mapeamos particularidades de cada UF, prazos e exigências, buscando as melhores condições junto aos nossos parceiros.",
    elegibilidade: [
      "Precatório expedido pelo Tribunal de Justiça do Estado",
      "Titular/representante com documentos válidos",
      "Sem bloqueios judiciais impeditivos para cessão",
      "Dados do órgão devedor e situação processual",
    ],
    orgaos: [
      "Secretarias de Fazenda/Planejamento das UFs",
      "Autarquias estaduais (ex.: DETRAN, universidades estaduais)",
      "Tribunais de Justiça (TJ estaduais)",
    ],
    dicas: [
      "Em alguns estados o tempo de tramitação e formalização varia; alinhamos o cronograma com você.",
      "Guarde comprovantes e certidões recentes: agiliza a análise.",
    ],
  },
  municipal: {
    titulo: "Precatórios Municipais",
    heroResumo: "Prefeituras e autarquias municipais. Atenção a variações locais.",
    descricao:
      "Cobrimos prefeituras e autarquias municipais, respeitando regras locais e rotinas de cada município para acelerar a formalização e o pagamento.",
    elegibilidade: [
      "Precatório emitido pelo Tribunal competente (geralmente TJ do Estado)",
      "Identificação do ente municipal devedor (prefeitura/autarquia)",
      "Condições legais para cessão atendidas",
      "Documentação do titular ou representante",
    ],
    orgaos: [
      "Prefeituras e Procuradorias Municipais",
      "Autarquias e institutos municipais",
      "Tribunais de Justiça estaduais (competência local)",
    ],
    dicas: [
      "Municípios podem ter exigências adicionais; ajudamos a organizar o checklist.",
      "Quanto mais completo o dossiê, mais rápido o retorno da proposta.",
    ],
  },
};

export const TYPE_SLUGS: TipoSlug[] = ["federal", "estadual", "municipal"];
