"use client"
import { useFoStore } from "@/app/store";
import type { TableUpperProps } from "@/app/store/processFacility";
import { SearchDiv, SearchInput, SelectBox, UiTable } from "@common/business_components";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@common/components";
import { Button } from "@common/components/ui";
import { useRef, useState } from "react";

// 시설계획 table header 변경
const headMakeColSpanPlanFclty = (upHeadList: TableUpperProps[]) => {
  return  ( <>
    <TableRow>{
    upHeadList.map((head: TableUpperProps) => 
      (!head.upSequnce?<TableHead rowSpan={2}key={head.id}>{head.title}</TableHead>:
        head.upName === 'upChangeRe'&& head.upSequnce=== 1?<TableHead key={head.id} rowSpan={1} colSpan={7} style={{ whiteSpace: 'pre-line' }}>{'시설계획\n(금회)'}</TableHead>:null))}
    </TableRow>
    <TableRow>
      {upHeadList.map((head: TableUpperProps) =>
        (head.upName === 'upChangeRe'?<TableHead key={head.id}>{head.title}</TableHead>:null))}
    </TableRow>
    </> )
}

// 시설계획 table header 변경
const headMakeColSpanOperationStatus = (upHeadList: TableUpperProps[]) => {
  return  ( <>
    <TableRow>
      <TableHead rowSpan={1} colSpan={16} style={{ whiteSpace: 'pre-line' }}>{'23년도 운영실태'}</TableHead>
    </TableRow>
    <TableRow>{
    upHeadList.map((head: TableUpperProps) =>
    (head.upName === 'upChangeRe1'&&head.upSequnce===1?<TableHead key={head.id} rowSpan={2}colSpan={2} style={{ whiteSpace: 'pre-line' }}>{head.title}</TableHead>:
    !head.upSequnce?<TableHead rowSpan={2}key={head.id}>{head.title}</TableHead>:
    head.upName === 'upChangeRe2'&&head.upSequnce===1?<TableHead key={head.id} colSpan={3} style={{ whiteSpace: 'pre-line' }}>{'연간 운영실태'}</TableHead>:
    head.upName === 'upChangeRe3'&&head.upSequnce===1?<TableHead key={head.id} colSpan={3} style={{ whiteSpace: 'pre-line' }}>{'하절기 운영실태\n(6~8월)'}</TableHead>:
    head.upName === 'upChangeRe4'&&head.upSequnce===1?<TableHead key={head.id} colSpan={3} style={{ whiteSpace: 'pre-line' }}>{'동절기 운영실태\n(1~2월)'}</TableHead>:
    head.upName === 'upChangeRe5'&&head.upSequnce===1?<TableHead key={head.id} colSpan={4} style={{ whiteSpace: 'pre-line' }}>{'지하수유입량'}</TableHead>:null))}
    </TableRow>
    <TableRow>
      {upHeadList.map((head: TableUpperProps) =>
        (head.upName === 'upChangeRe2'||head.upName === 'upChangeRe3'||head.upName === 'upChangeRe4'||head.upName === 'upChangeRe5' ?<TableHead key={head.id}>{head.title}</TableHead>:null))}
    </TableRow>
    </> )
}

export default function ProcessFacilitySearch() {
 // 입력값 상태 관리
  const [partValue, setPartValue] = useState<string>("");
  const [sidoValue, setSidoValue] = useState<string>("");
  const [sigunValue, setSigunValue] = useState<string>("");
  const [searchYear, setSearchYear] = useState<string>("");
  const [fcltyName, setFcltyName] = useState<string>("");
  const {DashboardMain, FcltyMain, PlanFclty, OperationStatus} = useFoStore((state) => state);

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

  /**
   * 상단바 관련
   */
  const {
    topLabelArray,
    selectPartData,
    selectSearchYear,
    selectSidoData,
    selectSigunData,
  } = DashboardMain;

  // Tab1
  // fclty 관련
  const {
    upHeadListFclty,
    fcltyList
  } = FcltyMain;
  
  // 시설계획 관련
  const {
    upHeadListPlanFclty,
    planFcltyList
  } = PlanFclty;

  // 그리드 관련
  const {
    upHeadListOperationStatus,
    operationalStatusList
  } = OperationStatus;

  const upChangeRePlanFclty = headMakeColSpanPlanFclty(upHeadListPlanFclty);
  const upChangeHeadListOperationStatus = headMakeColSpanOperationStatus(upHeadListOperationStatus);
  return (
      <div className="m-8">
        <SearchDiv>
          <div style={{width:"90%"}} className="grid grid-cols-12 gap-1 mx-4 w-4/5">
            <SelectBox className="col-span-2" label={topLabelArray[0] as string} selectArray={selectPartData} onSelectValue={(val) => onSelectValue(val, 'part')} selectClass={undefined}/>
            <SelectBox className="col-span-2" label={topLabelArray[1] as string} selectArray={selectSidoData} onSelectValue={(val) => onSelectValue(val, 'sido')} selectClass={undefined}/>
            <SelectBox className="col-span-2" label={topLabelArray[2] as string} selectArray={selectSigunData} onSelectValue={(val) => onSelectValue(val, 'sigun')} selectClass={undefined}/>
            <SelectBox className="col-span-2" label={topLabelArray[3] as string} selectArray={selectSearchYear} onSelectValue={(val) => onSelectValue(val, 'searchYear')} selectClass={undefined}/>
            <SearchInput className="col-span-2 flex items-center" label={topLabelArray[4] as string} textValue={fcltyName} setText={setFcltyName} />
          </div>
          <div style={{width:"10%"}} className="flex items-center">
            <Button className="mr-2" size="sm" onClick={initVal}>
              초기화
            </Button>
            <Button className="mr-2" size="sm" onClick={chkVal}>
              조회
            </Button>
          </div>
        </SearchDiv>
        <UiTable headName={""} tableData={fcltyList} headlist={upHeadListFclty} pageSize={0} total={0} cellClick={()=>{} } children={undefined}/>
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-5">
             <Table>
              <TableHeader>
                {upChangeRePlanFclty}
              </TableHeader>
              <TableBody>
                {planFcltyList.map((el: { [key: string]: string | number | boolean },index) => (
                  <TableRow  key={index+"row"} >
                    {upHeadListPlanFclty.map((head) => (
                      <TableCell style={{ whiteSpace: 'pre-line' }} key={head.id+index}>{el[head.id]}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="col-span-7">
            <Table>
              <TableHeader>
                {upChangeHeadListOperationStatus}
              </TableHeader>
              <TableBody>
                {operationalStatusList.map((el: { [key: string]: string | number | boolean },index) => (
                  <TableRow  key={index+"row"} >
                    {upHeadListOperationStatus.map((head) => (
                      (head.id==='flowRate'&&index==0?<TableCell rowSpan={5} style={{ whiteSpace: 'pre-line' }} key={head.id+index}>{el[head.id]}</TableCell>:
                      head.id==='flowRate'&&index==5?<TableCell rowSpan={6} style={{ whiteSpace: 'pre-line' }} key={head.id+index}>{el[head.id]}</TableCell>:
                      head.id==='flowRate'&&index==11?<TableCell rowSpan={2} style={{ whiteSpace: 'pre-line' }} key={head.id+index}>{el[head.id]}</TableCell>:
                      (head.id==='groundWaterAvg'||head.id==='groundWaterSummer'||head.id==='groundWaterWinter'||head.id==='rdi')&&(index==0)?<TableCell rowSpan={7} style={{ whiteSpace: 'pre-line' }} key={head.id+index}>{el[head.id]}</TableCell>:
                      (head.id==='groundWaterAvg'||head.id==='groundWaterSummer'||head.id==='groundWaterWinter'||head.id==='rdi')&&(index==7)?<TableCell rowSpan={6} style={{ whiteSpace: 'pre-line' }} key={head.id+index}>{el[head.id]}</TableCell>:
                      head.id!='flowRate'&&head.id!='groundWaterAvg'&&head.id!='groundWaterSummer'&&head.id!='groundWaterWinter'&&head.id!='rdi'?<TableCell style={{ whiteSpace: 'pre-line' }} key={head.id+index}>{el[head.id]}</TableCell>:null)
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
  );
}
