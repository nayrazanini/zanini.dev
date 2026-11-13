export interface ProjetoSecao {
  title: string;
  paragraphs: string[];
}

export interface Projeto {
  n: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  repo: string;
  appPath?: string;
  sqlPath?: string;
  problem: string;
  highlights: { n: string; title: string; text: string }[];
  model?: { label: string; desc: string }[];
  modules?: { title: string; text: string }[];
  sections: ProjetoSecao[];
  learnings: string[];
}

export const PROJETOS: Projeto[] = [
  {
    n: "01",
    slug: "financas-pessoais",
    title: "CONTROLE FINANCEIRO",
    tagline: "Aplicação full-stack + SQL Server",
    description:
      "Sistema de controle financeiro pessoal desenhado para aplicar, na prática, modelagem relacional e T-SQL: o banco concentra as regras de negócio e a aplicação orquestra a experiência.",
    tags: [
      "SQL Server 2022",
      "T-SQL",
      "Stored Procedures",
      "Views",
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Zod",
      "JWT",
      "Docker Compose",
    ],
    repo: "https://github.com/nayrazanini/financas-pessoais",
    appPath: "/projetos/financas-pessoais/app",
    sqlPath: "https://github.com/nayrazanini/financas-pessoais/tree/main/sql",
    problem:
      "Planilhas de controle financeiro não garantem integridade, não mantêm um histórico confiável e dificultam análises sem retrabalho manual. A proposta foi resolver isso com um banco relacional bem modelado e uma interface prática para o uso diário.",
    highlights: [
      {
        n: "01",
        title: "Escrita concentrada em stored procedures",
        text: "As operações de inclusão, alteração e exclusão são centralizadas em procedures, com regras de negócio no banco, validação de propriedade dos dados e transações explícitas.",
      },
      {
        n: "02",
        title: "Leitura por views de consolidação",
        text: "Saldos por conta, resumo mensal por categoria e acompanhamento de orçamento são disponibilizados por views, evitando remontar as agregações na aplicação.",
      },
      {
        n: "03",
        title: "Consultas analíticas",
        text: "O projeto reúne consultas com CTEs, LAG para variação entre períodos, DENSE_RANK para classificação de gastos e total acumulado.",
      },
      {
        n: "04",
        title: "Autenticação e isolamento de dados",
        text: "A aplicação utiliza senha com bcrypt, sessão JWT httpOnly e proteção de rotas privadas. As operações no banco consideram o identificador do usuário para restringir o acesso aos próprios dados.",
      },
    ],
    model: [
      { label: "Usuario", desc: "Credenciais e perfil, com e-mail único." },
      { label: "Conta", desc: "Contas do usuário e saldo inicial." },
      {
        label: "Categoria",
        desc: "Categorias de receitas e despesas por usuário.",
      },
      {
        label: "Transacao",
        desc: "Lançamentos associados à conta, categoria, tipo, valor e data.",
      },
      { label: "Orcamento", desc: "Limite mensal por categoria e usuário." },
    ],
    modules: [
      {
        title: "Dashboard",
        text: "Saldo consolidado, receitas e despesas do mês e evolução por categoria.",
      },
      {
        title: "Lançamentos",
        text: "Cadastro, listagem paginada e exclusão de transações, com filtros por período e tipo.",
      },
      {
        title: "Orçamentos",
        text: "Definição de limite mensal por categoria e acompanhamento do percentual consumido.",
      },
    ],
    sections: [
      {
        title: "Engenharia de software",
        paragraphs: [
          "O repositório inclui docker-compose.yml para execução local do SQL Server, scripts SQL numerados e decisões técnicas documentadas.",
          "A aplicação utiliza validação de entrada com Zod, autenticação baseada em JWT e uma organização que separa a interface das regras de persistência.",
        ],
      },
      {
        title: "Banco de dados",
        paragraphs: [
          "O modelo utiliza constraints e índices de apoio às consultas por período. O saldo e os indicadores são obtidos a partir dos registros financeiros e das consultas de consolidação.",
          "O repositório contém scripts de schema, procedures, views e consultas analíticas para reproduzir a estrutura do banco.",
        ],
      },
    ],
    learnings: [
      "Centralizar regras de negócio no banco ajuda a manter consistência entre operações.",
      "Views podem simplificar consultas recorrentes e separar leitura da lógica da interface.",
      "Transações e validações são fundamentais para proteger a integridade dos dados.",
      "Autenticação e autorização precisam ser consideradas também na camada de acesso aos dados.",
    ],
  },
  {
    n: "02",
    slug: "pr-gerencia-menu",
    title: "PR_GERENCIA_MENU",
    tagline: "Gerenciador de menus dinâmicos em T-SQL",
    description:
      "Procedure parametrizada por sistema que cria hierarquias de menus, gera códigos de perfil de acesso com proteção contra concorrência e associa usuários em uma única operação transacional. Versão unificada baseada em projeto real, com nomes genéricos.",
    tags: [
      "SQL Server",
      "T-SQL",
      "Stored Procedures",
      "Transações",
      "Concorrência",
    ],
    repo: "https://github.com/nayrazanini/pr_gerencia_menu",
    problem:
      "Sistemas diferentes compartilhavam catálogos de transações, módulos e perfis, mas mantinham regras próprias de nomenclatura e árvores de menu. A existência de procedures quase idênticas aumentava o esforço de manutenção e tornava a liberação de acessos um processo sujeito a inconsistências.",
    highlights: [
      {
        n: "01",
        title: "Uma procedure para múltiplos sistemas",
        text: "O parâmetro de sistema concentra as diferenças de prefixos e regras de perfil, mantendo compartilhadas as etapas de validação, criação da hierarquia e tratamento de erros.",
      },
      {
        n: "02",
        title: "Geração segura de códigos de perfil",
        text: "A geração considera a sequência já utilizada e utiliza sp_getapplock para proteger a operação contra condições de corrida em execuções simultâneas.",
      },
      {
        n: "03",
        title: "Criação validada da hierarquia",
        text: "A procedure valida os níveis de submenu, verifica a existência do módulo e cria os níveis ausentes dentro de uma transação, com TRY/CATCH, XACT_ABORT e XACT_STATE.",
      },
    ],
    model: [
      {
        label: "catalogo.TB_USUARIO",
        desc: "Usuários cadastrados e compartilhados entre sistemas.",
      },
      { label: "catalogo.TB_MODULO", desc: "Módulos cadastrados por sistema." },
      {
        label: "catalogo.TB_TRANSACAO_MENU",
        desc: "Catálogo de telas e transações disponíveis.",
      },
      {
        label: "catalogo.TB_PERFIL_ACESSO",
        desc: "Perfis de acesso gerados pela procedure.",
      },
      {
        label: "catalogo.TB_PERFIL_TRANSACAO",
        desc: "Vínculo entre perfil de acesso e transação.",
      },
      {
        label: "catalogo.TB_PERFIL_USUARIO",
        desc: "Associação entre perfis de acesso e usuários.",
      },
      {
        label: "dbo.TB_MENU",
        desc: "Árvore de navegação mantida localmente por sistema.",
      },
    ],
    sections: [
      {
        title: "Regras específicas e lógica compartilhada",
        paragraphs: [
          "Cada sistema pode possuir um padrão próprio de prefixo de menu e geração de perfil. A procedure concentra essas variações em regras parametrizadas, evitando manter uma cópia independente para cada sistema.",
          "A hierarquia é processada dinamicamente por meio de uma variável do tipo TABLE e estrutura de repetição, permitindo tratar diferentes níveis sem duplicar blocos de código.",
        ],
      },
      {
        title: "Contrato de retorno e tratamento de erros",
        paragraphs: [
          "A procedure utiliza códigos de retorno explícitos para diferenciar sucesso, falhas de validação, ausência de menu raiz quando a criação não foi autorizada e erros técnicos inesperados.",
          "As operações são agrupadas em transação para garantir que a criação da estrutura e os vínculos relacionados sejam confirmados em conjunto ou desfeitos em caso de falha.",
        ],
      },
      {
        title: "Estado atual",
        paragraphs: [
          "Esta versão unificada substitui implementações anteriores separadas por sistema. O repositório disponibiliza o script de criação do banco de demonstração, a procedure comentada e exemplos de execução.",
          "Os nomes de tabelas, sistemas e módulos são genéricos. A lógica e a arquitetura refletem um projeto real desenvolvido em parceria.",
        ],
      },
    ],
    learnings: [
      "Gerar sequências sob um mecanismo de bloqueio é essencial para evitar códigos duplicados em execuções concorrentes.",
      "Uma procedure parametrizada reduz duplicação e centraliza a manutenção.",
      "Separar catálogo compartilhado de dados específicos por sistema facilita a reutilização.",
      "Códigos de retorno explícitos tornam a procedure mais previsível para quem a consome.",
    ],
  },
  {
    n: "03",
    slug: "ponto-sql-server",
    title: "PONTO SQL SERVER",
    tagline: "Sistema de controle de ponto em SQL Server",
    description:
      "Projeto de banco de dados para registro e controle de ponto, com procedures e scripts T-SQL voltados ao cadastro de funcionários, marcações de entrada e saída e geração de relatórios.",
    tags: [
      "SQL Server",
      "T-SQL",
      "Stored Procedures",
      "Modelagem",
      "Relatórios",
    ],
    repo: "https://github.com/nayrazanini/ponto-sql-server",
    problem:
      "O fechamento de folha depende de marcações confiáveis. O desafio do projeto é estruturar jornadas, marcações e ocorrências para permitir consultas consistentes de horas trabalhadas, atrasos e horas extras.",
    highlights: [
      {
        n: "01",
        title: "Marcações versus jornada esperada",
        text: "Cada funcionário possui uma jornada de referência. As marcações são comparadas com ela para calcular horas trabalhadas, atrasos e horas extras.",
      },
      {
        n: "02",
        title: "Regras aplicadas no banco",
        text: "Procedures validam a sequência das marcações, impedindo saída sem entrada anterior e tratando registros duplicados no mesmo instante.",
      },
      {
        n: "03",
        title: "Relatórios por período",
        text: "Consultas permitem gerar espelhos de ponto mensais e consolidações por setor, funcionário e data.",
      },
    ],
    model: [
      { label: "Funcionario", desc: "Cadastro, setor e jornada contratada." },
      {
        label: "Marcacao",
        desc: "Registros de entrada e saída com data e hora.",
      },
      { label: "Ocorrencia", desc: "Faltas, abonos e justificativas." },
    ],
    sections: [
      {
        title: "T-SQL aplicado a data e hora",
        paragraphs: [
          "O projeto trabalha situações comuns em sistemas de ponto, como diferenças entre DATE e DATETIME, virada de dia, arredondamento de minutos e agrupamento por competência mensal.",
          "As consultas utilizam funções de data, CASE para classificação de ocorrências e agregações condicionais para separar horas normais de horas extras.",
        ],
      },
    ],
    learnings: [
      "Tratar data e hora com rigor evita divergências silenciosas no fechamento.",
      "Validar a sequência de eventos no banco é mais seguro do que depender apenas da interface.",
      "Os relatórios devem ser considerados desde a modelagem dos dados.",
    ],
  },
  {
    n: "04",
    slug: "estoque-sql-server",
    title: "ESTOQUE SQL SERVER",
    tagline: "Sistema de controle de estoque em SQL Server",
    description:
      "Modelagem e implementação de um sistema de controle de estoque em SQL Server, com tabelas, relacionamentos, procedures e scripts T-SQL para entrada, saída e consulta de produtos.",
    tags: [
      "SQL Server",
      "T-SQL",
      "Stored Procedures",
      "Modelagem",
      "Integridade",
    ],
    repo: "https://github.com/nayrazanini/estoque-sql-server",
    problem:
      "Controlar estoque em planilhas pode gerar saldos negativos, movimentações sem histórico e falta de garantia de que uma baixa foi realizada corretamente. O objetivo é utilizar um banco relacional para manter o histórico e impedir estados inválidos.",
    highlights: [
      {
        n: "01",
        title: "Modelagem relacional",
        text: "Produtos, fornecedores, movimentações e usuários são organizados em tabelas relacionadas, com chaves estrangeiras e constraints para garantir integridade referencial.",
      },
      {
        n: "02",
        title: "Movimentações por procedures",
        text: "Entradas e saídas são processadas por stored procedures que validam a quantidade disponível dentro de uma transação.",
      },
      {
        n: "03",
        title: "Saldo derivado das movimentações",
        text: "O saldo atual é obtido a partir do histórico de movimentações por meio de views, preservando a rastreabilidade em vez de sobrescrever uma quantidade manualmente.",
      },
    ],
    model: [
      {
        label: "Produto",
        desc: "Cadastro, unidade de medida e estoque mínimo.",
      },
      {
        label: "Fornecedor",
        desc: "Dados dos fornecedores associados às entradas.",
      },
      {
        label: "Movimentacao",
        desc: "Entradas e saídas com data, quantidade e responsável.",
      },
    ],
    sections: [
      {
        title: "Consultas de apoio à operação",
        paragraphs: [
          "Além das operações de cadastro, o projeto reúne consultas para identificar produtos abaixo do estoque mínimo, analisar movimentações por período e consultar o histórico de cada produto.",
          "As consultas exercitam JOINs, agregações e funções de janela, utilizando o banco também como camada de análise.",
        ],
      },
    ],
    learnings: [
      "Uma constraint bem definida reduz a necessidade de validações duplicadas na aplicação.",
      "Transações explícitas tornam as movimentações de estoque mais confiáveis.",
      "Scripts numerados e idempotentes facilitam a reprodução do ambiente.",
    ],
  },
];

export function getProjeto(slug: string): Projeto | undefined {
  return PROJETOS.find((projeto) => projeto.slug === slug);
}
