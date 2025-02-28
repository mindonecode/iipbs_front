import {
  flexRender,
  type RowData,
  type Table as TableType,
} from "@tanstack/react-table";
import { Table, TableCell, TableHead, TableHeader, TableRow } from "../table";

declare module "@tanstack/react-table" {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface ColumnMeta<TData extends RowData, TValue> {
    align: "left" | "center" | "right";
  }
}

function THead<T>({ table }: { table: TableType<T> }) {
  return (
    <TableHeader>
      {table.getHeaderGroups().map((headerGroup) => (
        <TableRow key={headerGroup.id}>
          {headerGroup.headers.map((header) => {
            const { meta } = header.column.columnDef;
            return (
              <TableHead key={header.id} className="sticky top-0" {...meta}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
              </TableHead>
            );
          })}
        </TableRow>
      ))}
    </TableHeader>
  );
}

type TableProps<T> = { table: TableType<T> };

function DataTable<T>({ table }: TableProps<T>) {
  return (
    <Table className="w-full">
      <THead table={table} />
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <TableRow key={row.id}>
            {row.getVisibleCells().map((cell) => {
              const { meta } = cell.column.columnDef;
              return (
                <TableCell key={cell.id} align="center" {...meta}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              );
            })}
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
}

export { DataTable };
