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
  /** Rota interna quando o projeto tem página própria além do case study */
  appPath?: string;
  problem: string;
  highlights: { n: string; title: string; text: string }[];
  model?: { label: string; desc: string }[];
  sections: ProjetoSecao[];
  learnings: string[];
}

export const PROJETOS: Projeto[] = [
  {
    n: "02",
    slug: "pr-gerencia-menu",
    title: "PR_GERENCIA_MENU",
    tagline: "Gerenciador de menus dinâmicos em T-SQL",
    description:
      "Procedure única em SQL Server, parametrizada por sistema, que cria a árvore de menu, gera códigos de perfil de acesso de forma thread-safe e associa usuários em uma só chamada transacional. Versão final unificada, hoje usada por 4 sistemas da organização. Baseada em projeto real de trabalho, com nomes genéricos.",
    tags: ["SQL Server", "T-SQL", "Transações", "Concorrência", "Multi-sistema"],
    repo: "https://github.com/nayrazanini/PR_GERENCIA_MENU",
    problem:
      "Vários sistemas da empresa compartilham o mesmo catálogo de transações, módulos e perfis, mas cada um tem sua própria regra de nomeação de perfil e sua própria árvore de menu. Antes, cada sistema mantinha uma cópia quase idêntica da procedure — corrigir um bug significava corrigir em todas. Além disso, liberar o acesso a uma tela exigia vários passos manuais, o que gerava acesso incompleto e menu inconsistente com a permissão.",
    highlights: [
      {
        n: "01",
        title: "Uma procedure para 4 sistemas",
        text: "O parâmetro @SISTEMA concentra o que varia (prefixo de menu e regra do código de perfil) e mantém comum o que é igual: validação, criação da hierarquia e tratamento de erro. Adicionar um sistema novo é acrescentar uma condição na regra de prefixo, não duplicar a procedure.",
      },
      {
        n: "02",
        title: "Código de perfil sem condição de corrida",
        text: "O código (ex.: SISA_Fin_7 por departamento, ou SISB_1 fixo por sistema) é o maior número já usado no prefixo + 1. Um sp_getapplock nomeado garante que duas execuções simultâneas nunca reservem o mesmo código.",
      },
      {
        n: "03",
        title: "Hierarquia validada e criada sob demanda",
        text: "A procedure recusa nível pulado (não aceita @SUBMENU3 sem @SUBMENU2), garante que o módulo exista no catálogo e cria só os níveis faltantes do caminho — o menu raiz apenas se @CRIAR_MENU_SE_NAO_EXISTIR = 'S'. Tudo dentro de uma transação com TRY/CATCH, XACT_ABORT e XACT_STATE: ou grava tudo, ou nada.",
      },
    ],
    model: [
      { label: "catalogo.TB_USUARIO", desc: "Usuários cadastrados, compartilhados entre sistemas." },
      { label: "catalogo.TB_MODULO", desc: "Módulos cadastrados por sistema." },
      { label: "catalogo.TB_TRANSACAO_MENU", desc: "Cadastro de cada tela/transação disponível." },
      { label: "catalogo.TB_PERFIL_ACESSO", desc: "Perfis de acesso gerados pela procedure." },
      { label: "catalogo.TB_PERFIL_TRANSACAO", desc: "Vínculo entre um perfil de acesso e uma transação." },
      { label: "catalogo.TB_PERFIL_USUARIO", desc: "Associação entre perfis de acesso e usuários." },
      { label: "dbo.TB_MENU", desc: "Árvore de navegação — local a cada sistema." },
    ],
    sections: [
      {
        title: "Regra por sistema, lógica compartilhada",
        paragraphs: [
          "SISA usa o prefixo de menu SISA.Menu e gera o perfil por departamento, com um prefixo genérico de fallback. SISB usa apenas Menu, sem o código do sistema, e perfil fixo e único (SISB_1). SISC e SISD seguem o padrão SISC.Menu / SISD.Menu, também com perfil fixo.",
          "A hierarquia de menu é processada dinamicamente com uma variável TABLE percorrida em loop, o que permite qualquer profundidade de submenu sem repetir código por nível.",
        ],
      },
      {
        title: "Contrato de saída em vez de erro cru",
        paragraphs: [
          "O retorno é explícito: 1 para sucesso (perfil criado, e menu criado se necessário), -1 para erro de validação (sistema inválido, parâmetro faltando ou nível pulado), -3 quando o menu raiz não existe e a criação não foi autorizada, e o número do erro do SQL Server para falha técnica inesperada.",
          "Ponto conhecido a revisar: usuários informados que não existem no catálogo são ignorados silenciosamente. Se a aplicação precisar saber quais foram ignorados, isso deve ser tratado antes da chamada ou a procedure precisa reportar essa lista no retorno — item do próximo ciclo de ajustes.",
        ],
      },
      {
        title: "Estado atual e próximo passo",
        paragraphs: [
          "Esta é a versão final e unificada, que substituiu as versões anteriores — uma procedure separada por sistema. O próximo passo planejado é permitir que a aplicação chame a procedure diretamente (hoje ela roda via script T-SQL), o que envolve ajustar o contrato de chamada e, possivelmente, uma camada de serviço/API entre aplicação e banco.",
          "O repositório traz o script de criação do banco de demonstração, a procedure comentada e exemplos de uso cobrindo os 4 sistemas e os casos de erro. Nomes de tabelas, sistemas e módulos são genéricos: a lógica e a arquitetura refletem o projeto real, desenvolvido em parceria com Bruno Guida. Licença MIT.",
        ],
      },
    ],
    learnings: [
      "Sequencial calculado sob lock é o que separa código único de código provavelmente único.",
      "Unificar N cópias quase idênticas em uma procedure parametrizada troca duplicação por um único ponto de correção.",
      "Separar catálogo compartilhado de dados locais por sistema é o que torna a unificação possível.",
      "Códigos de retorno explícitos fazem a procedure ser integrável; exceção solta faz cada consumidor adivinhar.",
    ],
  },
  {
    n: "05",
    slug: "estoque-sql-server",
    title: "estoque-sql-server",
    tagline: "Banco de dados relacional",
    description:
      "Modelagem e implementação de um sistema de controle de estoque em SQL Server, com tabelas, relacionamentos, procedures e scripts T-SQL para entrada, saída e consulta de produtos.",
    tags: ["SQL Server", "T-SQL", "Modelagem"],
    repo: "https://github.com/nayrazanini/estoque-sql-server",
    problem:
      "Controlar estoque em planilha significa aceitar saldo negativo, movimentação sem rastro e nenhuma garantia de que a baixa realmente aconteceu. O objetivo foi levar esse controle para um banco relacional em que o próprio banco impede o estado inválido.",
    highlights: [
      {
        n: "01",
        title: "Modelagem normalizada",
        text: "Produtos, fornecedores, movimentações e usuários em tabelas separadas, com chaves estrangeiras e constraints garantindo integridade referencial.",
      },
      {
        n: "02",
        title: "Movimentação sempre por procedure",
        text: "Entradas e saídas passam por stored procedures que validam quantidade disponível dentro de uma transação — evitando saldo negativo por concorrência.",
      },
      {
        n: "03",
        title: "Saldo calculado, não digitado",
        text: "O saldo atual é derivado das movimentações por meio de views, o que mantém o histórico auditável em vez de sobrescrever um campo de quantidade.",
      },
    ],
    model: [
      { label: "Produto", desc: "Cadastro, unidade de medida e estoque mínimo." },
      { label: "Fornecedor", desc: "Dados do fornecedor vinculados às entradas." },
      { label: "Movimentacao", desc: "Entradas e saídas com data, quantidade e responsável." },
    ],
    sections: [
      {
        title: "Consultas de apoio à operação",
        paragraphs: [
          "Além do CRUD, o projeto traz consultas de negócio: produtos abaixo do estoque mínimo, curva de giro por período e histórico de movimentação por produto.",
          "As consultas exercitam JOINs, agregações e funções de janela, mostrando o banco como camada de análise e não apenas de armazenamento.",
        ],
      },
    ],
    learnings: [
      "Constraint bem escolhida elimina validação duplicada na aplicação.",
      "Transação explícita é o que diferencia baixa de estoque confiável de baixa aproximada.",
      "Script idempotente e numerado torna o banco reprodutível por qualquer pessoa.",
    ],
  },
  {
    n: "04",
    slug: "ponto-sql-server",
    title: "ponto-sql-server",
    tagline: "Banco de dados relacional",
    description:
      "Sistema de registro e controle de ponto em SQL Server, com procedures e scripts T-SQL para gestão de funcionários, marcações de entrada/saída e geração de relatórios.",
    tags: ["SQL Server", "T-SQL", "Relatórios"],
    repo: "https://github.com/nayrazanini/ponto-sql-server",
    problem:
      "Fechamento de folha depende de marcações confiáveis. O desafio foi modelar jornada, marcações e ocorrências de forma que horas trabalhadas, atrasos e extras saíssem do banco já calculados.",
    highlights: [
      {
        n: "01",
        title: "Marcações versus jornada esperada",
        text: "Cada funcionário tem jornada de referência; as marcações são comparadas com ela para derivar horas trabalhadas, atraso e hora extra.",
      },
      {
        n: "02",
        title: "Regras no banco",
        text: "Procedures validam sequência de marcações (não permite saída sem entrada) e recusam registros duplicados no mesmo instante.",
      },
      {
        n: "03",
        title: "Relatórios por período",
        text: "Consultas de espelho de ponto mensal e consolidado por setor, com agregações por funcionário e data.",
      },
    ],
    model: [
      { label: "Funcionario", desc: "Cadastro, setor e jornada contratada." },
      { label: "Marcacao", desc: "Registros de entrada e saída com data e hora." },
      { label: "Ocorrencia", desc: "Faltas, abonos e justificativas." },
    ],
    sections: [
      {
        title: "T-SQL aplicado a data e hora",
        paragraphs: [
          "O projeto explora o que costuma dar errado em controle de ponto: diferença entre DATE e DATETIME, virada de dia, arredondamento de minutos e agrupamento por competência mensal.",
          "As consultas usam funções de data, CASE para classificar ocorrências e agregações condicionais para separar horas normais de horas extras.",
        ],
      },
    ],
    learnings: [
      "Tratar data/hora com rigor evita divergência silenciosa no fechamento.",
      "Validar sequência de eventos no banco é mais seguro do que confiar na tela.",
      "Relatório é requisito de modelagem, não etapa posterior.",
    ],
  },
  {
    n: "03",
    slug: "rastreador-estudo-disciplina",
    title: "rastreador-estudo-disciplina",
    tagline: "SQL Server + app utilizável",
    description:
      "Banco em SQL Server que registra sessões de estudo, calcula a sequência de dias seguidos (streak) com a técnica gaps and islands, agenda revisões espaçadas automaticamente e mede metas semanais por matéria. Disponível também como app utilizável aqui no site.",
    tags: ["SQL Server", "T-SQL", "Gaps and islands", "Repetição espaçada"],
    repo: "https://github.com/nayrazanini/rastreador-estudo-disciplina",
    appPath: "/projetos/rastreador-estudo-disciplina/app",
    problem:
      "Manter uma rotina de estudos consistente é difícil sem visibilidade: é fácil perder a noção de quantas horas foram estudadas por matéria na semana, esquecer de revisar um assunto no momento certo e não perceber quando a sequência de dias estudando foi quebrada.",
    highlights: [
      { n: "01", title: "Revisão agendada sozinha", text: "sp_RegistrarSessaoEstudo grava a sessão e já agenda a primeira revisão; sp_ConcluirRevisao marca como feita e agenda a próxima. A fila de repetição espaçada anda sem passo manual." },
      { n: "02", title: "Streak com gaps and islands", text: "vw_SequenciasEstudo subtrai um ROW_NUMBER() da data: a diferença é constante dentro de cada sequência de dias seguidos, permitindo agrupar tudo com um único GROUP BY, sem loop." },
      { n: "03", title: "Progressão Leitner em um lugar só", text: "fn_CalcularProximaRevisao concentra os intervalos de 1, 3, 7, 14 e 30 dias. Mudar o algoritmo não exige tocar nas procedures." },
    ],
    model: [
      { label: "Materias", desc: "Matérias/assuntos de estudo." },
      { label: "SessoesEstudo", desc: "Cada sessão registrada: data, duração e assunto." },
      { label: "MetasSemanais", desc: "Meta de horas por matéria, por semana." },
      { label: "Revisoes", desc: "Fila de repetição espaçada gerada a partir das sessões." },
    ],
    sections: [
      {
        title: "Do banco para um app que você pode usar",
        paragraphs: [
          "A versão web aqui no portfólio reproduz em TypeScript as mesmas regras dos objetos T-SQL: registrar sessão agenda revisão, concluir revisão sobe o nível, a sequência é calculada por gaps and islands e o progresso semanal cruza meta com tempo estudado.",
          "O app roda inteiramente no navegador, com dados de exemplo e armazenamento local: qualquer pessoa pode testar sem criar conta, e nada é enviado a servidor. As regras têm testes automatizados.",
        ],
      },
      {
        title: "Próximos passos",
        paragraphs: [
          "Notificação quando uma revisão estiver atrasada, gráfico de evolução do streak ao longo do tempo e meta mensal além da semanal.",
        ],
      },
    ],
    learnings: [
      "Eliminar o passo manual de agendar revisão foi a decisão que fez a ferramenta ser usada de verdade.",
      "Gaps and islands resolve em um GROUP BY o que pareceria exigir um loop dia a dia.",
      "Concentrar uma regra variável em uma function isola a mudança do resto do sistema.",
    ],
  },
  {
    n: "07",
    slug: "nayra-dev",
    title: "nayra.dev",
    tagline: "Portfólio pessoal",
    description:
      "Site pessoal construído em HTML e CSS, hospedado no GitHub Pages. Primeira versão estática do meu portfólio, hoje evoluída para a versão atual.",
    tags: ["HTML", "CSS", "GitHub Pages"],
    repo: "https://github.com/nayrazanini",
    problem:
      "Precisava de um espaço próprio para apresentar trajetória e projetos, sem depender de plataformas de terceiros — e aprender, na prática, como um site sai do editor para a web.",
    highlights: [
      {
        n: "01",
        title: "Do estático ao versionado",
        text: "A primeira versão foi HTML e CSS puros publicados no GitHub Pages: publicação por push, histórico versionado e zero infraestrutura.",
      },
      {
        n: "02",
        title: "Evolução para o site atual",
        text: "O portfólio migrou para uma aplicação com rotas próprias, metadados por página, sitemap e foco em performance e SEO.",
      },
      {
        n: "03",
        title: "Design system consistente",
        text: "Tokens de cor e tipografia centralizados, tema escuro e componentes reutilizados em todas as páginas.",
      },
    ],
    sections: [
      {
        title: "Cuidados de front-end",
        paragraphs: [
          "Layout responsivo pensado primeiro no mobile, HTML semântico, contraste adequado no tema escuro e imagens com texto alternativo.",
          "Cada página tem título e descrição próprios, além de sitemap para indexação — SEO tratado como parte do produto.",
        ],
      },
    ],
    learnings: [
      "Publicar cedo ensina mais do que planejar demais.",
      "Consistência visual vem de tokens, não de valores repetidos no componente.",
    ],
  },
  {
    n: "06",
    slug: "autoresumo",
    title: "AutoResumo",
    tagline: "Gerador de resumos",
    description:
      "Ferramenta em JavaScript que processa texto e gera resumos em formato Markdown — pensada para estudo e produtividade.",
    tags: ["JavaScript", "Markdown", "Automação"],
    repo: "https://github.com/nayrazanini",
    problem:
      "Resumir material de aula manualmente consome o tempo que deveria ser gasto estudando. A ideia foi automatizar a parte mecânica: estruturar o texto em tópicos aproveitáveis.",
    highlights: [
      {
        n: "01",
        title: "Processamento de texto",
        text: "Limpeza, segmentação em sentenças e pontuação por relevância para selecionar o que entra no resumo.",
      },
      {
        n: "02",
        title: "Saída em Markdown",
        text: "O resultado sai pronto para colar em qualquer caderno digital, com títulos e listas — formato durável e portátil.",
      },
      {
        n: "03",
        title: "JavaScript sem dependências",
        text: "Implementação em JavaScript puro, focada em legibilidade das funções e facilidade de ajuste das regras.",
      },
    ],
    sections: [
      {
        title: "Decisões técnicas",
        paragraphs: [
          "Optei por regras determinísticas em vez de um modelo externo: o resultado é previsível, roda offline e permite entender exatamente por que uma frase foi mantida.",
          "As funções foram separadas por responsabilidade (limpar, segmentar, pontuar, formatar), o que facilitou testar cada etapa isoladamente.",
        ],
      },
    ],
    learnings: [
      "Automação simples e explicável resolve a maioria dos casos do dia a dia.",
      "Separar etapas puras torna o código testável sem esforço extra.",
    ],
  },
];

export function getProjeto(slug: string) {
  return PROJETOS.find((p) => p.slug === slug);
}