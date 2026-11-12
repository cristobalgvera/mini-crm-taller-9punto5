import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { formatCLP, formatPercent } from "@/lib/format";
import type { CrmData } from "@/lib/types";

import { useEmbudo } from "./useEmbudo";

// Tarjeta del sprint: embudo de cotizaciones. Conteo y monto por estado, y tasa de aceptación.
export function EmbudoCard({ data }: { data: CrmData }) {
  const { filas, tasa } = useEmbudo(data);

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Embudo de cotizaciones</CardTitle>
        <CardDescription>Conteo y monto por estado</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="grid gap-3 sm:grid-cols-3">
          {filas.map((fila) => (
            <div key={fila.estado} className="rounded-lg border p-3">
              <p className="text-sm text-muted-foreground">{fila.etiqueta}</p>
              <p className="text-lg font-semibold tabular-nums">{formatCLP(fila.monto)}</p>
              <p className="text-sm text-muted-foreground">
                {fila.cantidad} {fila.cantidad === 1 ? "cotización" : "cotizaciones"}
              </p>
            </div>
          ))}
        </div>
        <Separator />
        <div className="flex items-baseline justify-between gap-4">
          <span className="text-sm text-muted-foreground">Tasa de aceptación</span>
          <span className="text-2xl font-semibold tabular-nums">{formatPercent(tasa)}</span>
        </div>
      </CardContent>
    </Card>
  );
}
