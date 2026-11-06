import type { Artigo } from "@/data/artigos";

const FOOTER_PT =
  "Artigo produzido por Náyra Zanini, com base nos aprendizados da disciplina Testes de Software durante a Pós-Graduação em Engenharia de Software (UNIP).";

// Artigos criados a partir da seção APRENDIZADO de cada aula (Bootcamps de Testes de Software).
export const ARTIGOS_APRENDIZADOS: Artigo[] = [
  {
    slug: "testes-reduzir-incertezas-decisoes-estrategicas",
    title: "Testes existem para reduzir incertezas",
    subject: "Testes de Software · Aula 04/02",
    date: "04/02/2026",
    publishedAt: "2026-02-04",
    summary:
      "Software é complexo e dinâmico: nunca teremos conhecimento completo antes da produção. Testar é gerar evidências de qualidade para decidir com consciência.",
    paragraphs: [
      "As aulas da disciplina de Testes de Software têm sido extremamente profundas na forma de enxergar os testes. No começo da pós-graduação eu já havia entendido que testar não era apenas encontrar erros, e sim apoiar decisões estratégicas. Porém, neste tópico ficou claro que testes existem para reduzir incertezas. E isso não é falha do processo, mas algo natural no desenvolvimento de software.",
      "Software é algo complexo, dinâmico e depende de diversos fatores externos, como ambiente de execução, comportamento dos usuários e decisões organizacionais. Olhando dessa forma, entendemos que nunca será possível ter conhecimento completo sobre o sistema antes de colocá-lo em produção. Reconhecer a incerteza é o primeiro passo para agir de forma responsável.",
      "Testes passam a ter um papel mais estratégico: não devem garantir a perfeição ou eliminar completamente os riscos, mas servem para transformar parte do desconhecido em algo mais visível e compreensível. Quando realizamos testes, buscamos evidências sobre o comportamento real do sistema, que ajudam a reduzir o nível de desconhecimento e permitem que decisões sejam tomadas com mais consciência.",
      "Se os testes não forem bem direcionados, podem apenas consumir tempo e recursos sem gerar informações relevantes. Isso faz refletir que testar exige pensamento crítico e intenção clara: qual incerteza estou tentando reduzir e qual informação esse teste pode me trazer?",
      "A decisão de colocar um sistema em produção não depende de ele estar “sem defeitos”, mas de entender os riscos que existem e se eles são aceitáveis naquele contexto.",
      "Testar é gerar evidências com qualidade, assumindo incertezas que sempre existirão. Devemos escolher agir com base em informações, e não apenas em suposições.",
    ],
    footer: FOOTER_PT,
  },
  {
    slug: "testar-e-verificar-ou-aprender",
    title: "Testar é verificar ou aprender?",
    subject: "Testes de Software · Aula 11/02",
    date: "11/02/2026",
    publishedAt: "2026-02-11",
    summary:
      "Da verificação de requisitos ao teste como instrumento de aprendizado: incerteza, risco, decisão e o viés de criar testes que apenas confirmam expectativas.",
    paragraphs: [
      "Na terceira aula da disciplina de Testes de Software, percebi que o conteúdo deixou de ser apenas técnico e passou a ser conceitual. A pergunta central — “testar é verificar ou aprender?” — parece simples, mas carrega uma mudança profunda de mentalidade.",
      "Durante muito tempo, testes foram tratados como uma atividade de verificação. A lógica é objetiva: existe um requisito, existe um comportamento esperado, e o teste serve para confirmar se o sistema está em conformidade com essa especificação. Dentro dessa visão clássica, o papel do testador é comparar o resultado obtido com o resultado previsto. Se coincidir, o teste passa.",
      "O problema é que essa abordagem parte de uma suposição perigosa: a de que os requisitos são completos, consistentes e corretos. Na prática, raramente são. Requisitos refletem um entendimento humano que pode conter lacunas, ambiguidades e pressupostos não explicitados. Quando o teste é realizado apenas para verificar conformidade, é possível que estejamos apenas confirmando uma compreensão limitada do problema.",
      "Os testes não precisam ser vistos apenas como verificação; eles podem — e devem — ser vistos como instrumentos de aprendizado. Nessa perspectiva, testar se aproxima de um experimento: existe uma hipótese sobre como o sistema deve se comportar, eu executo o teste, observo e produzo evidência. Essa evidência pode confirmar ou refutar o que eu acreditava saber.",
      "A diferença entre confirmar que algo funciona e descobrir como ele realmente se comporta é sutil, mas estratégica. Confirmar reforça expectativas. Descobrir amplia entendimento. E em sistemas complexos, o que não é descoberto tende a se manifestar no pior momento possível.",
      "Essa discussão se conecta diretamente com o tema da incerteza, aprofundado no bootcamp. A aula deixa claro que a incerteza não é uma falha do processo, mas uma condição estrutural da Engenharia de Software. Software opera em ambientes dinâmicos, com múltiplas variáveis técnicas, humanas e organizacionais, e não é possível prever completamente seu comportamento.",
      "A incerteza aparece em diferentes dimensões: a incerteza técnica, relacionada ao funcionamento interno, integrações e desempenho; a incerteza de uso, associada à forma como usuários reais interagem com o sistema; e a incerteza organizacional, ligada a decisões estratégicas, prazos e prioridades. Perceber essas camadas foi essencial para entender que testar não significa eliminar a incerteza, mas reduzi-la — e essa redução é sempre parcial.",
      "Outro ponto marcante foi a relação entre incerteza, risco e decisão. Incerteza é o desconhecimento. Risco é a avaliação das possíveis consequências desse desconhecimento. Decisão é a escolha que precisa ser feita mesmo assim. Os testes entram como mecanismo que transforma parte da incerteza desconhecida em risco conhecido. Eles não criam certeza absoluta, mas produzem evidência suficiente para decisões mais racionais.",
      "A aula também trouxe uma reflexão importante sobre viés humano. Existe uma tendência natural de criar testes que confirmem expectativas. Isso pode gerar uma falsa sensação de segurança: o sistema “passa” nos testes, mas os testes não exploraram cenários críticos ou improváveis. Maturidade em testes não está na quantidade, mas na qualidade das hipóteses formuladas.",
      "Ao final da aula, minha percepção ficou mais clara: testes não são uma busca por perfeição, são um mecanismo de produção de evidência. Não se trata de provar que o sistema é impecável — pois nunca vai ser — mas de entender suficientemente seu comportamento para assumir conscientemente o risco residual.",
      "Esse aprendizado desloca a pergunta de “o sistema está totalmente correto?” para “temos informação suficiente para decidir com responsabilidade?”. E essa mudança de foco transforma os testes em um dos pilares mais importantes da Engenharia de Software contemporânea.",
    ],
    footer: FOOTER_PT,
  },
  {
    slug: "niveis-de-teste-e-estrategia-orientada-a-risco",
    title: "Níveis de teste como camadas de confiança",
    subject: "Testes de Software · Aula 25/02",
    date: "25/02/2026",
    publishedAt: "2026-02-25",
    summary:
      "Unidade, integração, sistema e aceitação como camadas complementares de confiança, e a estratégia de testes orientada a risco: probabilidade e impacto.",
    paragraphs: [
      "Durante esta aula foi possível compreender que testes de software não são apenas uma etapa final do desenvolvimento, mas um processo contínuo de construção de confiança sobre o sistema. Os testes funcionam como uma forma estruturada de reduzir incertezas ao longo do ciclo de desenvolvimento, permitindo avaliar gradualmente a qualidade do software antes de sua liberação.",
      "Um dos principais conceitos abordados foi o de níveis de teste como camadas de confiança. Cada nível possui um objetivo específico e reduz um tipo diferente de risco dentro do sistema. O teste de unidade verifica componentes isolados do código, reduzindo riscos técnicos locais como erros de lógica ou cálculos incorretos. O teste de integração avalia a comunicação entre módulos e sistemas, protegendo contra falhas estruturais como incompatibilidade de dados ou problemas de integração. Já o teste de sistema valida o comportamento global do software, analisando se os fluxos completos funcionam corretamente. Por fim, o teste de aceitação verifica se o sistema atende às necessidades do negócio e se realmente entrega valor para o usuário final.",
      "Outro ponto importante discutido foi que essas camadas não substituem umas às outras. Cada nível complementa o anterior, construindo uma confiança progressiva sobre o funcionamento do sistema. Quando algum desses níveis é negligenciado, defeitos simples podem ser descobertos apenas em fases mais avançadas do desenvolvimento, aumentando o custo de correção e dificultando a identificação da causa do problema.",
      "A aula também abordou o conceito de estratégia de testes orientada a risco, que muda a forma como o esforço de testes deve ser distribuído. Em vez de testar todas as funcionalidades com a mesma intensidade, é necessário analisar quais partes do sistema apresentam maior probabilidade de falha e maior impacto para o negócio. Dessa forma, o esforço de teste pode ser direcionado para áreas mais críticas, enquanto funcionalidades de menor risco podem receber uma abordagem mais enxuta.",
      "Nesse contexto, o risco é entendido como a combinação entre probabilidade de ocorrência e impacto da consequência, o que permite priorizar melhor os testes e utilizar os recursos disponíveis de forma mais eficiente. Essa abordagem é especialmente importante em cenários onde o tempo e os recursos são limitados, exigindo decisões estratégicas sobre onde concentrar o esforço de validação.",
      "Por fim, foi possível perceber que o objetivo dos testes não é eliminar completamente os riscos, mas torná-los visíveis e compreensíveis, permitindo que a equipe tome decisões conscientes sobre a liberação do sistema. Assim, testar deixa de ser apenas uma atividade técnica e passa a ser um mecanismo estratégico de gestão de risco, ajudando a garantir qualidade, reduzir incertezas e preservar o valor do negócio.",
    ],
    footer: FOOTER_PT,
  },
  {
    slug: "estruturando-regras-de-negocio-em-testes",
    title: "Estruturando regras de negócio em testes",
    subject: "Testes de Software · Aula 11/03",
    date: "11/03/2026",
    publishedAt: "2026-03-11",
    summary:
      "Cenário x caso de teste, objetivo, pré-condições, dados, passos e resultado esperado verificável: testar começa muito antes da validação final.",
    paragraphs: [
      "Ao desenvolver o Bootcamp 09 e 10, foi possível compreender melhor como estruturar regras de negócio em testes. Inicialmente, eu enxergava os testes apenas como uma etapa de validação após o desenvolvimento, principalmente por essa ser a realidade da maioria das empresas. Porém, a aula deixou claro que o teste começa muito antes.",
      "No cenário de login, por exemplo, não basta apenas testar o sucesso da autenticação. É necessário explorar comportamentos que não são tão prováveis em um primeiro momento. Isso contribui para uma visão mais analítica, pois não se trata apenas de verificar se funciona, mas de entender “como pode falhar”.",
      "Estruturar o teste a partir de objetivo, pré-condições, dados de teste, passos e resultado esperado permite ter uma clareza muito maior sobre o que realmente está sendo validado. Além disso, o resultado esperado precisa ser verificável, descrevendo exatamente o comportamento esperado do sistema.",
      "Também foi possível compreender a diferença entre cenário de teste e caso de teste. O cenário representa uma situação mais geral, enquanto o caso de teste detalha exatamente como essa situação será validada.",
      "Mesmo com todas as explicações, ainda é um processo desafiador de raciocinar e imaginar, principalmente porque nem todas as empresas possuem uma documentação de requisitos bem definida. Ainda assim, fica claro que testar vai muito além de validar o que já foi feito: envolve antecipar problemas e imaginar como o sistema deve se comportar diante de falhas.",
    ],
    footer: FOOTER_PT,
  },
  {
    slug: "metricas-ia-e-os-limites-dos-testes",
    title: "Métricas, IA e os limites dos testes",
    subject: "Testes de Software · Aula 25/03",
    date: "25/03/2026",
    publishedAt: "2026-03-25",
    summary:
      "Qase e Jira, métricas bem (e mal) interpretadas, o sistema 100% aprovado que falha em produção e a IA como apoio — não substituta — do raciocínio humano.",
    paragraphs: [
      "Ao longo dos bootcamps 15, 16, 17 e 18, foi possível compreender que testar software vai muito além de executar casos de teste ou validar funcionalidades isoladas. O processo de testes está diretamente ligado à tomada de decisão, à análise de risco e à responsabilidade profissional, exigindo não apenas conhecimento técnico, mas também pensamento crítico e visão de contexto.",
      "No Bootcamp 15, o foco esteve na estruturação dos testes e no uso de ferramentas como Qase e Jira, permitindo entender na prática como organizar casos de teste, registrar evidências e garantir rastreabilidade. Esse aprendizado reforçou a importância de documentar corretamente os testes, não apenas para controle, mas também para comunicação entre equipes e suporte à tomada de decisão.",
      "Já no Bootcamp 16, o aprofundamento em métricas trouxe uma nova perspectiva sobre qualidade de software. Foi possível perceber que métricas não devem ser utilizadas apenas como indicadores quantitativos, mas como instrumentos para análise e melhoria contínua. Métricas mal interpretadas podem gerar uma falsa sensação de qualidade, enquanto métricas bem utilizadas ajudam a identificar riscos e orientar decisões mais assertivas.",
      "O Bootcamp 17 trouxe uma das reflexões mais importantes da disciplina: um sistema pode estar 100% aprovado nos testes e ainda assim falhar em produção. Esse aprendizado evidencia os limites dos testes e reforça que eles não garantem ausência de falhas, mas sim reduzem incertezas. A distinção entre confiança, garantia e ilusão de segurança mostrou que o maior risco não está apenas na execução dos testes, mas na interpretação equivocada de seus resultados.",
      "Por fim, o Bootcamp 18 abordou o uso da Inteligência Artificial como apoio aos testes, destacando seu papel como ferramenta de aceleração e geração de ideias, mas não como substituta do raciocínio humano. Foi possível perceber que a IA é eficiente para brainstorming e estruturação inicial, porém limitada na compreensão de contexto, priorização de riscos e profundidade técnica. Isso reforça a necessidade de curadoria profissional e análise crítica sobre tudo o que é gerado.",
      "De forma geral, os aprendizados desses bootcamps mostram que a qualidade de software depende menos de ferramentas e mais da capacidade humana de interpretar, questionar e decidir. Testar não é apenas encontrar erros, mas compreender o sistema, antecipar falhas e assumir responsabilidade pelas decisões tomadas. Assim, o papel do profissional de testes se consolida como essencial na construção de sistemas mais confiáveis, mesmo em cenários de incerteza.",
    ],
    footer: FOOTER_PT,
  },
  {
    slug: "testes-como-criterio-risco-e-responsabilidade",
    title: "Testes como critério, risco e responsabilidade",
    subject: "Testes de Software · Aula 01/04",
    date: "01/04/2026",
    publishedAt: "2026-04-01",
    summary:
      "De uma visão operacional a uma visão de engenharia: testes não são neutros, lidam com incerteza e sustentam decisões éticas e de negócio.",
    paragraphs: [
      "No início da disciplina, minha visão sobre teste de software era mais operacional, ligada a executar casos, validar funcionalidades e registrar defeitos. Eu tinha a ideia de que era um processo importante, mas ainda limitado ao que precisava ser verificado no sistema de forma somente funcional.",
      "Testes não servem apenas para encontrar erros, mas para entender o comportamento do sistema, reduzir incertezas e apoiar decisões. Um dos pontos que mais me marcou foi a relação entre testes e risco. Nem tudo pode ser testado, nem todo defeito será encontrado, e nem toda decisão é confortável. Isso trouxe uma mudança importante: testar não é garantir perfeição, é lidar com incerteza de forma consciente.",
      "Outro ponto relevante foi entender que testes não são neutros. Existe responsabilidade envolvida. Decidir liberar um sistema com falhas, omitir riscos ou suavizar problemas não é apenas uma decisão técnica, é também uma decisão ética. E essa decisão pode impactar diretamente pessoas.",
      "A disciplina também mostrou que o papel do profissional de testes vai muito além da execução. Existe uma diferença clara entre quem apenas executa testes e quem utiliza os testes para analisar contexto, interpretar evidências e sustentar decisões.",
      "Ao longo dos bootcamps, principalmente nos cenários de decisão, ficou evidente que o mais importante não é seguir um processo, mas ter critério: saber avaliar risco, entender impacto e se posicionar com clareza, mesmo diante de pressão.",
      "Hoje, enxergo testes como parte central da engenharia de software. Não como uma etapa final, mas como uma prática contínua que conecta qualidade, negócio e responsabilidade. Talvez essa seja a principal evolução: sair da execução e assumir um papel mais consciente dentro das decisões de engenharia.",
    ],
    footer: FOOTER_PT,
  },
];
