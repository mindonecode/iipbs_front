"use client"
import { HeadMakeColSpan } from "@/app/components/HeadMakeColSpan";
import { useFoStore } from "@/app/store";
import { ContentsDiv, MainContentDiv, SearchDiv, SearchFormLeft, SearchFormRight, SearchInput, SearchInputSelect, SelectBox, TableDiv, Title, UiTable } from "@common/business_components";
import { Button } from "@common/components/ui";
import { useEffect, useRef, useState } from "react";
import FlowRateModal from "./modal/page";

export default function ProcessFacilitySearch() {
  const {Common, FlowRateSearch, FlowRateList, CommonActions} = useFoStore((state) => state);
  const inputRef = useRef<HTMLInputElement>(null);
  const inputSelectRef = useRef<HTMLInputElement>(null);
  const searchInputRef = useRef<HTMLDivElement & HTMLInputElement>(null);

  const {
    selectPartData,
    selectUpdownData,
    selectOperationData,
    selectSidoData,
    selectSigunData,
    selectSearchYear,
  } = Common;

  const {
    flowRateSearchLabelArray
  } = FlowRateSearch;

  // 그리드 관련
  const {
    upHeadList, 
    flowRateList
  } = FlowRateList;

  // 입력값 상태 관리
  const [partValue, setPartValue] = useState<string>("");
  const [sidoValue, setSidoValue] = useState<string>("");
  const [sigunValue, setSigunValue] = useState<string>("");
  const [capaValue, setCapaValue] = useState<string>("");
  const [updownValue, setUpdownValue] = useState<string>("");
  const [searchInputValue, setSearchInputValue] = useState<string>("");
  const [operationValue, setOperationValue] = useState<string>("");
  const [searchYear, setSearchYear] = useState<string>("");

     // 모달 상태 추가
  const [selectedRow, setSelectedRow] = useState<number | null>(null);
  const [fcltyNm, setFcltyNm] = useState<string>("");
  const [fcltyCd, setFcltyCd] = useState<string>("");

  const onSelectValue = (val: string, type: string) => {
    switch(type) {
      case 'part':
        setPartValue(val);
        break;
      case 'sido':
        setSidoValue(val);
        CommonActions.initializeSigunData(val);
        onSelectValue(selectSigunData[0]?.val || "00", 'sigun');
        break;
      case 'sigun':
        setSigunValue(val);
        break;
      case 'updown':
        setUpdownValue(val);
        break;
      case 'operation':
        setOperationValue(val);
        break;
      case 'searchYear':
        setSearchYear(val);
        break;
      case 'searchInput':
        setSearchInputValue(val);
        break;
    }
  }
  
  const chkVal = () => {
    console.log('=== 검색 조건 ===');
    console.log('Part:', partValue);
    console.log('Sido:', sidoValue);
    console.log('Sigun:', sigunValue);
    console.log('Capa:', capaValue);
    console.log('Updown:', updownValue);
    console.log('Search Input:', searchInputValue);
    console.log('Operation:', operationValue);
    console.log('Search Year:', searchYear);
  }

  const initVal = () => {
    console.log('=== 초기화 ===');
    // SelectBox 초기화 - 각 selectArray의 첫 번째 옵션 값 사용
    onSelectValue(selectPartData[0]?.val || "00", 'part');
    onSelectValue(selectSidoData[0]?.val || "00", 'sido');
    onSelectValue(selectSigunData[0]?.val || "00", 'sigun');
    onSelectValue(selectOperationData[0]?.val || "00", 'operation');
    onSelectValue(selectUpdownData[0]?.val || "00", 'updown');
    onSelectValue(selectSearchYear[0]?.val || "00", 'searchYear');

    // SearchInputSelect 초기화
    setCapaValue("");
    setSearchInputValue("");
    
    // ref를 사용하여 input 값 초기화
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    if (inputSelectRef.current) {
      inputSelectRef.current.value = "";
    }
    if (searchInputRef.current) {
      const input = searchInputRef.current.querySelector('input');
      if (input) {
        input.value = "";
      }
    }
  }
// 셀 클릭 시 모달 표시
  const cellClick = (index: number) => {
    if (flowRateList[index]) {
      setFcltyNm(flowRateList[index].facilityName);
      setFcltyCd(flowRateList[index].facilityCd);
      setSelectedRow(index); // 클릭한 행의 index 저장
    }
  };

  // 모달 닫기
  const closeModal = () => {
    setSelectedRow(null);
  };

  // 시도 데이터 초기화
  useEffect(() => {
    CommonActions.initializeSidoData();
    CommonActions.initializeSigunData(sidoValue);
  }, [CommonActions, sidoValue]);
  
  return (
    <MainContentDiv>
      <Title title="시설별 유량현황" />
      <SearchDiv>
        <SearchFormLeft>
          <SelectBox className="col-span-3" label={flowRateSearchLabelArray[0] as string} selectArray={selectPartData} onSelectValue={(val) => onSelectValue(val, 'part')} value={partValue} selectClass={undefined}/>
          <SelectBox className="col-span-3" label={flowRateSearchLabelArray[1] as string} selectArray={selectSidoData} onSelectValue={(val) => onSelectValue(val, 'sido')} value={sidoValue} selectClass={undefined}/>
          <SelectBox className="col-span-3" label={flowRateSearchLabelArray[2] as string} selectArray={selectSigunData} onSelectValue={(val) => onSelectValue(val, 'sigun')} value={sigunValue} selectClass={undefined}/>
          <SearchInputSelect className="col-span-3" label={flowRateSearchLabelArray[3] as string} selectData={selectUpdownData} textValue={capaValue} setText={setCapaValue} onSelectValue={(val) => onSelectValue(val, 'updown')} selectValue={updownValue}/>
          <SearchInput className={"col-span-3"} label={flowRateSearchLabelArray[4] as string} textValue={searchInputValue} setText={setSearchInputValue}/>
          <SelectBox className="col-span-3" label={flowRateSearchLabelArray[5] as string} selectArray={selectSearchYear} onSelectValue={(val) => onSelectValue(val, 'searchYear')} value={searchYear} selectClass={undefined}/>
          <SelectBox className="col-span-3" label={flowRateSearchLabelArray[6] as string} selectArray={selectOperationData} onSelectValue={(val) => onSelectValue(val, 'operation')} value={operationValue} selectClass={undefined}/>
        </SearchFormLeft>
        <SearchFormRight>
          <Button className="mr-3" size="sm">
            엑셀다운로드
          </Button>
          <Button className="mr-3" size="sm" onClick={initVal}>
            초기화
          </Button>
          <Button className="mr-3" size="sm" onClick={chkVal}>
            조회
          </Button>
        </SearchFormRight>
      </SearchDiv>
      <ContentsDiv>
        <UiTable headName={""} tableData={flowRateList} headlist={upHeadList} pageSize={8} total={16} cellClick={cellClick}>
          <HeadMakeColSpan upHeadList={upHeadList}/>
        </UiTable>
      </ContentsDiv>
      {selectedRow !== null && (
        <div className="flex fixed inset-0 items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative bg-white p-6 rounded-lg w-[1100px] h-[750px] shadow-2xl">
            <button 
              onClick={closeModal} 
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full
                       bg-gray-100 text-gray-600 hover:bg-red-500 hover:text-white
                       transform transition-all duration-200 ease-in-out hover:scale-110
                       focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
              aria-label="Close modal"
            >
              <svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <FlowRateModal facilityCd={fcltyCd} fcltyName={fcltyNm}/>
          </div>
        </div>
      )}
    </MainContentDiv>
  );
}
