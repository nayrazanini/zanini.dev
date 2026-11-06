import type { Projeto } from "@/data/projetos";

// Traduções para inglês dos case studies (usadas na lista e na página de cada projeto).
export type ConteudoTraduzido = Partial<
  Pick<
    Projeto,
    | "title"
    | "tagline"
    | "description"
    | "problem"
    | "highlights"
    | "model"
    | "modules"
    | "sections"
    | "learnings"
  >
>;

export const PROJECT_TRANSLATIONS: Record<string, ConteudoTraduzido> = {
  "financas-pessoais": {
    title: "PERSONAL FINANCE TRACKER",
    tagline: "Full-stack application + SQL Server",
    description:
      "A personal finance management application designed to organize and monitor financial information through a practical experience.",
    problem:
      "Spreadsheets do not guarantee data integrity, preserve a reliable history, or make analysis easy without manual work. The project addresses these limitations with a relational database and a practical interface for everyday use.",
    highlights: [
      {
        n: "01",
        title: "Writes handled by stored procedures",
        text: "Create, update, and delete operations are centralized in stored procedures, keeping business rules in the database with ownership validation and explicit transactions.",
      },
      {
        n: "02",
        title: "Read operations through consolidated views",
        text: "Account balances, monthly category summaries, and budget tracking are exposed through views, avoiding repeated aggregation logic in the application.",
      },
      {
        n: "03",
        title: "Analytical queries",
        text: "The project includes CTEs, LAG for period comparisons, DENSE_RANK for expense rankings, and running totals.",
      },
      {
        n: "04",
        title: "Authentication and data isolation",
        text: "The application uses bcrypt password hashing, httpOnly JWT sessions, and protected private routes. Database operations also scope data to the authenticated user.",
      },
    ],
    model: [
      { label: "Usuario", desc: "User credentials and profile, with a unique email." },
      { label: "Conta", desc: "User accounts and opening balances." },
      { label: "Categoria", desc: "Income and expense categories by user." },
      { label: "Transacao", desc: "Entries associated with account, category, type, amount, and date." },
      { label: "Orcamento", desc: "Monthly category budgets by user." },
    ],
    modules: [
      { title: "Dashboard", text: "Consolidated balance, monthly income and expenses, and category trends." },
      { title: "Transactions", text: "Create, paginate, and delete transactions, with period and type filters." },
      { title: "Budgets", text: "Set monthly category limits and track the percentage used." },
    ],
    sections: [
      {
        title: "Software engineering",
        paragraphs: [
          "The repository includes docker-compose.yml for local SQL Server setup, numbered SQL scripts, and documented technical decisions.",
          "The application uses Zod input validation, JWT-based authentication, and a structure that separates the interface from persistence rules.",
        ],
      },
      {
        title: "Database",
        paragraphs: [
          "The model uses constraints and indexes to support period-based queries. Balances and indicators are derived from financial records and consolidation queries.",
          "The repository contains schema, stored procedure, view, and analytical query scripts to reproduce the database.",
        ],
      },
    ],
    learnings: [
      "Centralizing business rules in the database helps maintain consistency across operations.",
      "Views simplify recurring queries and separate read logic from the interface.",
      "Transactions and validations are essential to data integrity.",
      "Authentication and authorization must also be considered at the data-access layer.",
    ],
  },
  "pr-gerencia-menu": {
    title: "PR_GERENCIA_MENU",
    tagline: "Dynamic menu manager in T-SQL",
    description:
      "A parameterized SQL Server procedure that creates menu hierarchies, generates access profile codes safely under concurrency, and associates users in a single transactional operation. Based on a real project, with generic names.",
    problem:
      "Different systems shared catalogs of transactions, modules, and profiles, but maintained their own naming rules and menu trees. Nearly identical procedures increased maintenance effort and made access provisioning more prone to inconsistencies.",
    highlights: [
      {
        n: "01",
        title: "One procedure for multiple systems",
        text: "The system parameter centralizes differences in menu prefixes and profile rules while keeping validation, hierarchy creation, and error handling shared.",
      },
      {
        n: "02",
        title: "Safe access-profile code generation",
        text: "Code generation considers the existing sequence and uses sp_getapplock to protect the operation against race conditions during concurrent executions.",
      },
      {
        n: "03",
        title: "Validated hierarchy creation",
        text: "The procedure validates submenu levels, checks module existence, and creates missing levels inside a transaction using TRY/CATCH, XACT_ABORT, and XACT_STATE.",
      },
    ],
    model: [
      { label: "catalogo.TB_USUARIO", desc: "Users registered and shared across systems." },
      { label: "catalogo.TB_MODULO", desc: "Modules registered for each system." },
      { label: "catalogo.TB_TRANSACAO_MENU", desc: "Catalog of available screens and transactions." },
      { label: "catalogo.TB_PERFIL_ACESSO", desc: "Access profiles generated by the procedure." },
      { label: "catalogo.TB_PERFIL_TRANSACAO", desc: "Relationship between an access profile and a transaction." },
      { label: "catalogo.TB_PERFIL_USUARIO", desc: "Association between access profiles and users." },
      { label: "dbo.TB_MENU", desc: "Navigation tree maintained locally by each system." },
    ],
    sections: [
      {
        title: "System-specific rules and shared logic",
        paragraphs: [
          "Each system may have its own menu-prefix and profile-generation conventions. The procedure centralizes these differences in parameterized rules instead of maintaining a separate copy for each system.",
          "The hierarchy is processed dynamically through a TABLE variable and loop, allowing different submenu depths without duplicating code blocks.",
        ],
      },
      {
        title: "Return contract and error handling",
        paragraphs: [
          "The procedure uses explicit return codes to distinguish success, validation failures, a missing root menu when creation is not authorized, and unexpected technical errors.",
          "Operations are grouped in a transaction so that hierarchy creation and related associations are committed together or rolled back on failure.",
        ],
      },
      {
        title: "Current state",
        paragraphs: [
          "This unified version replaces earlier implementations separated by system. The repository includes the demonstration database script, documented procedure, and execution examples.",
          "Table, system, and module names are generic. The logic and architecture reflect a real project developed in partnership.",
        ],
      },
    ],
    learnings: [
      "Generating sequential codes under a lock prevents duplicate codes during concurrent executions.",
      "A parameterized procedure reduces duplication and centralizes maintenance.",
      "Separating shared catalogs from system-specific data improves reuse.",
      "Explicit return codes make procedures more predictable for their consumers.",
    ],
  },
  "ponto-sql-server": {
    title: "TIME TRACKING SYSTEM",
    tagline: "Time tracking system with SQL Server",
    description:
      "A SQL Server database project for employee records, clock-in and clock-out entries, business rules, and attendance reports.",
    problem:
      "Payroll closing depends on reliable time records. The project structures work schedules, time entries, and occurrences to support consistent calculations of worked hours, delays, and overtime.",
    highlights: [
      {
        n: "01",
        title: "Recorded hours versus expected schedule",
        text: "Each employee has a reference schedule. Time entries are compared against it to calculate worked hours, delays, and overtime.",
      },
      {
        n: "02",
        title: "Business rules in the database",
        text: "Stored procedures validate the sequence of time entries, preventing clock-outs without a previous clock-in and handling duplicate records.",
      },
      {
        n: "03",
        title: "Reports by period",
        text: "Queries support monthly attendance reports and summaries by department, employee, and date.",
      },
    ],
    model: [
      { label: "Funcionario", desc: "Employee records, department, and contracted schedule." },
      { label: "Marcacao", desc: "Clock-in and clock-out records with date and time." },
      { label: "Ocorrencia", desc: "Absences, approved leave, and justifications." },
    ],
    sections: [
      {
        title: "T-SQL applied to date and time",
        paragraphs: [
          "The project addresses common attendance-system scenarios, including DATE versus DATETIME, overnight shifts, minute rounding, and monthly reporting periods.",
          "Queries use date functions, CASE expressions to classify occurrences, and conditional aggregations to separate regular hours from overtime.",
        ],
      },
    ],
    learnings: [
      "Handling date and time values rigorously prevents silent discrepancies.",
      "Validating event sequences in the database is safer than relying only on the interface.",
      "Reports should be considered from the data-modeling stage.",
    ],
  },
  "estoque-sql-server": {
    title: "INVENTORY MANAGEMENT",
    tagline: "Inventory management with SQL Server",
    description:
      "A SQL Server inventory project with relational modeling, tables, relationships, stored procedures, and T-SQL scripts for product entries, exits, and queries.",
    problem:
      "Managing inventory in spreadsheets can lead to negative balances, untracked movements, and no guarantee that a stock deduction was completed correctly. The project uses a relational database to preserve history and prevent invalid states.",
    highlights: [
      {
        n: "01",
        title: "Relational data modeling",
        text: "Products, suppliers, movements, and users are organized in related tables, with foreign keys and constraints ensuring referential integrity.",
      },
      {
        n: "02",
        title: "Movements through stored procedures",
        text: "Incoming and outgoing movements are processed by stored procedures that validate available quantities within a transaction.",
      },
      {
        n: "03",
        title: "Balance derived from movements",
        text: "Current stock is derived from movement history through views, preserving traceability instead of manually overwriting a quantity.",
      },
    ],
    model: [
      { label: "Produto", desc: "Product records, units of measurement, and minimum stock." },
      { label: "Fornecedor", desc: "Supplier information associated with incoming movements." },
      { label: "Movimentacao", desc: "Incoming and outgoing movements with date, quantity, and responsible user." },
    ],
    sections: [
      {
        title: "Queries supporting daily operations",
        paragraphs: [
          "In addition to registration operations, the project includes queries to identify products below minimum stock, analyze movements by period, and retrieve each product's movement history.",
          "Queries use JOINs, aggregations, and window functions, demonstrating the database as an analytical layer as well as a storage layer.",
        ],
      },
    ],
    learnings: [
      "A well-defined constraint reduces duplicated validation in the application.",
      "Explicit transactions make stock movements more reliable.",
      "Numbered, idempotent scripts make the environment easier to reproduce.",
    ],
  },
};

/** Tags em português que mudam no inglês (as demais, como "T-SQL", ficam iguais). */
const TAGS_EN: Record<string, string> = {
  "Concorrência": "Concurrency",
  Integridade: "Integrity",
  Modelagem: "Modeling",
  "Relatórios": "Reports",
  "Transações": "Transactions",
};

export const traduzirTag = (tag: string, en: boolean) => (en ? TAGS_EN[tag] ?? tag : tag);
