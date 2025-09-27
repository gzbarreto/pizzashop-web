import "/index.css";
import { Toaster } from "@/components/ui/sonner";
import { RouterProvider } from "react-router/dom";

import { router } from "./routes";
import { ThemeProvider } from "./components/theme/theme-provider";

export function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="pizzashop-theme">
        <Toaster richColors />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}
