//outlet representa o conteudo especifico de cada pagina, que nao é do layout
import { Header } from "@/components/header";
import { api } from "@/lib/axios";
import { isAxiosError } from "axios";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

export function AppLayout() {
  const navigate = useNavigate();

  //garante que o usuario nao irá navegar sem estar logado
  //redireciona pro login caso identifique que o token nao existe
  useEffect(() => {
    //intercepta todas as respostas da api
    const interceptorId = api.interceptors.response.use(
      //recebe duas funções: a primeira dispara no caso de sucesso e a segunda em caso de erro
      (response) => response,
      (error) => {
        if (isAxiosError(error)) {
          const status = error.response?.status;
          //definido no backend que há retorno de erro por um código
          const code = error.response?.data.code;

          if (status === 401 && code === "UNAUTHORIZED") {
            navigate("/sign-in", { replace: true });
          }
        }
      },
    );
    //limpa o event listener
    return () => {
      api.interceptors.request.eject(interceptorId);
    };
  }, [navigate]);

  return (
    <div className="flex min-h-screen flex-col antialiased">
      <Header />

      <div className="flex flex-1 flex-col gap-4 p-8 pt-6">
        <Outlet />
      </div>
    </div>
  );
}
