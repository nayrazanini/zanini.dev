import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { D as Dialog$1, a as DialogPortal$1, b as DialogContent$1, c as DialogClose, d as DialogTitle$1, e as DialogDescription$1, f as DialogOverlay$1 } from "../_libs/radix-ui__react-dialog.mjs";
import { M as Music2, P as Pause, a as Play, S as SkipForward, A as ArrowLeft, b as ShieldCheck, H as House, L as LayoutList, W as Wallet, N as Newspaper, c as Leaf, R as RotateCcw, d as ArrowUpRight, C as Coffee, e as ListChecks, f as Plus, g as Pencil, h as Check, i as Headphones, T as Trash2, j as ChevronRight, X } from "../_libs/lucide-react.mjs";
import { o as object, a as array, s as string, l as literal, _ as _enum, b as boolean, n as number } from "../_libs/zod.mjs";
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
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-use-effect-event+[...].mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/aria-hidden.mjs";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const Input = reactExports.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const Dialog = Dialog$1;
const DialogPortal = DialogPortal$1;
const DialogOverlay = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  DialogOverlay$1,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = DialogOverlay$1.displayName;
const DialogContent = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(
    DialogContent$1,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogClose, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = DialogContent$1.displayName;
const DialogTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  DialogTitle$1,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DialogTitle.displayName = DialogTitle$1.displayName;
const DialogDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  DialogDescription$1,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = DialogDescription$1.displayName;
const STATUSES = ["Backlog", "A Fazer", "Em andamento", "Concluído"];
const STORAGE_KEY = "nayra.meu-espaco.demo.v1";
const taskSchema = object({ id: string(), title: string().min(1).max(120), status: _enum(STATUSES) });
const shoppingSchema = object({ id: string(), title: string().min(1).max(120), done: boolean() });
const entrySchema = object({ id: string(), title: string().min(1).max(120), amount: number().positive().finite(), type: _enum(["Receita", "Despesa"]), category: string(), date: string().regex(/^\d{4}-\d{2}-\d{2}$/) });
const demoSchema = object({ version: literal(1), tasks: array(taskSchema), shopping: array(shoppingSchema), entries: array(entrySchema), categories: array(string().min(1).max(40)).min(1) });
function makeDemo() {
  return { version: 1, tasks: [
    { id: "t1", title: "Planejar um cantinho de leitura", status: "Backlog" },
    { id: "t2", title: "Organizar os estudos da semana", status: "A Fazer" },
    { id: "t3", title: "Ler um capítulo do livro", status: "Em andamento" },
    { id: "t4", title: "Regar as plantas", status: "Concluído" }
  ], shopping: [
    { id: "s1", title: "Café em grãos · 1 pacote", done: false },
    { id: "s2", title: "Frutas da semana", done: false },
    { id: "s3", title: "Pão integral", done: true }
  ], entries: [
    { id: "e1", title: "Receita de exemplo", amount: 4200, type: "Receita", category: "Trabalho", date: "2026-10-01" },
    { id: "e2", title: "Compras da semana", amount: 280, type: "Despesa", category: "Casa", date: "2026-10-18" },
    { id: "e3", title: "Livros e cadernos", amount: 120, type: "Despesa", category: "Estudos", date: "2026-10-20" }
  ], categories: ["Trabalho", "Casa", "Estudos", "Lazer"] };
}
function restoreDemo(raw) {
  try {
    const result = demoSchema.safeParse(JSON.parse(raw ?? "null"));
    return result.success ? result.data : makeDemo();
  } catch {
    return makeDemo();
  }
}
function totals(entries) {
  const income = entries.filter((e) => e.type === "Receita").reduce((sum, e) => sum + e.amount, 0);
  const expense = entries.filter((e) => e.type === "Despesa").reduce((sum, e) => sum + e.amount, 0);
  return { income, expense, balance: income - expense };
}
const money = (value) => new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);
const roomPhoto = "/assets/meu-espaco-D3ld_Ecl.jpg";
const NAV = [
  { name: "Início", icon: House },
  { name: "Tarefas", icon: LayoutList },
  { name: "Casa", icon: House },
  { name: "Finanças", icon: Wallet },
  { name: "Música", icon: Music2 },
  { name: "Notícias", icon: Newspaper }
];
const SONGS = [
  { title: "Entre folhas e café", artist: "Estúdio Imaginário", album: "Manhã tranquila", duration: "3:42" },
  { title: "Um passo de cada vez", artist: "Banda Fictícia", album: "Pequenas pausas", duration: "4:10" },
  { title: "Janela aberta", artist: "Sons Inventados", album: "Casa em silêncio", duration: "2:58" }
];
const NEWS = [
  { title: "Biblioteca de bairro ganha um jardim de leitura", category: "Cultura", text: "Em uma cidade imaginária, moradores criaram um espaço com livros, plantas e bancos para compartilhar pequenas pausas. Esta manchete e seu conteúdo foram criados apenas para a demonstração.", icon: Leaf },
  { title: "Pequenas pausas entram na rotina de estudos", category: "Bem-estar", text: "Um grupo fictício de estudantes experimenta alternar momentos de concentração e descanso. A história é ilustrativa e não representa uma pesquisa ou notícia real.", icon: Coffee },
  { title: "Feira local reúne ideias para uma casa mais sustentável", category: "Casa", text: "A feira imaginária reúne oficinas de reaproveitamento e troca de objetos. Não existe evento, fonte externa ou cobertura jornalística vinculada a esta demonstração.", icon: House }
];
function Metric({ label, value, icon }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-border py-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-muted-foreground text-xs", children: [
      icon,
      label
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-2xl font-medium tabular-nums", children: value })
  ] });
}
function MeuEspacoDemo() {
  const [section, setSection] = reactExports.useState("Início");
  const [data, setData] = reactExports.useState(makeDemo);
  const [ready, setReady] = reactExports.useState(false);
  const [storageError, setStorageError] = reactExports.useState(false);
  const [editor, setEditor] = reactExports.useState(null);
  const [title, setTitle] = reactExports.useState("");
  const [status, setStatus] = reactExports.useState("A Fazer");
  const [amount, setAmount] = reactExports.useState("");
  const [entryType, setEntryType] = reactExports.useState("Despesa");
  const [category, setCategory] = reactExports.useState("Casa");
  const [date, setDate] = reactExports.useState("2026-10-23");
  const [playing, setPlaying] = reactExports.useState(false);
  const [song, setSong] = reactExports.useState(0);
  const [history, setHistory] = reactExports.useState([1, 2]);
  const [news, setNews] = reactExports.useState(null);
  const [resetOpen, setResetOpen] = reactExports.useState(false);
  const [formError, setFormError] = reactExports.useState("");
  reactExports.useEffect(() => {
    try {
      setData(restoreDemo(localStorage.getItem(STORAGE_KEY)));
    } catch {
      setStorageError(true);
    }
    setReady(true);
  }, []);
  reactExports.useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      setStorageError(false);
    } catch {
      setStorageError(true);
    }
  }, [data, ready]);
  const summary = totals(data.entries);
  const remaining = data.tasks.filter((t) => t.status !== "Concluído");
  const pendingShopping = data.shopping.filter((i) => !i.done);
  const currentSong = SONGS[song];
  function openEditor(value, initialStatus = "A Fazer") {
    setEditor(value);
    setTitle("");
    setAmount("");
    setStatus(initialStatus);
    setEntryType("Despesa");
    setDate("2026-10-23");
    setCategory(data.categories[0] ?? "Casa");
    setFormError("");
    if (value.kind === "task") {
      const item = data.tasks.find((t) => t.id === value.id);
      if (item) {
        setTitle(item.title);
        setStatus(item.status);
      }
    }
    if (value.kind === "shopping") {
      const item = data.shopping.find((t) => t.id === value.id);
      if (item) setTitle(item.title);
    }
    if (value.kind === "entry") {
      const item = data.entries.find((t) => t.id === value.id);
      if (item) {
        setTitle(item.title);
        setAmount(String(item.amount));
        setEntryType(item.type);
        setCategory(item.category);
        setDate(item.date);
      }
    }
  }
  function save(event) {
    event.preventDefault();
    if (!editor || !title.trim()) return;
    const id = editor.id ?? crypto.randomUUID();
    if (editor.kind === "task") {
      const item = { id, title: title.trim(), status };
      setData((d) => ({ ...d, tasks: editor.id ? d.tasks.map((t) => t.id === id ? item : t) : [...d.tasks, item] }));
    } else if (editor.kind === "shopping") {
      setData((d) => ({ ...d, shopping: editor.id ? d.shopping.map((i) => i.id === id ? { ...i, title: title.trim() } : i) : [...d.shopping, { id, title: title.trim(), done: false }] }));
    } else if (editor.kind === "entry") {
      const parsedAmount = Number(amount.replace(",", "."));
      if (!Number.isFinite(parsedAmount) || parsedAmount <= 0 || !date || !data.categories.includes(category)) {
        setFormError("Informe um valor positivo, uma data e uma categoria.");
        return;
      }
      const item = { id, title: title.trim(), amount: Math.round(parsedAmount * 100) / 100, type: entryType, category, date };
      setData((d) => ({ ...d, entries: editor.id ? d.entries.map((e) => e.id === id ? item : e) : [...d.entries, item] }));
    } else {
      if (data.categories.some((c) => c.toLocaleLowerCase("pt-BR") === title.trim().toLocaleLowerCase("pt-BR"))) {
        setFormError("Esta categoria já existe.");
        return;
      }
      setData((d) => ({ ...d, categories: [...d.categories, title.trim()] }));
    }
    setEditor(null);
  }
  function removeEdited() {
    if (!editor?.id) return;
    const { id, kind } = editor;
    setData((d) => ({
      ...d,
      tasks: kind === "task" ? d.tasks.filter((t) => t.id !== id) : d.tasks,
      shopping: kind === "shopping" ? d.shopping.filter((t) => t.id !== id) : d.shopping,
      entries: kind === "entry" ? d.entries.filter((t) => t.id !== id) : d.entries
    }));
    setEditor(null);
  }
  function nextSong() {
    setHistory((h) => [song, ...h].slice(0, 4));
    setSong((s) => (s + 1) % SONGS.length);
  }
  const navButton = (name, label) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "link", className: "p-0 h-auto", onClick: () => setSection(name), children: [
    label,
    /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, {})
  ] });
  const musicCard = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-start sm:items-center gap-5 rounded-lg border border-border bg-card p-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-24 w-24 shrink-0 rounded-md bg-secondary flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Music2, { className: "size-12 text-primary" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-primary", children: playing ? "Tocando agora · simulação" : "Pausa para respirar" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 text-xl", children: currentSong.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-sm text-muted-foreground", children: [
        currentSong.artist,
        " · ",
        currentSong.duration
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-muted-foreground", children: "Faixa fictícia · sem reprodução de áudio" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "icon", onClick: () => setPlaying((p) => !p), "aria-label": playing ? "Pausar simulação" : "Iniciar simulação", title: playing ? "Pausar simulação" : "Iniciar simulação", children: playing ? /* @__PURE__ */ jsxRuntimeExports.jsx(Pause, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Play, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "icon", variant: "outline", onClick: nextSong, "aria-label": "Próxima faixa fictícia", title: "Próxima faixa fictícia", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SkipForward, {}) })
    ] })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "meu-espaco-theme min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "border-b border-border px-5 sm:px-8 py-3 flex flex-wrap items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "ghost", size: "sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, {}),
        "nayra.dev"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2 text-xs text-primary", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "size-4" }),
        "Demonstração com dados fictícios"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1440px] lg:grid lg:grid-cols-[224px_minmax(0,1fr)]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "lg:border-r border-border p-5 lg:p-7 lg:sticky lg:top-0 lg:h-screen", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/demo/meu-espaco", className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex size-10 items-center justify-center rounded-lg bg-secondary text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(House, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-xl", children: [
            "Meu Espaço",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block font-sans text-[11px] text-muted-foreground mt-0.5", children: "Um lugar para sua rotina" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { "aria-label": "Áreas do Meu Espaço", className: "mt-5 lg:mt-10 grid grid-cols-3 gap-2 lg:flex lg:flex-col", children: NAV.map(({ name, icon: Icon }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: section === name ? "secondary" : "ghost", "aria-current": section === name ? "page" : void 0, className: "h-11 px-2 lg:px-3 text-xs sm:text-sm lg:justify-start", onClick: () => setSection(name), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, {}),
          name
        ] }, name)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 hidden lg:block border-t border-border pt-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { className: "size-4 shrink-0" }),
            "Mais calma. Menos abas."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "ghost", size: "sm", className: "mt-5 px-0 text-muted-foreground", onClick: () => setResetOpen(true), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, {}),
            "Restaurar demonstração"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "link", size: "sm", className: "px-0 mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/projetos/meu-espaco", children: [
            "Sobre o projeto",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, {})
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "min-w-0 px-5 sm:px-8 lg:px-10 pt-3 lg:pt-10 pb-12", "aria-busy": !ready, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase text-primary", children: "Seu cotidiano, em equilíbrio" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-2 text-3xl sm:text-4xl", children: section === "Início" ? "Que bom ter você por aqui." : section })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Coffee, { className: "hidden sm:block size-8 text-primary shrink-0" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "sr-only", role: "status", children: ready ? "Demonstração pronta" : "Preparando demonstração" }),
        storageError && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { role: "status", className: "mb-5 text-sm text-destructive", children: "O navegador não permitiu salvar. As alterações duram apenas nesta visita." }),
        section === "Início" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-lg h-44 sm:h-56", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: roomPhoto, alt: "Cantinho aconchegante com café, plantas, caderno e toca-discos", width: 1536, height: 768, className: "w-full h-full object-cover" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-4 left-4 bg-background/95 rounded-md px-4 py-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: "Um respiro no meio do dia." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: "Espaço para fazer, cuidar e descansar." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-x-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { label: "Tarefas em aberto", value: remaining.length, icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ListChecks, { className: "size-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { label: "Na lista de compras", value: pendingShopping.length, icon: /* @__PURE__ */ jsxRuntimeExports.jsx(House, { className: "size-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { label: "Saldo fictício", value: money(summary.balance), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "size-4" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-8 mt-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between gap-3 items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl", children: "Um passo de cada vez" }),
                navButton("Tarefas", "Ver tarefas")
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 divide-y divide-border", children: [
                remaining.slice(0, 3).map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-4 flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-7 rounded-full bg-secondary text-primary flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ListChecks, { className: "size-4" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm break-words flex-1 min-w-0", children: t.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground shrink-0", children: t.status })
                ] }, t.id)),
                !remaining.length && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "py-5 text-sm text-muted-foreground", children: "Tudo concluído. Hora de uma pausa." })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl", children: "Cuidar da casa" }),
                navButton("Casa", "Ver lista")
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-4 divide-y divide-border", children: [
                pendingShopping.slice(0, 3).map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "py-4 text-sm flex gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(House, { className: "size-4 text-primary shrink-0" }),
                  i.title
                ] }, i.id)),
                !pendingShopping.length && /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "py-5 text-muted-foreground text-sm", children: "Compras em dia." })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl mb-4", children: "Uma trilha para o seu dia" }),
            musicCard
          ] })
        ] }),
        section === "Tarefas" && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-between items-center gap-3 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Pequenos passos também são progresso." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { disabled: !ready, onClick: () => openEditor({ kind: "task" }), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, {}),
              "Adicionar tarefa"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 xl:grid-cols-4 gap-4", children: STATUSES.map((column) => /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "min-w-0 border-t-2 border-primary pt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-base font-sans font-medium", children: [
                column,
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-xs ml-1", children: data.tasks.filter((t) => t.status === column).length })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", title: `Adicionar em ${column}`, "aria-label": `Adicionar em ${column}`, onClick: () => openEditor({ kind: "task" }, column), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, {}) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              data.tasks.filter((t) => t.status === column).map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "rounded-lg p-4 border border-border bg-card", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed break-words min-w-0 flex-1", children: t.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "icon", variant: "ghost", className: "size-7 shrink-0", title: "Editar tarefa", "aria-label": `Editar tarefa ${t.title}`, onClick: () => openEditor({ kind: "task", id: t.id }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, {}) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block mt-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "sr-only", children: [
                    "Mover tarefa ",
                    t.title
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: t.status, className: "w-full", onChange: (e) => {
                    const value = e.target.value;
                    setData((d) => ({ ...d, tasks: d.tasks.map((item) => item.id === t.id ? { ...item, status: value } : item) }));
                  }, children: STATUSES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: s }, s)) })
                ] })
              ] }, t.id)),
              !data.tasks.some((t) => t.status === column) && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground py-8 border border-dashed border-border rounded-lg text-center", children: "Nenhuma tarefa por aqui." })
            ] })
          ] }, column)) })
        ] }),
        section === "Casa" && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-between gap-3 items-center mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl", children: "Lista de compras" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mt-2", children: [
                data.shopping.filter((i) => i.done).length,
                " de ",
                data.shopping.length,
                " itens comprados"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { disabled: !ready, onClick: () => openEditor({ kind: "shopping" }), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, {}),
              "Adicionar item"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y divide-border border-y border-border", children: data.shopping.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "py-4 flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-3 flex-1 min-w-0 cursor-pointer", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: i.done, className: "size-5 shrink-0", onChange: () => setData((d) => ({ ...d, shopping: d.shopping.map((item) => item.id === i.id ? { ...item, done: !item.done } : item) })) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-sm break-words ${i.done ? "line-through text-muted-foreground" : ""}`, children: i.title })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", title: "Editar item", "aria-label": `Editar item ${i.title}`, onClick: () => openEditor({ kind: "shopping", id: i.id }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, {}) })
          ] }, i.id)) }),
          !data.shopping.length && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "py-10 text-muted-foreground text-sm", children: "A lista está vazia. O que está faltando em casa?" })
        ] }),
        section === "Finanças" && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Todos os lançamentos da demonstração · valores fictícios" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-3 gap-x-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { label: "Receitas", value: money(summary.income), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "size-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { label: "Despesas", value: money(summary.expense), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "size-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { label: "Saldo", value: money(summary.balance), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-4" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3 mt-8 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl", children: "Lançamentos" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { disabled: !ready, onClick: () => openEditor({ kind: "entry" }), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, {}),
              "Novo lançamento"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y divide-border border-y border-border", children: [...data.entries].sort((a, b) => b.date.localeCompare(a.date)).map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "py-4 flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm break-words", children: e.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [
                e.date.split("-").reverse().join("/"),
                " · ",
                e.category,
                " · ",
                e.type
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-sm tabular-nums shrink-0 ${e.type === "Receita" ? "text-primary" : "text-foreground"}`, children: [
              e.type === "Receita" ? "+" : "−",
              " ",
              money(e.amount)
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", className: "shrink-0", title: "Editar lançamento", "aria-label": `Editar lançamento ${e.title}`, onClick: () => openEditor({ kind: "entry", id: e.id }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, {}) })
          ] }, e.id)) }),
          !data.entries.length && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "py-8 text-sm text-muted-foreground", children: "Nenhum lançamento cadastrado." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl", children: "Categorias" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", onClick: () => openEditor({ kind: "category" }), children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, {}),
                "Categoria"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mt-4", children: data.categories.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 py-2 text-xs border border-border rounded-md bg-card", children: c }, c)) })
          ] })
        ] }),
        section === "Música" && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-6 text-sm text-muted-foreground", children: "Um intervalo musical imaginário, sem conexão com serviços externos." }),
          musicCard,
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-8 text-xl", children: "Histórico recente" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 divide-y divide-border", children: history.map((index, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-4 py-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Headphones, { className: "size-5 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: SONGS[index].title }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [
                SONGS[index].artist,
                " · fictício"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: SONGS[index].duration })
          ] }, `${index}-${i}`)) })
        ] }),
        section === "Notícias" && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-6 text-sm text-muted-foreground", children: "Manchetes inventadas para esta demonstração. Não são notícias reais." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 xl:grid-cols-3 gap-5", children: NEWS.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "overflow-hidden rounded-lg border border-border bg-card", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-36 flex items-center justify-center bg-secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "size-14 text-primary" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-primary", children: [
                item.category,
                " · Ilustrativo"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl leading-snug mt-3", children: item.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "link", className: "px-0 mt-4", onClick: () => setNews(i), children: [
                "Ler manchete",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, {})
              ] })
            ] })
          ] }, item.title)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "mt-12 pt-5 border-t border-border flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "Dados fictícios · ",
            storageError ? "Alterações apenas nesta visita" : "Alterações salvas somente neste navegador"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "link", size: "sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/projetos/meu-espaco", children: [
            "Ver case study",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, {})
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "ghost", size: "sm", onClick: () => setResetOpen(true), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, {}),
            "Restaurar"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: editor !== null, onOpenChange: (open) => {
      if (!open) setEditor(null);
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "meu-espaco-theme w-[calc(100%-2rem)] max-h-[90dvh] overflow-y-auto rounded-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { children: [
        editor?.id ? "Editar" : "Adicionar",
        " ",
        editor?.kind === "task" ? "tarefa" : editor?.kind === "shopping" ? "item de compra" : editor?.kind === "entry" ? "lançamento" : "categoria"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { children: "Dados fictícios da demonstração." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: save, className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-sm", children: [
          editor?.kind === "entry" ? "Descrição" : "Nome",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { autoFocus: true, className: "mt-2", value: title, onChange: (e) => setTitle(e.target.value), maxLength: editor?.kind === "category" ? 40 : 120, required: true })
        ] }),
        editor?.kind === "task" && /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-sm", children: [
          "Coluna",
          /* @__PURE__ */ jsxRuntimeExports.jsx("select", { className: "w-full mt-2", value: status, onChange: (e) => setStatus(e.target.value), children: STATUSES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: s }, s)) })
        ] }),
        editor?.kind === "entry" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-sm", children: [
              "Tipo",
              /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "w-full mt-2", value: entryType, onChange: (e) => setEntryType(e.target.value), children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Despesa" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Receita" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-sm", children: [
              "Valor (R$)",
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { className: "mt-2", inputMode: "decimal", value: amount, onChange: (e) => setAmount(e.target.value), required: true, placeholder: "0,00" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-sm", children: [
            "Categoria",
            /* @__PURE__ */ jsxRuntimeExports.jsx("select", { className: "w-full mt-2", value: category, onChange: (e) => setCategory(e.target.value), children: data.categories.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: c }, c)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-sm", children: [
            "Data",
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "date", className: "mt-2", value: date, onChange: (e) => setDate(e.target.value), required: true })
          ] })
        ] }),
        formError && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { role: "alert", className: "text-sm text-destructive", children: formError }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-end gap-2 pt-3", children: [
          editor?.id && /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "button", variant: "ghost", className: "text-destructive mr-auto", onClick: removeEdited, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, {}),
            "Excluir"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", type: "button", onClick: () => setEditor(null), children: "Cancelar" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "submit", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, {}),
            "Salvar"
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: news !== null, onOpenChange: (open) => {
      if (!open) setNews(null);
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "meu-espaco-theme w-[calc(100%-2rem)] rounded-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: news !== null ? NEWS[news].title : "" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { children: "Manchete ilustrativa · conteúdo fictício" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed", children: news !== null ? NEWS[news].text : "" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: resetOpen, onOpenChange: setResetOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "meu-espaco-theme w-[calc(100%-2rem)] rounded-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Restaurar demonstração?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { children: "Suas alterações locais serão substituídas pelos dados fictícios iniciais." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => setResetOpen(false), children: "Cancelar" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: () => {
          setData(makeDemo());
          setResetOpen(false);
          setPlaying(false);
          setSong(0);
          setHistory([1, 2]);
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, {}),
          "Restaurar dados"
        ] })
      ] })
    ] }) })
  ] });
}
const SplitComponent = MeuEspacoDemo;
export {
  SplitComponent as component
};
