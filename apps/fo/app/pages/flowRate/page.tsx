"use client"
import { HeadMakeColSpan } from "@/app/components/HeadMakeColSpan";
import { useFoStore } from "@/app/store";
import { MainContentDiv, SearchDiv, SearchFormLeft, SearchFormRight, SearchInput, SearchInputSelect, SelectBox, TableDiv, Title, UiTable } from "@common/business_components";
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
  const [searchYear, setSearchYear] = useState<string>("");

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
      <TableDiv>
        <UiTable headName={""} tableData={flowRateList} headlist={upHeadList} pageSize={8} total={16} cellClick={() => {}}>
          <HeadMakeColSpan upHeadList={upHeadList}/>
        </UiTable>
      </TableDiv>
    </MainContentDiv>
  );
}
