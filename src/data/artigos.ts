export type Artigo = {
  slug: string;
  title: string;
  subject: string;
  date: string; // display
  publishedAt: string; // ISO
  summary: string;
  paragraphs: string[];
  footer: string;
  externalUrl?: string;
};

export const ARTIGOS: Artigo[] = [
  {
    slug: "como-o-exercicio-fisico-transformou-minha-rotina-de-estudos",
    title: "Como o exercício físico transformou minha rotina de estudos?",
    subject: "Experiência pessoal · LinkedIn",
    date: "27/06/2025",
    publishedAt: "2025-06-27",
    summary:
      "Disciplina, foco e organização que vieram da constância nos treinos: como o exercício físico se tornou parte central do meu planejamento de estudos e produtividade — com vivência e ciência.",
    paragraphs: [
      "Disciplina, foco e organização não vieram só dos livros, vieram da constância nos treinos. O exercício físico mudou minha rotina de estudos e aumentou meu rendimento profissional. É mais estratégia do que estilo de vida.",
      "Na minha rede vizinha fica um pouco mais claro sobre a minha ligação com esportes. Não é novidade para ninguém que a atividade física nos ajuda em muitos aspectos da vida. Mas hoje, quero compartilhar minha experiência pessoal.",
      "Em 2020, a empresa em que trabalho adotou o home office por um período. Era um momento turbulento e cheio de incertezas. Naquela época, descobri um problema no joelho causado pelo sobrepeso e pela falta de fortalecimento muscular. Desde então, decidi transformar minha vida. E não, não é papo de “coach de academia”, é a realidade: eu estava com dores físicas e enfrentando desafios emocionais no pior momento para isso: em plena pandemia.",
      "Com tudo isso, decidi que não queria mais conviver com dores de nenhum tipo. Comprei uns halteres e comecei a praticar exercícios em casa, além de iniciar a fisioterapia. Ali eu me redescobri. Quando a pandemia acalmou e as coisas foram liberadas, voltei pra academia e a jogar futebol, sendo esse último minha paixão desde pequena.",
      "A proposta deste artigo é te mostrar o quão benéfico tem sido incorporar o exercício físico à minha rotina, especialmente para meus estudos e desenvolvimento profissional. Não se trata de virar atleta ou “influencer fitness”. É sobre cuidar da mente e do corpo para evoluir com mais constância e equilíbrio.",
      "Como o exercício físico me transformou? Hoje, sou uma pessoa: com mais disciplina e clareza mental; muito mais focada e produtiva; mais organizada, com uma rotina estruturada e metas realistas; que compreende que autocuidado é ferramenta de crescimento; e que dorme melhor e respeita o próprio ritmo.",
      "Hoje, o exercício físico não é algo que “encaixo quando dá”, ele é parte central da minha rotina. Não sou eu que ajusto meus treinos à rotina. São as outras tarefas que se organizam ao redor do meu momento de autocuidado. Esse pensamento me deu mais constância e equilíbrio para lidar com tudo o que preciso no dia a dia, dos estudos à vida profissional.",
      "Não é só sobre mim. A ciência confirma que o exercício físico é uma poderosa ferramenta para o cérebro e a performance cognitiva. Um estudo com mais de 250 mil pessoas, publicado no British Journal of Sports Medicine, mostrou que exercícios como caminhada rápida, yoga e jogos interativos melhoram a memória, o foco e as funções cognitivas executivas.",
      "A University College London descobriu que praticar 30 minutos de atividade física e dormir bem pode aumentar de 2% a 5% a capacidade de memória no dia seguinte. Em um estudo com milhares de adolescentes, os que praticavam atividades físicas regulares, mesmo fora da escola, apresentaram melhor desempenho em matemática, maior atenção e menos sinais de burnout. Pesquisas europeias mostraram ainda que fazer exercício cerca de 4h após o estudo ajuda a consolidar melhor as informações na memória de longo prazo (Instituto Einstein / FAPESP).",
      "Incorporar o movimento ao meu dia a dia mudou minha relação com os estudos, com o trabalho e comigo mesma. Hoje, o exercício físico é parte do meu planejamento de produtividade. Preciso fazer para me sentir bem e conseguir com as coisas do meu dia. É onde encontro foco, criatividade e regulação emocional para dar conta da minha rotina na área de tecnologia e nos meus projetos pessoais.",
      "Se você também está buscando mais foco, organização, equilíbrio mental e rendimento nos estudos, talvez o primeiro passo não esteja apenas em um novo curso, mas em colocar o corpo em movimento.",
    ],
    footer:
      "Artigo originalmente publicado no LinkedIn por Náyra Zanini em 27/06/2025.",
    externalUrl:
      "https://www.linkedin.com/pulse/como-o-exerc%C3%ADcio-f%C3%ADsico-transformou-minha-rotina-de-estudos-zanini-bkeof/",
  },
  {
    slug: "testes-software-decisao-estrategica",
    title:
      "Testes de Software como Decisão Estratégica: Qualidade, Risco e Continuidade de Negócio",
    subject: "Testes de Software · Aula 28/01",
    date: "28/01/2026",
    publishedAt: "2026-01-28",
    summary:
      "Da visão tradicional de caça a defeitos à gestão consciente de risco: por que qualidade nasce nas decisões ao longo do ciclo, e como a ISO 22301 reforça a resiliência como foco central dos testes.",
    paragraphs: [
      "A primeira aula da disciplina de Testes de Software rompe com a visão tradicional que associa testes exclusivamente à identificação de defeitos técnicos. Desde o início, o material apresentado propõe uma mudança de mentalidade: testar não é uma atividade operacional ou uma etapa final do desenvolvimento, mas sim uma decisão estratégica diretamente relacionada à continuidade do negócio.",
      "Um dos principais aprendizados da aula foi compreender que qualidade de software não nasce na fase de testes, mas nas escolhas feitas ao longo de todo o ciclo de vida do sistema. Cada decisão carrega riscos que impactam diretamente o negócio. Dessa forma, o papel do profissional de testes deixa de ser reativo, focado apenas em executar casos de teste, e passa a ser estratégico, atuando na gestão consciente de riscos.",
      "Nesse contexto, a disciplina reforça que métricas tradicionais, como quantidade de bugs encontrados ou cobertura de requisitos, são insuficientes para medir qualidade real. Um sistema pode apresentar poucos defeitos técnicos e ainda assim falhar de forma crítica em produção, seja por indisponibilidade, lentidão, falhas de integração ou incapacidade de recuperação diante de incidentes. Assim, o foco dos testes deve migrar do “funciona ou não funciona” para a pergunta central: qual impacto essa falha gera para o negócio?",
      "A introdução da ISO 22301, norma de Gestão de Continuidade de Negócios, aprofunda ainda mais essa visão. A norma evidencia que falhas são inevitáveis e que o verdadeiro desafio está em garantir que os processos críticos continuem operando ou sejam rapidamente recuperados. Aplicada aos testes de software, essa perspectiva reforça a necessidade de validar não apenas funcionalidades, mas também resiliência, recuperação, desempenho sob estresse e tratamento de exceções. Testar, portanto, passa a significar assegurar que o negócio sobreviva mesmo quando algo sai do planejado.",
      "O bootcamp prático da aula consolidou esse aprendizado ao deslocar o foco da técnica para a decisão. Ao longo das atividades, ficou evidente que testar tudo é impossível e que a maturidade profissional está na capacidade de justificar tecnicamente e estrategicamente as escolhas feitas, inclusive perante níveis executivos. Essa abordagem exige domínio técnico, mas sobretudo capacidade analítica, comunicação clara e entendimento do contexto organizacional.",
      "Conclui-se, portanto, que o principal aprendizado da primeira aula é a redefinição do papel do teste de software: ele não existe para garantir perfeição técnica, mas para proteger o negócio de riscos inaceitáveis, assumindo conscientemente os trade-offs envolvidos. A disciplina não forma apenas testadores, mas profissionais capazes de sustentar decisões críticas, alinhando tecnologia, negócio e continuidade operacional.",
    ],
    footer:
      "Artigo produzido por Náyra Zanini, com base nos aprendizados da disciplina Testes de Software durante a Pós-Graduação em Engenharia de Software (UNIP).",
  },
  {
    slug: "evolucao-qa-bootcamps-testes-software",
    title:
      "Da Execução à Decisão: A Evolução do Papel do QA nos Bootcamps de Testes de Software",
    subject: "Testes de Software · Aula 18/03",
    date: "18/03/2026",
    publishedAt: "2026-03-18",
    summary:
      "Uma síntese dos Bootcamps 11 a 14: do registro de defeitos à priorização por risco, passando pela sprint ágil até chegar às decisões de Go/No-Go em pipelines CI/CD.",
    paragraphs: [
      "Ao longo dos Bootcamps 11, 12, 13 e 14, ficou evidente que a área de testes de software vai muito além da execução técnica e está diretamente ligada à tomada de decisões estratégicas dentro de um projeto. O que começou como identificação e registro de defeitos evoluiu gradualmente para uma visão mais ampla, onde qualidade, risco e negócio passam a caminhar juntos.",
      "No Bootcamp 11, o foco esteve na identificação e no registro estruturado de defeitos, utilizando ferramentas como Qase e Jira. Nesse momento, ficou claro que um defeito não é apenas um erro no sistema, mas um problema que impacta diretamente o usuário. Além disso, percebi que a forma como o defeito é descrito influencia diretamente na sua resolução. Um defeito mal documentado pode gerar retrabalho, falhas de comunicação e atrasos, mostrando que qualidade também está na clareza da informação.",
      "Já no Bootcamp 12, a análise se aprofundou ao introduzir os conceitos de severidade e prioridade. Foi possível entender que nem todo defeito deve ser tratado imediatamente e que a decisão de correção depende do contexto. A ideia de aceitar riscos de forma consciente trouxe uma visão mais realista do desenvolvimento de software, onde o objetivo não é eliminar todos os problemas, mas sim gerenciar o impacto deles. Isso reforça que qualidade não é perfeição, mas sim equilíbrio entre risco e valor entregue.",
      "No Bootcamp 13, o cenário se aproximou ainda mais da realidade ao simular uma sprint ágil. A limitação de tempo obrigou a priorização de testes e mostrou que tentar validar tudo pode ser uma estratégia ineficiente. Nesse contexto, os testes passaram a ser vistos como ferramenta de apoio à decisão, e não apenas como validação técnica. Além disso, ficou evidente como os defeitos impactam diretamente o andamento da sprint, influenciando backlog, planejamento e entregas.",
      "Por fim, o Bootcamp 14 consolidou todo esse aprendizado ao introduzir o conceito de pipeline CI/CD e decisões de liberação. Nesse momento, o foco deixou de ser apenas identificar e priorizar problemas, passando a ser decidir se o sistema está pronto para produção. A análise de falhas em diferentes níveis, o uso de quality gates e a avaliação de riscos mostraram que a decisão de “Go ou No-Go” não é técnica apenas, mas envolve também impacto no negócio e confiança no sistema. A reflexão final reforçou que um pipeline confiável é aquele que representa a realidade, e não apenas aquele que sempre passa.",
      "Dessa forma, é possível perceber uma evolução clara: do registro de defeitos para a priorização, da priorização para a execução em contexto real, e da execução para a tomada de decisão baseada em evidências. Esse processo mostra que o papel do QA não está limitado à validação, mas sim à garantia de qualidade em um sentido amplo, atuando como um elo entre tecnologia, processo e negócio.",
      "Ao final desses bootcamps, a principal mudança de percepção foi entender que testar não é apenas encontrar erros, mas sim fornecer informações confiáveis para que decisões sejam tomadas com segurança. Isso posiciona o profissional de testes não apenas como executor, mas como parte essencial na estratégia de desenvolvimento de software.",
    ],
    footer:
      "Artigo produzido por Náyra Zanini, com base nos aprendizados dos Bootcamps 11, 12, 13 e 14 da disciplina Testes de Software durante a Pós-Graduação em Engenharia de Software (UNIP).",
  },
  {
    slug: "evolucao-qualidade-engenharia-software",
    title:
      "Evolução, Qualidade e Desafios da Engenharia de Software na Era Contemporânea",
    subject: "Paradigmas da Engenharia de Software · Aula 01",
    date: "02/07/2025",
    publishedAt: "2025-07-02",
    summary:
      "Da evolução dos anos 60 ao DevOps, passando pelo Modelo Espiral, Qualidade na fonte, o Chaos Report e a metodologia Shape Up — uma síntese crítica sobre o estado atual da Engenharia de Software.",
    paragraphs: [
      "Durante a aula foram realizados diversos prompts para que a Inteligência Artificial colaborasse com o aprendizado em sala, junto com a explicação do Professor Marcelo Nogueira.",
      "Abordamos a evolução da tecnologia desde os anos 60 até os dias atuais, reforçando a importância de Pesquisa e Desenvolvimento (P&D), o aumento dos investimentos estratégicos e a adaptação dos processos de engenharia ao mercado moderno com metodologias como o DevOps.",
      "Foi discutido o Modelo Espiral de Boehm, estruturado em fases como definição de objetivos, análise de riscos, desenvolvimento, validação e planejamento contínuo, ideal para projetos complexos.",
      "A leitura do livro “Da imitação à inovação: A dinâmica do aprendizado tecnológico da Coréia” trouxe o aprendizado sobre a importância da imitação estratégica e do investimento em conhecimento para superação de barreiras tecnológicas.",
      "Também foi discutido o conceito de “Qualidade na fonte” e sua relação com metodologias ágeis, destacando a prevenção de defeitos desde o início do projeto, responsabilidade coletiva e melhoria contínua, conectando com o conceito de “Kaizen na Engenharia”.",
      "O relatório Chaos Report nos fez refletir sobre os desafios reais do desenvolvimento de software, com taxas baixas de sucesso e altos índices de falhas e cancelamentos de projetos.",
      "A definição de Engenharia de Software pelo Prof. Dr. Marcelo Nogueira foi comparada com a visão da IA, com linguagens diferentes, mas a mesma essência: métodos, procedimentos e ferramentas para entregar software com qualidade.",
      "Exploramos a técnica AIDA (Atenção, Interesse, Desejo e Ação) para explicar conceitos técnicos a pessoas leigas. Testei isso com meus familiares no intervalo e percebi que, embora desafiador, é possível comunicar bem com paciência e clareza.",
      "Analisamos o caso do Project Ara e os conceitos de acoplamento e coesão, além da noção de Ad-hoc, soluções criadas sem padronização, específicas para determinado propósito.",
      "Também mencionamos o texto “No Silver Bullet”, que reforça que não há solução mágica para todos os problemas de software. Cada desafio exige abordagem específica, experiência e adaptação.",
      "O relatório “Best Jobs in America” mostrou que a maioria das carreiras promissoras estão ligadas à tecnologia, reforçando a importância da educação contínua para acompanhar essa demanda.",
      "O professor compartilhou sua experiência com o PBQP-SW que é um programa brasileiro que busca aumentar a competitividade nacional em desenvolvimento de software, ainda pouco aproveitado no país.",
      "Por fim, foi apresentada a metodologia ágil Shape Up, alternativa ao Scrum, baseada em ciclos de seis semanas para entrega de projetos com mais clareza e autonomia.",
      "Esta aula proporcionou uma visão crítica e atual da Engenharia de Software, exigindo estudo constante, adaptação às mudanças e conexão entre teoria e prática.",
    ],
    footer:
      "Artigo produzido por Náyra Zanini, com base nos aprendizados da disciplina Paradigmas da Engenharia de Software, ministrada pelo Prof. Dr. Marcelo Nogueira durante a Pós-Graduação em Engenharia de Software (UNIP). O estudo durante a aula foi feito com o apoio de Inteligência Artificial, por meio de prompts elaborados pelo professor, e este artigo é o resultado.",
  },
  {
    slug: "engenharia-de-requisitos",
    title:
      "Engenharia de Requisitos: A Base Humana e Estratégica para Soluções Tecnológicas",
    subject: "Paradigmas da Engenharia de Software · Aula 02",
    date: "02/07/2025",
    publishedAt: "2025-07-02",
    summary:
      "Por que fazer certo desde a primeira vez importa: elicitação, análise, comunicação, PoC, modelo espiral e fatores humanos na engenharia de requisitos.",
    paragraphs: [
      "A aula de Engenharia de Requisitos teve por objetivo apresentar algo extremamente fundamental para o desenvolvimento de software. Foi uma aula para iniciar as informações de como estabelecer uma base para que todo o projeto seja construído, tendo por objetivo identificar, analisar, especificar e gerenciar as necessidades dos usuários, clientes e demais partes interessadas.",
      "Com a Engenharia de Requisitos, podemos perceber o quão importante é fazer bem feito da primeira vez, para evitar retrabalho, gastos desnecessários no futuro e alinhar expectativas. Podemos destacar nessa área a interdependência de fatores humanos, técnicos e organizacionais, uma vez que precisam de sua conexão para que o projeto funcione.",
      "A Engenharia de Requisitos se apresenta como o elo entre o mundo real e a solução técnica e a definição proposta pelo Professor Marcelo Nogueira deixa claro isso: elicitar, analisar e negociar, especificar, modelar, verificar, validar e gerir funções e restrições de sistema, cobrindo integralmente o ciclo de vida dos requisitos, englobando os aspectos funcionais e não funcionais que são funcionalidades do sistema e suas restrições.",
      "Ter requisitos bem definidos é reforçado pela ideia de grandes teóricos como Frederick Brooks e Philip Crosby, sendo o primeiro um autor que traz à tona a complexidade dos projetos de software e a necessidade de planejar cuidadosamente, enquanto Crosby defende o princípio de fazer certo desde a primeira vez, o qual se conecta com a Engenharia de Requisitos e a cultura da qualidade e prevenção de erros.",
      "Também houve um momento em aula mencionando o Efeito Borboleta, e tem extrema ligação com o tema, uma vez que qualquer alteração, boa ou ruim, no projeto, pode impactar grandemente todo o sistema e seu desenvolvimento.",
      "Em um tópico já verificado por mim em outros cursos, temos PoC (Prova de Conceito), que é uma ferramenta estratégica para validar a viabilidade técnica de uma solução antes de desenvolver completamente, servindo de experimento prático.",
      "Elicitar os requisitos é o que dá início ao processo, uma vez que é onde coletamos as informações por meio de entrevistas, questionários, observações, prototipagem, etc. para converter desejos e expectativas dos stakeholders em requisitos claros e alcançáveis. Demanda habilidades técnicas e empatia, como uma escuta ativa e comunicação eficaz.",
      "A comunicação é um dos problemas mais apontados para a Engenharia de Requisitos, pois entender o que é desejado, excluir a ambiguidade e realizar mudanças constantes torna-se extremamente difícil quando o cliente não sabe exatamente o que deseja e não sabe externalizar a informação.",
      "O modelo espiral é uma abordagem que influencia diretamente no tratamento de requisitos, uma vez que propõe ciclos iterativos de planejamento, construção, avaliação e refinamento da informação. É extremamente ideal para requisitos que evoluem ao longo do tempo.",
      "Notamos que há uma crescente valorização dos fatores humanos no desenvolvimento de software, utilizando a ciência e ergonomia cognitiva. Podemos perceber como os usuários se comportam na utilização de um sistema, suas travas e, assim, deixá-lo mais acessível e eficiente.",
      "Em conclusão, a área de Engenharia de Requisitos é ampla e multidisciplinar, integrando conceitos de tecnologia, psicologia, gestão e comunicação. É importante entendermos o lado humano para desenvolver um sistema, dessa forma podemos realizar projetos eficientes e consistentes, com soluções estratégicas e facilitadoras do processo. Quando são dominados os fundamentos dessa disciplina, podemos atuar com excelência no desenvolvimento de soluções tecnológicas que envolvem pessoas e resultados.",
    ],
    footer:
      "Artigo produzido por Náyra Zanini, com base nos aprendizados da disciplina Paradigmas da Engenharia de Software, ministrada pelo Prof. Dr. Marcelo Nogueira durante a Pós-Graduação em Engenharia de Software (UNIP). O estudo durante a aula foi feito com o apoio de Inteligência Artificial, por meio de prompts elaborados pelo professor, e este artigo é o resultado.",
  },
  {
    slug: "qualidade-de-software",
    title:
      "Qualidade de Software: Cultura, Métricas e Responsabilidade no Desenvolvimento",
    subject: "Paradigmas da Engenharia de Software · Aula 03",
    date: "02/07/2025",
    publishedAt: "2025-07-02",
    summary:
      "De Crosby, Juran e Deming a ISO 25010, CMMI e GQM: qualidade como cultura, prevenção e responsabilidade compartilhada ao longo de todo o ciclo de desenvolvimento.",
    paragraphs: [
      "A crescente dependência de sistemas computacionais torna indispensável garantir sua qualidade. Falhas como as da sonda Mars Climate Orbiter e do Boeing 737 MAX demonstram o impacto que defeitos de software podem gerar, reforçando a importância de processos que assegurem qualidade desde as etapas iniciais do desenvolvimento.",
      "Qualidade não é apenas atender a requisitos, mas antecipar necessidades e evitar falhas. A ISO 8402 define qualidade como “a totalidade das características de uma entidade que lhe confere a capacidade de satisfazer necessidades explícitas e implícitas”. Contribuições de Crosby, Juran e Deming reforçam que qualidade deve ser planejada, construída e monitorada sistematicamente.",
      "A qualidade resulta da excelência nos processos internos, como modularidade e manutenibilidade, e se manifesta externamente na eficiência e confiabilidade percebidas pelo usuário. O ciclo de desenvolvimento — requisitos, projeto, implementação, validação e evolução — deve ser conduzido com rigor e integração. O método GQM auxilia na definição de métricas alinhadas a objetivos estratégicos, como a redução do retrabalho, mensurada pelo MTTR, que avalia a eficiência na correção de falhas.",
      "A Garantia da Qualidade (QA) tradicional foca em testes finais e ações corretivas, enquanto a Cultura de Qualidade envolve prevenção e participação de todos os envolvidos no ciclo de desenvolvimento. Modelos como ISO 25010 e CMMI orientam essa transição, promovendo maturidade organizacional e melhoria contínua.",
      "Definir claramente quem faz o que é essencial para garantir qualidade. Responsabilidade implica executar tarefas; responsabilização exige prestar contas pelos resultados. Ferramentas como Jira e práticas como retrospectivas promovem transparência e evolução contínua.",
      "Qualidade de software é construída ao longo de todo o processo, mediante cultura organizacional comprometida, processos estruturados e uso adequado de métricas. O foco na prevenção, na melhoria contínua e na clara definição de responsabilidades é indispensável para garantir produtos confiáveis e alinhados às necessidades dos usuários.",
    ],
    footer:
      "Artigo produzido por Náyra Zanini, com base nos aprendizados da disciplina Paradigmas da Engenharia de Software, ministrada pelo Prof. Dr. Marcelo Nogueira durante a Pós-Graduação em Engenharia de Software (UNIP). O estudo durante a aula foi feito com o apoio de Inteligência Artificial, por meio de prompts elaborados pelo professor, e este artigo é o resultado.",
  },
];

export function getArtigo(slug: string) {
  return ARTIGOS.find((a) => a.slug === slug);
}