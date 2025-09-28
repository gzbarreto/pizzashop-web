import { env } from "@/env";
import axios from "axios";

export const api = axios.create({
  baseURL: env.VITE_API_URL || "http://localhost:3000",
  withCredentials: true,
});

//adiciona delay de 2 segundos em todas as requisições
//para simular loading e testar spinners e states de loading
if (env.VITE_ENABLE_API_DELAY) {
  api.interceptors.request.use(async (config) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return config;
  });
}
