"use client"
import { useFoStore } from "@/app/store";
import type { TableUpperProps } from "@/app/store/dashboard";
import { SearchDiv } from '@common/business_components';
import { UITab, UiTable } from "@common/business_components/ui";
import {
  TabsContent
} from "@common/components";
import { Table, TableCell, TableHead, TableRow } from "@common/components/ui";

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
    } else if(gridNum===2){
      return  ( <>
        <TableRow>{
          upHeadList.map((head: TableUpperProps) => 
          (!head.upSequnce?<TableHead rowSpan={2}key={head.id}>{head.title}</TableHead>:
            head.upName === 'upChangeRe1'&& head.upSequnce=== 1?<TableHead key={head.id} rowSpan={1} colSpan={5} style={{ whiteSpace: 'pre-line' }}>{'계획유입수질(mg/L)'}</TableHead>:
            head.upName === 'upChangeRe2'&& head.upSequnce=== 1?<TableHead key={head.id} rowSpan={1} colSpan={5} style={{ whiteSpace: 'pre-line' }}>{'설계유입수질(mg/L)'}</TableHead>:null))}
        </TableRow>
        <TableRow>
          {upHeadList.map((head: TableUpperProps) =>
            (head.upName === 'upChangeRe1'||head.upName === 'upChangeRe2'?<TableHead style={{ whiteSpace: 'pre-line' }} key={head.id}>{head.title}</TableHead>:null))}
        </TableRow>
        </> )
    } else if(gridNum===3){
      return  ( <>
        <TableRow>{
          upHeadList.map((head: TableUpperProps) => 
          (!head.upSequnce?<TableHead key={head.id}>{head.title}</TableHead>:
            head.upName === 'upChangeRe1'&& head.upSequnce=== 1?<TableHead key={head.id} colSpan={2} style={{ whiteSpace: 'pre-line' }}>{'사업기간'}</TableHead>:null))}
        </TableRow>
        </> )
    } else if(gridNum===4){
      return  ( <>
        <TableRow>{
          upHeadList.map((head: TableUpperProps) => 
          (!head.upSequnce?<TableHead rowSpan={2}key={head.id}>{head.title}</TableHead>:
            head.upName === 'upChangeRe1'&& head.upSequnce=== 1?<TableHead key={head.id} rowSpan={1} colSpan={5} style={{ whiteSpace: 'pre-line' }}>{'계획유입수질(mg/L)'}</TableHead>:
            head.upName === 'upChangeRe2'&& head.upSequnce=== 1?<TableHead key={head.id} rowSpan={1} colSpan={5} style={{ whiteSpace: 'pre-line' }}>{'설계유입수질(mg/L)'}</TableHead>:
            head.upName === 'upChangeRe3'&& head.upSequnce=== 1?<TableHead key={head.id} rowSpan={1} colSpan={5} style={{ whiteSpace: 'pre-line' }}>{'계획방류수질(mg/L)'}</TableHead>:null))}
        </TableRow>
        <TableRow>
          {upHeadList.map((head: TableUpperProps) =>
            (head.upName === 'upChangeRe1'||head.upName === 'upChangeRe2'||head.upName === 'upChangeRe3'?<TableHead style={{ whiteSpace: 'pre-line' }} key={head.id}>{head.title}</TableHead>:null))}
        </TableRow>
        </> )
    }
}

export default function ProcessFacilityInfoModal(props: { fcltyName: string; facilityCd : string;}) {
  // 그리드 관련
  const {ProcessFacilityDetail} = useFoStore((state) => state);

  const {
    gridListBasicInfo,
    upHeadListPlanInfo,
    gridListPlanInfo,
    upHeadListFcltyAreaInfo,
    gridListFcltyAreaInfo,

    upHeadListFcltyHistInfo,
    gridListFcltyHistInfo,
    upHeadListFcltyWaterQltyInfo,
    gridListFcltyWaterQltyInfo,
  } = ProcessFacilityDetail

  const tabList = [
    { value: 'common_info', label: '기본정보' },
    { value: 'history_info', label: '이력정보' },
  ];

  const upHeadListPlanInfoChange = headMakeList(upHeadListPlanInfo, 2);
  const upHeadListFcltyHistInfoChange = headMakeList(upHeadListFcltyHistInfo, 3);
  const upHeadListFcltyWaterQltyInfoChange = headMakeList(upHeadListFcltyWaterQltyInfo, 4);
  return (
    <div className=" bg-gray-50 p-8">
      <SearchDiv>
        <Table>
          <TableRow className="">
            <TableHead className="w-1/6">{'시설명'}</TableHead>
            <TableCell className="w-1/3">{props.fcltyName}</TableCell>
            <TableHead className="w-1/6">{'시설코드'}</TableHead>
            <TableCell className="w-1/3">{props.facilityCd}</TableCell>
          </TableRow>
        </Table>
      </SearchDiv>
      <UITab tabList={tabList} defaultValue="common_info">
        <TabsContent value="common_info">
          <div className="font-bold m-3">시설 기본정보</div>
          <Table>
            <TableRow className="">
              <TableHead className="w-1/6">{'시설명'}</TableHead>
              <TableCell className="w-1/6" colSpan={3}>{props.fcltyName}</TableCell>
              <TableHead className="w-1/6">{'시설용량(m³/일)'}</TableHead>
              <TableCell className="w-1/6">{gridListBasicInfo[0]?.facilityCapacity}</TableCell>
            </TableRow>
            <TableRow className="">
              <TableHead className="w-1/6">{'시도'}</TableHead>
              <TableCell className="w-1/6">{gridListBasicInfo[0]?.sido}</TableCell>
              <TableHead className="w-1/6">{'시군구'}</TableHead>
              <TableCell className="w-1/6">{gridListBasicInfo[0]?.sigungo}</TableCell>
              <TableHead className="w-1/6">{'가동개시일'}</TableHead>
              <TableCell className="w-1/6">{gridListBasicInfo[0]?.startDay}</TableCell>
            </TableRow>
            <TableRow className="">
              <TableHead className="w-1/6">{'주소'}</TableHead>
              <TableCell className="w-1/6" colSpan={3}>{gridListBasicInfo[0]?.location}</TableCell>
              <TableHead className="w-1/6">{'준공일'}</TableHead>
              <TableCell className="w-1/6">{gridListBasicInfo[0]?.facilityCapacity}</TableCell>
            </TableRow>
            <TableRow className="">
              <TableHead className="w-1/6">{'공법'}</TableHead>
              <TableCell className="w-1/6" colSpan={3}>{gridListBasicInfo[0]?.publicMethod}</TableCell>
              <TableHead className="w-1/6">{'관리대행업자자'}</TableHead>
              <TableCell className="w-1/6">{gridListBasicInfo[0]?.manageUpchae}</TableCell>
            </TableRow>
          </Table>
          <UiTable headName={"시설 계획정보"} tableData={gridListPlanInfo} headlist={upHeadListPlanInfo} pageSize={0} total={0} cellClick={undefined}>
            {upHeadListPlanInfoChange}
          </UiTable>
          <UiTable headName={"시설 수역 및 구역정보"} tableData={gridListFcltyAreaInfo} headlist={upHeadListFcltyAreaInfo} pageSize={0} total={0} cellClick={undefined} children={undefined}/>
        </TabsContent>
        <TabsContent value="history_info">
          <UiTable headName={"시설 이력관리"} tableData={gridListFcltyHistInfo} headlist={upHeadListFcltyHistInfo} pageSize={0} total={0} cellClick={undefined}>
            {upHeadListFcltyHistInfoChange}
          </UiTable>
          <UiTable headName={"시설 수질정보"} tableData={gridListFcltyWaterQltyInfo} headlist={upHeadListFcltyWaterQltyInfo} pageSize={0} total={0} cellClick={undefined}>
            {upHeadListFcltyWaterQltyInfoChange}
          </UiTable>
        </TabsContent>
      </UITab>
    </div>
  );
}