"use client"
import { HeadMakeColSpan } from "@/app/components/HeadMakeColSpan";
import { useFoStore } from "@/app/store";
import { MainContentDiv, SearchDiv, SearchFormLeft, SearchFormRight, SearchInput, SearchInputSelect, SelectBox, TableDiv, UiTable, Title } from "@common/business_components";
import { Button } from "@common/components/ui";
import { useRef, useState } from "react";
import ProcessFacilityInfoModal from "./modal/page";

export default function ProcessFacilitySearch() {
  const {ProcessFacility, ProcessFacilityList} = useFoStore((state) => state) || { ProcessFacilityList: { processFacilityList: [] }};
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
    upHeadList
  } = ProcessFacilityList;

  const processFacilityList = ProcessFacilityList?.processFacilityList || [];

  // 그리드 관련
  const inputRef = useRef<HTMLInputElement>(null);
  const searchInputRef = useRef<HTMLDivElement & HTMLInputElement>(null); 
  const inputSelectRef=useRef<HTMLInputElement>(null);

  const [partValue, setPartValue] = useState<string>("");
  const [sidoValue, setSidoValue] = useState<string>("");
  const [sigunValue, setSigunValue] = useState<string>("");
  const [updownValue, setUpdownValue] = useState<string>("");
  const [capaValue, setCapaValue] = useState<string>("");
  const [fcltyName, setFcltyName] = useState<string>("");
  const [operationValue, setOperationValue] = useState<string>("");
  const [facilityPartValue, setFacilityPartValue] = useState<string>("");

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
    }
  }
  
  const chkVal = () => {
    console.log('=== 검색 조건 ===');
    console.log('Part:', partValue);
    console.log('Sido:', sidoValue);
    console.log('Sigun:', sigunValue);
    console.log('Updown:', updownValue);
    console.log('Capa:', capaValue);
    console.log('Fclty Name:', fcltyName);
    console.log('Operation:', operationValue);
    console.log('Facility Part:', facilityPartValue);
  }

  const initVal = () => {
    console.log('=== 초기화 ===');
    // SelectBox 초기화 - 각 selectArray의 첫 번째 옵션 값 사용
    onSelectValue(selectPartData[0]?.val || "00", 'part');
    onSelectValue(selectSidoData[0]?.val || "00", 'sido');
    onSelectValue(selectSigunData[0]?.val || "00", 'sigun');
    onSelectValue(selectUpdownData[0]?.val || "00", 'updown');
    onSelectValue(selectOperationData[0]?.val || "00", 'operation');
    onSelectValue(selectFacilityPartData[0]?.val || "00", 'facilityPart');

    // SearchInputSelect 초기화
    setFcltyName("");
    setCapaValue("");

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

  // 셀 클릭 시 모달 표시
  const cellClick = (index: number) => {
    const facility = processFacilityList[index];
    if (facility) {
      setFcltyNm(facility.facilityName);
      setFcltyCd(facility.facilityCd);
      setSelectedRow(index); // 클릭한 행의 index 저장
    }
  };

  // 모달 닫기
  const closeModal = () => {
    setSelectedRow(null);
  };

  return (
    <MainContentDiv>
      <Title title="처리시설 시설정보" />
      <SearchDiv>
        <SearchFormLeft>
          <SelectBox className="col-span-3" label={processFacilityLabelArray[0] as string} selectArray={selectPartData} onSelectValue={(val) => onSelectValue(val, 'part')} value={partValue} selectClass={undefined}/>
          <SelectBox className="col-span-3" label={processFacilityLabelArray[1] as string} selectArray={selectSidoData} onSelectValue={(val) => onSelectValue(val, 'sido')} value={sidoValue} selectClass={undefined}/>
          <SelectBox className="col-span-3" label={processFacilityLabelArray[2] as string} selectArray={selectSigunData} onSelectValue={(val) => onSelectValue(val, 'sigun')} value={sigunValue} selectClass={undefined}/>
          <SearchInputSelect className="col-span-3" label={processFacilityLabelArray[3] as string} selectData={selectUpdownData} ref={inputSelectRef} onSelectValue={(val) => onSelectValue(val, 'updown')} textValue={capaValue} setText={setCapaValue} selectValue={updownValue}/>
          <SearchInput className="col-span-3" label={processFacilityLabelArray[4] as string} textValue={fcltyName} setText={setFcltyName}/>
          <SelectBox className="col-span-3" label={processFacilityLabelArray[5] as string} selectArray={selectOperationData} onSelectValue={(val) => onSelectValue(val, 'operation')} value={operationValue} selectClass={undefined}/>
          <SelectBox className="col-span-3" label={processFacilityLabelArray[6] as string} selectArray={selectFacilityPartData} onSelectValue={(val) => onSelectValue(val, 'facilityPart')} value={facilityPartValue} selectClass={undefined}/>
        </SearchFormLeft>
        <SearchFormRight>
          <Button className="px-4 py-2 bg-blue-600 text-white rounded-sm text-sm font-medium hover:bg-blue-700" size="sm">
            엑셀다운로드
          </Button>
          <Button className="px-4 py-2 bg-blue-600 text-white rounded-sm text-sm font-medium hover:bg-blue-700" size="sm" onClick={initVal}>
            초기화
          </Button>
          <Button className="px-4 py-2 bg-blue-600 text-white rounded-sm text-sm font-medium hover:bg-blue-700" size="sm" onClick={chkVal}>
            조회
          </Button>
        </SearchFormRight>
      </SearchDiv>
      <TableDiv>
        <UiTable cellClick={(index: number | undefined) => index !== undefined && cellClick(index)} headName={""} tableData={processFacilityList} headlist={upHeadList} pageSize={8} total={16}>
          <HeadMakeColSpan upHeadList={upHeadList}/>
        </UiTable>
      </TableDiv>
      {selectedRow !== null && (
        <div className="flex fixed inset-0 items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-[1200px] h-[800px]">
            <Button onClick={closeModal} className="mt-1 mb-10 float-end w-5 h-10">
              X
            </Button>
            <ProcessFacilityInfoModal facilityCd={fcltyCd} fcltyName={fcltyNm}/>
          </div>
        </div>
      )}
    </MainContentDiv>
  );
}