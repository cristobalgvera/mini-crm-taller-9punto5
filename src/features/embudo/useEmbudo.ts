import { useMemo } from "react";

import { porEstado, tasaAceptacion } from "@/lib/metrics";
import type { CrmData, QuoteStatus } from "@/lib/types";

const ETIQUETAS: Record<QuoteStatus, string> = {
  enviada: "Enviadas",
  aceptada: "Aceptadas",
  rechazada: "Rechazadas",
};

// Patrón de widget: el hook recibe `data` (lo que entrega getData()) y devuelve solo lo que
// la tarjeta muestra.
export function useEmbudo(data: CrmData) {
  return useMemo(() => {
    const filas = porEstado(data.quotes).map((fila) => ({
      ...fila,
      etiqueta: ETIQUETAS[fila.estado],
    }));
    return { filas, tasa: tasaAceptacion(data.quotes) };
  }, [data]);
}
