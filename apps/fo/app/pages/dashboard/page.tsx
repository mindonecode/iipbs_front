"use client"
import { useFoStore } from "@/app/store";
import { MainContentDiv, SearchDiv, SearchFormLeft, SearchFormRight, SearchInput, SelectBox, UITab } from "@common/business_components";
import { Button, TabsContent } from "@common/components/ui";
import { useRef, useState } from "react";
import ProcessFacilitySearch from "./facilityInfo/page";
import DashBoardChart from "./maingraph/page";

const tabList = [
  { value: 'facilityInfo', label: '시설정보 및 운영현황' },
  { value: 'mainGraph', label: '주요그래프' },
  { value: 'rainManage', label: '강우일 운영현황' },
  { value: 'drainageEquipment', label: '배수설비 정비현황' }
];

export default function DashBoard() {
  // 입력값 상태 관리
  const [partValue, setPartValue] = useState<string>("");
  const [sidoValue, setSidoValue] = useState<string>("");
  const [sigunValue, setSigunValue] = useState<string>("");
  const [searchYear, setSearchYear] = useState<string>("");
  const [fcltyName, setFcltyName] = useState<string>("");
  const {DashboardMain} = useFoStore((state) => state);

  const inputRef = useRef<HTMLInputElement>(null);
  const searchInputRef = useRef<HTMLDivElement & HTMLInputElement>(null);

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
      case 'searchYear':
        setSearchYear(val);
        break;
    }
  }

  const chkVal = () => {
    console.log('=== 검색 조건 ===');
    console.log('Part:', partValue);
    console.log('Sido:', sidoValue);
    console.log('Sigun:', sigunValue);
    console.log('Search Year:', searchYear);
    console.log('Fclty Name:', fcltyName);
  }

  const initVal = () => {
    console.log('=== 초기화 ===');
    // SelectBox 초기화 - 각 selectArray의 첫 번째 옵션 값 사용
    onSelectValue(selectPartData[0]?.val || "00", 'part');
    onSelectValue(selectSidoData[0]?.val || "00", 'sido');
    onSelectValue(selectSigunData[0]?.val || "00", 'sigun');
    onSelectValue(selectSearchYear[0]?.val || "00", 'searchYear');

    // SearchInputSelect 초기화
    setFcltyName("");
    
    // ref를 사용하여 input 값 초기화
    if (inputRef.current) {
      inputRef.current.value = "";
    }

    if (searchInputRef.current) {
      const input = searchInputRef.current.querySelector('input');
      if (input) {
        input.value = "";
      }
    }
  }
  
  const {
    topLabelArray,
    selectPartData,
    selectSearchYear,
    selectSidoData,
    selectSigunData,
  } = DashboardMain;

  return (
    <MainContentDiv>
      <SearchDiv>
        <SearchFormLeft>
          <SelectBox className="col-span-2" label={topLabelArray[0] as string} selectArray={selectPartData} onSelectValue={(val) => onSelectValue(val, 'part')} value={partValue} selectClass={undefined}/>
          <SelectBox className="col-span-2" label={topLabelArray[1] as string} selectArray={selectSidoData} onSelectValue={(val) => onSelectValue(val, 'sido')} value={sidoValue} selectClass={undefined}/>
          <SelectBox className="col-span-2" label={topLabelArray[2] as string} selectArray={selectSigunData} onSelectValue={(val) => onSelectValue(val, 'sigun')} value={sigunValue} selectClass={undefined}/>
          <SelectBox className="col-span-2" label={topLabelArray[3] as string} selectArray={selectSearchYear} onSelectValue={(val) => onSelectValue(val, 'searchYear')} value={searchYear} selectClass={undefined}/>
          <SearchInput className="col-span-2 flex items-center" label={topLabelArray[4] as string} textValue={fcltyName} setText={setFcltyName} />
        </SearchFormLeft>
        <SearchFormRight>
          <Button className="mr-2" size="sm" onClick={initVal}>
            초기화
          </Button>
          <Button className="mr-2" size="sm" onClick={chkVal}>
            조회
          </Button>
        </SearchFormRight>
      </SearchDiv>
      <UITab tabList={tabList} defaultValue="facilityInfo">
        <TabsContent value="facilityInfo">
          <ProcessFacilitySearch/>
        </TabsContent>
        <TabsContent value="mainGraph">
          <DashBoardChart/>
        </TabsContent>
        <TabsContent value="rainManage">
        </TabsContent>
        <TabsContent value="drainageEquipment">
        </TabsContent>
      </UITab>
    </MainContentDiv>
  );
}
