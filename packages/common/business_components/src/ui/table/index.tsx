import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@common/components";
import UiPageNations from "./uiPageNations";
  
  
type UiTableProps  = {
  headName: React.ReactNode|undefined;
  tableData: { [key: string]: string | number | boolean }[];
  headlist: UiHeadProps[];
  pageSize: number;
  total: number;
  children: React.ReactNode|undefined;
}

type UiHeadProps={   
  id:string;
  title:string;

}
export function UiTable({ tableData, headlist,pageSize , total, children,headName}: UiTableProps) {
  const cur = 1;

    return (
      <>
      {headName?headName:<></>}
        <Table>
          <TableHeader>
            {children? <>{children}</>:<TableRow>
              {headlist?.map((head) => (
                <TableHead key={head.id}>{head.title}</TableHead>
              ))}
            </TableRow>}
            
          </TableHeader>
          <TableBody className='text-center'>
            {tableData?.map((el: { [key: string]: string | number | boolean },index) => (
              <TableRow  key={index+"row"} >
                {headlist.map((head) => (
                  <TableCell key={head.id+index}>{el[head.id]}</TableCell>
                ))}
             
              </TableRow>
            ))}
          </TableBody>
          
        </Table>
          {total <=0? <></>: <UiPageNations total={total} cur={cur} pageSize={pageSize} />}
      </>
    );
  }