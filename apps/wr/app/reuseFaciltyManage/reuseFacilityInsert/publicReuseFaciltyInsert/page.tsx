'use client'

import { ScrollArea, SearchDiv, SelectBox, UiTable } from '@common/business_components';
import { Button } from '@common/components';
import { PublicReuseFaciltyFormInsert } from '../../../../components/ui/publicReuseInsertForm';
import { useWrStore } from '../../../store';



  export  default function PublicReuseFaciltyInsert() {
  const {pubFac} = useWrStore((state) => state);
  const {  pubFacHeadList, publicReuseFacilityData, selectLabel} = pubFac;
  console.log(pubFacHeadList)
  const searchDiv = '하수재이용시설 '
  const selectBox = [{ text: '서울하수처리시설', val: "1" }, { text: '서울1하수처리시설', val: "2" }, { text: '서울2하수처리시설', val: "3" }]
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
                <Button className='mr-4 rounded-lg'>조회</Button>
                <Button className='mr-4 rounded-lg'>신규추가</Button>
              </div>
            </SearchDiv>
            {/* </div> */}
          </div>
        </div>
        <div className="col-span-1">
          <UiTable tableData={publicReuseFacilityData} headlist={pubFacHeadList} pageSize={100} total={10}  headName={headName()} children={undefined}/>
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