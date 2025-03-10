'use client'

import { ScrollArea, SearchDiv, SelectBox, UiTable } from '@common/business_components';
import { Button, TableHead, TableRow } from '@common/components';
import { PublicReuseFaciltyFormInsert } from '../../../../components/ui/publicReuseInsertForm';
import { useWrStore } from '../../../store';
import type { TableUpperProps } from '../../../store/publicReuseFaciltyInsert';




const headMakeColSpan = (upHeadList: TableUpperProps[]) => {

  return (<>
    <TableRow>{
      upHeadList.map((head: TableUpperProps) =>
      (!head.upSequnce ? <TableHead rowSpan={2} key={head.id}>{head.title}</TableHead> :
        head.upName === 'upChangeRe' && head.upSequnce === 1 ? <TableHead key={head.id} rowSpan={1} colSpan={3}>{'중축 개축 증축 '}</TableHead> : null))}
    </TableRow>
    <TableRow>
      {upHeadList.map((head: TableUpperProps) =>
        (head.upName === 'upChangeRe' ? <TableHead key={head.id}>{head.title}</TableHead> : null))}
    </TableRow>
  </>)
}

export default function PublicReuseFaciltyInsert() {
  const { pubFac } = useWrStore((state) => state);
  const { upHeadList, publicReuseFacilityUper } = pubFac;
  const nodeList = headMakeColSpan(upHeadList);
  const total = 100;


  const searchDiv = '시군구'
  const selectBox = [{ text: '한양', val: "1" }, { text: '서울', val: "2" }, { text: '부산', val: "3" }]
  const headName = () => {
    return (
      <h1 className="pl-3 text-xl">○공공 허수처리시설 등록</h1>
    )
  }
  const onSelectValue = (val: string) => {
    console.log(val)
  }
  return (
    <>
      <div className="grid grid-cols-2 gap-4 h-full">
        <div className='col-span-2'>
          <h1 className="pl-3 text-2xl" > 하수재이용시설 등록</h1>
          <div className="m-8">
            <SearchDiv>
              <div className='w-4/5 grid grid-cols-12 gap-1 mx-4'>
                <SelectBox className='col-span-2' label={searchDiv} selectArray={selectBox} onSelectValue={onSelectValue} />
              </div>
              <div className='w-1/5 flex items-center justify-end'>
                <Button className='mr-4 rounded-md'>조회</Button>
                <Button className='mr-4 rounded-md'>신규추가</Button>
              </div>
            </SearchDiv>
            {/* </div> */}
          </div>
        </div>
        <div className="col-span-1">
          <UiTable publicReuseFacility={publicReuseFacilityUper} headlist={upHeadList} pageSize={100} total={total} headName={headName()}>
            {nodeList}
          </UiTable>
        </div>
        <div className="col-span-1 max-h-full overflow-y-scroll">
          <ScrollArea>
            <PublicReuseFaciltyFormInsert />
            {/* <ScrollBar orientation="vertical"></ScrollBar> */}
          </ScrollArea>
        </div>

      </div>

    </>
    )
}