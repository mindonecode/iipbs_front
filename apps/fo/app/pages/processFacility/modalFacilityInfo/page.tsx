"use client"
import { useFoStore } from "@/app/store";
import type { TableUpperProps } from "@/app/store/dashboard";
import { UiTable } from "@common/business_components";
import { Table, TableCell, TableHead, TableRow } from "@common/components/ui";
import { useRef } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@common/components";

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
          (head.upName === 'upChangeRe'?<TableHead className="w-150" key={head.id}>{head.title}</TableHead>:null))}
      </TableRow>
      </> )
  }
}

export default function ProcessFacilityInfoModal(props: { fcltyName: string; facilityCd : string;}) {
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
          <TableCell className="w-1/3">{props.fcltyName}</TableCell>
          <TableHead className="w-1/6">{'시설코드'}</TableHead>
          <TableCell className="w-1/3">{props.facilityCd}</TableCell>
        </TableRow>
      </Table>
      <Tabs defaultValue="common_info" className="w-full">
        <TabsList className="grid grid-cols-2">
          <TabsTrigger value="common_info">기본정보</TabsTrigger>
          <TabsTrigger value="history_info">이력정보</TabsTrigger>
        </TabsList>
        <TabsContent value="common_info">
          <Table>
            <TableRow className="">
              <TableHead className="w-1/6">{'시설명'}</TableHead>
              <TableCell className="w-1/3">{gridListExplainPlan[0]?.facilityName}</TableCell>
              <TableHead className="w-1/6">{'시설용량'}</TableHead>
              <TableCell className="w-1/3">{gridListExplainPlan[0]?.facilityCapacity}</TableCell>
            </TableRow>
            <TableRow className="">
              <TableHead className="w-1/6">{'시도'}</TableHead>
              <TableCell className="w-1/3">{gridListExplainPlan[0]?.sido}</TableCell>
              <TableHead className="w-1/6">{'시설용량'}</TableHead>
              <TableCell className="w-1/3">{gridListExplainPlan[0]?.facilityCapacity}</TableCell>
            </TableRow>
          </Table>
        </TabsContent>
        <TabsContent value="history_info">
          
        </TabsContent>
      </Tabs>
    </div>
  );
}