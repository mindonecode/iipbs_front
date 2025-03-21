"use client"
import { HeadMakeColSpan } from "@/app/components/HeadMakeColSpan";
import { useFoStore } from "@/app/store";
import { SearchDiv, SearchInput, SearchInputSelect, SelectBox, UiTable } from "@common/business_components";
import { Button } from "@common/components/ui";
import { useRef, useState } from "react";

export default function ProcessFacilitySearch() {
  const {FlowRateSearch, FlowRateList} = useFoStore((state) => state);
  const inputRef = useRef<HTMLInputElement>(null);
  const inputSelectRef = useRef<HTMLInputElement>(null);
  const searchInputRef = useRef<HTMLDivElement & HTMLInputElement>(null);
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

  // 입력값 상태 관리
  const [partValue, setPartValue] = useState<string>("");
  const [sidoValue, setSidoValue] = useState<string>("");
  const [sigunValue, setSigunValue] = useState<string>("");
  const [capaValue, setCapaValue] = useState<string>("");
  const [updownValue, setUpdownValue] = useState<string>("");
  const [searchInputValue, setSearchInputValue] = useState<string>("");
  const [operationValue, setOperationValue] = useState<string>("");
  const [facilityPartValue, setFacilityPartValue] = useState<string>("");

  const onSelectValue = (val: string, type: string) => {
    switch(type) {
      case 'part':
        setPartValue(val);
        break;
      case 'sido':
        setSidoValue(val);
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
      case 'facilityPart':
        setFacilityPartValue(val);
        break;
      case 'search':
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
    console.log('Facility Part:', facilityPartValue);
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
  return (
      <div className="m-8">
        <SearchDiv>
            <div className="grid grid-cols-12 gap-1 mx-4 w-4/5">
              <SelectBox className="col-span-3" label={flowRateSearchLabelArray[0] as string} selectArray={selectPartData} onSelectValue={(val) => onSelectValue(val, 'part')} selectClass={undefined}/>
              <SelectBox className="col-span-3" label={flowRateSearchLabelArray[1] as string} selectArray={selectSidoData} onSelectValue={(val) => onSelectValue(val, 'sido')} selectClass={undefined}/>
              <SelectBox className="col-span-3" label={flowRateSearchLabelArray[2] as string} selectArray={selectSigunData} onSelectValue={(val) => onSelectValue(val, 'sigun')} selectClass={undefined}/>
              <SearchInputSelect className="col-span-3" label={flowRateSearchLabelArray[3] as string} selectData={selectUpdownData} textValue={capaValue} setText={setCapaValue} onSelectValue={(val) => onSelectValue(val, 'updown')}/>
              <SearchInput className={"col-span-3"} label={flowRateSearchLabelArray[4] as string} textValue={searchInputValue} setText={setSearchInputValue}/>
              <SelectBox className="col-span-3" label={flowRateSearchLabelArray[5] as string} selectArray={selectSearchYear} onSelectValue={(val) => onSelectValue(val, 'searchYear')} selectClass={undefined}/>
              <SelectBox className="col-span-3" label={flowRateSearchLabelArray[6] as string} selectArray={selectOperationData} onSelectValue={(val) => onSelectValue(val, 'operation')} selectClass={undefined}/>
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
        <UiTable headName={""} tableData={flowRateList} headlist={upHeadList} pageSize={8} total={16} cellClick={() => {}}>
          <HeadMakeColSpan upHeadList={upHeadList}/>
        </UiTable>
      </div>
  );
}
