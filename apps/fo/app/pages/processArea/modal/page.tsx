"use client"
import { useFoStore } from "@/app/store";
import type { TableUpperProps } from "@/app/store/dashboard";
import { UiTable } from "@common/business_components/ui";
import { Table, TableCell, TableHead, TableRow } from "@common/components/ui";

// 시설계획 table header 변경
const headMakeList = (upHeadList: TableUpperProps[], item: number) => {
  return  ( <>
    <TableRow>{
      upHeadList.map((head: TableUpperProps) => 
        (!head.upSequnce?<TableHead rowSpan={2} key={head.id} style={{whiteSpace: 'pre-line'}}>{head.title}</TableHead>:
        item === 1 && head.upName === 'upChangeRe'&& head.upSequnce=== 1?<TableHead key={head.id} rowSpan={1} colSpan={5} style={{ whiteSpace: 'pre-line' }}>{'증설계획(m³/일)'}</TableHead>:
        item === 2 && head.upName === 'upChangeRe'&& head.upSequnce=== 1?<TableHead key={head.id} rowSpan={1} colSpan={5} style={{ whiteSpace: 'pre-line' }}>{'처리인구(인)'}</TableHead>:
        item === 3 && head.upName === 'upChangeRe'&& head.upSequnce=== 1?<TableHead key={head.id} rowSpan={1} colSpan={5} style={{ whiteSpace: 'pre-line' }}>{'처리면적(km²)'}</TableHead>:null))}
    </TableRow>
    <TableRow>
      {upHeadList.map((head: TableUpperProps) =>
        (head.upName === 'upChangeRe'?<TableHead className="w-200" key={head.id}>{head.title}</TableHead>:null))}
    </TableRow>
    </> )
}

export default function ProcessFacilityInfoModal(props: { fcltyName: string; facilityCd : string;}) {
  // 그리드 관련
  const {ProcessAreaDetail} = useFoStore((state) => state);

  const {
    upHeadListFcltyImproveInfo,
    gridListFcltyImproveInfo,
    upHeadListProcessPopulation,
    gridListProcessPopulation,
    upHeadListProcessAreaPlan,
    gridListProcessAreaPlan,
  } = ProcessAreaDetail

  const upHeadListFcltyImproveInfoChange = headMakeList(upHeadListFcltyImproveInfo, 1);
  const upHeadListProcessPopulationChange = headMakeList(upHeadListProcessPopulation, 2);
  const upHeadListProcessAreaPlanChange = headMakeList(upHeadListProcessAreaPlan, 3);

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
          <UiTable headName={"시설증설 계획"} tableData={gridListFcltyImproveInfo} headlist={upHeadListFcltyImproveInfo} pageSize={0} total={0} cellClick={undefined}>
            {upHeadListFcltyImproveInfoChange}
          </UiTable>
          <UiTable headName={"처리인구 계획"} tableData={gridListProcessPopulation} headlist={upHeadListProcessPopulation} pageSize={0} total={0} cellClick={undefined}>
            {upHeadListProcessPopulationChange}
          </UiTable>
          <UiTable headName={"처리구역 계획"} tableData={gridListProcessAreaPlan} headlist={upHeadListProcessAreaPlan} pageSize={0} total={0} cellClick={undefined}>
            {upHeadListProcessAreaPlanChange}
          </UiTable>
    </div>
  );
}