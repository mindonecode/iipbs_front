'use client'
import { useWrStore } from "@/app/store";
import type { TableUpperProps } from "@/app/store/rainReuseFacilityInsert";
import { RswtrReuseFaciltyInsertForm } from "@/components/ui/rswtrReuseInsetForm";
import { ScrollArea, SearchDiv, SearchInput, UiTable } from "@common/business_components";
import { Button, TableHead, TableRow } from "@common/components";


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


export default function Home() {
  const {rswt} = useWrStore((state) => state);
  const nodeList = headMakeColSpan(rswt.upHeadList);
  const total = 100;


  const headName = () => {
    return (
      <h1 className="pl-3 text-xl">○건축물 목록</h1>
    )
  }

  return (
    <>
       <div className="grid grid-cols-2 gap-4 ">
       <div className='col-span-2'>
        <h1 className="pl-3 text-2xl" >중수도시설 등록 </h1>
        <div className="m-8">
        <SearchDiv   >
          <div className='w-4/5 grid grid-cols-6 gap-1 mx-4'>
            <SearchInput className='col-span-1 my-7 text-2xl' label="건물명:" />
          </div>
          <div className='w-1/5 flex items-center justify-end'>
            <Button className='mr-4 rounded-lg'>조회</Button>
            <Button className='mr-4 rounded-lg'>저장</Button>
            <Button className='mr-4 rounded-lg'>신규등록</Button>
          </div>
        </SearchDiv>
        </div>
      </div>

        <div className="colsapn-1 pl-11">
          <UiTable tableData={rswt.rswtOfObject} headlist={rswt.upHeadList} pageSize={100} total={10} headName={headName()}>
            {nodeList}
          </UiTable>
        </div>
        <div className="colsapn-1 pr-11 max-h-full ovreflow-y-scroll">
        <ScrollArea>
          <RswtrReuseFaciltyInsertForm></RswtrReuseFaciltyInsertForm>
          </ScrollArea>
        </div>

      </div>
    </>
  );
}
