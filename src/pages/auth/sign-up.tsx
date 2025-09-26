import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router";

const signUpFormSchema = z.object({
  restaurantName: z
    .string()
    .min(3, "O nome do restaurante deve ter no mínimo 3 caracteres"),
  managerName: z
    .string()
    .min(3, "O nome do gerente deve ter no mínimo 3 caracteres"),
  phone: z.regex(
    new RegExp("/^\s*(\d{2}|\d{0})[-. ]?(\d{5}|\d{4})[-. ]?(\d{4})[-. ]?\s*$"),
  ),
  email: z.email("Digite um e-mail válido"),
});

type SignUpForm = z.infer<typeof signUpFormSchema>;

export function SignUp() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>();

  async function handleSignUp(data: SignUpForm) {
    try {
      console.log(data);
      // Simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast.success("Restaurante cadastrado com sucesso.", {
        action: {
          label: "Login",
          onClick: () => navigate("/sign-in"),
        },
      });
    } catch {
      toast.error("Erro ao cadastrar restaurante.");
    }
  }

  return (
    <div className="p-8">
      <Button variant="link" asChild className="absolute right-8 top-8">
        <Link to="/sign-in">Já tem uma conta? Entrar</Link>
      </Button>
      <div className="flex w-[350px] flex-col justify-center gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Crie uma conta grátis!
          </h1>
          <p className="text-muted-foreground text-sm">
            Seja um parceiro e comece a vender seus produtos.{" "}
          </p>
        </div>

        <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="restaurantName">Nome do estabelecimento</Label>
            <Input
              id="restaurantName"
              type="text"
              placeholder="Nome do estabelecimento"
              {...register("restaurantName")}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="managerName">Seu nome</Label>
            <Input
              id="managerName"
              type="text"
              placeholder="Nome do gerente"
              {...register("managerName")}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="exemplo@mail.com"
              {...register("email")}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Seu celular</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="(99) 99999-9999"
              {...register("phone")}
            />
          </div>

          <Button disabled={isSubmitting} className="w-full" type="submit">
            Finalizar cadastro
          </Button>

          <p className="text-muted-foreground p-6 text-center text-sm leading-relaxed">
            Ao continuar, você concorda com os nossos{" "}
            <a href="#" className="underline underline-offset-4">
              Termos de Uso
            </a>{" "}
            e{" "}
            <a href="#" className="underline underline-offset-4">
              Política de Privacidade
            </a>
            .
          </p>
        </form>
      </div>
    </div>
  );
}
