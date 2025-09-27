import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowRight, Search, X } from "lucide-react";

export function Orders() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>
      </div>
      <div className="space-y-2.5">
        <form className="flex items-center gap-2">
          <span className="text-sm font-semibold">Filtros:</span>
          <Input placeholder="Nome do cliente" className="h-8 w-[320px]" />
        </form>

        <div className="rounded-md border">
          <Table>
            <TableHeader className="font-light">
              <TableRow>
                <TableHead className="w-[64px]"></TableHead>
                <TableHead className="w-[140px] font-light">
                  Identificador
                </TableHead>
                <TableHead className="w-[180px] font-light">
                  Realizado há
                </TableHead>
                <TableHead className="w-[140px] font-light">Status</TableHead>
                <TableHead className="font-light">Cliente</TableHead>
                <TableHead className="w-[140px] font-light">
                  Total do pedido
                </TableHead>
                <TableHead className="w-[164px]"></TableHead>
                <TableHead className="w-[132px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 10 }).map((_, i) => {
                return (
                  <TableRow key={i}>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        <Search className="h-3 w-3" />
                        {/* sr-only significa que essa informação é apenas para leitores de tela */}
                        <span className="sr-only">Detalhes do pedido</span>
                      </Button>
                    </TableCell>
                    <TableCell className="font-mono text-xs font-medium">
                      84g56a4f6fd45ad56f
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      há 22 minutos
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-slate-400" />
                        <span className="text-muted-foreground font-medium">
                          Pendente
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">
                      Gabriela Barreto
                    </TableCell>
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
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}
