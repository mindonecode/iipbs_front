"use client"
import { useFoStore } from "@/app/store";
import { CHART_FORM, type ChartConfig, MainChart, SearchDiv, SearchInput, SelectBox } from "@common/business_components";
import { Button } from "@common/components/ui";
import { useRef, useState } from "react";

const chartData1 = [
  {label : 'a', val : 123},
  {label : 'b', val : 14},
  {label : 'c', val : 16},
  {label : 'd', val : 163},
];
const chartData2 = [
  {label : 'a', val : 11},
  {label : 'b', val : 34},
  {label : 'c', val : 112},
  {label : 'd', val : 83},
];
const chartData3 = [
  {label : 'a', val : 23},
  {label : 'b', val : 21},
  {label : 'c', val : 87},
  {label : 'd', val : 102},
];

const chartData = {
  chartData1 : chartData1,
  chartData2 : chartData2,
  chartData3 : chartData3
}

/**
 * 차트 Config
 */
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

const onSelectValue=(val:string)=>{
  console.log(val);
}  

export default function ProcessFacilitySearch() {
  const {MainGraph} = useFoStore((state) => state);
  const inputRef = useRef<HTMLInputElement>(null);
  const {DashboardMain} = useFoStore((state) => state);
  const searchInputRef = useRef<HTMLDivElement & HTMLInputElement>(null);

  const [partValue, setPartValue] = useState<string>("");
  const [sidoValue, setSidoValue] = useState<string>("");
  const [sigunValue, setSigunValue] = useState<string>("");
  const [searchYear, setSearchYear] = useState<string>("");
  const [fcltyName, setFcltyName] = useState<string>("");

  const {
    chart_inflowRain
  } = MainGraph;

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
  
  return (
    <div className="m-8">
      <SearchDiv>
        <div style={{width:"90%"}} className="grid grid-cols-12 gap-1">
          <SelectBox className="col-span-2" label={topLabelArray[0] as string} selectArray={selectPartData} onSelectValue={(val) => onSelectValue(val, 'part')} selectClass={undefined}>
          </SelectBox>
          <SelectBox className="col-span-2" label={topLabelArray[1] as string} selectArray={selectSidoData} onSelectValue={(val) => onSelectValue(val, 'sido')} selectClass={undefined}>
          </SelectBox>
          <SelectBox className="col-span-2" label={topLabelArray[2] as string} selectArray={selectSigunData} onSelectValue={(val) => onSelectValue(val, 'sigun')} selectClass={undefined}>
          </SelectBox>
          <SelectBox className="col-span-2" label={topLabelArray[3] as string} selectArray={selectSearchYear} onSelectValue={(val) => onSelectValue(val, 'searchYear')} selectClass={undefined}>
          </SelectBox>
          <SearchInput className="col-span-2 flex items-center" label={topLabelArray[4] as string} textValue={fcltyName} setText={setFcltyName}/>
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

      <div className="grid grid-cols-12 gap-1 auto-rows-[350px]">
        <div className="col-span-6" >
          <MainChart chartForm={CHART_FORM.DN} chartConfig={chartConfig} chartData={chartData} chartTitle="유입하수량-강수량"></MainChart>
        </div>
        <div className="col-span-6">
          <MainChart chartForm={CHART_FORM.LINEBAR} chartConfig={chartConfig} chartData={chart_inflowRain} chartTitle="유입BOD-강수량"></MainChart>
        </div>
        <div className="col-span-6">
          <MainChart chartForm={CHART_FORM.LINE} chartConfig={chartConfig} chartData={chartData} chartTitle="총인유입T-P-방류T-P"></MainChart>
        </div>
        <div className="col-span-6">
          <MainChart chartForm={CHART_FORM.LINE} chartConfig={chartConfig} chartData={chartData} chartTitle="유입T-N-방류T-N"></MainChart>
        </div>
      </div>
    </div>
  );
}
