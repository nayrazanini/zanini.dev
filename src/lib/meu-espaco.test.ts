import { test, expect } from 'vitest';
import { makeDemo, restoreDemo, totals, STORAGE_KEY, STATUSES } from './meu-espaco';

test('demo changes survive a local JSON round trip', () => {
  const data = makeDemo();
  data.tasks[0].status = 'Concluído';
  data.shopping[0].done = true;
  expect(restoreDemo(JSON.stringify(data))).toEqual(data);
  expect(STORAGE_KEY).toBe('nayra.meu-espaco.demo.v1');
});
test('invalid or old local data restores safe fictional defaults', () => {
  expect(restoreDemo('{broken')).toEqual(makeDemo());
  expect(restoreDemo(JSON.stringify({ version: 0 }))).toEqual(makeDemo());
});
test('task board has the four requested statuses', () => {
  expect(STATUSES).toEqual(['Backlog', 'A Fazer', 'Em andamento', 'Concluído']);
});
test('finance balance deducts expenses from income', () => {
  expect(totals(makeDemo().entries)).toEqual({ income: 4200, expense: 400, balance: 3800 });
});