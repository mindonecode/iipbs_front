"use client"
import { HeadMakeColSpan } from "@/app/components/HeadMakeColSpan";
import { useFoStore } from "@/app/store";
import { SearchDiv, SearchInput, SearchInputSelect, SelectBox, UiTable } from "@common/business_components";
import { Button } from "@common/components/ui";
import { useRef, useState } from "react";
import ProcessFacilityInfoModal from "./modalFacilityInfo/page";

export default function ProcessFacilitySearch() {
  const {ProcessFacility, ProcessFacilityList} = useFoStore((state) => state);

  const {
    processFacilityLabelArray, 
    selectPartData,
    selectUpdownData,
    selectOperationData,
    selectFacilityPartData,
    selectSidoData,
    selectSigunData,
  } = ProcessFacility;

  const {
    upHeadList,
    processFacilityList
  } = ProcessFacilityList;

  // 그리드 관련
  const inputRef = useRef<HTMLInputElement>(null);
  const inputSelectRef=useRef<HTMLInputElement>(null);

   // 모달 상태 추가
  const [selectedRow, setSelectedRow] = useState<number | null>(null);
  
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

   // 셀 클릭 시 모달 표시
  const cellClick = (index: number) => {
    setSelectedRow(index); // 클릭한 행의 index 저장
  };

  // 모달 닫기
  const closeModal = () => {
    setSelectedRow(null);
  };

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
      <UiTable cellClick={cellClick} headName={""} tableData={processFacilityList} headlist={upHeadList} pageSize={8} total={16}>
        <HeadMakeColSpan upHeadList={upHeadList}/>
      </UiTable>
      {selectedRow !== null && (
        <div className="flex fixed inset-0 items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-[1200px] h-[800px]">
            <ProcessFacilityInfoModal />
            <Button onClick={closeModal} className="mt-4">
              닫기
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}