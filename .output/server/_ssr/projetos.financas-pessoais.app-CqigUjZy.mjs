import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteLayout } from "./SiteLayout-BSYIPaNG.mjs";
import { c as createClient } from "../_libs/supabase__supabase-js.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/seroval.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "./router-D66Jqb45.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
const __vite_import_meta_env__ = {};
function isNewSupabaseApiKey(value) {
  return value.startsWith("sb_publishable_") || value.startsWith("sb_secret_");
}
function createSupabaseFetch(supabaseKey) {
  return (input2, init) => {
    const headers = new Headers(
      typeof Request !== "undefined" && input2 instanceof Request ? input2.headers : void 0
    );
    if (init?.headers) {
      new Headers(init.headers).forEach((value, key) => headers.set(key, value));
    }
    if (isNewSupabaseApiKey(supabaseKey) && headers.get("Authorization") === `Bearer ${supabaseKey}`) {
      headers.delete("Authorization");
    }
    headers.set("apikey", supabaseKey);
    return fetch(input2, { ...init, headers });
  };
}
function createSupabaseClient() {
  const serverEnv = typeof process !== "undefined" ? process.env : {};
  const SUPABASE_URL = __vite_import_meta_env__["VITE_SUPABASE_URL"] || serverEnv["SUPABASE_URL"];
  const SUPABASE_PUBLISHABLE_KEY = __vite_import_meta_env__["VITE_SUPABASE_PUBLISHABLE_KEY"] || serverEnv["SUPABASE_PUBLISHABLE_KEY"];
  if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY) {
    const missing = [
      ...!SUPABASE_URL ? ["VITE_SUPABASE_URL"] : [],
      ...!SUPABASE_PUBLISHABLE_KEY ? ["VITE_SUPABASE_PUBLISHABLE_KEY"] : []
    ];
    const message = `Variável(is) de ambiente do Supabase ausente(s): ${missing.join(", ")}. Veja o README.md.`;
    console.error(`[Supabase] ${message}`);
    throw new Error(message);
  }
  return createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
    global: {
      fetch: createSupabaseFetch(SUPABASE_PUBLISHABLE_KEY)
    },
    auth: {
      persistSession: true,
      autoRefreshToken: true
    }
  });
}
let _supabase;
const supabase = new Proxy({}, {
  get(_, prop, receiver) {
    if (!_supabase) _supabase = createSupabaseClient();
    return Reflect.get(_supabase, prop, receiver);
  }
});
const brl = (v) => new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(v || 0);
const dataBR = (iso) => {
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y}`;
};
const inicioMes = (mes) => `${mes}-01`;
const inicioMesSeguinte = (mes) => {
  const [y, m] = mes.split("-").map(Number);
  const date = new Date(Date.UTC(y, m, 1));
  return date.toISOString().slice(0, 10);
};
const mesAtual = () => (/* @__PURE__ */ new Date()).toISOString().slice(0, 7);
const rotuloMes = (mes) => {
  const [y, m] = mes.split("-").map(Number);
  return new Intl.DateTimeFormat("pt-BR", { month: "long", year: "numeric" }).format(
    new Date(Date.UTC(y, m - 1, 1))
  );
};
const input = "w-full rounded-lg bg-background border border-border/70 px-3 py-2 text-sm outline-none focus:border-terracotta/60 transition-colors";
const label = "text-xs uppercase tracking-wider text-muted-foreground";
const btn = "inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-plum-radial text-white text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50";
const btnGhost = "inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-border/70 text-sm font-medium hover:border-terracotta/50 hover:text-terracotta transition-colors disabled:opacity-50";
function FinancasApp() {
  const [session, setSession] = reactExports.useState(null);
  const [carregandoSessao, setCarregandoSessao] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const {
      data: sub
    } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    supabase.auth.getSession().then(({
      data
    }) => {
      setSession(data.session);
      setCarregandoSessao(false);
    });
    return () => sub.subscription.unsubscribe();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-5 sm:px-6 pt-8 sm:pt-12 pb-16 sm:pb-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/projetos/financas-pessoais", className: "text-sm text-muted-foreground hover:text-terracotta transition-colors", children: "← Case study do projeto" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "mt-5 pb-6 border-b border-border/60", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] sm:text-xs uppercase tracking-[0.2em] text-terracotta font-medium", children: "App · demonstração utilizável" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 font-display text-2xl sm:text-3xl md:text-4xl font-medium", children: "Finanças Pessoais" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground leading-relaxed max-w-2xl", children: "Crie sua conta, registre receitas e despesas, defina orçamentos por categoria e acompanhe o saldo do mês. Cada usuário vê apenas os próprios dados." })
    ] }),
    carregandoSessao ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-10 text-sm text-muted-foreground", children: "Carregando…" }) : session ? /* @__PURE__ */ jsxRuntimeExports.jsx(Painel, { session }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Autenticacao, {})
  ] }) });
}
function Autenticacao() {
  const [modo, setModo] = reactExports.useState("entrar");
  const [email, setEmail] = reactExports.useState("");
  const [senha, setSenha] = reactExports.useState("");
  const [erro, setErro] = reactExports.useState(null);
  const [aviso, setAviso] = reactExports.useState(null);
  const [enviando, setEnviando] = reactExports.useState(false);
  async function submit(e) {
    e.preventDefault();
    setErro(null);
    setAviso(null);
    setEnviando(true);
    try {
      if (modo === "entrar") {
        const {
          error
        } = await supabase.auth.signInWithPassword({
          email,
          password: senha
        });
        if (error) throw error;
      } else {
        const {
          data,
          error
        } = await supabase.auth.signUp({
          email,
          password: senha,
          options: {
            emailRedirectTo: window.location.href
          }
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
    const {
      error
    } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: window.location.href
      }
    });
    if (error) setErro("Não foi possível entrar com o Google.");
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 max-w-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-2xl bg-card border border-border/60", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 p-1 rounded-lg bg-background border border-border/60 mb-6", children: ["entrar", "cadastrar"].map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setModo(m), className: `flex-1 py-1.5 text-sm rounded-md transition-colors ${modo === m ? "bg-card text-terracotta font-medium" : "text-muted-foreground"}`, children: m === "entrar" ? "Entrar" : "Criar conta" }, m)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: label, htmlFor: "email", children: "E-mail" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "email", type: "email", required: true, value: email, onChange: (e) => setEmail(e.target.value), className: `${input} mt-1`, autoComplete: "email" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: label, htmlFor: "senha", children: "Senha" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "senha", type: "password", required: true, minLength: 6, value: senha, onChange: (e) => setSenha(e.target.value), className: `${input} mt-1`, autoComplete: modo === "entrar" ? "current-password" : "new-password" })
      ] }),
      erro && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-red-400", children: erro }),
      aviso && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-terracotta", children: aviso }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: enviando, className: `${btn} w-full`, children: enviando ? "Enviando…" : modo === "entrar" ? "Entrar" : "Criar conta" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "my-5 flex items-center gap-3 text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px flex-1 bg-border/60" }),
      "ou",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px flex-1 bg-border/60" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: google, className: `${btnGhost} w-full`, children: "Continuar com Google" })
  ] }) });
}
function Painel({
  session
}) {
  const userId = session.user.id;
  const [mes, setMes] = reactExports.useState(mesAtual());
  const [contas, setContas] = reactExports.useState([]);
  const [categorias, setCategorias] = reactExports.useState([]);
  const [transacoes, setTransacoes] = reactExports.useState([]);
  const [orcamentos, setOrcamentos] = reactExports.useState([]);
  const [carregando, setCarregando] = reactExports.useState(true);
  const [erro, setErro] = reactExports.useState(null);
  const carregar = reactExports.useCallback(async () => {
    setCarregando(true);
    setErro(null);
    const inicio = inicioMes(mes);
    const fim = inicioMesSeguinte(mes);
    const [c, cat, t, o] = await Promise.all([supabase.from("fin_contas").select("*").order("created_at"), supabase.from("fin_categorias").select("*").order("nome"), supabase.from("fin_transacoes").select("*").gte("data", inicio).lt("data", fim).order("data", {
      ascending: false
    }), supabase.from("fin_orcamentos").select("*").eq("mes_referencia", inicio)]);
    const falha = c.error || cat.error || t.error || o.error;
    if (falha) setErro(falha.message);
    setContas(c.data ?? []);
    setCategorias(cat.data ?? []);
    setTransacoes(t.data ?? []);
    setOrcamentos(o.data ?? []);
    setCarregando(false);
  }, [mes]);
  reactExports.useEffect(() => {
    void carregar();
  }, [carregar]);
  const resumo = reactExports.useMemo(() => {
    const receitas = transacoes.filter((t) => t.tipo === "receita").reduce((s, t) => s + Number(t.valor), 0);
    const despesas = transacoes.filter((t) => t.tipo === "despesa").reduce((s, t) => s + Number(t.valor), 0);
    return {
      receitas,
      despesas,
      saldo: receitas - despesas
    };
  }, [transacoes]);
  const gastoPorCategoria = reactExports.useMemo(() => {
    const mapa = /* @__PURE__ */ new Map();
    for (const t of transacoes) {
      if (t.tipo !== "despesa" || !t.categoria_id) continue;
      mapa.set(t.categoria_id, (mapa.get(t.categoria_id) ?? 0) + Number(t.valor));
    }
    return mapa;
  }, [transacoes]);
  const nomeCategoria = (id) => categorias.find((c) => c.id === id)?.nome ?? "—";
  const nomeConta = (id) => contas.find((c) => c.id === id)?.nome ?? "—";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: label, htmlFor: "mes", children: "Mês" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "mes", type: "month", value: mes, onChange: (e) => setMes(e.target.value || mesAtual()), className: "rounded-lg bg-background border border-border/70 px-3 py-1.5 text-sm" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate max-w-[180px]", children: session.user.email }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => void supabase.auth.signOut(), className: "hover:text-terracotta transition-colors underline underline-offset-4", children: "Sair" })
      ] })
    ] }),
    erro && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-red-400", children: erro }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4", children: [{
      t: "Receitas",
      v: resumo.receitas,
      c: "text-emerald-400"
    }, {
      t: "Despesas",
      v: resumo.despesas,
      c: "text-red-400"
    }, {
      t: "Saldo do mês",
      v: resumo.saldo,
      c: "text-terracotta"
    }].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 sm:p-5 rounded-2xl bg-card border border-border/60", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: label, children: k.t }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `mt-1 font-display text-xl sm:text-2xl ${k.c}`, children: brl(k.v) })
    ] }, k.t)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-muted-foreground capitalize", children: rotuloMes(mes) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(NovaTransacao, { userId, contas, categorias, mes, onSalvo: carregar }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-sans text-lg md:text-xl font-semibold tracking-tight text-white", children: "Lançamentos" }),
      carregando ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "Carregando…" }) : transacoes.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "Nenhum lançamento neste mês. Registre o primeiro acima." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 divide-y divide-border/60 border-y border-border/60", children: transacoes.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "py-3 flex items-start justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium break-words", children: t.descricao }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
            dataBR(t.data),
            " · ",
            nomeCategoria(t.categoria_id),
            " ·",
            " ",
            nomeConta(t.conta_id)
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-sm font-mono ${t.tipo === "receita" ? "text-emerald-400" : "text-red-400"}`, children: [
            t.tipo === "receita" ? "+" : "−",
            " ",
            brl(Number(t.valor))
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", "aria-label": `Excluir ${t.descricao}`, onClick: async () => {
            await supabase.from("fin_transacoes").delete().eq("id", t.id);
            void carregar();
          }, className: "text-xs text-muted-foreground hover:text-red-400 transition-colors", children: "excluir" })
        ] })
      ] }, t.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Orcamentos, { userId, mes, categorias: categorias.filter((c) => c.tipo === "despesa"), orcamentos, gastoPorCategoria, onSalvo: carregar })
  ] });
}
function NovaTransacao({
  userId,
  contas,
  categorias,
  mes,
  onSalvo
}) {
  const [tipo, setTipo] = reactExports.useState("despesa");
  const [descricao, setDescricao] = reactExports.useState("");
  const [valor, setValor] = reactExports.useState("");
  const [data, setData] = reactExports.useState(() => (/* @__PURE__ */ new Date()).toISOString().slice(0, 10));
  const [contaId, setContaId] = reactExports.useState("");
  const [categoriaId, setCategoriaId] = reactExports.useState("");
  const [erro, setErro] = reactExports.useState(null);
  const [salvando, setSalvando] = reactExports.useState(false);
  const opcoesCategoria = categorias.filter((c) => c.tipo === tipo);
  reactExports.useEffect(() => {
    setData(`${mes}-${(/* @__PURE__ */ new Date()).toISOString().slice(8, 10)}`);
  }, [mes]);
  async function submit(e) {
    e.preventDefault();
    setErro(null);
    const numero = Number(valor.replace(",", "."));
    if (!Number.isFinite(numero) || numero <= 0) {
      setErro("Informe um valor maior que zero.");
      return;
    }
    setSalvando(true);
    const {
      error
    } = await supabase.from("fin_transacoes").insert({
      user_id: userId,
      descricao,
      tipo,
      valor: numero,
      data,
      conta_id: contaId || contas[0]?.id || null,
      categoria_id: categoriaId || null
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-8 p-5 sm:p-6 rounded-2xl bg-card border border-border/60", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-sans text-lg md:text-xl font-semibold tracking-tight text-white", children: "Novo lançamento" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "mt-4 grid gap-4 sm:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:col-span-2 flex gap-1 p-1 rounded-lg bg-background border border-border/60 max-w-xs", children: ["despesa", "receita"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => {
        setTipo(t);
        setCategoriaId("");
      }, className: `flex-1 py-1.5 text-sm rounded-md capitalize transition-colors ${tipo === t ? "bg-card text-terracotta font-medium" : "text-muted-foreground"}`, children: t }, t)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: label, htmlFor: "descricao", children: "Descrição" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "descricao", required: true, maxLength: 120, value: descricao, onChange: (e) => setDescricao(e.target.value), className: `${input} mt-1` })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: label, htmlFor: "valor", children: "Valor (R$)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "valor", required: true, inputMode: "decimal", value: valor, onChange: (e) => setValor(e.target.value), className: `${input} mt-1`, placeholder: "0,00" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: label, htmlFor: "data", children: "Data" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "data", type: "date", required: true, value: data, onChange: (e) => setData(e.target.value), className: `${input} mt-1` })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: label, htmlFor: "categoria", children: "Categoria" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { id: "categoria", value: categoriaId, onChange: (e) => setCategoriaId(e.target.value), className: `${input} mt-1`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Sem categoria" }),
          opcoesCategoria.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: c.id, children: c.nome }, c.id))
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: label, htmlFor: "conta", children: "Conta" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("select", { id: "conta", value: contaId, onChange: (e) => setContaId(e.target.value), className: `${input} mt-1`, children: contas.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: c.id, children: c.nome }, c.id)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2 flex flex-wrap items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: salvando, className: btn, children: salvando ? "Salvando…" : "Adicionar lançamento" }),
        erro && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-red-400", children: erro })
      ] })
    ] })
  ] });
}
function Orcamentos({
  userId,
  mes,
  categorias,
  orcamentos,
  gastoPorCategoria,
  onSalvo
}) {
  const [categoriaId, setCategoriaId] = reactExports.useState("");
  const [limite, setLimite] = reactExports.useState("");
  const [erro, setErro] = reactExports.useState(null);
  const [salvando, setSalvando] = reactExports.useState(false);
  async function submit(e) {
    e.preventDefault();
    setErro(null);
    const numero = Number(limite.replace(",", "."));
    if (!categoriaId || !Number.isFinite(numero) || numero <= 0) {
      setErro("Escolha a categoria e informe um limite maior que zero.");
      return;
    }
    setSalvando(true);
    const {
      error
    } = await supabase.from("fin_orcamentos").upsert({
      user_id: userId,
      categoria_id: categoriaId,
      mes_referencia: inicioMes(mes),
      limite: numero
    }, {
      onConflict: "user_id,categoria_id,mes_referencia"
    });
    setSalvando(false);
    if (error) {
      setErro(error.message);
      return;
    }
    setLimite("");
    setCategoriaId("");
    await onSalvo();
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-sans text-lg md:text-xl font-semibold tracking-tight text-white", children: "Orçamentos do mês" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "mt-4 flex flex-col sm:flex-row gap-3 sm:items-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:w-56", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: label, htmlFor: "orc-categoria", children: "Categoria" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { id: "orc-categoria", value: categoriaId, onChange: (e) => setCategoriaId(e.target.value), className: `${input} mt-1`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Selecione" }),
          categorias.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: c.id, children: c.nome }, c.id))
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:w-40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: label, htmlFor: "orc-limite", children: "Limite (R$)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "orc-limite", inputMode: "decimal", value: limite, onChange: (e) => setLimite(e.target.value), className: `${input} mt-1`, placeholder: "0,00" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: salvando, className: btnGhost, children: salvando ? "Salvando…" : "Definir orçamento" })
    ] }),
    erro && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-red-400", children: erro }),
    orcamentos.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground", children: "Nenhum orçamento definido para este mês." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-4", children: orcamentos.map((o) => {
      const gasto = gastoPorCategoria.get(o.categoria_id) ?? 0;
      const limiteNum = Number(o.limite);
      const pct = limiteNum > 0 ? Math.min(gasto / limiteNum * 100, 100) : 0;
      const estourou = gasto > limiteNum;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline justify-between gap-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: categorias.find((c) => c.id === o.categoria_id)?.nome ?? "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `font-mono text-xs ${estourou ? "text-red-400" : "text-muted-foreground"}`, children: [
            brl(gasto),
            " / ",
            brl(limiteNum)
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1.5 h-2 rounded-full bg-background border border-border/60 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-full ${estourou ? "bg-red-400" : "bg-terracotta"}`, style: {
          width: `${pct}%`
        } }) })
      ] }, o.id);
    }) })
  ] });
}
export {
  FinancasApp as component
};
