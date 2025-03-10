"use client"
import { useFoStore } from "@/app/store";
import type { TableUpperProps } from "@/app/store/processFacility";
import { SearchDiv, SearchInput, SearchInputSelect, SelectBox, UiTable } from "@common/business_components";
import { Button, TableHead, TableRow } from "@common/components/ui";
import React, { useRef } from "react";

/** 기본 스타일 */
const styles = {
    leftDiv : {
      width : '80%',
      margin : '1rem 0rem 1rem 0rem',
    } as React.CSSProperties,
    rightDiv : {
      width : '20%',
      margin : '1rem 2rem 1rem 0rem',
    } as React.CSSProperties,
    searchBtn : {
      float : 'right',
      fontSize : '14px',
      marginRight : '0.8rem'
    } as React.CSSProperties,

    /** 패키지화 필요 */
    labelStyle : {
      margin:'0.8rem 0.8rem 0.8rem 1rem',
      fontSize: '10px',
    } as React.CSSProperties,
    inputStyleShort : {
      width:'4rem',
      height:'2.5rem',
    } as React.CSSProperties,
    
    selectStyle : {
      marginLeft: '0.5rem',
      width:'5rem'
    } as React.CSSProperties,
    selectDefaultStyle : {
      marginLeft: '1rem',
      width:'10rem'
    } as React.CSSProperties,
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

export default function ProcessFacilitySearch() {
  const {ProcessFacility} = useFoStore((state) => state);

  // 상단바 관련
  const {
    processFacilityLabelArray, 
    selectPartData,
    selectUpdownData,
    selectOperationData,
    selectFacilityPartData,
    selectSidoData,
    selectSigunData,
  } = ProcessFacility;

  // 그리드 관련
  const {upHeadList, processFacilityList} = useFoStore((state) => state);

  const upChangeRe= headMakeColSpan(upHeadList);
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
        <SearchDiv>
            <div style={styles.leftDiv} className="grid grid-cols-12 gap-1">
              <SelectBox className="col-span-3" label={processFacilityLabelArray[0] as string} selectArray={selectPartData} onSelectValue={onSelectValue}/>
              <SelectBox className="col-span-3" label={processFacilityLabelArray[1] as string} selectArray={selectSidoData} onSelectValue={onSelectValue}/>
              <SelectBox className="col-span-3" label={processFacilityLabelArray[2] as string} selectArray={selectSigunData} onSelectValue={onSelectValue}/>
              <SearchInputSelect className="col-span-3" label={processFacilityLabelArray[3] as string} selectData={selectUpdownData} ref={inputSelectRef} onSelectValue={onSelectValue}/>
              <SearchInput className="col-span-3" label={processFacilityLabelArray[4] as string} ref={inputRef}/>
              <SelectBox className="col-span-3" label={processFacilityLabelArray[5] as string} selectArray={selectOperationData} onSelectValue={onSelectValue}/>
              <SelectBox className="col-span-3" label={processFacilityLabelArray[6] as string} selectArray={selectFacilityPartData} onSelectValue={onSelectValue}/>
            </div>
            <div style={styles.rightDiv}>
              <Button style={styles.searchBtn} size="sm" >
                엑셀다운로드
              </Button>
              <Button style={styles.searchBtn} size="sm" onClick={initVal}>
                초기화
              </Button>
              <Button style={styles.searchBtn} size="sm" onClick={chkVal}>
                조회
              </Button>
            </div>
        </SearchDiv>
        <UiTable headName={""} publicReuseFacility={processFacilityList} headlist={upHeadList} pageSize={8} total={16}>
          {upChangeRe}
        </UiTable>
      </div>
  );
}
