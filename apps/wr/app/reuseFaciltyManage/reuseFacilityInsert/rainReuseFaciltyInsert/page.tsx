'use client'
import { useWrStore } from "@/app/store";
import type { TableUpperProps } from "@/app/store/rainReuseFacilityInsert"
import { RainReuseFaciltyInsertForm } from "@/components/ui/rainReuseInsertForm";
import { SearchDiv, SearchInput, UiTable } from "@common/business_components";
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
  const { rain } = useWrStore((state) => state);
  const nodeList = headMakeColSpan(rain.upHeadList);
  const total = 100;


  const headName = () => {
    return (
      <h1 className="pl-3 text-xl">○건축물 목록</h1>
    )
  }
  return (
    <>
      <div>
        <h1 className="pl-3 text-2xl mr-2" >빗물이용시설 등록 </h1>
        <SearchDiv   >
          <div>
            <SearchInput className="pl-3 mr-3" label="시군구" />
          </div>
          <div>
            <Button className='mr-2' size='sm'>조회</Button>
            <Button className='mr-2' size='sm'>저장</Button>
            <Button className='mr-2' size='sm'>신규등록</Button>
          </div>
        </SearchDiv>
      </div>
      <div className="grid grid-cols-2 gap-4">

        <div className="colsapn-1 ">
          <UiTable tableData={rain.rainOfObject} headlist={rain.upHeadList} pageSize={100} total={10} headName={headName()}>
            {nodeList}
          </UiTable>
        </div>
        <div className="colsapn-1  ovreflow-y">
          <RainReuseFaciltyInsertForm></RainReuseFaciltyInsertForm>
        </div>

      </div>
    </>
  );
}
