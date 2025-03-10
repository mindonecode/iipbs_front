"use client"
import { useFoStore } from "@/app/store";
import type { TableUpperProps } from "@/app/store/processFacility";
import { SearchDiv, SearchInput, SelectBox, UiTable } from "@common/business_components";
import { Button, Input, Label} from "@common/components/ui";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@common/components";
import { useRef } from "react";

/** 기본 스타일 */
const styles = {
  leftDiv : {
    width : '90%',
    margin : '1rem 0rem 1rem 0rem',
  } as React.CSSProperties,
  rightDiv : {
    width : '10%',
    margin : '1rem 2rem 1rem 0rem',
  } as React.CSSProperties,
  searchBtn : {
    float : 'right',
    fontSize : '14px',
    marginRight : '0.8rem'
  } as React.CSSProperties,
}

const onSelectValue=(val:string)=>{
  console.log(val);
}  

const headMakeColSpan = (upHeadList: TableUpperProps[]) => {
  return  ( <>
    <TableRow>{
    upHeadList.map((head: TableUpperProps) => 
      ( head.id==='publicMethod'?<TableHead rowSpan={2} className="w-1/16" key={head.id}>{head.title}</TableHead>:
        !head.upSequnce&&head.id!='facilityCapacity'&&head.id!='planInputWaterQlty'&&head.id!='designInputWaterQlty'?<TableHead rowSpan={2}key={head.id}>{head.title}</TableHead>:
        head.id=='facilityCapacity'||head.id=='planInputWaterQlty'||head.id=='designInputWaterQlty'?<TableHead rowSpan={2} className="w-13" key={head.id}>{head.title}</TableHead>:
        head.upName === 'upChangeRe'&& head.upSequnce=== 1?<TableHead className="w-75" key={head.id} rowSpan={1} colSpan={2}>{'행정구역'}</TableHead>:null))}
    </TableRow>
    <TableRow>
    {upHeadList.map((head: TableUpperProps, idx) =>{
      if(head.upName === 'upChangeRe'){
        if(idx==1){
          return <TableHead key={head.id} className="w-36">{head.title}</TableHead>;
        }
        else{
          return <TableHead key={head.id} className="w-40">{head.title}</TableHead>;
        }
      }
    })}
    </TableRow>
  </> )
}

// 시설계획 table header 변경
const headMakeColSpanPlanFclty = (upHeadList: TableUpperProps[]) => {
  return  ( <>
    <TableRow>{
    upHeadList.map((head: TableUpperProps) => 
      ( head.id==='publicMethod'?<TableHead rowSpan={2} className="w-1/16" key={head.id}>{head.title}</TableHead>:
        !head.upSequnce&&head.id!='facilityCapacity'&&head.id!='planInputWaterQlty'&&head.id!='designInputWaterQlty'?<TableHead rowSpan={2}key={head.id}>{head.title}</TableHead>:
        head.id=='facilityCapacity'||head.id=='planInputWaterQlty'||head.id=='designInputWaterQlty'?<TableHead rowSpan={2} className="w-13" key={head.id}>{head.title}</TableHead>:
        head.upName === 'upChangeRe'&& head.upSequnce=== 1?<TableHead className="w-75" key={head.id} rowSpan={1} colSpan={2}>{'행정구역'}</TableHead>:null))}
    </TableRow>
    <TableRow>
    {upHeadList.map((head: TableUpperProps, idx) =>{
      if(head.upName === 'upChangeRe'){
        if(idx==1){
          return <TableHead key={head.id} className="w-36">{head.title}</TableHead>;
        }
        else{
          return <TableHead key={head.id} className="w-40">{head.title}</TableHead>;
        }
      }
    })}
    </TableRow>
  </> )
}

export default function ProcessFacilitySearch() {
  const inputRef = useRef<HTMLInputElement>(null);

  const {DashboardMain, FcltyMain, FlowRateList, PlanFclty} = useFoStore((state) => state);

  /**
   * 상단바 관련
   */
  const {
    topLabelArray,
    selectPartData,
    selectSearchYear,
    selectSidoData,
    selectSigunData,
  } = DashboardMain;

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
    upHeadList, 
    flowRateList
  } = FlowRateList;


  const upChangeRe= headMakeColSpan(upHeadList);
  const upChangeRePlanFclty = headMakeColSpanPlanFclty(upHeadListPlanFclty);

  return (
      <div className="m-8">
        <SearchDiv>
          <div style={styles.leftDiv} className="grid grid-cols-12 gap-1">
            <SelectBox className="col-span-2" label={topLabelArray[0] as string} selectArray={selectPartData} onSelectValue={onSelectValue}>
            </SelectBox>
            <SelectBox className="col-span-2" label={topLabelArray[1] as string} selectArray={selectSidoData} onSelectValue={onSelectValue}>
            </SelectBox>
            <SelectBox className="col-span-2" label={topLabelArray[2] as string} selectArray={selectSigunData} onSelectValue={onSelectValue}>
            </SelectBox>
            <SelectBox className="col-span-2" label={topLabelArray[3] as string} selectArray={selectSearchYear} onSelectValue={onSelectValue}>
            </SelectBox>
            <SearchInput className="col-span-3" label={topLabelArray[4] as string} ref={inputRef}/>
          </div>
          <div style={styles.rightDiv}>
            <Button style={styles.searchBtn} size="sm">
              초기화
            </Button>
            <Button style={styles.searchBtn} size="sm">
              조회
            </Button>
          </div>
        </SearchDiv>
        <UiTable headName={""} publicReuseFacility={fcltyList} headlist={upHeadListFclty} pageSize={0} total={0} children={undefined}/>
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-5">
            
            <UiTable headName={""} publicReuseFacility={upHeadListPlanFclty} headlist={upHeadList} pageSize={8} total={16}>
              {upChangeRe}
            </UiTable>
          </div>
          <div className="col-span-7">
            <UiTable headName={""} publicReuseFacility={flowRateList} headlist={upHeadList} pageSize={8} total={16}>
              {upChangeRe}
            </UiTable>
          </div>
        </div>
      </div>
  );
}
