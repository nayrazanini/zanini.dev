import { z } from 'zod';

export const STATUSES = ['Backlog', 'A Fazer', 'Em andamento', 'Concluído'] as const;
export const STORAGE_KEY = 'nayra.meu-espaco.demo.v1';
const taskSchema = z.object({ id: z.string(), title: z.string().min(1).max(120), status: z.enum(STATUSES) });
const shoppingSchema = z.object({ id: z.string(), title: z.string().min(1).max(120), done: z.boolean() });
const entrySchema = z.object({ id: z.string(), title: z.string().min(1).max(120), amount: z.number().positive().finite(), type: z.enum(['Receita', 'Despesa']), category: z.string(), date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/) });
export const demoSchema = z.object({ version: z.literal(1), tasks: z.array(taskSchema), shopping: z.array(shoppingSchema), entries: z.array(entrySchema), categories: z.array(z.string().min(1).max(40)).min(1) });
export type DemoData = z.infer<typeof demoSchema>;
export type Task = z.infer<typeof taskSchema>;
export type Entry = z.infer<typeof entrySchema>;
export function makeDemo(): DemoData {
  return { version: 1, tasks: [
    { id: 't1', title: 'Planejar um cantinho de leitura', status: 'Backlog' },
    { id: 't2', title: 'Organizar os estudos da semana', status: 'A Fazer' },
    { id: 't3', title: 'Ler um capítulo do livro', status: 'Em andamento' },
    { id: 't4', title: 'Regar as plantas', status: 'Concluído' },
  ], shopping: [
    { id: 's1', title: 'Café em grãos · 1 pacote', done: false },
    { id: 's2', title: 'Frutas da semana', done: false },
    { id: 's3', title: 'Pão integral', done: true },
  ], entries: [
    { id: 'e1', title: 'Receita de exemplo', amount: 4200, type: 'Receita', category: 'Trabalho', date: '2026-10-01' },
    { id: 'e2', title: 'Compras da semana', amount: 280, type: 'Despesa', category: 'Casa', date: '2026-10-18' },
    { id: 'e3', title: 'Livros e cadernos', amount: 120, type: 'Despesa', category: 'Estudos', date: '2026-10-20' },
  ], categories: ['Trabalho', 'Casa', 'Estudos', 'Lazer'] };
}
export function restoreDemo(raw: string | null): DemoData {
  try { const result = demoSchema.safeParse(JSON.parse(raw ?? 'null')); return result.success ? result.data : makeDemo(); }
  catch { return makeDemo(); }
}
export function totals(entries: Entry[]) {
  const income = entries.filter(e => e.type === 'Receita').reduce((sum, e) => sum + e.amount, 0);
  const expense = entries.filter(e => e.type === 'Despesa').reduce((sum, e) => sum + e.amount, 0);
  return { income, expense, balance: income - expense };
}
export const money = (value: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);