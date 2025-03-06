'use client'

import {UiTable } from '@common/business_components';
import {  TableRow } from '@common/components';
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
 
 


  return (  <>
  <div className="grid grid-cols-2 gap-4">
        <div className="colsapn-1">
          <UiTable publicReuseFacility={publicReuseFacilityUper} headlist={upHeadList} pageSize={100} total={total}  headName={'test'}>
            {nodeList}
           </UiTable>
        </div>
        <div className="colsapn-1">
          <PublicReuseFaciltyFormInsert></PublicReuseFaciltyFormInsert>
        </div>
        
</div>     
          
          </>
  )}



