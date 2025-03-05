"use client";
import { UiTable } from '@common/business_components';
import { Button, TableHead, TableRow } from '@common/components';
import { useEffect } from 'react';
import { useWrStore } from '../store';
import type { TableUpperProps } from '../store/publicReuseFaciltyInsert';




  const headMakeColSpan = (upHeadList: any) => {
    return  ( <>
    <TableRow>{
    upHeadList.map((head: TableUpperProps) => 
      (!head.upSequnce?null:
        head.upName === 'upChangeRe'&& head.upSequnce=== 1?<TableHead key={head.id} rowSpan={1} colSpan={3}>{'중축 개축 증축 '}</TableHead>:
        head.upSequnce > 1?null:<TableHead rowSpan={2}key={head.id}>{head.title}</TableHead>))}
    </TableRow>
    <TableRow>
      {upHeadList.map((head: TableUpperProps) =>
        (head.upName === 'upChangeRe'?<TableHead key={head.id}>{head.title}</TableHead>:null))}
    </TableRow>
    </>)
  }

export default function PublicReuseFaciltyInsert() {
  const { isInit, upHeadList, publicReuseFacilityUper, decrementList} = useWrStore((state) => state);
  const nodeList= headMakeColSpan(upHeadList);
  const total = 100;
  //sample
  useEffect(() => {
    if(!isInit)
    decrementList();
  }, [isInit]);

  return (
    <>
      <UiTable publicReuseFacility={publicReuseFacilityUper} headlist={upHeadList} pageSize={100} total={total} children={nodeList} headName={'test'} />
      <div>
        {/* sample store */}
      <Button type="button" onClick={decrementList}>
        decrement_list
      </Button>
    </div>
    </>
  );
}

