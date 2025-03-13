"use client"
import { HeadMakeColSpan } from "@/app/components/HeadMakeColSpan";
import { useFoStore } from "@/app/store";
import { SearchDiv, SearchInput, SearchInputSelect, SelectBox, UiTable } from "@common/business_components";
import { Button } from "@common/components/ui";
import { useRef } from "react";

export default function ProcessFacilitySearch() {
  const {ProcessFacility} = useFoStore((state) => state);
  
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
            <div className="grid grid-cols-12 gap-1 w-4/5 mx-4">
              <SelectBox className="col-span-3" label={processFacilityLabelArray[0] as string} selectArray={selectPartData} onSelectValue={onSelectValue}/>
              <SelectBox className="col-span-3" label={processFacilityLabelArray[1] as string} selectArray={selectSidoData} onSelectValue={onSelectValue}/>
              <SelectBox className="col-span-3" label={processFacilityLabelArray[2] as string} selectArray={selectSigunData} onSelectValue={onSelectValue}/>
              <SearchInputSelect className="col-span-3" label={processFacilityLabelArray[3] as string} selectData={selectUpdownData} ref={inputSelectRef} onSelectValue={onSelectValue}/>
              <SearchInput className="col-span-3" label={processFacilityLabelArray[4] as string} ref={inputRef}/>
              <SelectBox className="col-span-3" label={processFacilityLabelArray[5] as string} selectArray={selectOperationData} onSelectValue={onSelectValue}/>
              <SelectBox className="col-span-3" label={processFacilityLabelArray[6] as string} selectArray={selectFacilityPartData} onSelectValue={onSelectValue}/>
            </div>
            <div className="w-1/5 mx-5 flex items-center justify-end">
              <Button className="mr-3" size="sm">
                엑셀다운로드
              </Button>
              <Button className="mr-3" size="sm" onClick={initVal}>
                초기화
              </Button>
              <Button className="mr-3" size="sm" onClick={chkVal}>
                조회
              </Button>
            </div>
        </SearchDiv>
        <UiTable headName={""} tableData={processFacilityList} headlist={upHeadList} pageSize={8} total={16}>
          <HeadMakeColSpan upHeadList={upHeadList}/>
        </UiTable>
      </div>
  );
}
