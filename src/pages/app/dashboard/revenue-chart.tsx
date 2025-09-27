import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ResponsiveContainer, LineChart, XAxis, YAxis, Line } from "recharts";

import colors from "tailwindcss/colors";

const data = [
  { date: "2023-09-01", revenue: 1200 },
  { date: "2023-09-02", revenue: 1500 },
  { date: "2023-09-03", revenue: 1300 },
  { date: "2023-09-04", revenue: 1700 },
  { date: "2023-09-05", revenue: 1600 },
  { date: "2023-09-06", revenue: 1800 },
  { date: "2023-09-07", revenue: 2000 },
];

export function RevenueChart() {
  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">Receita R$</CardTitle>
          <CardDescription>Receita diária no período</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart style={{ fontSize: 12 }} data={data}>
            <YAxis
              stroke="#888"
              width={80}
              axisLine={false}
              tickLine={false}
              tickFormatter={(value: number) =>
                value.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })
              }
            />
            <XAxis
              dataKey="date"
              stroke="#888"
              tickLine={false}
              axisLine={false}
              dy={16}
              tickFormatter={(value: string) =>
                value.split("-").reverse().join("/")
              }
            />
            <Line
              type="linear"
              strokeWidth={2}
              dataKey={"revenue"}
              stroke={colors.violet[500]}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
