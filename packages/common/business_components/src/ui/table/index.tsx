import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@common/components";
import UiPageNations from "./uiPageNations";
  
  
interface UiTableProps {
  publicReuseFacility: any[];
  headlist: { id: string; title: string; }[];
  pageSize: number;
  total: number;
}

export function UiTable(UiTableProps: UiTableProps) {
  const { publicReuseFacility, headlist,pageSize , total} = UiTableProps;
  let cur = 1;



    return (
      <>
      <p>공공하수처리시설 목록</p>
        <Table>
          <TableHeader>
            <TableRow>
              {headlist.map((head) => (
                <TableHead key={head.id}>{head.title}</TableHead>
              ))}
  
            </TableRow>
          </TableHeader>
          <TableBody>
            {publicReuseFacility.map((el: any,index) => (
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