//outlet representa o conteudo especifico de cada pagina, que nao é do layout
import { Outlet } from "react-router";

export function AuthLayout() {
  return (
    <div>
      <h1>Autenticação</h1>

      <div>
        <Outlet />
      </div>
    </div>
  );
}
