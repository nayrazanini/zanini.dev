import { describe, expect, it } from "vitest";
import { concluirRevisao, estadoExemplo, intervaloRevisao, progressoSemanal, registrarSessao, sequencias, streakAtual, type Estado } from "./rastreador";

const vazio = (): Estado => ({ versao: 1, materias: [{ id: "a", nome: "A", metaSemanalMin: 100 }], sessoes: [], revisoes: [] });

describe("rastreador", () => {
  it("segue a progressão Leitner 1,3,7,14,30 e para em 30", () => {
    expect([0, 1, 2, 3, 4, 9].map(intervaloRevisao)).toEqual([1, 3, 7, 14, 30, 30]);
  });
  it("registrar sessão agenda revisão para o dia seguinte", () => {
    const e = registrarSessao(vazio(), { materiaId: "a", data: "2026-07-27", minutos: 60, assunto: "x" });
    expect(e.revisoes[0].data).toBe("2026-07-28");
  });
  it("concluir revisão agenda a próxima em 3 dias", () => {
    let e = registrarSessao(vazio(), { materiaId: "a", data: "2026-07-27", minutos: 60, assunto: "x" });
    e = concluirRevisao(e, e.revisoes[0].id, "2026-07-28");
    expect(e.revisoes.find((r) => !r.feita)?.data).toBe("2026-07-31");
  });
  it("recusa duração zero", () => {
    expect(() => registrarSessao(vazio(), { materiaId: "a", data: "2026-07-27", minutos: 0, assunto: "x" })).toThrow();
  });
  it("agrupa dias consecutivos em sequências", () => {
    const s = ["2026-07-01", "2026-07-02", "2026-07-03", "2026-07-05"].map((data, i) => ({ id: String(i), materiaId: "a", data, minutos: 10, assunto: "" }));
    expect(sequencias(s).map((x) => x.dias)).toEqual([1, 3]);
  });
  it("streak atual conta até ontem", () => {
    expect(streakAtual(estadoExemplo("2026-07-27").sessoes, "2026-07-27")).toBe(6);
  });
  it("progresso semanal soma só a semana corrente", () => {
    let e = registrarSessao(vazio(), { materiaId: "a", data: "2026-07-27", minutos: 50, assunto: "" });
    e = registrarSessao(e, { materiaId: "a", data: "2026-07-26", minutos: 50, assunto: "" });
    expect(progressoSemanal(e, "2026-07-29")[0].percentual).toBe(50);
  });
});
