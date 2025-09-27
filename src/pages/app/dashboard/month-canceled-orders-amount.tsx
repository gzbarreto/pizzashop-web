import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { UtensilsCrossed } from "lucide-react";

export function MonthCanceledOrdersAmountCard() {
  return (
    <Card className="gap-2">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Cancelamentos (mês)
        </CardTitle>
        <UtensilsCrossed className="text-muted-foreground h-4 w-4" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">22 pedidos</span>
        <p className="text-muted-foreground text-sm">
          <span className="text-emerald-500 dark:text-emerald-400">-2%</span> em
          relação ao mes anterior
        </p>
      </CardContent>
    </Card>
  );
}
