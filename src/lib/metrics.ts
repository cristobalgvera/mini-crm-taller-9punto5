import type { Invoice, Quote, QuoteStatus } from "@/lib/types";

// Cobros pendientes (paid = false): monto total en CLP y cuántos son.
// Solo depende de `invoices`; no usa fechas ni cotizaciones.
export function porCobrar(invoices: Invoice[]) {
  const pendientes = invoices.filter((invoice) => !invoice.paid);
  return {
    monto: pendientes.reduce((total, invoice) => total + invoice.amount_clp, 0),
    cantidad: pendientes.length,
  };
}

// Estados del embudo, en orden de avance.
const ESTADOS: QuoteStatus[] = ["enviada", "aceptada", "rechazada"];

// Conteo y monto por estado del embudo de cotizaciones. Solo depende de `quotes`.
export function porEstado(quotes: Quote[]) {
  return ESTADOS.map((estado) => {
    const delEstado = quotes.filter((quote) => quote.status === estado);
    return {
      estado,
      cantidad: delEstado.length,
      monto: delEstado.reduce((total, quote) => total + quote.amount_clp, 0),
    };
  });
}

// Tasa de aceptación por cantidad: aceptadas ÷ total (0..1). 0 si no hay cotizaciones.
export function tasaAceptacion(quotes: Quote[]) {
  if (quotes.length === 0) return 0;
  const aceptadas = quotes.filter((quote) => quote.status === "aceptada").length;
  return aceptadas / quotes.length;
}
