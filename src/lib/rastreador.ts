/** Lógica do rastreador de estudos — espelha as functions/views T-SQL do repositório. */

export interface Materia { id: string; nome: string; metaSemanalMin: number }
export interface Sessao { id: string; materiaId: string; data: string; minutos: number; assunto: string }
export interface Revisao { id: string; sessaoId: string; materiaId: string; assunto: string; data: string; nivel: number; feita: boolean }
export interface Estado { versao: 1; materias: Materia[]; sessoes: Sessao[]; revisoes: Revisao[] }

/** Progressão Leitner (fn_CalcularProximaRevisao): 1, 3, 7, 14, 30 dias. */
export const INTERVALOS = [1, 3, 7, 14, 30];
export const intervaloRevisao = (nivel: number) =>
  INTERVALOS[Math.min(Math.max(nivel, 0), INTERVALOS.length - 1)];

export const somarDias = (iso: string, dias: number) => {
  const d = new Date(`${iso}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + dias);
  return d.toISOString().slice(0, 10);
};
const diaNum = (iso: string) => Math.round(Date.parse(`${iso}T00:00:00Z`) / 86400000);
export const hojeISO = () => {
  const d = new Date();
  return new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
};
const uid = () => Math.random().toString(36).slice(2, 10);

/** sp_RegistrarSessaoEstudo: registra e já agenda a 1ª revisão. */
export function registrarSessao(e: Estado, s: Omit<Sessao, "id">): Estado {
  if (s.minutos <= 0) throw new Error("Duração deve ser maior que zero.");
  if (!e.materias.some((m) => m.id === s.materiaId)) throw new Error("Matéria inexistente.");
  const sessao = { ...s, id: uid() };
  const rev: Revisao = {
    id: uid(), sessaoId: sessao.id, materiaId: s.materiaId, assunto: s.assunto,
    data: somarDias(s.data, intervaloRevisao(0)), nivel: 0, feita: false,
  };
  return { ...e, sessoes: [...e.sessoes, sessao], revisoes: [...e.revisoes, rev] };
}

/** sp_ConcluirRevisao: marca como feita e agenda a próxima no nível seguinte. */
export function concluirRevisao(e: Estado, id: string, hoje: string): Estado {
  const r = e.revisoes.find((x) => x.id === id);
  if (!r || r.feita) return e;
  const nivel = r.nivel + 1;
  const proxima: Revisao = { ...r, id: uid(), nivel, feita: false, data: somarDias(hoje, intervaloRevisao(nivel)) };
  return { ...e, revisoes: [...e.revisoes.map((x) => (x.id === id ? { ...x, feita: true } : x)), proxima] };
}

/** sp_ProximasRevisoes: pendentes até o horizonte, incluindo atrasadas, mais urgente primeiro. */
export const proximasRevisoes = (e: Estado, hoje: string, horizonte = 7) =>
  e.revisoes
    .filter((r) => !r.feita && r.data <= somarDias(hoje, horizonte))
    .sort((a, b) => a.data.localeCompare(b.data));

/** vw_SequenciasEstudo: gaps and islands — dia - posição é constante dentro de uma sequência. */
export function sequencias(sessoes: Sessao[]) {
  const dias = [...new Set(sessoes.map((s) => s.data))].sort();
  const grupos = new Map<number, string[]>();
  dias.forEach((d, i) => {
    const k = diaNum(d) - i;
    grupos.set(k, [...(grupos.get(k) ?? []), d]);
  });
  return [...grupos.values()]
    .map((g) => ({ inicio: g[0], fim: g[g.length - 1], dias: g.length }))
    .sort((a, b) => b.fim.localeCompare(a.fim));
}

/** Streak atual: sequência que termina hoje ou ontem. */
export function streakAtual(sessoes: Sessao[], hoje: string) {
  const s = sequencias(sessoes)[0];
  return s && (s.fim === hoje || s.fim === somarDias(hoje, -1)) ? s.dias : 0;
}

/** Segunda-feira da semana de uma data. */
export const inicioSemana = (iso: string) => {
  const dow = new Date(`${iso}T00:00:00Z`).getUTCDay();
  return somarDias(iso, -((dow + 6) % 7));
};

/** vw_ProgressoSemanal: minutos estudados x meta, por matéria. */
export function progressoSemanal(e: Estado, hoje: string) {
  const ini = inicioSemana(hoje);
  const fim = somarDias(ini, 6);
  return e.materias.map((m) => {
    const min = e.sessoes
      .filter((s) => s.materiaId === m.id && s.data >= ini && s.data <= fim)
      .reduce((t, s) => t + s.minutos, 0);
    return { materia: m, minutos: min, percentual: m.metaSemanalMin ? Math.round((min / m.metaSemanalMin) * 100) : 0 };
  });
}

export function estadoExemplo(hoje: string): Estado {
  const materias: Materia[] = [
    { id: "sql", nome: "SQL Server", metaSemanalMin: 300 },
    { id: "eng", nome: "Engenharia de Software", metaSemanalMin: 180 },
    { id: "ing", nome: "Inglês", metaSemanalMin: 120 },
  ];
  let e: Estado = { versao: 1, materias, sessoes: [], revisoes: [] };
  const plano: [number, string, number, string][] = [
    [-6, "sql", 60, "JOINs e subconsultas"], [-5, "eng", 45, "Requisitos"],
    [-4, "sql", 50, "Funções de janela"], [-3, "ing", 30, "Listening"],
    [-2, "sql", 40, "Gaps and islands"], [-1, "eng", 60, "Testes funcionais"],
  ];
  for (const [d, m, min, a] of plano) e = registrarSessao(e, { materiaId: m, data: somarDias(hoje, d), minutos: min, assunto: a });
  return e;
}

const CHAVE = "rastreador-estudos:v1";
export function carregar(hoje: string): Estado {
  try {
    const raw = localStorage.getItem(CHAVE);
    const p = raw ? JSON.parse(raw) : null;
    if (p?.versao === 1 && Array.isArray(p.materias) && Array.isArray(p.sessoes) && Array.isArray(p.revisoes)) return p;
  } catch { /* dados corrompidos: volta ao exemplo */ }
  return estadoExemplo(hoje);
}
export const salvar = (e: Estado) => localStorage.setItem(CHAVE, JSON.stringify(e));
export const limpar = () => localStorage.removeItem(CHAVE);
