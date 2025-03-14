
// Make sure to add proper types for the templates to match the TemplateCardProps
const templates = [
  {
    id: "1",
    title: "Extração de Dados ERP",
    description:
      "Bot para extração automatizada de relatórios de ERP e envio para stakeholders.",
    category: "Extração de Dados",
    complexity: "Média",
    image: "/placeholder.svg",
  },
  {
    id: "2",
    title: "Onboarding de Funcionários",
    description:
      "Automatização do processo de cadastro de novos funcionários em múltiplos sistemas.",
    category: "Recursos Humanos",
    complexity: "Alta",
    image: "/placeholder.svg",
  },
  {
    id: "3",
    title: "Conciliação Bancária",
    description:
      "Bot para conciliação automática de transações bancárias e geração de relatórios de exceção.",
    category: "Financeiro",
    complexity: "Alta",
    image: "/placeholder.svg",
  },
  {
    id: "4",
    title: "Processamento de Faturas",
    description:
      "Automatização da leitura, validação e registro de faturas de fornecedores.",
    category: "Contas a Pagar",
    complexity: "Média",
    image: "/placeholder.svg",
  },
  {
    id: "5",
    title: "Atualização de Clientes",
    description:
      "Bot para atualização de cadastros de clientes entre sistemas distintos.",
    category: "CRM",
    complexity: "Baixa",
    image: "/placeholder.svg",
  },
  {
    id: "6",
    title: "Geração de Relatórios",
    description:
      "Automatização da coleta de dados, geração e distribuição de relatórios gerenciais.",
    category: "Business Intelligence",
    complexity: "Média",
    image: "/placeholder.svg",
  },
];

// Update the bestPractices array with proper type cast
const bestPractices = [
  {
    id: "1",
    title: "Planeje antes de automatizar",
    description:
      "Documente o processo manual detalhadamente antes de iniciar a automação para garantir que todas as variações sejam consideradas.",
    type: "do" as const,
  },
  {
    id: "2",
    title: "Use credenciais seguras",
    description:
      "Utilize o Credential Vault para armazenar credenciais e tokens de acesso de forma segura e encriptada.",
    type: "do" as const,
  },
  {
    id: "3",
    title: "Evite dependências de UI",
    description:
      "Sempre que possível, use APIs e métodos de acesso direto aos dados em vez de depender da interface do usuário, que pode mudar.",
    type: "dont" as const,
  },
  {
    id: "4",
    title: "Implemente tratamento de exceções",
    description:
      "Adicione tratamento robusto de exceções para lidar com casos inesperados e garantir que os bots possam se recuperar de falhas.",
    type: "tip" as const,
  },
  {
    id: "5",
    title: "Use logs detalhados",
    description:
      "Implemente logs detalhados em cada etapa crítica para facilitar o diagnóstico de problemas em produção.",
    type: "tip" as const,
  },
  {
    id: "6",
    title: "Evite loops infinitos",
    description:
      "Sempre defina condições de saída claras para loops e adicione contadores de segurança para evitar execuções infinitas.",
    type: "dont" as const,
  },
];
