"use client"
import { HeadMakeColSpan } from "@/app/components/HeadMakeColSpan";
import { useFoStore } from "@/app/store";
import { SearchDiv, SearchInput, SearchInputSelect, SelectBox, UiTable } from "@common/business_components";
import { Button } from "@common/components/ui";
import { useEffect, useRef, useState } from "react";

export default function ProcessFacilitySearch() {
  const {FlowRateSearch, FlowRateList} = useFoStore((state) => state);

  // 상단바 관련
  const {
    flowRateSearchLabelArray, 
    selectPartData,
    selectUpdownData,
    selectOperationData,
    selectSearchYear,
    selectSidoData,
    selectSigunData,
  } = FlowRateSearch;

  // 그리드 관련
  const {
    upHeadList, 
    flowRateList
  } = FlowRateList;

  const inputRef = useRef<HTMLInputElement>(null);
  const [initValue, setInputValue] = useState('500');
  useEffect(()=>{
    console.log(initValue);
  }, [initValue]);
  
  const onSelectValue= (value: string) => {
    console.log(value);
  }
  return (
      <div className="m-8">
        <SearchDiv>
            <div className="grid grid-cols-12 gap-1 mx-4 w-4/5">
              <SelectBox className="col-span-3" label={flowRateSearchLabelArray[0] as string} selectArray={selectPartData} onSelectValue={onSelectValue} selectClass={undefined}/>
              <SelectBox className="col-span-3" label={flowRateSearchLabelArray[1] as string} selectArray={selectSidoData} onSelectValue={onSelectValue} selectClass={undefined}/>
              <SelectBox className="col-span-3" label={flowRateSearchLabelArray[2] as string} selectArray={selectSigunData} onSelectValue={onSelectValue} selectClass={undefined}/>
              <SearchInputSelect className="col-span-3" label={flowRateSearchLabelArray[3] as string} selectData={selectUpdownData} textValue={initValue} setText={setInputValue} onSelectValue={onSelectValue}/>
              <SearchInput className="col-span-3" label={flowRateSearchLabelArray[4] as string} ref={inputRef}/>
              <SelectBox className="col-span-3" label={flowRateSearchLabelArray[5] as string} selectArray={selectSearchYear} onSelectValue={onSelectValue} selectClass={undefined}/>
              <SelectBox className="col-span-3" label={flowRateSearchLabelArray[6] as string} selectArray={selectOperationData} onSelectValue={onSelectValue} selectClass={undefined}/>
            </div>
            <div className="w-1/5 mx-5 flex items-center justify-end">
              <Button className="mr-3" size="sm">
                엑셀다운로드
              </Button>
              <Button className="mr-3" size="sm">
                초기화
              </Button>
              <Button className="mr-3" size="sm">
                조회
              </Button>
            </div>
        </SearchDiv>
        <UiTable headName={""} tableData={flowRateList} headlist={upHeadList} pageSize={8} total={16} cellClick={undefined}>
          <HeadMakeColSpan upHeadList={upHeadList}/>
        </UiTable>
      </div>
  );
}
