'use client'

import {SearchDiv, SelectBox, UiTable } from '@common/business_components';
import {  Button, TableRow } from '@common/components';
import { TableHead } from '@common/components';
import Style from "../style/PublicReuseFaciltyInsert.module.css";
import { useWrStore } from '../store';
import type { TableUpperProps } from '../store/publicReuseFaciltyInsert';
import  { PublicReuseFaciltyFormInsert } from '../component/publicReuseInsertForm';




  const headMakeColSpan = (upHeadList: TableUpperProps[]) => {
    return  ( <>
    <TableRow>{
    upHeadList.map((head: TableUpperProps) => 
      (!head.upSequnce?<TableHead rowSpan={2}key={head.id}>{head.title}</TableHead>:
        head.upName === 'upChangeRe'&& head.upSequnce=== 1?<TableHead key={head.id} rowSpan={1} colSpan={3}>{'중축 개축 증축 '}</TableHead>:null))}
    </TableRow>
    <TableRow>
      {upHeadList.map((head: TableUpperProps) =>
        (head.upName === 'upChangeRe'?<TableHead key={head.id}>{head.title}</TableHead>:null))}
    </TableRow>
    </> )
  }

  


  export  function PublicReuseFaciltyInsert() {
  const {  upHeadList, publicReuseFacilityUper} = useWrStore((state) => state);
  const nodeList= headMakeColSpan(upHeadList);
  const total = 100;
 
 
  const searchDiv ='시군구'
  const selectBox = [{text:'한양', value:1}]
  const headName= ()=>{
        return(
          <h1 className="pl-3 text-xl">○공공 허수처리시설 등록</h1>
        )
  }
  return (  <>
  <div>
    <h1 className="pl-3 text-2xl" > 하수재이용시설 등록</h1>
    <SearchDiv   >
        <div className='flex'> 
          <SelectBox label={searchDiv} selectArray={selectBox} /> 
            <Button className ='mr-4' size='sm'>조회</Button>
           <Button className ='mr-4' size='sm'>신규추가</Button>
        </div>
    </SearchDiv>
  </div>
  <div className="grid grid-cols-2 gap-4">

        <div className="colsapn-1">
          <UiTable publicReuseFacility={publicReuseFacilityUper} headlist={upHeadList} pageSize={100} total={total}  headName={headName()}>
            {nodeList}
           </UiTable>
        </div>
        <div className="colsapn-1 h-full">
          <PublicReuseFaciltyFormInsert></PublicReuseFaciltyFormInsert>
        </div>
        
</div>     
          
          </>
  )}



