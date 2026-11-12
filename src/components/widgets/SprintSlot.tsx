import { EmbudoCard } from "@/features/embudo/EmbudoCard";
import type { CrmData } from "@/lib/types";

// Monta la tarjeta del widget «Embudo de cotizaciones» (hook + tarjeta en src/features/embudo/).
export function SprintSlot({ data }: { data: CrmData }) {
  return <EmbudoCard data={data} />;
}
