"use client"
import { useFoStore } from "@/app/store";
import type { TableUpperProps } from "@/app/store/dashboard";
import { UiTable } from "@common/business_components";
import { Table, TableCell, TableHead, TableRow } from "@common/components/ui";
import { useRef } from "react";

// 시설계획 table header 변경
const headMakeList = (upHeadList: TableUpperProps[], gridNum:number) => {
  if(gridNum===1){
    return  ( <>
      <TableRow>{
      upHeadList.map((head: TableUpperProps) => 
        (!head.upSequnce?<TableHead rowSpan={2}key={head.id}>{head.title}</TableHead>:
          head.upName === 'upChangeRe'&& head.upSequnce=== 1?<TableHead key={head.id} rowSpan={1} colSpan={5} style={{ whiteSpace: 'pre-line' }}>{'증설계획(m³/일)'}</TableHead>:null))}
      </TableRow>
      <TableRow>
        {upHeadList.map((head: TableUpperProps) =>
          (head.upName === 'upChangeRe'?<TableHead className="w-100" key={head.id}>{head.title}</TableHead>:null))}
      </TableRow>
      </> )
  }
}

export default function ProcessFacilityInfoModal() {
  // 그리드 관련
  const {ProcessFacilityDetail} = useFoStore((state) => state);

  const {
    upHeadListExplainPlan,
    gridListExplainPlan
  } = ProcessFacilityDetail

  const upHeadListExplainPlanChange = headMakeList(upHeadListExplainPlan, 1);

  const inputRef = useRef<HTMLInputElement>(null);
  const inputSelectRef=useRef<HTMLInputElement>(null);
  
  const onSelectValue=(val:string)=>{
    console.log(val);
  }
  
  const chkVal = () => {
    console.log(inputRef?.current?.value);
    console.log(inputSelectRef?.current?.value);
  }

  const initVal = () => {
    if(inputRef.current?.value)
      inputRef.current.value = ""
    console.log(inputRef?.current?.value);
    console.log(inputSelectRef);
  }

  return (
    <div className="m-8">
      <Table>
        <TableRow className="">
          <TableHead className="w-1/6">{'시설명'}</TableHead>
          <TableCell ></TableCell>
          <TableHead className="w-1/6">{'시설코드'}</TableHead>
          <TableCell ></TableCell>
        </TableRow>
      </Table>
      <div style={{ textAlign: "left", fontSize: "13px", fontWeight: "bold", marginTop:"13px", marginBottom: "10px" }}>
        {'시설증설 계획'}
      </div>
      <UiTable headName={"시설증설 계획"} tableData={gridListExplainPlan} headlist={upHeadListExplainPlan} pageSize={0} total={0}>
        {upHeadListExplainPlanChange}
      </UiTable>
    </div>
  );
}