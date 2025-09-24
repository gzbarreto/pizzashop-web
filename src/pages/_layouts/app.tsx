//outlet representa o conteudo especifico de cada pagina, que nao é do layout
import { Outlet } from "react-router";

export function AppLayout() {
  return (
    <div>
      <h1>Cabeçalho</h1>

      <div>
        <Outlet />
      </div>
    </div>
  );
}
