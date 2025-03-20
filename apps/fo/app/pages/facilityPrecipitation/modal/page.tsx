"use client"
import { useFoStore } from "@/app/store";
import { UiTable } from "@common/business_components/ui";
import { Table, TableCell, TableHead, TableRow } from "@common/components/ui";

export default function PrecipitationModal(props: { fcltyName: string; facilityCd : string;}) {
  // 그리드 관련
  const {PrecipitationDetail} = useFoStore((state) => state);

  const {
    upHeadListPrecipitationDetail,
    gridListPrecipitationDetail
  } = PrecipitationDetail

  return (
    <div className="m-8">
      <Table>
        <TableRow className="">
          <TableHead className="w-1/6">{'시설명'}</TableHead>
          <TableCell className="w-1/3">{props.fcltyName}</TableCell>
          <TableHead className="w-1/6">{'시설코드'}</TableHead>
          <TableCell className="w-1/3">{props.facilityCd}</TableCell>
        </TableRow>
      </Table>
      <UiTable headName={"강수현황"} tableData={gridListPrecipitationDetail} headlist={upHeadListPrecipitationDetail} pageSize={0} total={0} cellClick={undefined} children={undefined}/>
    </div>
  );
}