import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { TableRow, TableCell } from "@/components/ui/table";
import { ArrowRight, X, ScrollText } from "lucide-react";
import OrderDetails from "./order-details";

export function OrderTableRow() {
  return (
    <TableRow>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm">
              <ScrollText className="h-3 w-3" />
              {/* sr-only significa que essa informação é apenas para leitores de tela */}
              <span className="sr-only">Detalhes do pedido</span>
            </Button>
          </DialogTrigger>
          <OrderDetails />
        </Dialog>
      </TableCell>
      <TableCell className="font-mono text-xs font-medium">
        84g56a4f6fd45ad56f
      </TableCell>
      <TableCell className="text-muted-foreground">há 22 minutos</TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-slate-400" />
          <span className="text-muted-foreground font-medium">Pendente</span>
        </div>
      </TableCell>
      <TableCell className="font-medium">Gabriela Barreto</TableCell>
      <TableCell className="font-medium">R$ 59,90 </TableCell>
      <TableCell>
        <Button variant="outline" size="sm">
          <ArrowRight className="h-3 w-3" />
          Aprovar
        </Button>
      </TableCell>
      <TableCell>
        <Button variant="ghost" size="sm">
          <X className="h-3 w-3" />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  );
}
