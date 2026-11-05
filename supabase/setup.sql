-- Finanças Pessoais — setup completo do banco (Supabase)
-- Cole este arquivo inteiro em: Supabase > SQL Editor > New query > Run

-- ===== 20260810113623_ac396d75-ddab-4039-a185-2f8bb886df96.sql =====
CREATE TABLE public.fin_contas (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid NOT NULL REFERENCES auth.users ON DELETE CASCADE,
  nome text NOT NULL,
  tipo text NOT NULL DEFAULT 'corrente',
  saldo_inicial numeric(14,2) NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.fin_contas TO authenticated;
GRANT ALL ON public.fin_contas TO service_role;
ALTER TABLE public.fin_contas ENABLE ROW LEVEL SECURITY;
CREATE POLICY "fin_contas_own" ON public.fin_contas FOR ALL TO authenticated USING (user_id = auth.uid()) WITH CHECK (user_id = auth.uid());

CREATE TABLE public.fin_categorias (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid NOT NULL REFERENCES auth.users ON DELETE CASCADE,
  nome text NOT NULL,
  tipo text NOT NULL DEFAULT 'despesa',
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, nome, tipo)
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.fin_categorias TO authenticated;
GRANT ALL ON public.fin_categorias TO service_role;
ALTER TABLE public.fin_categorias ENABLE ROW LEVEL SECURITY;
CREATE POLICY "fin_categorias_own" ON public.fin_categorias FOR ALL TO authenticated USING (user_id = auth.uid()) WITH CHECK (user_id = auth.uid());

CREATE TABLE public.fin_transacoes (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid NOT NULL REFERENCES auth.users ON DELETE CASCADE,
  conta_id uuid REFERENCES public.fin_contas ON DELETE SET NULL,
  categoria_id uuid REFERENCES public.fin_categorias ON DELETE SET NULL,
  descricao text NOT NULL,
  tipo text NOT NULL DEFAULT 'despesa',
  valor numeric(14,2) NOT NULL,
  data date NOT NULL DEFAULT current_date,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX fin_transacoes_user_data_idx ON public.fin_transacoes (user_id, data DESC);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.fin_transacoes TO authenticated;
GRANT ALL ON public.fin_transacoes TO service_role;
ALTER TABLE public.fin_transacoes ENABLE ROW LEVEL SECURITY;
CREATE POLICY "fin_transacoes_own" ON public.fin_transacoes FOR ALL TO authenticated USING (user_id = auth.uid()) WITH CHECK (user_id = auth.uid());

CREATE TABLE public.fin_orcamentos (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid NOT NULL REFERENCES auth.users ON DELETE CASCADE,
  categoria_id uuid NOT NULL REFERENCES public.fin_categorias ON DELETE CASCADE,
  mes_referencia date NOT NULL,
  limite numeric(14,2) NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, categoria_id, mes_referencia)
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.fin_orcamentos TO authenticated;
GRANT ALL ON public.fin_orcamentos TO service_role;
ALTER TABLE public.fin_orcamentos ENABLE ROW LEVEL SECURITY;
CREATE POLICY "fin_orcamentos_own" ON public.fin_orcamentos FOR ALL TO authenticated USING (user_id = auth.uid()) WITH CHECK (user_id = auth.uid());

CREATE OR REPLACE FUNCTION public.fin_validar_transacao()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  IF NEW.valor <= 0 THEN
    RAISE EXCEPTION 'O valor da transação deve ser maior que zero';
  END IF;
  IF NEW.tipo NOT IN ('receita','despesa') THEN
    RAISE EXCEPTION 'Tipo de transação inválido';
  END IF;
  RETURN NEW;
END;
$$;
CREATE TRIGGER fin_transacoes_validar
BEFORE INSERT OR UPDATE ON public.fin_transacoes
FOR EACH ROW EXECUTE FUNCTION public.fin_validar_transacao();

CREATE OR REPLACE FUNCTION public.fin_seed_novo_usuario()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.fin_contas (user_id, nome, tipo, saldo_inicial)
  VALUES (NEW.id, 'Carteira', 'carteira', 0);

  INSERT INTO public.fin_categorias (user_id, nome, tipo) VALUES
    (NEW.id, 'Salário', 'receita'),
    (NEW.id, 'Freelance', 'receita'),
    (NEW.id, 'Moradia', 'despesa'),
    (NEW.id, 'Alimentação', 'despesa'),
    (NEW.id, 'Transporte', 'despesa'),
    (NEW.id, 'Educação', 'despesa'),
    (NEW.id, 'Lazer', 'despesa'),
    (NEW.id, 'Saúde', 'despesa');

  RETURN NEW;
END;
$$;
CREATE TRIGGER fin_on_auth_user_created
AFTER INSERT ON auth.users
FOR EACH ROW EXECUTE FUNCTION public.fin_seed_novo_usuario();

-- ===== 20260810113646_878cde8e-1556-4c65-9e4e-dd02da046b62.sql =====
REVOKE EXECUTE ON FUNCTION public.fin_seed_novo_usuario() FROM anon, authenticated, public;
REVOKE EXECUTE ON FUNCTION public.fin_validar_transacao() FROM anon, authenticated, public;

