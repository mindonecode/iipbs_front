"use client"
import { useFoStore } from "@/app/store";
import type { TableUpperProps } from "@/app/store/processFacility";
import { SearchDiv, SelectBox, UiTable } from "@common/business_components";
import { Button, Input, Label, TableHead, TableRow } from "@common/components/ui";

/** 기본 스타일 */
const styles = {
    leftDiv : {
      width : '90%',
      margin : '1rem 0rem 1rem 0rem',
    } as React.CSSProperties,
    rightDiv : {
      width : '10%',
      margin : '1rem 2rem 1rem 0rem',
    } as React.CSSProperties,
    searchBtn : {
      float : 'right',
      fontSize : '14px',
      marginRight : '0.8rem'
    } as React.CSSProperties,

    /** 패키지화 필요 */
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
  const {DashboardMain, FcltyMain, FlowRateList} = useFoStore((state) => state);

  // 상단바 관련
  const {
    topLabelArray,
    selectPartData,
    selectSearchYear,
    selectSidoData,
    selectSigunData,
  } = DashboardMain;

  // fclty 관련
  const {
    upHeadListFclty,
    fcltyList
  } = FcltyMain;

  // 그리드 관련
  const {
    upHeadList, 
    flowRateList
  } = FlowRateList;

  const upChangeRe= headMakeColSpan(upHeadList);

  return (
      <div className="m-8">
        <SearchDiv>
            <div style={styles.leftDiv} className="grid grid-cols-12 gap-1">
              <SelectBox className="col-span-2" label={topLabelArray[0] as string} selectArray={selectPartData}>
              </SelectBox>
              <SelectBox className="col-span-2" label={topLabelArray[1] as string} selectArray={selectSidoData}>
              </SelectBox>
              <SelectBox className="col-span-2" label={topLabelArray[2] as string} selectArray={selectSigunData}>
              </SelectBox>
              <SelectBox className="col-span-2" label={topLabelArray[3] as string} selectArray={selectSearchYear}>
              </SelectBox>
              <div className="col-span-2 flex" >
                {topLabelArray[4] && <Label className="m-4 text-xs w-1/4">{topLabelArray[4]}</Label>}
                <Input style={styles.inputStyleLong}></Input>
              </div>
            </div>
            <div style={styles.rightDiv}>
              <Button style={styles.searchBtn} size="sm">
                초기화
              </Button>
              <Button style={styles.searchBtn} size="sm">
                조회
              </Button>
            </div>
        </SearchDiv>
        <UiTable headName={""} publicReuseFacility={fcltyList} headlist={upHeadListFclty} pageSize={0} total={0} children={undefined}>
        </UiTable>
        <UiTable headName={""} publicReuseFacility={flowRateList} headlist={upHeadList} pageSize={8} total={16}>
          {upChangeRe}
        </UiTable>
      </div>
  );
}
