"use client"
import { useFoStore } from "@/app/store";
import type { FlowRateSearchType } from '@/app/store/flowRate'
import type { TableUpperProps } from "@/app/store/processFacility";
import { SearchDiv, SelectBox, UiTable } from "@common/business_components";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@common/business_components/ui/select/lib/selectBox";
import { Button, Input, Label, TableHead, TableRow } from "@common/components/ui";
import { flowRateSearchInitState } from './../../store/flowRate/index';

/** 기본 스타일 */
const styles = {
    leftDiv : {
      width : '80%',
      margin : '1rem 0rem 1rem 0rem',
    } as React.CSSProperties,
    rightDiv : {
      width : '20%',
      margin : '1rem 2rem 1rem 0rem',
    } as React.CSSProperties,
    searchBtn : {
      float : 'right',
      fontSize : '14px',
      marginRight : '0.8rem'
    } as React.CSSProperties,

    /** 패키지화 필요 */
    selectBoxDiv : {
      marginLeft : '2rem',
      display : 'flex'
    } as React.CSSProperties,
    labelStyle : {
      margin:'0.8rem 0.8rem 0.8rem 1rem',
      fontSize: '10px',
    } as React.CSSProperties,
    inputStyleShort : {
      width:'4rem',
      height:'2.5rem',
    } as React.CSSProperties,
    inputStyleLong : {
      width:'10rem',
      height:'2.5rem',
    } as React.CSSProperties,
    selectStyle : {
      marginLeft: '0.5rem',
      width:'5rem'
    } as React.CSSProperties,
    selectDefaultStyle : {
      marginLeft: '1rem',
      width:'10rem'
    } as React.CSSProperties,
  }

const headMakeColSpan = (upHeadList: TableUpperProps[]) => {
    return  ( <>
    <TableRow>{
    upHeadList.map((head: TableUpperProps) => 
      ( head.id==='publicMethod'?<TableHead rowSpan={2} className="w-1/16" key={head.id}>{head.title}</TableHead>:
        !head.upSequnce&&head.id!='facilityCapacity'&&head.id!='planInputWaterQlty'&&head.id!='designInputWaterQlty'?<TableHead rowSpan={2}key={head.id}>{head.title}</TableHead>:
        head.id=='facilityCapacity'||head.id=='planInputWaterQlty'||head.id=='designInputWaterQlty'?<TableHead rowSpan={2} className="w-13" key={head.id}>{head.title}</TableHead>:
        head.upName === 'upChangeRe'&& head.upSequnce=== 1?<TableHead className="w-75" key={head.id} rowSpan={1} colSpan={2}>{'행정구역'}</TableHead>:null))}
    </TableRow>
    <TableRow>
    {upHeadList.map((head: TableUpperProps, idx) =>{
      if(head.upName === 'upChangeRe'){
        if(idx==1){
          return <TableHead key={head.id} className="w-36">{head.title}</TableHead>;
        }
        else{
          return <TableHead key={head.id} className="w-40">{head.title}</TableHead>;
        }
      }
    })}
    </TableRow>
    </> )
  }

export default function ProcessFacilitySearch() {
  const {FlowRateSearch} = useFoStore((state) => state);

  // 상단바 관련
  const {
    flowRateSearchLabelArray, 
    selectPartData,
    selectUpdownData,
    selectOperationData,
    selectFacilityPartData,
    selectSidoData,
    selectSigunData,
  } = FlowRateSearch;

  // 그리드 관련
  const {upHeadList, processFacilityList} = useFoStore((state) => state);

  const upChangeRe= headMakeColSpan(upHeadList);

  return (
      <div className="m-8">
        <SearchDiv>
            <div style={styles.leftDiv} className="grid grid-cols-12 gap-1">
              <SelectBox styleSelect={styles.selectDefaultStyle} styleClassName="col-span-3" label={flowRateSearchLabelArray[0] as string} selectArray={selectPartData}>
              </SelectBox>
              <SelectBox styleSelect={styles.selectDefaultStyle} styleClassName="col-span-3" label={flowRateSearchLabelArray[1] as string} selectArray={selectSidoData}>
              </SelectBox>
              <SelectBox styleSelect={styles.selectDefaultStyle} styleClassName="col-span-3" label={flowRateSearchLabelArray[2] as string} selectArray={selectSigunData}>
              </SelectBox>
              <div className="col-span-3 flex" >
                {flowRateSearchLabelArray[3] && <Label style={styles.labelStyle}>{flowRateSearchLabelArray[3]}</Label>}
                <Input style={styles.inputStyleShort}></Input>
                <Select>
                  <SelectTrigger style={styles.selectStyle} className="w-[100px]">
                    <SelectValue placeholder={selectUpdownData?.[0]?.text ?? ""} />
                  </SelectTrigger>
                  <SelectContent>
                    {selectUpdownData.map((selectArray) => (
                      <SelectItem key={selectArray.val} value={selectArray.val}>{selectArray.text}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="col-span-3 flex" >
                {flowRateSearchLabelArray[4] && <Label style={styles.labelStyle}>{flowRateSearchLabelArray[4]}</Label>}
                <Input style={styles.inputStyleLong}></Input>
              </div>
              <SelectBox styleSelect={styles.selectDefaultStyle} styleClassName="col-span-3" label={flowRateSearchLabelArray[5] as string} selectArray={selectOperationData}>
              </SelectBox>
              <SelectBox styleSelect={styles.selectDefaultStyle} styleClassName="col-span-3" label={flowRateSearchLabelArray[6] as string} selectArray={selectFacilityPartData}>
              </SelectBox>
            </div>
            <div style={styles.rightDiv}>
              <Button style={styles.searchBtn} size="sm">
                엑셀다운로드
              </Button>
              <Button style={styles.searchBtn} size="sm">
                초기화
              </Button>
              <Button style={styles.searchBtn} size="sm">
                조회
              </Button>
            </div>
        </SearchDiv>
        <UiTable headName={""} publicReuseFacility={processFacilityList} headlist={upHeadList} pageSize={8} total={16}>
          {upChangeRe}
        </UiTable>
      </div>
  );
}
