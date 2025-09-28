import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Link, useSearchParams } from "react-router";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "@/api/sign-in";

const signInFormSchema = z.object({
  email: z.email("Digite um e-mail válido"),
});

type SignInForm = z.infer<typeof signInFormSchema>;

export function SignIn() {
  const [searchParams] = useSearchParams();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>({
    defaultValues: {
      email: searchParams.get("email") ?? "",
    },
  });

  const { mutateAsync: authenticate } = useMutation({
    mutationFn: signIn,
  });

  async function handleSignIn(data: SignInForm) {
    try {
      // Simulate an API call
      await authenticate({ email: data.email });

      toast.success("Enviamos um link de autenticação para seu e-mail.", {
        action: {
          label: "Reenviar",
          onClick: () => {
            handleSignIn(data);
          },
        },
      });
    } catch {
      toast.error("Credenciais inválidas.");
    }
  }

  return (
    <div className="p-8">
      {/* usando asChild no componente do shadecn, é possivel estilizar o filho igual ao componente pai, ou seja, o link fica estilizado como botão nesse caso */}
      <Button variant="link" asChild className="absolute right-8 top-8">
        <Link to="/sign-up">Não possui uma conta? Crie uma agora!</Link>
      </Button>
      <div className="flex w-[350px] flex-col justify-center gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Acessar painel
          </h1>
          <p className="text-muted-foreground text-sm">
            Acompanhe suas vendas pelo painel do parceiro!
          </p>
        </div>

        <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="E-mail"
              {...register("email")}
            />
          </div>
          <Button disabled={isSubmitting} className="w-full" type="submit">
            Acessar painel
          </Button>
        </form>
      </div>
    </div>
  );
}
