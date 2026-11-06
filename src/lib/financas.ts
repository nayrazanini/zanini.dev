const locale = (en: boolean) => (en ? "en-US" : "pt-BR");

export const brl = (v: number, en = false) =>
  new Intl.NumberFormat(locale(en), { style: "currency", currency: "BRL" }).format(v || 0);

export const dataBR = (iso: string, en = false) => {
  const [y, m, d] = iso.split("-");
  return en ? `${m}/${d}/${y}` : `${d}/${m}/${y}`;
};

/** Primeiro dia do mês em ISO (YYYY-MM-01) a partir de "YYYY-MM" */
export const inicioMes = (mes: string) => `${mes}-01`;

/** Primeiro dia do mês seguinte em ISO */
export const inicioMesSeguinte = (mes: string) => {
  const [y, m] = mes.split("-").map(Number);
  const date = new Date(Date.UTC(y, m, 1));
  return date.toISOString().slice(0, 10);
};

export const mesAtual = () => new Date().toISOString().slice(0, 7);

export const rotuloMes = (mes: string, en = false) => {
  const [y, m] = mes.split("-").map(Number);
  return new Intl.DateTimeFormat(locale(en), { month: "long", year: "numeric" }).format(
    new Date(Date.UTC(y, m - 1, 1)),
  );
};

/** Nomes das contas e categorias criadas por padrão no onboarding (em português no banco). */
const NOMES_EN: Record<string, string> = {
  Carteira: "Wallet",
  "Salário": "Salary",
  Freelance: "Freelance",
  Moradia: "Housing",
  "Alimentação": "Food",
  Transporte: "Transport",
  "Educação": "Education",
  Lazer: "Leisure",
  "Saúde": "Health",
};

/** Em inglês, traduz os nomes padrão; nomes criados pelo usuário ficam como estão. */
export const nomeExibicao = (nome: string, en = false) => (en ? NOMES_EN[nome] ?? nome : nome);
