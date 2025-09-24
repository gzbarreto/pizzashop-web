import "/index.css";

import { Helmet, HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router/dom";

import { router } from "./routes";

export function App() {
  return (
    <HelmetProvider>
      {/* %s representa o texto dinâmico (titulo da pagina) */}
      <Helmet titleTemplate="%s | pizza.shop" />
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}
