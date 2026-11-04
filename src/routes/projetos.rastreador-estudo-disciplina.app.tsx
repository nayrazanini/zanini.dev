import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import {
  carregar, concluirRevisao, estadoExemplo, hojeISO, limpar, progressoSemanal, proximasRevisoes,
  registrarSessao, salvar, sequencias, streakAtual, type Estado,
} from "@/lib/rastreador";
import { dataBR } from "@/lib/financas";

export const Route = createFileRoute("/projetos/rastreador-estudo-disciplina/app")({
  head: () => ({
    meta: [
      { title: "App Rastreador de Estudos — Náyra Zanini" },
      { name: "description", content: "Registre sessões de estudo, acompanhe sequência de dias, metas semanais e revisões espaçadas automáticas." },
      { property: "og:title", content: "App Rastreador de Estudos — Náyra Zanini" },
      { property: "og:description", content: "Versão utilizável do projeto rastreador-estudo-disciplina: streak, metas semanais e repetição espaçada." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: RastreadorApp,
});

const card = "rounded-2xl bg-card border border-border/60 p-5 sm:p-6";
const input = "w-full rounded-lg bg-background border border-border/60 px-3 py-2 text-sm";

function RastreadorApp() {
  const [hoje] = useState(hojeISO);
  const [e, setE] = useState<Estado | null>(null);
  const [form, setForm] = useState({ materiaId: "sql", data: hoje, minutos: 45, assunto: "" });
  const [erro, setErro] = useState("");

  useEffect(() => setE(carregar(hoje)), [hoje]);
  useEffect(() => { if (e) salvar(e); }, [e]);
  if (!e) return <SiteLayout><div className="min-h-[60vh]" /></SiteLayout>;

  const fila = proximasRevisoes(e, hoje);
  const progresso = progressoSemanal(e, hoje);
  const seqs = sequencias(e.sessoes);
  const nome = (id: string) => e.materias.find((m) => m.id === id)?.nome ?? id;

  const registrar = (ev: React.FormEvent) => {
    ev.preventDefault();
    try {
      setE(registrarSessao(e, { ...form, assunto: form.assunto.trim() || "Sessão de estudo" }));
      setForm({ ...form, assunto: "" });
      setErro("");
    } catch (x) { setErro((x as Error).message); }
  };

  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-5 sm:px-6 pt-10 sm:pt-14 pb-16">
        <Link to="/projetos/$slug" params={{ slug: "rastreador-estudo-disciplina" }} className="text-sm text-muted-foreground hover:text-terracotta">
          ← Case study
        </Link>
        <h1 className="mt-4 font-display text-2xl sm:text-4xl font-medium">Rastreador de Estudos</h1>
        <p className="mt-2 text-sm text-muted-foreground max-w-2xl">
          Demonstração utilizável. Os dados ficam só no seu navegador e já vêm com exemplos — registre uma sessão e veja a revisão ser agendada.
        </p>

        <div className="mt-6 grid grid-cols-3 gap-3">
          {[
            ["Sequência atual", `${streakAtual(e.sessoes, hoje)} dias`],
            ["Maior sequência", `${Math.max(0, ...seqs.map((s) => s.dias))} dias`],
            ["Revisões pendentes", String(fila.length)],
          ].map(([l, v]) => (
            <div key={l} className={card}>
              <p className="text-[11px] sm:text-xs uppercase tracking-wider text-muted-foreground">{l}</p>
              <p className="mt-1 font-display text-xl sm:text-3xl text-terracotta">{v}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <form onSubmit={registrar} className={`${card} grid gap-3`}>
            <h2 className="font-medium">Registrar sessão</h2>
            <select aria-label="Matéria" className={input} value={form.materiaId} onChange={(x) => setForm({ ...form, materiaId: x.target.value })}>
              {e.materias.map((m) => <option key={m.id} value={m.id}>{m.nome}</option>)}
            </select>
            <div className="grid grid-cols-2 gap-3">
              <input aria-label="Data" type="date" max={hoje} className={input} value={form.data} onChange={(x) => setForm({ ...form, data: x.target.value })} required />
              <input aria-label="Minutos" type="number" min={1} max={600} className={input} value={form.minutos} onChange={(x) => setForm({ ...form, minutos: Number(x.target.value) })} required />
            </div>
            <input aria-label="Assunto" placeholder="Assunto (ex.: índices)" maxLength={80} className={input} value={form.assunto} onChange={(x) => setForm({ ...form, assunto: x.target.value })} />
            {erro && <p className="text-sm text-destructive">{erro}</p>}
            <button className="rounded-full bg-gradient-plum-radial text-white text-sm font-medium px-4 py-2 hover:opacity-90">Registrar e agendar revisão</button>
          </form>

          <div className={card}>
            <h2 className="font-medium">Meta da semana</h2>
            <ul className="mt-4 grid gap-4">
              {progresso.map((p) => (
                <li key={p.materia.id}>
                  <div className="flex justify-between text-sm">
                    <span>{p.materia.nome}</span>
                    <span className="text-muted-foreground">{p.minutos}/{p.materia.metaSemanalMin} min · {p.percentual}%</span>
                  </div>
                  <div className="mt-1.5 h-2 rounded-full bg-paper-deep overflow-hidden">
                    <div className="h-full bg-terracotta" style={{ width: `${Math.min(p.percentual, 100)}%` }} />
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className={card}>
            <h2 className="font-medium">Revisões (próximos 7 dias)</h2>
            {fila.length === 0 ? <p className="mt-3 text-sm text-muted-foreground">Nada pendente.</p> : (
              <ul className="mt-3 divide-y divide-border/60">
                {fila.map((r) => (
                  <li key={r.id} className="py-2.5 flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-sm truncate">{r.assunto}</p>
                      <p className={`text-xs ${r.data < hoje ? "text-destructive" : "text-muted-foreground"}`}>
                        {nome(r.materiaId)} · {dataBR(r.data)}{r.data < hoje ? " · atrasada" : ""} · nível {r.nivel + 1}
                      </p>
                    </div>
                    <button onClick={() => setE(concluirRevisao(e, r.id, hoje))} className="shrink-0 text-xs px-3 py-1.5 rounded-full border border-terracotta/60 text-terracotta hover:bg-terracotta/10">
                      Concluir
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className={card}>
            <h2 className="font-medium">Últimas sessões</h2>
            <ul className="mt-3 divide-y divide-border/60">
              {[...e.sessoes].sort((a, b) => b.data.localeCompare(a.data)).slice(0, 8).map((s) => (
                <li key={s.id} className="py-2 flex justify-between gap-3 text-sm">
                  <span className="truncate">{s.assunto} <span className="text-muted-foreground">· {nome(s.materiaId)}</span></span>
                  <span className="shrink-0 text-muted-foreground">{dataBR(s.data)} · {s.minutos}min</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-4 text-sm">
          <button onClick={() => { limpar(); setE(estadoExemplo(hoje)); }} className="text-muted-foreground underline underline-offset-4 hover:text-terracotta">
            Restaurar dados de exemplo
          </button>
          <a href="https://github.com/nayrazanini/rastreador-estudo-disciplina" target="_blank" rel="noopener noreferrer" className="text-terracotta underline underline-offset-4">
            Ver código T-SQL no GitHub ↗
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
