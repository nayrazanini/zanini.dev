export const brl = (v: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(v || 0);

export const dataBR = (iso: string) => {
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y}`;
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

export const rotuloMes = (mes: string) => {
  const [y, m] = mes.split("-").map(Number);
  return new Intl.DateTimeFormat("pt-BR", { month: "long", year: "numeric" }).format(
    new Date(Date.UTC(y, m - 1, 1)),
  );
};