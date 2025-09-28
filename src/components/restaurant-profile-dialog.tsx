import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button } from "./ui/button";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { getManagedRestaurant, type GetManagedRestaurantResponse } from "@/api/get-manage-restaurant";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateProfile } from "@/api/update-profile";
import { toast } from "sonner";

const restaurantProfileSchema = z.object({
  name: z.string().min(3, "O nome deve ter no mínimo 3 caracteres"),
  description: z
    .string()
    .min(10, "A descrição deve ter no mínimo 10 caracteres"),
});

type RestaurantProfileForm = z.infer<typeof restaurantProfileSchema>;

export function RestaurantProfileDialog() {
const queryClient = useQueryClient();

  const { data: managedRestaurant } = useQuery({
    queryFn: getManagedRestaurant,
    queryKey: ["managed-restaurant"],
    staleTime: Infinity,
  });

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<RestaurantProfileForm>({
    resolver: zodResolver(restaurantProfileSchema),
    values: {
      name: managedRestaurant?.name ?? "",
      description: managedRestaurant?.description ?? "",
    },
  });

  const { mutateAsync: updateProfileFn } = useMutation({
    mutationFn: updateProfile,
    onSuccess(_, { name, description }) {
        const cached = queryClient.getQueryData<GetManagedRestaurantResponse>(["managed-restaurant"])

        if (cached) {
            queryClient.setQueryData<GetManagedRestaurantResponse>(
              ["managed-restaurant"],
              {
                ...cached,
                name,
                description,
              },
            );
        }
    }
  });

  async function handleUpdateProfile(data: RestaurantProfileForm) {
    try {
      await updateProfileFn({
        name: data.name,
        description: data.description,
      });

      toast.success("Perfil atualizado com sucesso!");
    } catch {
      toast.error(
        "Erro ao atualizar o perfil do restaurante, tente novamente.",
      );
    }
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Perfil do restaurante</DialogTitle>
        <DialogDescription>
          Atualize as informações do seu estabelecimento visíveis ao seu
          cliente.
        </DialogDescription>
      </DialogHeader>

      <form onSubmit={handleSubmit(handleUpdateProfile)}>
        <div className="space-y-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4"></div>
          <Label className="text-right" htmlFor="name">
            Nome
          </Label>
          <Input className="col-span-3" id="name" {...register("name")} />
        </div>

        <div className="space-y-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4"></div>
          <Label className="text-right" htmlFor="description">
            Descrição
          </Label>
          <Textarea
            className="col-span-3"
            id="description"
            {...register("description")}
          />
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost" type="button">
              Cancelar
            </Button>
          </DialogClose>
          <Button type="submit" variant="success" disabled={isSubmitting}>
            Salvar
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
}
