"use client"
import { useFoStore } from "@/app/store";
import type { TableUpperProps } from "@/app/store/processFacility";
import { TableDiv, UiTable } from "@common/business_components";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@common/components";
import { useRef, useState } from "react";

// 시설계획 table header 변경
const headMakeColSpanPlanFclty = (upHeadList: TableUpperProps[]) => {
  return  ( <>
    <TableRow>{
    upHeadList.map((head: TableUpperProps) => 
      (!head.upSequnce?<TableHead rowSpan={2}key={head.id}>{head.title}</TableHead>:
        head.upName === 'upChangeRe'&& head.upSequnce=== 1?<TableHead key={head.id} rowSpan={1} colSpan={7} style={{ whiteSpace: 'pre-line' }}>{'시설계획\n(금회)'}</TableHead>:null))}
    </TableRow>
    <TableRow>
      {upHeadList.map((head: TableUpperProps) =>
        (head.upName === 'upChangeRe'?<TableHead key={head.id}>{head.title}</TableHead>:null))}
    </TableRow>
    </> )
}

// 시설계획 table header 변경
const headMakeColSpanOperationStatus = (upHeadList: TableUpperProps[]) => {
  return  ( <>
    <TableRow>
      <TableHead rowSpan={1} colSpan={16} style={{ whiteSpace: 'pre-line' }}>{'23년도 운영실태'}</TableHead>
    </TableRow>
    <TableRow>{
    upHeadList.map((head: TableUpperProps) =>
    (head.upName === 'upChangeRe1'&&head.upSequnce===1?<TableHead key={head.id} rowSpan={2}colSpan={2} style={{ whiteSpace: 'pre-line' }}>{head.title}</TableHead>:
    !head.upSequnce?<TableHead rowSpan={2}key={head.id}>{head.title}</TableHead>:
    head.upName === 'upChangeRe2'&&head.upSequnce===1?<TableHead key={head.id} colSpan={3} style={{ whiteSpace: 'pre-line' }}>{'연간 운영실태'}</TableHead>:
    head.upName === 'upChangeRe3'&&head.upSequnce===1?<TableHead key={head.id} colSpan={3} style={{ whiteSpace: 'pre-line' }}>{'하절기 운영실태\n(6~8월)'}</TableHead>:
    head.upName === 'upChangeRe4'&&head.upSequnce===1?<TableHead key={head.id} colSpan={3} style={{ whiteSpace: 'pre-line' }}>{'동절기 운영실태\n(1~2월)'}</TableHead>:
    head.upName === 'upChangeRe5'&&head.upSequnce===1?<TableHead key={head.id} colSpan={4} style={{ whiteSpace: 'pre-line' }}>{'지하수유입량'}</TableHead>:null))}
    </TableRow>
    <TableRow>
      {upHeadList.map((head: TableUpperProps) =>
        (head.upName === 'upChangeRe2'||head.upName === 'upChangeRe3'||head.upName === 'upChangeRe4'||head.upName === 'upChangeRe5' ?<TableHead key={head.id}>{head.title}</TableHead>:null))}
    </TableRow>
    </> )
}

export default function ProcessFacilitySearch() {
  // 입력값 상태 관리
  const { FcltyMain, PlanFclty, OperationStatus} = useFoStore((state) => state);
  
  // Tab1
  // fclty 관련
  const {
    upHeadListFclty,
    fcltyList
  } = FcltyMain;
  
  // 시설계획 관련
  const {
    upHeadListPlanFclty,
    planFcltyList
  } = PlanFclty;

  // 그리드 관련
  const {
    upHeadListOperationStatus,
    operationalStatusList
  } = OperationStatus;

  const upChangeRePlanFclty = headMakeColSpanPlanFclty(upHeadListPlanFclty);
  const upChangeHeadListOperationStatus = headMakeColSpanOperationStatus(upHeadListOperationStatus);
  return (
    <>
      <TableDiv>
        <UiTable headName={""} tableData={fcltyList} headlist={upHeadListFclty} pageSize={0} total={0} cellClick={()=>{} } children={undefined} />
      </TableDiv>
      <TableDiv>
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-5">
            <Table>
              <TableHeader>
                {upChangeRePlanFclty}
              </TableHeader>
              <TableBody>
                {planFcltyList.map((el: { [key: string]: string | number | boolean },index) => (
                  <TableRow  key={index+"row"} >
                    {upHeadListPlanFclty.map((head) => (
                      <TableCell style={{ whiteSpace: 'pre-line' }} key={head.id+index}>{el[head.id]}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="col-span-7 h-[600px] overflow-auto">
            <Table>
              <TableHeader>
                {upChangeHeadListOperationStatus}
              </TableHeader>
              <TableBody>
                {operationalStatusList.map((el: { [key: string]: string | number | boolean },index) => (
                  <TableRow  key={index+"row"} >
                    {upHeadListOperationStatus.map((head) => (
                      (head.id==='flowRate'&&index==0?<TableCell rowSpan={5} style={{ whiteSpace: 'pre-line' }} key={head.id+index}>{el[head.id]}</TableCell>:
                      head.id==='flowRate'&&index==5?<TableCell rowSpan={6} style={{ whiteSpace: 'pre-line' }} key={head.id+index}>{el[head.id]}</TableCell>:
                      head.id==='flowRate'&&index==11?<TableCell rowSpan={2} style={{ whiteSpace: 'pre-line' }} key={head.id+index}>{el[head.id]}</TableCell>:
                      (head.id==='groundWaterAvg'||head.id==='groundWaterSummer'||head.id==='groundWaterWinter'||head.id==='rdi')&&(index==0)?<TableCell rowSpan={7} style={{ whiteSpace: 'pre-line' }} key={head.id+index}>{el[head.id]}</TableCell>:
                      (head.id==='groundWaterAvg'||head.id==='groundWaterSummer'||head.id==='groundWaterWinter'||head.id==='rdi')&&(index==7)?<TableCell rowSpan={6} style={{ whiteSpace: 'pre-line' }} key={head.id+index}>{el[head.id]}</TableCell>:
                      head.id!='flowRate'&&head.id!='groundWaterAvg'&&head.id!='groundWaterSummer'&&head.id!='groundWaterWinter'&&head.id!='rdi'?<TableCell style={{ whiteSpace: 'pre-line' }} key={head.id+index}>{el[head.id]}</TableCell>:null)
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </TableDiv>
    </>
  );
}
