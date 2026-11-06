import { ARTIGOS, type Artigo } from "@/data/artigos";
import { ARTIGOS_EN, dataEn, type ArtigoTraduzido } from "@/data/artigos.en";
import { ARTIGOS_APRENDIZADOS } from "@/data/artigos.aprendizados";
import { ARTIGOS_APRENDIZADOS_EN } from "@/data/artigos.aprendizados.en";

// Lista única usada pelo site: artigos antigos + artigos dos aprendizados, do mais recente ao mais antigo.
export const ARTIGOS_TODOS: Artigo[] = [...ARTIGOS, ...ARTIGOS_APRENDIZADOS].sort((a, b) =>
  b.publishedAt.localeCompare(a.publishedAt),
);

export const ARTIGOS_EN_TODOS: Record<string, ArtigoTraduzido> = {
  ...ARTIGOS_EN,
  ...ARTIGOS_APRENDIZADOS_EN,
};

export const getArtigoTodos = (slug: string) => ARTIGOS_TODOS.find((a) => a.slug === slug);

export { dataEn };
