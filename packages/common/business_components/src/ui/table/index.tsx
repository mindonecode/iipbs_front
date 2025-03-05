import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@common/components";
import { type TableUpperProps } from '../../../../../../apps/wr/app/store/publicReuseFaciltyInsert/index';
import UiPageNations from "./uiPageNations";
  
  
interface UiTableProps {
  headName: string;
  publicReuseFacility: { [key: string]: string | number | boolean }[];
  headlist: TableUpperProps[];
  pageSize: number;
  total: number;
  children: React.ReactNode|undefined;
}

export function UiTable({ publicReuseFacility, headlist,pageSize , total, children,headName}: UiTableProps) {
  const cur = 1;
    return (
      <>
      <p>{headName}</p>
        <Table>
          <TableHeader>
            {children? <>{children}</>:<TableRow>
              {headlist.map((head) => (
                <TableHead key={head.id}>{head.title}</TableHead>
              ))}
            </TableRow>}
            
          </TableHeader>
          <TableBody>
            {publicReuseFacility.map((el: { [key: string]: string | number | boolean },index) => (
              <TableRow  key={index+"row"} >
                {headlist.map((head) => (
                  <TableCell key={head.id+index}>{el[head.id]}</TableCell>
                ))}
             
              </TableRow>
            ))}
          </TableBody>
          
        </Table>
    <UiPageNations total={total} cur={cur} pageSize={pageSize} />
      </>
    );
  }