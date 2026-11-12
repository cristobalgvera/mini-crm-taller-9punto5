import { PorCobrarCard } from "@/features/por-cobrar/PorCobrarCard";
import type { CrmData } from "@/lib/types";

// Monta la tarjeta del widget «Por cobrar» (hook + tarjeta en src/features/por-cobrar/).
export function PorCobrarSlot({ data }: { data: CrmData }) {
  return <PorCobrarCard data={data} />;
}
