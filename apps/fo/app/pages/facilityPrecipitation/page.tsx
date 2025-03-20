"use client"
import { HeadMakeColSpan } from "@/app/components/HeadMakeColSpan";
import { useFoStore } from "@/app/store";
import { SearchDiv, SearchInputSelect, SelectBox, UiTable } from "@common/business_components";
import { Button } from "@common/components/ui";
import { useRef, useState, useEffect } from "react";
import PrecipitationModal from "./modal/page";
import { SearchInput } from "@common/business_components";

export default function FacilityPrecipitation() {
  const {FacilityPrecipitation, FacilityPrecipitationSearch} = useFoStore((state) => state) || { processAreaList: { processAreaList: [] }};
  const {
    labelArray, 
    selectPartData,
    selectUpdownData,
    selectOperationData,
    selectFacilityPartData,
    selectSidoData,
    selectSigunData,
  } = FacilityPrecipitationSearch;

  const {
    upHeadList
  } = FacilityPrecipitation;

  const facilityPrecipitation = FacilityPrecipitation?.facilityPrecipitation || [];

  // 그리드 관련
  const inputRef = useRef<HTMLInputElement>(null);
  const inputSelectRef = useRef<HTMLInputElement>(null);
  const searchInputRef = useRef<HTMLDivElement & HTMLInputElement>(null);

   // 모달 상태 추가
  const [selectedRow, setSelectedRow] = useState<number | null>(null);
  const [fcltyNm, setFcltyNm] = useState<string>("");
  const [fcltyCd, setFcltyCd] = useState<string>("");

  // 입력값 상태 관리
  const [partValue, setPartValue] = useState<string>("");
  const [sidoValue, setSidoValue] = useState<string>("");
  const [sigunValue, setSigunValue] = useState<string>("");
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
    console.log('Updown:', updownValue);
    console.log('Search Input:', searchInputValue);
    console.log('Operation:', operationValue);
    console.log('Facility Part:', facilityPartValue);
  }

  useEffect(() => {
    if (searchInputRef.current) {
      const input = searchInputRef.current.querySelector('input');
      if (input) {
        const handleChange = (e: Event) => {
          const target = e.target as HTMLInputElement;
          onSelectValue(target.value, 'search');
        };

        input.addEventListener('input', handleChange);
        return () => {
          input.removeEventListener('input', handleChange);
        };
      }
    }
  }, []);

  const initVal = () => {
    console.log('=== 초기화 ===');
    // SelectBox 초기화 - 각 selectArray의 첫 번째 옵션 값 사용
    onSelectValue(selectPartData[0]?.val || "00", 'part');
    onSelectValue(selectSidoData[0]?.val || "00", 'sido');
    onSelectValue(selectSigunData[0]?.val || "00", 'sigun');
    onSelectValue(selectOperationData[0]?.val || "00", 'operation');
    onSelectValue(selectFacilityPartData[0]?.val || "00", 'facilityPart');
    
    // SearchInputSelect 초기화
    setUpdownValue("");
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
    if (facilityPrecipitation[index]) {
      setFcltyNm(facilityPrecipitation[index].facilityName);
      setFcltyCd(facilityPrecipitation[index].facilityCd);
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
          <SelectBox className="col-span-3" label={labelArray[0] as string} selectArray={selectPartData} onSelectValue={(val) => onSelectValue(val, 'part')} selectClass={undefined}/>
          <SelectBox className="col-span-3" label={labelArray[1] as string} selectArray={selectSidoData} onSelectValue={(val) => onSelectValue(val, 'sido')} selectClass={undefined}/>
          <SelectBox className="col-span-3" label={labelArray[2] as string} selectArray={selectSigunData} onSelectValue={(val) => onSelectValue(val, 'sigun')} selectClass={undefined}/>
          <SearchInputSelect className="col-span-3" label={labelArray[3] as string} selectData={selectUpdownData} ref={inputSelectRef} onSelectValue={(val) => onSelectValue(val, 'updown')} textValue={updownValue} setText={setUpdownValue}/>
          <SearchInput 
            className={"col-span-3"} 
            label={labelArray[4] as string}
            ref={searchInputRef}
          />
          <SelectBox className="col-span-3" label={labelArray[5] as string} selectArray={selectOperationData} onSelectValue={(val) => onSelectValue(val, 'operation')} selectClass={undefined}/>
          <SelectBox className="col-span-3" label={labelArray[6] as string} selectArray={selectFacilityPartData} onSelectValue={(val) => onSelectValue(val, 'facilityPart')} selectClass={undefined}/>
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
      <UiTable cellClick={(index: number | undefined) => cellClick(index!)} headName={""} tableData={facilityPrecipitation} headlist={upHeadList} pageSize={8} total={16}>
        <HeadMakeColSpan upHeadList={upHeadList}/>
      </UiTable>
      {selectedRow !== null && (
        <div className="flex fixed inset-0 items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-[1000px] h-[600px]">
            <Button onClick={closeModal} className="mt-1 mb-10 float-end w-5 h-10">
              X
            </Button>
            <PrecipitationModal facilityCd={fcltyCd} fcltyName={fcltyNm}/>
          </div>
        </div>
      )}
    </div>
  );
}