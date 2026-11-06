import { useEffect, useState, type FormEvent, type ReactNode } from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowLeft, ArrowUpRight, Check, ChevronRight, Coffee, Headphones, Home, House, LayoutList, Leaf, ListChecks, Music2, Newspaper, Pause, Pencil, Play, Plus, RotateCcw, ShieldCheck, SkipForward, Trash2, Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import { useLanguage } from '@/context/LanguageContext';
import { makeDemo, restoreDemo, totals, money, STATUSES, STORAGE_KEY, type DemoData } from '@/lib/meu-espaco';
import roomPhoto from '@/assets/meu-espaco.jpg';

const NAV = [
  { name: 'Início', icon: Home }, { name: 'Tarefas', icon: LayoutList },
  { name: 'Casa', icon: House }, { name: 'Finanças', icon: Wallet },
  { name: 'Música', icon: Music2 }, { name: 'Notícias', icon: Newspaper },
] as const;
type Section = typeof NAV[number]['name'];
type Editor = { kind: 'task' | 'shopping' | 'entry' | 'category'; id?: string };
const SONGS = [
  { title: 'Entre folhas e café', artist: 'Estúdio Imaginário', album: 'Manhã tranquila', duration: '3:42' },
  { title: 'Um passo de cada vez', artist: 'Banda Fictícia', album: 'Pequenas pausas', duration: '4:10' },
  { title: 'Janela aberta', artist: 'Sons Inventados', album: 'Casa em silêncio', duration: '2:58' },
];
const NEWS = [
  { title: 'Biblioteca de bairro ganha um jardim de leitura', category: 'Cultura', text: 'Em uma cidade imaginária, moradores criaram um espaço com livros, plantas e bancos para compartilhar pequenas pausas. Esta manchete e seu conteúdo foram criados apenas para a demonstração.', icon: Leaf },
  { title: 'Pequenas pausas entram na rotina de estudos', category: 'Bem-estar', text: 'Um grupo fictício de estudantes experimenta alternar momentos de concentração e descanso. A história é ilustrativa e não representa uma pesquisa ou notícia real.', icon: Coffee },
  { title: 'Feira local reúne ideias para uma casa mais sustentável', category: 'Casa', text: 'A feira imaginária reúne oficinas de reaproveitamento e troca de objetos. Não existe evento, fonte externa ou cobertura jornalística vinculada a esta demonstração.', icon: House },
];

const SONGS_EN = [
  { title: 'Between leaves and coffee', artist: 'Imaginary Studio', album: 'Quiet morning', duration: '3:42' },
  { title: 'One step at a time', artist: 'Fictional Band', album: 'Small pauses', duration: '4:10' },
  { title: 'Open window', artist: 'Invented Sounds', album: 'House in silence', duration: '2:58' },
];
const NEWS_EN = [
  { title: 'Neighborhood library gets a reading garden', category: 'Culture', text: 'In an imaginary city, residents created a space with books, plants and benches to share small pauses. This headline and its content were created only for the demo.' },
  { title: 'Small breaks join the study routine', category: 'Well-being', text: 'A fictional group of students tries alternating moments of focus and rest. The story is illustrative and does not represent real research or news.' },
  { title: 'Local fair gathers ideas for a more sustainable home', category: 'Home', text: 'The imaginary fair brings together reuse workshops and item swaps. There is no event, external source or news coverage tied to this demo.' },
];
const NAV_EN: Record<string, string> = { 'Início': 'Home', Tarefas: 'Tasks', Casa: 'House', 'Finanças': 'Finances', 'Música': 'Music', 'Notícias': 'News' };
const STATUS_EN: Record<string, string> = { Backlog: 'Backlog', 'A Fazer': 'To do', 'Em andamento': 'In progress', 'Concluído': 'Done' };
const TYPE_EN: Record<string, string> = { Receita: 'Income', Despesa: 'Expense' };
const CATEGORY_EN: Record<string, string> = { Trabalho: 'Work', Casa: 'Home', Estudos: 'Studies', Lazer: 'Leisure' };
const TITLES_EN: Record<string, string> = {
  'Planejar um cantinho de leitura': 'Plan a reading corner',
  'Organizar os estudos da semana': "Organize the week's studies",
  'Ler um capítulo do livro': 'Read a book chapter',
  'Regar as plantas': 'Water the plants',
  'Café em grãos · 1 pacote': 'Coffee beans · 1 pack',
  'Frutas da semana': "The week's fruit",
  'Pão integral': 'Whole-wheat bread',
  'Receita de exemplo': 'Sample income',
  'Compras da semana': 'Weekly groceries',
  'Livros e cadernos': 'Books and notebooks',
};

function Metric({ label, value, icon }: { label: string; value: string | number; icon: ReactNode }) {
  return <div className="border-b border-border py-5"><div className="flex items-center gap-2 text-muted-foreground text-xs">{icon}{label}</div><p className="mt-3 text-2xl font-medium tabular-nums">{value}</p></div>;
}

export function MeuEspacoDemo() {
  const { language } = useLanguage();
  const en = language === 'en';
  const tr = (pt: string, enText: string) => (en ? enText : pt);
  const nav = (name: string) => (en ? NAV_EN[name] ?? name : name);
  const st = (name: string) => (en ? STATUS_EN[name] ?? name : name);
  const ty = (name: string) => (en ? TYPE_EN[name] ?? name : name);
  const cat = (name: string) => (en ? CATEGORY_EN[name] ?? name : name);
  const ti = (name: string) => (en ? TITLES_EN[name] ?? name : name);
  const fmt = (value: number) => (en ? new Intl.NumberFormat('en-US', { style: 'currency', currency: 'BRL' }).format(value) : money(value));
  const songs = en ? SONGS_EN : SONGS;
  const newsList = en ? NEWS.map((n, i) => ({ ...n, ...NEWS_EN[i] })) : NEWS;
  const [section, setSection] = useState<Section>('Início');
  const [data, setData] = useState<DemoData>(makeDemo);
  const [ready, setReady] = useState(false);
  const [storageError, setStorageError] = useState(false);
  const [editor, setEditor] = useState<Editor | null>(null);
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState<typeof STATUSES[number]>('A Fazer');
  const [amount, setAmount] = useState('');
  const [entryType, setEntryType] = useState<'Receita' | 'Despesa'>('Despesa');
  const [category, setCategory] = useState('Casa');
  const [date, setDate] = useState('2026-10-23');
  const [playing, setPlaying] = useState(false);
  const [song, setSong] = useState(0);
  const [history, setHistory] = useState<number[]>([1, 2]);
  const [news, setNews] = useState<number | null>(null);
  const [resetOpen, setResetOpen] = useState(false);
  const [formError, setFormError] = useState('');

  useEffect(() => {
    try { setData(restoreDemo(localStorage.getItem(STORAGE_KEY))); } catch { setStorageError(true); }
    setReady(true);
  }, []);
  useEffect(() => {
    if (!ready) return;
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); setStorageError(false); } catch { setStorageError(true); }
  }, [data, ready]);

  const summary = totals(data.entries);
  const remaining = data.tasks.filter(t => t.status !== 'Concluído');
  const pendingShopping = data.shopping.filter(i => !i.done);
  const currentSong = songs[song];

  function openEditor(value: Editor, initialStatus: typeof STATUSES[number] = 'A Fazer') {
    setEditor(value); setTitle(''); setAmount(''); setStatus(initialStatus); setEntryType('Despesa'); setDate('2026-10-23'); setCategory(data.categories[0] ?? 'Casa'); setFormError('');
    if (value.kind === 'task') { const item = data.tasks.find(t => t.id === value.id); if (item) { setTitle(item.title); setStatus(item.status); } }
    if (value.kind === 'shopping') { const item = data.shopping.find(t => t.id === value.id); if (item) setTitle(item.title); }
    if (value.kind === 'entry') { const item = data.entries.find(t => t.id === value.id); if (item) { setTitle(item.title); setAmount(String(item.amount)); setEntryType(item.type); setCategory(item.category); setDate(item.date); } }
  }
  function save(event: FormEvent) {
    event.preventDefault();
    if (!editor || !title.trim()) return;
    const id = editor.id ?? crypto.randomUUID();
    if (editor.kind === 'task') {
      const item = { id, title: title.trim(), status };
      setData(d => ({ ...d, tasks: editor.id ? d.tasks.map(t => t.id === id ? item : t) : [...d.tasks, item] }));
    } else if (editor.kind === 'shopping') {
      setData(d => ({ ...d, shopping: editor.id ? d.shopping.map(i => i.id === id ? { ...i, title: title.trim() } : i) : [...d.shopping, { id, title: title.trim(), done: false }] }));
    } else if (editor.kind === 'entry') {
      const parsedAmount = Number(amount.replace(',', '.'));
      if (!Number.isFinite(parsedAmount) || parsedAmount <= 0 || !date || !data.categories.includes(category)) { setFormError(tr('Informe um valor positivo, uma data e uma categoria.', 'Enter a positive amount, a date and a category.')); return; }
      const item = { id, title: title.trim(), amount: Math.round(parsedAmount * 100) / 100, type: entryType, category, date };
      setData(d => ({ ...d, entries: editor.id ? d.entries.map(e => e.id === id ? item : e) : [...d.entries, item] }));
    } else {
      if (data.categories.some(c => c.toLocaleLowerCase('pt-BR') === title.trim().toLocaleLowerCase('pt-BR'))) { setFormError(tr('Esta categoria já existe.', 'This category already exists.')); return; }
      setData(d => ({ ...d, categories: [...d.categories, title.trim()] }));
    }
    setEditor(null);
  }
  function removeEdited() {
    if (!editor?.id) return;
    const { id, kind } = editor;
    setData(d => ({ ...d,
      tasks: kind === 'task' ? d.tasks.filter(t => t.id !== id) : d.tasks,
      shopping: kind === 'shopping' ? d.shopping.filter(t => t.id !== id) : d.shopping,
      entries: kind === 'entry' ? d.entries.filter(t => t.id !== id) : d.entries,
    }));
    setEditor(null);
  }
  function nextSong() { setHistory(h => [song, ...h].slice(0, 4)); setSong(s => (s + 1) % SONGS.length); }
  const navButton = (name: Section, label: string) => <Button variant="link" className="p-0 h-auto" onClick={() => setSection(name)}>{label}<ChevronRight /></Button>;
  const musicCard = <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 rounded-lg border border-border bg-card p-5">
    <div className="h-24 w-24 shrink-0 rounded-md bg-secondary flex items-center justify-center"><Music2 className="size-12 text-primary" /></div>
    <div className="flex-1 min-w-0"><p className="text-xs text-primary">{playing ? tr('Tocando agora · simulação', 'Now playing · simulation') : tr('Pausa para respirar', 'A pause to breathe')}</p><h3 className="mt-2 text-xl">{currentSong.title}</h3><p className="mt-1 text-sm text-muted-foreground">{currentSong.artist} · {currentSong.duration}</p><p className="mt-2 text-xs text-muted-foreground">{tr('Faixa fictícia · sem reprodução de áudio', 'Fictional track · no audio playback')}</p></div>
    <div className="flex gap-2"><Button size="icon" onClick={() => setPlaying(p => !p)} aria-label={playing ? tr('Pausar simulação', 'Pause simulation') : tr('Iniciar simulação', 'Start simulation')} title={playing ? tr('Pausar simulação', 'Pause simulation') : tr('Iniciar simulação', 'Start simulation')}>{playing ? <Pause /> : <Play />}</Button><Button size="icon" variant="outline" onClick={nextSong} aria-label={tr('Próxima faixa fictícia', 'Next fictional track')} title={tr('Próxima faixa fictícia', 'Next fictional track')}><SkipForward /></Button></div>
  </div>;

  return <div className="meu-espaco-theme min-h-screen">
    <header className="border-b border-border px-5 sm:px-8 py-3 flex flex-wrap items-center justify-between gap-3">
      <Button asChild variant="ghost" size="sm"><Link to="/"><ArrowLeft />nayra.dev</Link></Button>
      <span className="flex items-center gap-2 text-xs text-primary"><ShieldCheck className="size-4" />{tr('Demonstração com dados fictícios', 'Demo with fictional data')}</span>
    </header>
    <div className="mx-auto max-w-[1440px] lg:grid lg:grid-cols-[224px_minmax(0,1fr)]">
      <aside className="lg:border-r border-border p-5 lg:p-7 lg:sticky lg:top-0 lg:h-screen">
        <Link to="/demo/meu-espaco" className="flex items-center gap-3"><div className="flex size-10 items-center justify-center rounded-lg bg-secondary text-primary"><House /></div><span className="font-display text-xl">Meu Espaço<span className="block font-sans text-[11px] text-muted-foreground mt-0.5">{tr('Um lugar para sua rotina', 'A place for your routine')}</span></span></Link>
        <nav aria-label={tr('Áreas do Meu Espaço', 'Meu Espaço sections')} className="mt-5 lg:mt-10 grid grid-cols-3 gap-2 lg:flex lg:flex-col">
          {NAV.map(({ name, icon: Icon }) => <Button key={name} variant={section === name ? 'secondary' : 'ghost'} aria-current={section === name ? 'page' : undefined} className="h-11 px-2 lg:px-3 text-xs sm:text-sm lg:justify-start" onClick={() => setSection(name)}><Icon />{nav(name)}</Button>)}
        </nav>
        <div className="mt-8 hidden lg:block border-t border-border pt-5"><p className="text-xs text-muted-foreground flex gap-2"><Leaf className="size-4 shrink-0" />{tr('Mais calma. Menos abas.', 'More calm. Fewer tabs.')}</p><Button variant="ghost" size="sm" className="mt-5 px-0 text-muted-foreground" onClick={() => setResetOpen(true)}><RotateCcw />{tr('Restaurar demonstração', 'Reset demo')}</Button><Button asChild variant="link" size="sm" className="px-0 mt-2"><Link to="/projetos/meu-espaco">{tr('Sobre o projeto', 'About the project')}<ArrowUpRight /></Link></Button></div>
      </aside>
      <main className="min-w-0 px-5 sm:px-8 lg:px-10 pt-3 lg:pt-10 pb-12" aria-busy={!ready}>
        <div className="flex items-center justify-between gap-4 mb-6"><div><p className="text-xs uppercase text-primary">{tr('Seu cotidiano, em equilíbrio', 'Your everyday life, in balance')}</p><h1 className="mt-2 text-3xl sm:text-4xl">{section === 'Início' ? tr('Que bom ter você por aqui.', 'So good to have you here.') : nav(section)}</h1></div><Coffee className="hidden sm:block size-8 text-primary shrink-0" /></div>
        <p className="sr-only" role="status">{ready ? tr('Demonstração pronta', 'Demo ready') : tr('Preparando demonstração', 'Preparing demo')}</p>
        {storageError && <p role="status" className="mb-5 text-sm text-destructive">{tr('O navegador não permitiu salvar. As alterações duram apenas nesta visita.', 'The browser did not allow saving. Changes last only for this visit.')}</p>}
        {section === 'Início' && <>
          <div className="relative overflow-hidden rounded-lg h-44 sm:h-56"><img src={roomPhoto} alt={tr('Cantinho aconchegante com café, plantas, caderno e toca-discos', 'Cozy corner with coffee, plants, a notebook and a record player')} width={1536} height={768} className="w-full h-full object-cover" /><div className="absolute bottom-4 left-4 bg-background/95 rounded-md px-4 py-3"><p className="text-sm font-medium">{tr('Um respiro no meio do dia.', 'A breather in the middle of the day.')}</p><p className="mt-1 text-xs text-muted-foreground">{tr('Espaço para fazer, cuidar e descansar.', 'Space to do, care and rest.')}</p></div></div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6"><Metric label={tr('Tarefas em aberto', 'Open tasks')} value={remaining.length} icon={<ListChecks className="size-4" />} /><Metric label={tr('Na lista de compras', 'On the shopping list')} value={pendingShopping.length} icon={<House className="size-4" />} /><Metric label={tr('Saldo fictício', 'Fictional balance')} value={fmt(summary.balance)} icon={<Wallet className="size-4" />} /></div>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <section><div className="flex justify-between gap-3 items-center"><h2 className="text-xl">{tr('Um passo de cada vez', 'One step at a time')}</h2>{navButton('Tarefas', tr('Ver tarefas', 'View tasks'))}</div><div className="mt-4 divide-y divide-border">{remaining.slice(0, 3).map(t => <div key={t.id} className="py-4 flex items-center gap-3"><div className="size-7 rounded-full bg-secondary text-primary flex items-center justify-center shrink-0"><ListChecks className="size-4" /></div><p className="text-sm break-words flex-1 min-w-0">{ti(t.title)}</p><span className="text-[10px] text-muted-foreground shrink-0">{st(t.status)}</span></div>)}{!remaining.length && <p className="py-5 text-sm text-muted-foreground">{tr('Tudo concluído. Hora de uma pausa.', 'All done. Time for a break.')}</p>}</div></section>
            <section><div className="flex justify-between items-center gap-3"><h2 className="text-xl">{tr('Cuidar da casa', 'Taking care of the house')}</h2>{navButton('Casa', tr('Ver lista', 'View list'))}</div><ul className="mt-4 divide-y divide-border">{pendingShopping.slice(0, 3).map(i => <li key={i.id} className="py-4 text-sm flex gap-3"><House className="size-4 text-primary shrink-0" />{ti(i.title)}</li>)}{!pendingShopping.length && <li className="py-5 text-muted-foreground text-sm">{tr('Compras em dia.', 'Shopping up to date.')}</li>}</ul></section>
          </div>
          <section className="mt-8"><h2 className="text-xl mb-4">{tr('Uma trilha para o seu dia', 'A soundtrack for your day')}</h2>{musicCard}</section>
        </>}
        {section === 'Tarefas' && <section><div className="flex flex-wrap justify-between items-center gap-3 mb-6"><p className="text-muted-foreground text-sm">{tr('Pequenos passos também são progresso.', 'Small steps are progress too.')}</p><Button disabled={!ready} onClick={() => openEditor({ kind: 'task' })}><Plus />{tr('Adicionar tarefa', 'Add task')}</Button></div><div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {STATUSES.map(column => <section key={column} className="min-w-0 border-t-2 border-primary pt-4"><div className="flex justify-between items-center mb-4"><h2 className="text-base font-sans font-medium">{st(column)} <span className="text-muted-foreground text-xs ml-1">{data.tasks.filter(t => t.status === column).length}</span></h2><Button variant="ghost" size="icon" title={en ? `Add to ${st(column)}` : `Adicionar em ${column}`} aria-label={en ? `Add to ${st(column)}` : `Adicionar em ${column}`} onClick={() => openEditor({ kind: 'task' }, column)}><Plus /></Button></div><div className="space-y-3">{data.tasks.filter(t => t.status === column).map(t => <article key={t.id} className="rounded-lg p-4 border border-border bg-card"><div className="flex items-start gap-2"><p className="text-sm leading-relaxed break-words min-w-0 flex-1">{ti(t.title)}</p><Button size="icon" variant="ghost" className="size-7 shrink-0" title={tr('Editar tarefa', 'Edit task')} aria-label={en ? `Edit task ${ti(t.title)}` : `Editar tarefa ${t.title}`} onClick={() => openEditor({ kind: 'task', id: t.id })}><Pencil /></Button></div><label className="block mt-4"><span className="sr-only">{en ? `Move task ${ti(t.title)}` : `Mover tarefa ${t.title}`}</span><select value={t.status} className="w-full" onChange={e => { const value = e.target.value as typeof STATUSES[number]; setData(d => ({ ...d, tasks: d.tasks.map(item => item.id === t.id ? { ...item, status: value } : item) })); }}>{STATUSES.map(s => <option key={s} value={s}>{st(s)}</option>)}</select></label></article>)}{!data.tasks.some(t => t.status === column) && <p className="text-xs text-muted-foreground py-8 border border-dashed border-border rounded-lg text-center">{tr('Nenhuma tarefa por aqui.', 'No tasks here.')}</p>}</div></section>)}
        </div></section>}
        {section === 'Casa' && <section><div className="flex flex-wrap justify-between gap-3 items-center mb-6"><div><h2 className="text-xl">{tr('Lista de compras', 'Shopping list')}</h2><p className="text-sm text-muted-foreground mt-2">{data.shopping.filter(i => i.done).length} {tr('de', 'of')} {data.shopping.length} {tr('itens comprados', 'items bought')}</p></div><Button disabled={!ready} onClick={() => openEditor({ kind: 'shopping' })}><Plus />{tr('Adicionar item', 'Add item')}</Button></div><ul className="divide-y divide-border border-y border-border">{data.shopping.map(i => <li key={i.id} className="py-4 flex items-center gap-3"><label className="flex items-center gap-3 flex-1 min-w-0 cursor-pointer"><input type="checkbox" checked={i.done} className="size-5 shrink-0" onChange={() => setData(d => ({ ...d, shopping: d.shopping.map(item => item.id === i.id ? { ...item, done: !item.done } : item) }))} /><span className={`text-sm break-words ${i.done ? 'line-through text-muted-foreground' : ''}`}>{ti(i.title)}</span></label><Button variant="ghost" size="icon" title={tr('Editar item', 'Edit item')} aria-label={en ? `Edit item ${ti(i.title)}` : `Editar item ${i.title}`} onClick={() => openEditor({ kind: 'shopping', id: i.id })}><Pencil /></Button></li>)}</ul>{!data.shopping.length && <p className="py-10 text-muted-foreground text-sm">{tr('A lista está vazia. O que está faltando em casa?', 'The list is empty. What is missing at home?')}</p>}</section>}
        {section === 'Finanças' && <section><p className="text-sm text-muted-foreground">{tr('Todos os lançamentos da demonstração · valores fictícios', 'All demo transactions · fictional amounts')}</p><div className="grid sm:grid-cols-3 gap-x-6"><Metric label={tr('Receitas', 'Income')} value={fmt(summary.income)} icon={<Plus className="size-4" />} /><Metric label={tr('Despesas', 'Expenses')} value={fmt(summary.expense)} icon={<Wallet className="size-4" />} /><Metric label={tr('Saldo', 'Balance')} value={fmt(summary.balance)} icon={<Check className="size-4" />} /></div><div className="flex flex-wrap items-center justify-between gap-3 mt-8 mb-4"><h2 className="text-xl">{tr('Lançamentos', 'Transactions')}</h2><Button disabled={!ready} onClick={() => openEditor({ kind: 'entry' })}><Plus />{tr('Novo lançamento', 'New transaction')}</Button></div><ul className="divide-y divide-border border-y border-border">{[...data.entries].sort((a, b) => b.date.localeCompare(a.date)).map(e => <li key={e.id} className="py-4 flex items-center gap-3"><div className="flex-1 min-w-0"><p className="text-sm break-words">{ti(e.title)}</p><p className="text-xs text-muted-foreground mt-1">{en ? e.date.split('-').slice(1).concat(e.date.split('-')[0]).join('/') : e.date.split('-').reverse().join('/')} · {cat(e.category)} · {ty(e.type)}</p></div><span className={`text-sm tabular-nums shrink-0 ${e.type === 'Receita' ? 'text-primary' : 'text-foreground'}`}>{e.type === 'Receita' ? '+' : '−'} {fmt(e.amount)}</span><Button variant="ghost" size="icon" className="shrink-0" title={tr('Editar lançamento', 'Edit transaction')} aria-label={en ? `Edit transaction ${ti(e.title)}` : `Editar lançamento ${e.title}`} onClick={() => openEditor({ kind: 'entry', id: e.id })}><Pencil /></Button></li>)}</ul>{!data.entries.length && <p className="py-8 text-sm text-muted-foreground">{tr('Nenhum lançamento cadastrado.', 'No transactions yet.')}</p>}<section className="mt-8"><div className="flex justify-between items-center"><h2 className="text-xl">{tr('Categorias', 'Categories')}</h2><Button variant="outline" size="sm" onClick={() => openEditor({ kind: 'category' })}><Plus />{tr('Categoria', 'Category')}</Button></div><div className="flex flex-wrap gap-2 mt-4">{data.categories.map(c => <span key={c} className="px-3 py-2 text-xs border border-border rounded-md bg-card">{cat(c)}</span>)}</div></section></section>}
        {section === 'Música' && <section><p className="mb-6 text-sm text-muted-foreground">{tr('Um intervalo musical imaginário, sem conexão com serviços externos.', 'An imaginary music break, with no connection to external services.')}</p>{musicCard}<h2 className="mt-8 text-xl">{tr('Histórico recente', 'Recent history')}</h2><ul className="mt-4 divide-y divide-border">{history.map((index, i) => <li key={`${index}-${i}`} className="flex items-center gap-4 py-4"><Headphones className="size-5 text-primary" /><div className="min-w-0 flex-1"><p className="text-sm">{songs[index].title}</p><p className="text-xs text-muted-foreground mt-1">{songs[index].artist} · {tr('fictício', 'fictional')}</p></div><span className="text-xs text-muted-foreground">{songs[index].duration}</span></li>)}</ul></section>}
        {section === 'Notícias' && <section><p className="mb-6 text-sm text-muted-foreground">{tr('Manchetes inventadas para esta demonstração. Não são notícias reais.', 'Headlines made up for this demo. They are not real news.')}</p><div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">{newsList.map((item, i) => <article key={item.title} className="overflow-hidden rounded-lg border border-border bg-card"><div className="h-36 flex items-center justify-center bg-secondary"><item.icon className="size-14 text-primary" /></div><div className="p-5"><p className="text-xs text-primary">{item.category} · {tr('Ilustrativo', 'Illustrative')}</p><h2 className="text-xl leading-snug mt-3">{item.title}</h2><Button variant="link" className="px-0 mt-4" onClick={() => setNews(i)}>{tr('Ler manchete', 'Read headline')}<ArrowUpRight /></Button></div></article>)}</div></section>}
        <footer className="mt-12 pt-5 border-t border-border flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground"><span>{tr('Dados fictícios', 'Fictional data')} · {storageError ? tr('Alterações apenas nesta visita', 'Changes for this visit only') : tr('Alterações salvas somente neste navegador', 'Changes saved only in this browser')}</span><Button asChild variant="link" size="sm"><Link to="/projetos/meu-espaco">{tr('Ver case study', 'View case study')}<ArrowUpRight /></Link></Button><Button variant="ghost" size="sm" onClick={() => setResetOpen(true)}><RotateCcw />{tr('Restaurar', 'Reset')}</Button></footer>
      </main>
    </div>
    <Dialog open={editor !== null} onOpenChange={open => { if (!open) setEditor(null); }}><DialogContent className="meu-espaco-theme w-[calc(100%-2rem)] max-h-[90dvh] overflow-y-auto rounded-lg"><DialogTitle>{en ? `${editor?.id ? 'Edit' : 'Add'} ${editor?.kind === 'task' ? 'task' : editor?.kind === 'shopping' ? 'shopping item' : editor?.kind === 'entry' ? 'transaction' : 'category'}` : `${editor?.id ? 'Editar' : 'Adicionar'} ${editor?.kind === 'task' ? 'tarefa' : editor?.kind === 'shopping' ? 'item de compra' : editor?.kind === 'entry' ? 'lançamento' : 'categoria'}`}</DialogTitle><DialogDescription>{tr('Dados fictícios da demonstração.', 'Fictional demo data.')}</DialogDescription><form onSubmit={save} className="space-y-4"><label className="block text-sm">{editor?.kind === 'entry' ? tr('Descrição', 'Description') : tr('Nome', 'Name')}<Input autoFocus className="mt-2" value={title} onChange={e => setTitle(e.target.value)} maxLength={editor?.kind === 'category' ? 40 : 120} required /></label>{editor?.kind === 'task' && <label className="block text-sm">{tr('Coluna', 'Column')}<select className="w-full mt-2" value={status} onChange={e => setStatus(e.target.value as typeof STATUSES[number])}>{STATUSES.map(s => <option key={s} value={s}>{st(s)}</option>)}</select></label>}{editor?.kind === 'entry' && <><div className="grid grid-cols-2 gap-4"><label className="text-sm">{tr('Tipo', 'Type')}<select className="w-full mt-2" value={entryType} onChange={e => setEntryType(e.target.value as 'Receita' | 'Despesa')}><option value="Despesa">{ty('Despesa')}</option><option value="Receita">{ty('Receita')}</option></select></label><label className="text-sm">{tr('Valor (R$)', 'Amount (R$)')}<Input className="mt-2" inputMode="decimal" value={amount} onChange={e => setAmount(e.target.value)} required placeholder={en ? '0.00' : '0,00'} /></label></div><label className="block text-sm">{tr('Categoria', 'Category')}<select className="w-full mt-2" value={category} onChange={e => setCategory(e.target.value)}>{data.categories.map(c => <option key={c} value={c}>{cat(c)}</option>)}</select></label><label className="block text-sm">{tr('Data', 'Date')}<Input type="date" className="mt-2" value={date} onChange={e => setDate(e.target.value)} required /></label></>}{formError && <p role="alert" className="text-sm text-destructive">{formError}</p>}<div className="flex flex-wrap justify-end gap-2 pt-3">{editor?.id && <Button type="button" variant="ghost" className="text-destructive mr-auto" onClick={removeEdited}><Trash2 />{tr('Excluir', 'Delete')}</Button>}<Button variant="outline" type="button" onClick={() => setEditor(null)}>{tr('Cancelar', 'Cancel')}</Button><Button type="submit"><Check />{tr('Salvar', 'Save')}</Button></div></form></DialogContent></Dialog>
    <Dialog open={news !== null} onOpenChange={open => { if (!open) setNews(null); }}><DialogContent className="meu-espaco-theme w-[calc(100%-2rem)] rounded-lg"><DialogTitle>{news !== null ? newsList[news].title : ''}</DialogTitle><DialogDescription>{tr('Manchete ilustrativa · conteúdo fictício', 'Illustrative headline · fictional content')}</DialogDescription><p className="text-sm leading-relaxed">{news !== null ? newsList[news].text : ''}</p></DialogContent></Dialog>
    <Dialog open={resetOpen} onOpenChange={setResetOpen}><DialogContent className="meu-espaco-theme w-[calc(100%-2rem)] rounded-lg"><DialogTitle>{tr('Restaurar demonstração?', 'Reset demo?')}</DialogTitle><DialogDescription>{tr('Suas alterações locais serão substituídas pelos dados fictícios iniciais.', 'Your local changes will be replaced by the initial fictional data.')}</DialogDescription><div className="flex justify-end gap-2"><Button variant="outline" onClick={() => setResetOpen(false)}>{tr('Cancelar', 'Cancel')}</Button><Button onClick={() => { setData(makeDemo()); setResetOpen(false); setPlaying(false); setSong(0); setHistory([1, 2]); }}><RotateCcw />{tr('Restaurar dados', 'Reset data')}</Button></div></DialogContent></Dialog>
  </div>;
}