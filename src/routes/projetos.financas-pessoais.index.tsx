import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { useLanguage } from "@/context/LanguageContext";

const REPO = "https://github.com/nayrazanini/financas-pessoais";

export const Route = createFileRoute("/projetos/financas-pessoais/")({
  head: () => ({
    meta: [
      { title: "financas-pessoais — Case study | Náyra Zanini" },
      {
        name: "description",
        content:
          "Case study do projeto financas-pessoais: controle financeiro com SQL Server, stored procedures em T-SQL, views de consolidação e app Next.js 15.",
      },
      { property: "og:title", content: "financas-pessoais — Case study | Náyra Zanini" },
      {
        property: "og:description",
        content:
          "Arquitetura, modelagem de dados e decisões técnicas do sistema de controle financeiro pessoal em SQL Server e Next.js 15.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: FinancasPessoaisPage,
});

const STACK = [
  "SQL Server 2022",
  "T-SQL",
  "Stored Procedures",
  "Views",
  "CTEs & Window Functions",
  "Next.js 15",
  "React 19",
  "TypeScript",
  "Tailwind CSS 4",
  "Zod",
  "JWT (jose)",
  "Docker Compose",
  "GitHub Actions",
];

const HIGHLIGHTS = {
  pt: [
    {
      n: "01",
      title: "Toda escrita via stored procedure",
      text: "Nenhum INSERT, UPDATE ou DELETE parte da aplicação. As 11 procedures concentram as regras de negócio no banco, com validação de propriedade do dado, transações explícitas e MERGE idempotente para orçamentos.",
    },
    {
      n: "02",
      title: "Leitura por views de consolidação",
      text: "Saldos por conta, resumo mensal por categoria e acompanhamento de orçamento saem de views versionadas — a aplicação não remonta agregações no código.",
    },
    {
      n: "03",
      title: "Consultas analíticas de portfólio",
      text: "Arquivo dedicado com CTEs, LAG para variação mês a mês, DENSE_RANK para maiores gastos e running total de saldo acumulado.",
    },
    {
      n: "04",
      title: "Autenticação e isolamento de dados",
      text: "Senha com bcrypt, sessão em JWT httpOnly e middleware protegendo as rotas privadas. Toda procedure recebe o UsuarioId e recusa dados de terceiros.",
    },
  ],
  en: [
    {
      n: "01",
      title: "All writes go through stored procedures",
      text: "No INSERT, UPDATE or DELETE comes from the application. The 11 procedures concentrate the business rules in the database, with data ownership validation, explicit transactions and an idempotent MERGE for budgets.",
    },
    {
      n: "02",
      title: "Reads through consolidation views",
      text: "Balances per account, the monthly summary by category and budget tracking come from versioned views — the application doesn't rebuild aggregations in code.",
    },
    {
      n: "03",
      title: "Analytical queries for the portfolio",
      text: "A dedicated file with CTEs, LAG for month-over-month change, DENSE_RANK for top expenses and a running total of the accumulated balance.",
    },
    {
      n: "04",
      title: "Authentication and data isolation",
      text: "Passwords hashed with bcrypt, an httpOnly JWT session and middleware protecting private routes. Every procedure receives the UsuarioId and rejects other users' data.",
    },
  ],
};

const SCHEMA = {
  pt: [
    { table: "Usuario", desc: "Credenciais e perfil, com e-mail único." },
    { table: "Conta", desc: "Contas do usuário (corrente, poupança, carteira) e saldo inicial." },
    { table: "Categoria", desc: "Categorias de receita e despesa, por usuário." },
    { table: "Transacao", desc: "Lançamentos com conta, categoria, tipo, valor e data." },
    { table: "Orcamento", desc: "Limite mensal por categoria, com chave única (usuário, categoria, mês)." },
  ],
  en: [
    { table: "Usuario", desc: "Credentials and profile, with a unique e-mail." },
    { table: "Conta", desc: "User accounts (checking, savings, wallet) and opening balance." },
    { table: "Categoria", desc: "Income and expense categories, per user." },
    { table: "Transacao", desc: "Entries with account, category, type, amount and date." },
    { table: "Orcamento", desc: "Monthly limit per category, with a unique key (user, category, month)." },
  ],
};

const MODULES = {
  pt: [
    {
      title: "Dashboard",
      text: "Saldo consolidado, receitas e despesas do mês e evolução por categoria — em um único round-trip com múltiplos recordsets.",
    },
    {
      title: "Lançamentos",
      text: "Cadastro, listagem paginada (OFFSET/FETCH) e exclusão de transações, com filtros por período e tipo.",
    },
    {
      title: "Orçamentos",
      text: "Definição de limite mensal por categoria e acompanhamento do percentual consumido.",
    },
  ],
  en: [
    {
      title: "Dashboard",
      text: "Consolidated balance, monthly income and expenses and breakdown by category — in a single round trip with multiple recordsets.",
    },
    {
      title: "Transactions",
      text: "Creation, paginated listing (OFFSET/FETCH) and deletion of transactions, with filters by period and type.",
    },
    {
      title: "Budgets",
      text: "Setting a monthly limit per category and tracking the percentage consumed.",
    },
  ],
};

function FinancasPessoaisPage() {
  const { language } = useLanguage();
  const en = language === "en";
  const highlights = en ? HIGHLIGHTS.en : HIGHLIGHTS.pt;
  const schema = en ? SCHEMA.en : SCHEMA.pt;
  const modules = en ? MODULES.en : MODULES.pt;

  return (
    <SiteLayout>
      <article className="mx-auto max-w-4xl px-5 sm:px-6 pt-10 sm:pt-16 pb-16 sm:pb-24">
        <Link
          to="/projetos"
          className="text-sm text-muted-foreground hover:text-terracotta transition-colors"
        >
          {en ? "← Projects" : "← Projetos"}
        </Link>

        <header className="mt-5 sm:mt-6 pb-6 sm:pb-8 border-b border-border/60">
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-terracotta font-medium">
            {en ? "Case study · Full-stack application + SQL Server" : "Case study · Aplicação full-stack + SQL Server"}
          </p>
          <h1 className="mt-3 sm:mt-4 font-display text-2xl sm:text-3xl md:text-5xl font-medium leading-tight break-words">
            financas-pessoais
          </h1>
          <p className="mt-4 text-sm sm:text-base text-foreground/85 leading-relaxed max-w-2xl">
            {en
              ? "A personal finance system designed to prove, in practice, relational modeling and production-grade T-SQL: the database holds the business rules and the application only orchestrates."
              : "Sistema de controle financeiro pessoal desenhado para provar, na prática, modelagem relacional e T-SQL de produção: o banco guarda as regras de negócio e a aplicação só orquestra."}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/projetos/financas-pessoais/app"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-plum-radial text-white text-sm font-medium hover:opacity-90 transition-opacity"
            >
              {en ? "Open the app →" : "Abrir o app →"}
            </Link>
            <a
              href={REPO}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/70 text-sm font-medium hover:border-terracotta/50 hover:text-terracotta transition-colors"
            >
              {en ? "View code on GitHub ↗" : "Ver código no GitHub ↗"}
            </a>
            <a
              href={`${REPO}/tree/main/sql`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/70 text-sm font-medium hover:border-terracotta/50 hover:text-terracotta transition-colors"
            >
              {en ? "SQL scripts ↗" : "Scripts SQL ↗"}
            </a>
          </div>
        </header>

        <section className="mt-10">
          <h2 className="font-sans text-lg md:text-2xl font-semibold tracking-tight text-white">
            {en ? "The problem" : "O problema"}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-foreground/85 leading-relaxed">
            {en
              ? "Spreadsheets for tracking finances break for three reasons: they don't guarantee integrity, they don't keep a reliable history and they can't answer analytical questions without manual rework. The goal was to solve this with a well-modeled relational database and an interface lean enough for daily use."
              : "Planilhas de controle financeiro quebram por três motivos: não garantem integridade, não têm histórico confiável e não respondem perguntas analíticas sem retrabalho manual. A proposta foi resolver isso com um banco relacional bem modelado e uma interface enxuta o suficiente para o uso diário."}
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-sans text-lg md:text-2xl font-semibold tracking-tight text-white">
            {en ? "Architecture decisions" : "Decisões de arquitetura"}
          </h2>
          <div className="mt-4 grid gap-4 sm:gap-5">
            {highlights.map((h) => (
              <div
                key={h.n}
                className="grid grid-cols-[auto_1fr] gap-4 p-5 rounded-2xl bg-card border border-border/60"
              >
                <p className="font-display text-xl md:text-2xl text-terracotta">{h.n}</p>
                <div className="min-w-0">
                  <h3 className="font-display text-base sm:text-lg font-medium">{h.title}</h3>
                  <p className="mt-1.5 text-sm text-foreground/85 leading-relaxed">{h.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="font-sans text-lg md:text-2xl font-semibold tracking-tight text-white">
            {en ? "Data model" : "Modelo de dados"}
          </h2>
          <ul className="mt-4 divide-y divide-border/60 border-y border-border/60">
            {schema.map((s) => (
              <li key={s.table} className="py-3 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                <span className="font-mono text-sm text-terracotta sm:w-32 shrink-0">{s.table}</span>
                <span className="text-sm text-foreground/85 leading-relaxed">{s.desc}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
            {en
              ? "Constraints, indexes supporting period queries and a value-validation trigger come with the schema in"
              : "Constraints, índices de apoio às consultas por período e trigger de validação de valores acompanham o schema em"}{" "}
            <span className="font-mono">sql/01_schema.sql</span>.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-sans text-lg md:text-2xl font-semibold tracking-tight text-white">
            {en ? "Application modules" : "Módulos da aplicação"}
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {modules.map((m) => (
              <div key={m.title} className="p-5 rounded-2xl bg-card border border-border/60">
                <h3 className="font-display text-base sm:text-lg font-medium">{m.title}</h3>
                <p className="mt-1.5 text-sm text-foreground/85 leading-relaxed">{m.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="font-sans text-lg md:text-2xl font-semibold tracking-tight text-white">
            Stack
          </h2>
          <ul className="mt-4 flex flex-wrap gap-1.5 sm:gap-2">
            {STACK.map((t) => (
              <li
                key={t}
                className="text-[11px] sm:text-xs px-2 sm:px-2.5 py-1 rounded-full bg-paper-deep border border-border/60 font-mono"
              >
                {t}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="font-sans text-lg md:text-2xl font-semibold tracking-tight text-white">
            {en ? "Software engineering" : "Engenharia de software"}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-foreground/85 leading-relaxed">
            {en ? "The repository includes " : "O repositório traz "}
            <span className="font-mono">docker-compose.yml</span>
            {en
              ? " to run SQL Server locally, numbered and idempotent SQL scripts, input validation with Zod in the Server Actions, a CI pipeline on GitHub Actions (typecheck, lint and build) and the decisions recorded in"
              : " para subir o SQL Server localmente, scripts SQL numerados e idempotentes, validação de entrada com Zod nas Server Actions, pipeline de CI no GitHub Actions (typecheck, lint e build) e as decisões registradas em"}{" "}
            <span className="font-mono">docs/DECISOES.md</span>.
          </p>
        </section>

        <footer className="mt-12 pt-8 border-t border-border/60 flex flex-col sm:flex-row gap-4 sm:items-center justify-between">
          <Link
            to="/projetos"
            className="text-sm text-muted-foreground hover:text-terracotta transition-colors"
          >
            {en ? "← All projects" : "← Todos os projetos"}
          </Link>
          <a
            href={REPO}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-terracotta underline underline-offset-4 hover:opacity-80"
          >
            github.com/nayrazanini/financas-pessoais ↗
          </a>
        </footer>
      </article>
    </SiteLayout>
  );
}