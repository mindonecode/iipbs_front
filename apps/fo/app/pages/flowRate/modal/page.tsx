"use client"
import { useFoStore } from "@/app/store";
import { SelectBox } from "@common/business_components";
import { SearchDiv, TableDiv, UITab, UiTable } from "@common/business_components/ui";
import { DatePicker, Table, TableCell, TableHead, TableRow, TabsContent } from "@common/components/ui";
import { useState, useRef, useEffect } from "react";

const tabList = [
  { value: 'tab_term_year', label: '연간' },
  { value: 'tab_term_summer', label: '하절기' },
  { value: 'tab_term_winter', label: '동절기' },
  { value: 'tab_term_chuncheon', label: '청천시' },
  { value: 'tab_term_rain', label: '강우시' }
];

export default function FlowRateModal(props: { fcltyName: string; facilityCd: string; }) {
  // 그리드 관련
  const { Common, PrecipitationDetail } = useFoStore((state) => state);
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const startPickerRef = useRef<HTMLDivElement>(null);
  const endPickerRef = useRef<HTMLDivElement>(null);

  const {
    upHeadListPrecipitationDetail,
    gridListPrecipitationDetail
  } = PrecipitationDetail;

  const {
    selectFlowTerm,
    selectFlowPanel
  } = Common;

  const handleStartDateSelect = (day: Date | undefined) => {
    setStartDate(day ?? new Date());
    // 선택 후 팝오버를 닫기 위해 버튼 클릭을 시뮬레이션
    const button = startPickerRef.current?.querySelector('button');
    if (button) {
      setTimeout(() => button.click(), 0);
    }
  };

  const handleEndDateSelect = (day: Date | undefined) => {
    setEndDate(day ?? new Date());
    // 선택 후 팝오버를 닫기 위해 버튼 클릭을 시뮬레이션
    const button = endPickerRef.current?.querySelector('button');
    if (button) {
      setTimeout(() => button.click(), 0);
    }
  };

  return (
    <div className="bg-gray-50 p-8">
      <SearchDiv>
        <Table>
          <TableRow>
            <TableHead className="w-1/12">{'시설명'}</TableHead>
            <TableCell className="w-1/4">{props.fcltyName}</TableCell>
            <TableHead className="w-1/12">{'구분'}</TableHead>
            <TableCell className="w-1/5">
              <div className="grid grid-cols-12 gap-1">
                <div className="col-span-5">
                  <SelectBox 
                    selectArray={selectFlowTerm} 
                    value={selectFlowTerm[0]?.val} 
                    onSelectValue={(val) => { console.log(val); }} 
                    className="w-full" 
                    label="" 
                    selectClass="w-full p-1 border rounded bg-white"
                  />
                </div>
                <div className="col-span-7">
                  <SelectBox 
                    selectArray={selectFlowPanel} 
                    value={selectFlowPanel[0]?.val} 
                    onSelectValue={(val) => {console.log(val);}} 
                    className="w-full" 
                    label="" 
                    selectClass="w-full p-1 border rounded bg-white"
                  />
                </div>
              </div>
            </TableCell>
            <TableHead className="w-1/12">{'년/월'}</TableHead>
            <TableCell className="">
              <div className="grid grid-cols-12">
                <div className="col-span-5">
                  <div ref={startPickerRef}>
                    <DatePicker 
                      mode="single"
                      selected={startDate}
                      onSelect={handleStartDateSelect}
                      className="w-full p-1 border rounded bg-white"
                    />
                  </div>
                </div>
                <div className="col-span-2 text-center text-gray-500">~</div>
                <div className="col-span-5">
                  <div ref={endPickerRef}>
                    <DatePicker 
                      mode="single"
                      selected={endDate}
                      onSelect={handleEndDateSelect}
                      className="w-full p-1 border rounded bg-white"
                    />
                  </div>
                </div>
              </div>
            </TableCell>
          </TableRow>
        </Table>
      </SearchDiv>
      <TableDiv>
        <UITab tabList={tabList} defaultValue="tab_term_year">
          <TabsContent value="tab_term_year">
            <UiTable headName="강수현황" tableData={gridListPrecipitationDetail} headlist={upHeadListPrecipitationDetail} pageSize={0} total={0} cellClick={() => {}}>
              {null}
            </UiTable>
          </TabsContent>
          <TabsContent value="tab_term_summer">
          </TabsContent>
          <TabsContent value="tab_term_winter">
          </TabsContent>
          <TabsContent value="tab_term_chuncheon">
          </TabsContent>
          <TabsContent value="tab_term_rain">
          </TabsContent>
        </UITab>
      </TableDiv>
    </div>
  );
}