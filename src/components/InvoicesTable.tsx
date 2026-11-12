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
import type { Client, Invoice } from "@/lib/types";

// Tabla de cobros de la sección «Datos». El nombre del cliente se resuelve por `client_id`
// (el id no se muestra); `paid` se muestra como Sí/No y `quote_id` como «—» cuando es null.
export function InvoicesTable({ invoices, clients }: { invoices: Invoice[]; clients: Client[] }) {
  const clientNameById = new Map(clients.map((client) => [client.id, client.name]));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Cobros</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Cliente</TableHead>
              <TableHead>Fecha de emisión</TableHead>
              <TableHead>Fecha de vencimiento</TableHead>
              <TableHead>Monto</TableHead>
              <TableHead>Pagado</TableHead>
              <TableHead>Cotización</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.id}>
                <TableCell>{invoice.id}</TableCell>
                <TableCell className="font-medium">
                  {clientNameById.get(invoice.client_id) ?? "—"}
                </TableCell>
                <TableCell>{formatDate(invoice.issued_on)}</TableCell>
                <TableCell>{formatDate(invoice.due_on)}</TableCell>
                <TableCell>{formatCLP(invoice.amount_clp)}</TableCell>
                <TableCell>{invoice.paid ? "Sí" : "No"}</TableCell>
                <TableCell>{invoice.quote_id ?? "—"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
