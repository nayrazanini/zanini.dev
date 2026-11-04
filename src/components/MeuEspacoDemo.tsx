import { useEffect, useState, type FormEvent, type ReactNode } from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowLeft, ArrowUpRight, Check, ChevronRight, Coffee, Headphones, Home, House, LayoutList, Leaf, ListChecks, Music2, Newspaper, Pause, Pencil, Play, Plus, RotateCcw, ShieldCheck, SkipForward, Trash2, Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
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

function Metric({ label, value, icon }: { label: string; value: string | number; icon: ReactNode }) {
  return <div className="border-b border-border py-5"><div className="flex items-center gap-2 text-muted-foreground text-xs">{icon}{label}</div><p className="mt-3 text-2xl font-medium tabular-nums">{value}</p></div>;
}

export function MeuEspacoDemo() {
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
  const currentSong = SONGS[song];

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
      if (!Number.isFinite(parsedAmount) || parsedAmount <= 0 || !date || !data.categories.includes(category)) { setFormError('Informe um valor positivo, uma data e uma categoria.'); return; }
      const item = { id, title: title.trim(), amount: Math.round(parsedAmount * 100) / 100, type: entryType, category, date };
      setData(d => ({ ...d, entries: editor.id ? d.entries.map(e => e.id === id ? item : e) : [...d.entries, item] }));
    } else {
      if (data.categories.some(c => c.toLocaleLowerCase('pt-BR') === title.trim().toLocaleLowerCase('pt-BR'))) { setFormError('Esta categoria já existe.'); return; }
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
    <div className="flex-1 min-w-0"><p className="text-xs text-primary">{playing ? 'Tocando agora · simulação' : 'Pausa para respirar'}</p><h3 className="mt-2 text-xl">{currentSong.title}</h3><p className="mt-1 text-sm text-muted-foreground">{currentSong.artist} · {currentSong.duration}</p><p className="mt-2 text-xs text-muted-foreground">Faixa fictícia · sem reprodução de áudio</p></div>
    <div className="flex gap-2"><Button size="icon" onClick={() => setPlaying(p => !p)} aria-label={playing ? 'Pausar simulação' : 'Iniciar simulação'} title={playing ? 'Pausar simulação' : 'Iniciar simulação'}>{playing ? <Pause /> : <Play />}</Button><Button size="icon" variant="outline" onClick={nextSong} aria-label="Próxima faixa fictícia" title="Próxima faixa fictícia"><SkipForward /></Button></div>
  </div>;

  return <div className="meu-espaco-theme min-h-screen">
    <header className="border-b border-border px-5 sm:px-8 py-3 flex flex-wrap items-center justify-between gap-3">
      <Button asChild variant="ghost" size="sm"><Link to="/"><ArrowLeft />nayra.dev</Link></Button>
      <span className="flex items-center gap-2 text-xs text-primary"><ShieldCheck className="size-4" />Demonstração com dados fictícios</span>
    </header>
    <div className="mx-auto max-w-[1440px] lg:grid lg:grid-cols-[224px_minmax(0,1fr)]">
      <aside className="lg:border-r border-border p-5 lg:p-7 lg:sticky lg:top-0 lg:h-screen">
        <Link to="/demo/meu-espaco" className="flex items-center gap-3"><div className="flex size-10 items-center justify-center rounded-lg bg-secondary text-primary"><House /></div><span className="font-display text-xl">Meu Espaço<span className="block font-sans text-[11px] text-muted-foreground mt-0.5">Um lugar para sua rotina</span></span></Link>
        <nav aria-label="Áreas do Meu Espaço" className="mt-5 lg:mt-10 grid grid-cols-3 gap-2 lg:flex lg:flex-col">
          {NAV.map(({ name, icon: Icon }) => <Button key={name} variant={section === name ? 'secondary' : 'ghost'} aria-current={section === name ? 'page' : undefined} className="h-11 px-2 lg:px-3 text-xs sm:text-sm lg:justify-start" onClick={() => setSection(name)}><Icon />{name}</Button>)}
        </nav>
        <div className="mt-8 hidden lg:block border-t border-border pt-5"><p className="text-xs text-muted-foreground flex gap-2"><Leaf className="size-4 shrink-0" />Mais calma. Menos abas.</p><Button variant="ghost" size="sm" className="mt-5 px-0 text-muted-foreground" onClick={() => setResetOpen(true)}><RotateCcw />Restaurar demonstração</Button><Button asChild variant="link" size="sm" className="px-0 mt-2"><Link to="/projetos/meu-espaco">Sobre o projeto<ArrowUpRight /></Link></Button></div>
      </aside>
      <main className="min-w-0 px-5 sm:px-8 lg:px-10 pt-3 lg:pt-10 pb-12" aria-busy={!ready}>
        <div className="flex items-center justify-between gap-4 mb-6"><div><p className="text-xs uppercase text-primary">Seu cotidiano, em equilíbrio</p><h1 className="mt-2 text-3xl sm:text-4xl">{section === 'Início' ? 'Que bom ter você por aqui.' : section}</h1></div><Coffee className="hidden sm:block size-8 text-primary shrink-0" /></div>
        <p className="sr-only" role="status">{ready ? 'Demonstração pronta' : 'Preparando demonstração'}</p>
        {storageError && <p role="status" className="mb-5 text-sm text-destructive">O navegador não permitiu salvar. As alterações duram apenas nesta visita.</p>}
        {section === 'Início' && <>
          <div className="relative overflow-hidden rounded-lg h-44 sm:h-56"><img src={roomPhoto} alt="Cantinho aconchegante com café, plantas, caderno e toca-discos" width={1536} height={768} className="w-full h-full object-cover" /><div className="absolute bottom-4 left-4 bg-background/95 rounded-md px-4 py-3"><p className="text-sm font-medium">Um respiro no meio do dia.</p><p className="mt-1 text-xs text-muted-foreground">Espaço para fazer, cuidar e descansar.</p></div></div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6"><Metric label="Tarefas em aberto" value={remaining.length} icon={<ListChecks className="size-4" />} /><Metric label="Na lista de compras" value={pendingShopping.length} icon={<House className="size-4" />} /><Metric label="Saldo fictício" value={money(summary.balance)} icon={<Wallet className="size-4" />} /></div>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <section><div className="flex justify-between gap-3 items-center"><h2 className="text-xl">Um passo de cada vez</h2>{navButton('Tarefas', 'Ver tarefas')}</div><div className="mt-4 divide-y divide-border">{remaining.slice(0, 3).map(t => <div key={t.id} className="py-4 flex items-center gap-3"><div className="size-7 rounded-full bg-secondary text-primary flex items-center justify-center shrink-0"><ListChecks className="size-4" /></div><p className="text-sm break-words flex-1 min-w-0">{t.title}</p><span className="text-[10px] text-muted-foreground shrink-0">{t.status}</span></div>)}{!remaining.length && <p className="py-5 text-sm text-muted-foreground">Tudo concluído. Hora de uma pausa.</p>}</div></section>
            <section><div className="flex justify-between items-center gap-3"><h2 className="text-xl">Cuidar da casa</h2>{navButton('Casa', 'Ver lista')}</div><ul className="mt-4 divide-y divide-border">{pendingShopping.slice(0, 3).map(i => <li key={i.id} className="py-4 text-sm flex gap-3"><House className="size-4 text-primary shrink-0" />{i.title}</li>)}{!pendingShopping.length && <li className="py-5 text-muted-foreground text-sm">Compras em dia.</li>}</ul></section>
          </div>
          <section className="mt-8"><h2 className="text-xl mb-4">Uma trilha para o seu dia</h2>{musicCard}</section>
        </>}
        {section === 'Tarefas' && <section><div className="flex flex-wrap justify-between items-center gap-3 mb-6"><p className="text-muted-foreground text-sm">Pequenos passos também são progresso.</p><Button disabled={!ready} onClick={() => openEditor({ kind: 'task' })}><Plus />Adicionar tarefa</Button></div><div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {STATUSES.map(column => <section key={column} className="min-w-0 border-t-2 border-primary pt-4"><div className="flex justify-between items-center mb-4"><h2 className="text-base font-sans font-medium">{column} <span className="text-muted-foreground text-xs ml-1">{data.tasks.filter(t => t.status === column).length}</span></h2><Button variant="ghost" size="icon" title={`Adicionar em ${column}`} aria-label={`Adicionar em ${column}`} onClick={() => openEditor({ kind: 'task' }, column)}><Plus /></Button></div><div className="space-y-3">{data.tasks.filter(t => t.status === column).map(t => <article key={t.id} className="rounded-lg p-4 border border-border bg-card"><div className="flex items-start gap-2"><p className="text-sm leading-relaxed break-words min-w-0 flex-1">{t.title}</p><Button size="icon" variant="ghost" className="size-7 shrink-0" title="Editar tarefa" aria-label={`Editar tarefa ${t.title}`} onClick={() => openEditor({ kind: 'task', id: t.id })}><Pencil /></Button></div><label className="block mt-4"><span className="sr-only">Mover tarefa {t.title}</span><select value={t.status} className="w-full" onChange={e => { const value = e.target.value as typeof STATUSES[number]; setData(d => ({ ...d, tasks: d.tasks.map(item => item.id === t.id ? { ...item, status: value } : item) })); }}>{STATUSES.map(s => <option key={s}>{s}</option>)}</select></label></article>)}{!data.tasks.some(t => t.status === column) && <p className="text-xs text-muted-foreground py-8 border border-dashed border-border rounded-lg text-center">Nenhuma tarefa por aqui.</p>}</div></section>)}
        </div></section>}
        {section === 'Casa' && <section><div className="flex flex-wrap justify-between gap-3 items-center mb-6"><div><h2 className="text-xl">Lista de compras</h2><p className="text-sm text-muted-foreground mt-2">{data.shopping.filter(i => i.done).length} de {data.shopping.length} itens comprados</p></div><Button disabled={!ready} onClick={() => openEditor({ kind: 'shopping' })}><Plus />Adicionar item</Button></div><ul className="divide-y divide-border border-y border-border">{data.shopping.map(i => <li key={i.id} className="py-4 flex items-center gap-3"><label className="flex items-center gap-3 flex-1 min-w-0 cursor-pointer"><input type="checkbox" checked={i.done} className="size-5 shrink-0" onChange={() => setData(d => ({ ...d, shopping: d.shopping.map(item => item.id === i.id ? { ...item, done: !item.done } : item) }))} /><span className={`text-sm break-words ${i.done ? 'line-through text-muted-foreground' : ''}`}>{i.title}</span></label><Button variant="ghost" size="icon" title="Editar item" aria-label={`Editar item ${i.title}`} onClick={() => openEditor({ kind: 'shopping', id: i.id })}><Pencil /></Button></li>)}</ul>{!data.shopping.length && <p className="py-10 text-muted-foreground text-sm">A lista está vazia. O que está faltando em casa?</p>}</section>}
        {section === 'Finanças' && <section><p className="text-sm text-muted-foreground">Todos os lançamentos da demonstração · valores fictícios</p><div className="grid sm:grid-cols-3 gap-x-6"><Metric label="Receitas" value={money(summary.income)} icon={<Plus className="size-4" />} /><Metric label="Despesas" value={money(summary.expense)} icon={<Wallet className="size-4" />} /><Metric label="Saldo" value={money(summary.balance)} icon={<Check className="size-4" />} /></div><div className="flex flex-wrap items-center justify-between gap-3 mt-8 mb-4"><h2 className="text-xl">Lançamentos</h2><Button disabled={!ready} onClick={() => openEditor({ kind: 'entry' })}><Plus />Novo lançamento</Button></div><ul className="divide-y divide-border border-y border-border">{[...data.entries].sort((a, b) => b.date.localeCompare(a.date)).map(e => <li key={e.id} className="py-4 flex items-center gap-3"><div className="flex-1 min-w-0"><p className="text-sm break-words">{e.title}</p><p className="text-xs text-muted-foreground mt-1">{e.date.split('-').reverse().join('/')} · {e.category} · {e.type}</p></div><span className={`text-sm tabular-nums shrink-0 ${e.type === 'Receita' ? 'text-primary' : 'text-foreground'}`}>{e.type === 'Receita' ? '+' : '−'} {money(e.amount)}</span><Button variant="ghost" size="icon" className="shrink-0" title="Editar lançamento" aria-label={`Editar lançamento ${e.title}`} onClick={() => openEditor({ kind: 'entry', id: e.id })}><Pencil /></Button></li>)}</ul>{!data.entries.length && <p className="py-8 text-sm text-muted-foreground">Nenhum lançamento cadastrado.</p>}<section className="mt-8"><div className="flex justify-between items-center"><h2 className="text-xl">Categorias</h2><Button variant="outline" size="sm" onClick={() => openEditor({ kind: 'category' })}><Plus />Categoria</Button></div><div className="flex flex-wrap gap-2 mt-4">{data.categories.map(c => <span key={c} className="px-3 py-2 text-xs border border-border rounded-md bg-card">{c}</span>)}</div></section></section>}
        {section === 'Música' && <section><p className="mb-6 text-sm text-muted-foreground">Um intervalo musical imaginário, sem conexão com serviços externos.</p>{musicCard}<h2 className="mt-8 text-xl">Histórico recente</h2><ul className="mt-4 divide-y divide-border">{history.map((index, i) => <li key={`${index}-${i}`} className="flex items-center gap-4 py-4"><Headphones className="size-5 text-primary" /><div className="min-w-0 flex-1"><p className="text-sm">{SONGS[index].title}</p><p className="text-xs text-muted-foreground mt-1">{SONGS[index].artist} · fictício</p></div><span className="text-xs text-muted-foreground">{SONGS[index].duration}</span></li>)}</ul></section>}
        {section === 'Notícias' && <section><p className="mb-6 text-sm text-muted-foreground">Manchetes inventadas para esta demonstração. Não são notícias reais.</p><div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">{NEWS.map((item, i) => <article key={item.title} className="overflow-hidden rounded-lg border border-border bg-card"><div className="h-36 flex items-center justify-center bg-secondary"><item.icon className="size-14 text-primary" /></div><div className="p-5"><p className="text-xs text-primary">{item.category} · Ilustrativo</p><h2 className="text-xl leading-snug mt-3">{item.title}</h2><Button variant="link" className="px-0 mt-4" onClick={() => setNews(i)}>Ler manchete<ArrowUpRight /></Button></div></article>)}</div></section>}
        <footer className="mt-12 pt-5 border-t border-border flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground"><span>Dados fictícios · {storageError ? 'Alterações apenas nesta visita' : 'Alterações salvas somente neste navegador'}</span><Button asChild variant="link" size="sm"><Link to="/projetos/meu-espaco">Ver case study<ArrowUpRight /></Link></Button><Button variant="ghost" size="sm" onClick={() => setResetOpen(true)}><RotateCcw />Restaurar</Button></footer>
      </main>
    </div>
    <Dialog open={editor !== null} onOpenChange={open => { if (!open) setEditor(null); }}><DialogContent className="meu-espaco-theme w-[calc(100%-2rem)] max-h-[90dvh] overflow-y-auto rounded-lg"><DialogTitle>{editor?.id ? 'Editar' : 'Adicionar'} {editor?.kind === 'task' ? 'tarefa' : editor?.kind === 'shopping' ? 'item de compra' : editor?.kind === 'entry' ? 'lançamento' : 'categoria'}</DialogTitle><DialogDescription>Dados fictícios da demonstração.</DialogDescription><form onSubmit={save} className="space-y-4"><label className="block text-sm">{editor?.kind === 'entry' ? 'Descrição' : 'Nome'}<Input autoFocus className="mt-2" value={title} onChange={e => setTitle(e.target.value)} maxLength={editor?.kind === 'category' ? 40 : 120} required /></label>{editor?.kind === 'task' && <label className="block text-sm">Coluna<select className="w-full mt-2" value={status} onChange={e => setStatus(e.target.value as typeof STATUSES[number])}>{STATUSES.map(s => <option key={s}>{s}</option>)}</select></label>}{editor?.kind === 'entry' && <><div className="grid grid-cols-2 gap-4"><label className="text-sm">Tipo<select className="w-full mt-2" value={entryType} onChange={e => setEntryType(e.target.value as 'Receita' | 'Despesa')}><option>Despesa</option><option>Receita</option></select></label><label className="text-sm">Valor (R$)<Input className="mt-2" inputMode="decimal" value={amount} onChange={e => setAmount(e.target.value)} required placeholder="0,00" /></label></div><label className="block text-sm">Categoria<select className="w-full mt-2" value={category} onChange={e => setCategory(e.target.value)}>{data.categories.map(c => <option key={c}>{c}</option>)}</select></label><label className="block text-sm">Data<Input type="date" className="mt-2" value={date} onChange={e => setDate(e.target.value)} required /></label></>}{formError && <p role="alert" className="text-sm text-destructive">{formError}</p>}<div className="flex flex-wrap justify-end gap-2 pt-3">{editor?.id && <Button type="button" variant="ghost" className="text-destructive mr-auto" onClick={removeEdited}><Trash2 />Excluir</Button>}<Button variant="outline" type="button" onClick={() => setEditor(null)}>Cancelar</Button><Button type="submit"><Check />Salvar</Button></div></form></DialogContent></Dialog>
    <Dialog open={news !== null} onOpenChange={open => { if (!open) setNews(null); }}><DialogContent className="meu-espaco-theme w-[calc(100%-2rem)] rounded-lg"><DialogTitle>{news !== null ? NEWS[news].title : ''}</DialogTitle><DialogDescription>Manchete ilustrativa · conteúdo fictício</DialogDescription><p className="text-sm leading-relaxed">{news !== null ? NEWS[news].text : ''}</p></DialogContent></Dialog>
    <Dialog open={resetOpen} onOpenChange={setResetOpen}><DialogContent className="meu-espaco-theme w-[calc(100%-2rem)] rounded-lg"><DialogTitle>Restaurar demonstração?</DialogTitle><DialogDescription>Suas alterações locais serão substituídas pelos dados fictícios iniciais.</DialogDescription><div className="flex justify-end gap-2"><Button variant="outline" onClick={() => setResetOpen(false)}>Cancelar</Button><Button onClick={() => { setData(makeDemo()); setResetOpen(false); setPlaying(false); setSong(0); setHistory([1, 2]); }}><RotateCcw />Restaurar dados</Button></div></DialogContent></Dialog>
  </div>;
}