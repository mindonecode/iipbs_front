"use client"
import { HeadMakeColSpan } from "@/app/components/HeadMakeColSpan";
import { useFoStore } from "@/app/store";
import { SearchDiv, SearchInput, SearchInputSelect, SelectBox, UiTable } from "@common/business_components";
import { Button } from "@common/components/ui";
import { useRef, useState } from "react";
import ProcessFacilityInfoModal from "./modal/page";

export default function ProcessArea() {
  const {ProcessArea, ProcessAreaSearch} = useFoStore((state) => state) || { processAreaList: { processAreaList: [] }};
  const {
    processFacilityLabelArray, 
    selectPartData,
    selectUpdownData,
    selectOperationData,
    selectFacilityPartData,
    selectSidoData,
    selectSigunData,
  } = ProcessAreaSearch;

  const {
    upHeadList
  } = ProcessArea;

  const processAreaList = ProcessArea?.processAreaList || [];

  // 그리드 관련
  const inputRef = useRef<HTMLInputElement>(null);
  const inputSelectRef=useRef<HTMLInputElement>(null);

   // 모달 상태 추가
  const [selectedRow, setSelectedRow] = useState<number | null>(null);
  const [fcltyNm, setFcltyNm] = useState<string>("");
  const [fcltyCd, setFcltyCd] = useState<string>("");

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
    if (processAreaList[index]) {
      setFcltyNm(processAreaList[index].facilityName);
      setFcltyCd(processAreaList[index].facilityCd);
      setSelectedRow(index); // 클릭한 행의 index 저장
    }
  };

  // 모달 닫기
  const closeModal = () => {
    setSelectedRow(null);
  };

  return (
    <div className="m-8">
      <SearchDiv>
        <div className="grid grid-cols-12 gap-1 w-4/5 mx-4">
          <SelectBox className="col-span-3" label={processFacilityLabelArray[0] as string} selectArray={selectPartData} onSelectValue={onSelectValue} selectClass={undefined}/>
          <SelectBox className="col-span-3" label={processFacilityLabelArray[1] as string} selectArray={selectSidoData} onSelectValue={onSelectValue} selectClass={undefined}/>
          <SelectBox className="col-span-3" label={processFacilityLabelArray[2] as string} selectArray={selectSigunData} onSelectValue={onSelectValue} selectClass={undefined}/>
          <SearchInputSelect className="col-span-3" label={processFacilityLabelArray[3] as string} selectData={selectUpdownData} ref={inputSelectRef} onSelectValue={onSelectValue} textValue={""} setText={()=>{}}/>
          <SearchInput className="col-span-3" label={processFacilityLabelArray[4] as string} ref={inputRef}/>
          <SelectBox className="col-span-3" label={processFacilityLabelArray[5] as string} selectArray={selectOperationData} onSelectValue={onSelectValue} selectClass={undefined}/>
          <SelectBox className="col-span-3" label={processFacilityLabelArray[6] as string} selectArray={selectFacilityPartData} onSelectValue={onSelectValue} selectClass={undefined}/>
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
      <UiTable cellClick={(index: number | undefined) => cellClick(index!)} headName={""} tableData={processAreaList} headlist={upHeadList} pageSize={8} total={16}>
        <HeadMakeColSpan upHeadList={upHeadList}/>
      </UiTable>
      {selectedRow !== null && (
        <div className="flex fixed inset-0 items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-[1000px] h-[600px]">
            <Button onClick={closeModal} className="mt-1 mb-10 float-end w-5 h-10">
              X
            </Button>
            <ProcessFacilityInfoModal facilityCd={fcltyCd} fcltyName={fcltyNm}/>
          </div>
        </div>
      )}
    </div>
  );
}