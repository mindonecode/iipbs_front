import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@common/components";
import UiPageNations from "./uiPageNations";

type UiTableProps = {
  headName: React.ReactNode | undefined;
  tableData: { [key: string]: string | number | boolean }[];
  headlist: UiHeadProps[];
  pageSize: number;
  total: number;
  children: React.ReactNode | undefined;
  cellClick : ((index:number|undefined)=>void) | undefined;
}

type UiHeadProps = {
  id: string;
  title: string;
}

export function UiTable({ tableData, headlist, pageSize, total, children, headName, cellClick }: UiTableProps) {
  const cur = 1;

  return (
    <>
      {headName ? <div className="font-bold m-3">
          {headName}
        </div> : <></>}
      <Table className="w-full">
        <TableHeader>
          {children ? <>{children}</> : <TableRow>
            {headlist?.map((head) => (
              <TableHead key={head.id}>{head.title}</TableHead>
            ))}
          </TableRow>}
        </TableHeader>
        <TableBody className='text-center'>
          {tableData?.map((el: { [key: string]: string | number | boolean }, index) => (
            <TableRow key={index + "row"} >
              {headlist.map((head) => (
                <TableCell className="cursor-pointer" onClick={()=>cellClick(index)} key={head.id + index}>{el[head.id]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {total <= 0 ? <></> : <UiPageNations total={total} cur={cur} pageSize={pageSize} />}
    </>
  );
}
