import { useMemo } from "react";

import { porCobrar } from "@/lib/metrics";
import type { CrmData } from "@/lib/types";

// Patrón de widget: el hook recibe `data` y devuelve lo que muestra la tarjeta.
// El cálculo vive en src/lib/metrics.ts (función pura).
export function usePorCobrar(data: CrmData) {
  return useMemo(() => porCobrar(data.invoices), [data]);
}
