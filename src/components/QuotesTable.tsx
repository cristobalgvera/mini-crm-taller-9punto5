import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatCLP, formatDate } from "@/lib/format";
import type { Client, Quote } from "@/lib/types";

// Tabla de cotizaciones de la sección «Datos». El nombre del cliente se resuelve por
// `client_id` (el id no se muestra); los montos van con formatCLP y las fechas con formatDate.
export function QuotesTable({ quotes, clients }: { quotes: Quote[]; clients: Client[] }) {
  const clientNameById = new Map(clients.map((client) => [client.id, client.name]));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Cotizaciones</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Cliente</TableHead>
              <TableHead>Fecha de emisión</TableHead>
              <TableHead>Monto</TableHead>
              <TableHead>Estado</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {quotes.map((quote) => (
              <TableRow key={quote.id}>
                <TableCell>{quote.id}</TableCell>
                <TableCell className="font-medium">
                  {clientNameById.get(quote.client_id) ?? "—"}
                </TableCell>
                <TableCell>{formatDate(quote.issued_on)}</TableCell>
                <TableCell>{formatCLP(quote.amount_clp)}</TableCell>
                <TableCell>{quote.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
