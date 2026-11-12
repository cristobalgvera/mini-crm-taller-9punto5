import type { Invoice } from "@/lib/types";

// Cobros pendientes (paid = false): monto total en CLP y cuántos son.
// Solo depende de `invoices`; no usa fechas ni cotizaciones.
export function porCobrar(invoices: Invoice[]) {
  const pendientes = invoices.filter((invoice) => !invoice.paid);
  return {
    monto: pendientes.reduce((total, invoice) => total + invoice.amount_clp, 0),
    cantidad: pendientes.length,
  };
}
