import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/projetos/financas-pessoais")({
  component: () => <Outlet />,
});