import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCLP } from "@/lib/format";
import type { CrmData } from "@/lib/types";

import { usePorCobrar } from "./usePorCobrar";

// Tarjeta «Por cobrar»: monto de los cobros pendientes (paid = false).
export function PorCobrarCard({ data }: { data: CrmData }) {
  const { monto, cantidad } = usePorCobrar(data);

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Por cobrar</CardTitle>
        <CardDescription>
          {cantidad} {cantidad === 1 ? "cobro pendiente" : "cobros pendientes"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-semibold tracking-tight tabular-nums">{formatCLP(monto)}</p>
      </CardContent>
    </Card>
  );
}
