import { useCallback, useEffect, useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import type { Session } from "@supabase/supabase-js";
import { SiteLayout } from "@/components/SiteLayout";
import { supabase } from "@/integrations/supabase/client";
import {
  brl,
  dataBR,
  inicioMes,
  inicioMesSeguinte,
  mesAtual,
  rotuloMes,
} from "@/lib/financas";

export const Route = createFileRoute("/projetos/financas-pessoais/app")({
  head: () => ({
    meta: [
      { title: "App de Finanças Pessoais — Náyra Zanini" },
      {
        name: "description",
        content:
          "Aplicação web de controle financeiro pessoal: crie sua conta, registre receitas e despesas, defina orçamentos e acompanhe o saldo do mês.",
      },
      { property: "og:title", content: "App de Finanças Pessoais — Náyra Zanini" },
      {
        property: "og:description",
        content:
          "Demonstração utilizável do projeto financas-pessoais: login, lançamentos, orçamentos e dashboard do mês.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: FinancasApp,
});

interface Conta {
  id: string;
  nome: string;
  tipo: string;
  saldo_inicial: number;
}
interface Categoria {
  id: string;
  nome: string;
  tipo: string;
}
interface Transacao {
  id: string;
  descricao: string;
  tipo: string;
  valor: number;
  data: string;
  conta_id: string | null;
  categoria_id: string | null;
}
interface Orcamento {
  id: string;
  categoria_id: string;
  limite: number;
  mes_referencia: string;
}

const input =
  "w-full rounded-lg bg-background border border-border/70 px-3 py-2 text-sm outline-none focus:border-terracotta/60 transition-colors";
const label = "text-xs uppercase tracking-wider text-muted-foreground";
const btn =
  "inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-plum-radial text-white text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50";
const btnGhost =
  "inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-border/70 text-sm font-medium hover:border-terracotta/50 hover:text-terracotta transition-colors disabled:opacity-50";

function FinancasApp() {
  const [session, setSession] = useState<Session | null>(null);
  const [carregandoSessao, setCarregandoSessao] = useState(true);

  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setCarregandoSessao(false);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  return (
    <SiteLayout>
      <div className="mx-auto max-w-5xl px-5 sm:px-6 pt-8 sm:pt-12 pb-16 sm:pb-24">
        <Link
          to="/projetos/financas-pessoais"
          className="text-sm text-muted-foreground hover:text-terracotta transition-colors"
        >
          ← Case study do projeto
        </Link>

        <header className="mt-5 pb-6 border-b border-border/60">
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-terracotta font-medium">
            App · demonstração utilizável
          </p>
          <h1 className="mt-3 font-display text-2xl sm:text-3xl md:text-4xl font-medium">
            Finanças Pessoais
          </h1>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-2xl">
            Crie sua conta, registre receitas e despesas, defina orçamentos por
            categoria e acompanhe o saldo do mês. Cada usuário vê apenas os
            próprios dados.
          </p>
        </header>

        {carregandoSessao ? (
          <p className="mt-10 text-sm text-muted-foreground">Carregando…</p>
        ) : session ? (
          <Painel session={session} />
        ) : (
          <Autenticacao />
        )}
      </div>
    </SiteLayout>
  );
}

function Autenticacao() {
  const [modo, setModo] = useState<"entrar" | "cadastrar">("entrar");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState<string | null>(null);
  const [aviso, setAviso] = useState<string | null>(null);
  const [enviando, setEnviando] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setErro(null);
    setAviso(null);
    setEnviando(true);
    try {
      if (modo === "entrar") {
        const { error } = await supabase.auth.signInWithPassword({ email, password: senha });
        if (error) throw error;
      } else {
        const { data, error } = await supabase.auth.signUp({
          email,
          password: senha,
          options: { emailRedirectTo: window.location.href },
        });
        if (error) throw error;
        if (!data.session) {
          setAviso("Cadastro criado. Confirme o e-mail para acessar o app.");
        }
      }
    } catch (err) {
      setErro(err instanceof Error ? err.message : "Não foi possível concluir.");
    } finally {
      setEnviando(false);
    }
  }

  async function google() {
    setErro(null);
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: window.location.href },
    });
    if (error) setErro("Não foi possível entrar com o Google.");
  }

  return (
    <div className="mt-10 max-w-md">
      <div className="p-6 rounded-2xl bg-card border border-border/60">
        <div className="flex gap-1 p-1 rounded-lg bg-background border border-border/60 mb-6">
          {(["entrar", "cadastrar"] as const).map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => setModo(m)}
              className={`flex-1 py-1.5 text-sm rounded-md transition-colors ${
                modo === m ? "bg-card text-terracotta font-medium" : "text-muted-foreground"
              }`}
            >
              {m === "entrar" ? "Entrar" : "Criar conta"}
            </button>
          ))}
        </div>

        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className={label} htmlFor="email">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`${input} mt-1`}
              autoComplete="email"
            />
          </div>
          <div>
            <label className={label} htmlFor="senha">
              Senha
            </label>
            <input
              id="senha"
              type="password"
              required
              minLength={6}
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className={`${input} mt-1`}
              autoComplete={modo === "entrar" ? "current-password" : "new-password"}
            />
          </div>

          {erro && <p className="text-sm text-red-400">{erro}</p>}
          {aviso && <p className="text-sm text-terracotta">{aviso}</p>}

          <button type="submit" disabled={enviando} className={`${btn} w-full`}>
            {enviando ? "Enviando…" : modo === "entrar" ? "Entrar" : "Criar conta"}
          </button>
        </form>

        <div className="my-5 flex items-center gap-3 text-xs text-muted-foreground">
          <span className="h-px flex-1 bg-border/60" />
          ou
          <span className="h-px flex-1 bg-border/60" />
        </div>

        <button type="button" onClick={google} className={`${btnGhost} w-full`}>
          Continuar com Google
        </button>
      </div>
    </div>
  );
}

function Painel({ session }: { session: Session }) {
  const userId = session.user.id;
  const [mes, setMes] = useState(mesAtual());
  const [contas, setContas] = useState<Conta[]>([]);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [transacoes, setTransacoes] = useState<Transacao[]>([]);
  const [orcamentos, setOrcamentos] = useState<Orcamento[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  const carregar = useCallback(async () => {
    setCarregando(true);
    setErro(null);
    const inicio = inicioMes(mes);
    const fim = inicioMesSeguinte(mes);
    const [c, cat, t, o] = await Promise.all([
      supabase.from("fin_contas").select("*").order("created_at"),
      supabase.from("fin_categorias").select("*").order("nome"),
      supabase
        .from("fin_transacoes")
        .select("*")
        .gte("data", inicio)
        .lt("data", fim)
        .order("data", { ascending: false }),
      supabase.from("fin_orcamentos").select("*").eq("mes_referencia", inicio),
    ]);
    const falha = c.error || cat.error || t.error || o.error;
    if (falha) setErro(falha.message);
    setContas((c.data as Conta[]) ?? []);
    setCategorias((cat.data as Categoria[]) ?? []);
    setTransacoes((t.data as Transacao[]) ?? []);
    setOrcamentos((o.data as Orcamento[]) ?? []);
    setCarregando(false);
  }, [mes]);

  useEffect(() => {
    void carregar();
  }, [carregar]);

  const resumo = useMemo(() => {
    const receitas = transacoes
      .filter((t) => t.tipo === "receita")
      .reduce((s, t) => s + Number(t.valor), 0);
    const despesas = transacoes
      .filter((t) => t.tipo === "despesa")
      .reduce((s, t) => s + Number(t.valor), 0);
    return { receitas, despesas, saldo: receitas - despesas };
  }, [transacoes]);

  const gastoPorCategoria = useMemo(() => {
    const mapa = new Map<string, number>();
    for (const t of transacoes) {
      if (t.tipo !== "despesa" || !t.categoria_id) continue;
      mapa.set(t.categoria_id, (mapa.get(t.categoria_id) ?? 0) + Number(t.valor));
    }
    return mapa;
  }, [transacoes]);

  const nomeCategoria = (id: string | null) =>
    categorias.find((c) => c.id === id)?.nome ?? "—";
  const nomeConta = (id: string | null) => contas.find((c) => c.id === id)?.nome ?? "—";

  return (
    <div className="mt-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <label className={label} htmlFor="mes">
            Mês
          </label>
          <input
            id="mes"
            type="month"
            value={mes}
            onChange={(e) => setMes(e.target.value || mesAtual())}
            className="rounded-lg bg-background border border-border/70 px-3 py-1.5 text-sm"
          />
        </div>
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="truncate max-w-[180px]">{session.user.email}</span>
          <button
            type="button"
            onClick={() => void supabase.auth.signOut()}
            className="hover:text-terracotta transition-colors underline underline-offset-4"
          >
            Sair
          </button>
        </div>
      </div>

      {erro && <p className="mt-4 text-sm text-red-400">{erro}</p>}

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
        {[
          { t: "Receitas", v: resumo.receitas, c: "text-emerald-400" },
          { t: "Despesas", v: resumo.despesas, c: "text-red-400" },
          { t: "Saldo do mês", v: resumo.saldo, c: "text-terracotta" },
        ].map((k) => (
          <div key={k.t} className="p-4 sm:p-5 rounded-2xl bg-card border border-border/60">
            <p className={label}>{k.t}</p>
            <p className={`mt-1 font-display text-xl sm:text-2xl ${k.c}`}>{brl(k.v)}</p>
          </div>
        ))}
      </div>
      <p className="mt-2 text-xs text-muted-foreground capitalize">{rotuloMes(mes)}</p>

      <NovaTransacao
        userId={userId}
        contas={contas}
        categorias={categorias}
        mes={mes}
        onSalvo={carregar}
      />

      <section className="mt-10">
        <h2 className="font-sans text-lg md:text-xl font-semibold tracking-tight text-white">
          Lançamentos
        </h2>
        {carregando ? (
          <p className="mt-3 text-sm text-muted-foreground">Carregando…</p>
        ) : transacoes.length === 0 ? (
          <p className="mt-3 text-sm text-muted-foreground">
            Nenhum lançamento neste mês. Registre o primeiro acima.
          </p>
        ) : (
          <ul className="mt-4 divide-y divide-border/60 border-y border-border/60">
            {transacoes.map((t) => (
              <li key={t.id} className="py-3 flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-sm font-medium break-words">{t.descricao}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {dataBR(t.data)} · {nomeCategoria(t.categoria_id)} ·{" "}
                    {nomeConta(t.conta_id)}
                  </p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span
                    className={`text-sm font-mono ${
                      t.tipo === "receita" ? "text-emerald-400" : "text-red-400"
                    }`}
                  >
                    {t.tipo === "receita" ? "+" : "−"} {brl(Number(t.valor))}
                  </span>
                  <button
                    type="button"
                    aria-label={`Excluir ${t.descricao}`}
                    onClick={async () => {
                      await supabase.from("fin_transacoes").delete().eq("id", t.id);
                      void carregar();
                    }}
                    className="text-xs text-muted-foreground hover:text-red-400 transition-colors"
                  >
                    excluir
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      <Orcamentos
        userId={userId}
        mes={mes}
        categorias={categorias.filter((c) => c.tipo === "despesa")}
        orcamentos={orcamentos}
        gastoPorCategoria={gastoPorCategoria}
        onSalvo={carregar}
      />
    </div>
  );
}

function NovaTransacao({
  userId,
  contas,
  categorias,
  mes,
  onSalvo,
}: {
  userId: string;
  contas: Conta[];
  categorias: Categoria[];
  mes: string;
  onSalvo: () => void | Promise<void>;
}) {
  const [tipo, setTipo] = useState<"despesa" | "receita">("despesa");
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [data, setData] = useState(() => new Date().toISOString().slice(0, 10));
  const [contaId, setContaId] = useState("");
  const [categoriaId, setCategoriaId] = useState("");
  const [erro, setErro] = useState<string | null>(null);
  const [salvando, setSalvando] = useState(false);

  const opcoesCategoria = categorias.filter((c) => c.tipo === tipo);

  useEffect(() => {
    setData(`${mes}-${new Date().toISOString().slice(8, 10)}`);
  }, [mes]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setErro(null);
    const numero = Number(valor.replace(",", "."));
    if (!Number.isFinite(numero) || numero <= 0) {
      setErro("Informe um valor maior que zero.");
      return;
    }
    setSalvando(true);
    const { error } = await supabase.from("fin_transacoes").insert({
      user_id: userId,
      descricao,
      tipo,
      valor: numero,
      data,
      conta_id: contaId || contas[0]?.id || null,
      categoria_id: categoriaId || null,
    });
    setSalvando(false);
    if (error) {
      setErro(error.message);
      return;
    }
    setDescricao("");
    setValor("");
    setCategoriaId("");
    await onSalvo();
  }

  return (
    <section className="mt-8 p-5 sm:p-6 rounded-2xl bg-card border border-border/60">
      <h2 className="font-sans text-lg md:text-xl font-semibold tracking-tight text-white">
        Novo lançamento
      </h2>
      <form onSubmit={submit} className="mt-4 grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2 flex gap-1 p-1 rounded-lg bg-background border border-border/60 max-w-xs">
          {(["despesa", "receita"] as const).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => {
                setTipo(t);
                setCategoriaId("");
              }}
              className={`flex-1 py-1.5 text-sm rounded-md capitalize transition-colors ${
                tipo === t ? "bg-card text-terracotta font-medium" : "text-muted-foreground"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div>
          <label className={label} htmlFor="descricao">
            Descrição
          </label>
          <input
            id="descricao"
            required
            maxLength={120}
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            className={`${input} mt-1`}
          />
        </div>
        <div>
          <label className={label} htmlFor="valor">
            Valor (R$)
          </label>
          <input
            id="valor"
            required
            inputMode="decimal"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            className={`${input} mt-1`}
            placeholder="0,00"
          />
        </div>
        <div>
          <label className={label} htmlFor="data">
            Data
          </label>
          <input
            id="data"
            type="date"
            required
            value={data}
            onChange={(e) => setData(e.target.value)}
            className={`${input} mt-1`}
          />
        </div>
        <div>
          <label className={label} htmlFor="categoria">
            Categoria
          </label>
          <select
            id="categoria"
            value={categoriaId}
            onChange={(e) => setCategoriaId(e.target.value)}
            className={`${input} mt-1`}
          >
            <option value="">Sem categoria</option>
            {opcoesCategoria.map((c) => (
              <option key={c.id} value={c.id}>
                {c.nome}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={label} htmlFor="conta">
            Conta
          </label>
          <select
            id="conta"
            value={contaId}
            onChange={(e) => setContaId(e.target.value)}
            className={`${input} mt-1`}
          >
            {contas.map((c) => (
              <option key={c.id} value={c.id}>
                {c.nome}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2 flex flex-wrap items-center gap-3">
          <button type="submit" disabled={salvando} className={btn}>
            {salvando ? "Salvando…" : "Adicionar lançamento"}
          </button>
          {erro && <p className="text-sm text-red-400">{erro}</p>}
        </div>
      </form>
    </section>
  );
}

function Orcamentos({
  userId,
  mes,
  categorias,
  orcamentos,
  gastoPorCategoria,
  onSalvo,
}: {
  userId: string;
  mes: string;
  categorias: Categoria[];
  orcamentos: Orcamento[];
  gastoPorCategoria: Map<string, number>;
  onSalvo: () => void | Promise<void>;
}) {
  const [categoriaId, setCategoriaId] = useState("");
  const [limite, setLimite] = useState("");
  const [erro, setErro] = useState<string | null>(null);
  const [salvando, setSalvando] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setErro(null);
    const numero = Number(limite.replace(",", "."));
    if (!categoriaId || !Number.isFinite(numero) || numero <= 0) {
      setErro("Escolha a categoria e informe um limite maior que zero.");
      return;
    }
    setSalvando(true);
    const { error } = await supabase.from("fin_orcamentos").upsert(
      {
        user_id: userId,
        categoria_id: categoriaId,
        mes_referencia: inicioMes(mes),
        limite: numero,
      },
      { onConflict: "user_id,categoria_id,mes_referencia" },
    );
    setSalvando(false);
    if (error) {
      setErro(error.message);
      return;
    }
    setLimite("");
    setCategoriaId("");
    await onSalvo();
  }

  return (
    <section className="mt-10">
      <h2 className="font-sans text-lg md:text-xl font-semibold tracking-tight text-white">
        Orçamentos do mês
      </h2>

      <form onSubmit={submit} className="mt-4 flex flex-col sm:flex-row gap-3 sm:items-end">
        <div className="sm:w-56">
          <label className={label} htmlFor="orc-categoria">
            Categoria
          </label>
          <select
            id="orc-categoria"
            value={categoriaId}
            onChange={(e) => setCategoriaId(e.target.value)}
            className={`${input} mt-1`}
          >
            <option value="">Selecione</option>
            {categorias.map((c) => (
              <option key={c.id} value={c.id}>
                {c.nome}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:w-40">
          <label className={label} htmlFor="orc-limite">
            Limite (R$)
          </label>
          <input
            id="orc-limite"
            inputMode="decimal"
            value={limite}
            onChange={(e) => setLimite(e.target.value)}
            className={`${input} mt-1`}
            placeholder="0,00"
          />
        </div>
        <button type="submit" disabled={salvando} className={btnGhost}>
          {salvando ? "Salvando…" : "Definir orçamento"}
        </button>
      </form>
      {erro && <p className="mt-2 text-sm text-red-400">{erro}</p>}

      {orcamentos.length === 0 ? (
        <p className="mt-4 text-sm text-muted-foreground">
          Nenhum orçamento definido para este mês.
        </p>
      ) : (
        <ul className="mt-5 space-y-4">
          {orcamentos.map((o) => {
            const gasto = gastoPorCategoria.get(o.categoria_id) ?? 0;
            const limiteNum = Number(o.limite);
            const pct = limiteNum > 0 ? Math.min((gasto / limiteNum) * 100, 100) : 0;
            const estourou = gasto > limiteNum;
            return (
              <li key={o.id}>
                <div className="flex items-baseline justify-between gap-3 text-sm">
                  <span className="font-medium">
                    {categorias.find((c) => c.id === o.categoria_id)?.nome ?? "—"}
                  </span>
                  <span
                    className={`font-mono text-xs ${
                      estourou ? "text-red-400" : "text-muted-foreground"
                    }`}
                  >
                    {brl(gasto)} / {brl(limiteNum)}
                  </span>
                </div>
                <div className="mt-1.5 h-2 rounded-full bg-background border border-border/60 overflow-hidden">
                  <div
                    className={`h-full ${estourou ? "bg-red-400" : "bg-terracotta"}`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
