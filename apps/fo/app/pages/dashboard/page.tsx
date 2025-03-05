"use client"
import { useFoStore } from "@/app/store";
import { SearchDiv, SelectBox } from "@common/business_components";
import { Button } from "@common/components/ui";

/** 기본 스타일 */
const styles = {
    leftDiv : {
      width : '70%',
      margin : '1rem 0rem 1rem 0rem',
      display : 'flex'
    } as React.CSSProperties,
    rightDiv : {
      width : '30%',
      margin : '1rem 2rem 1rem 0rem',
    } as React.CSSProperties,
    searchBtn : {
      float : 'right',
      fontSize : '14px',
      marginRight : '0.8rem'
    } as React.CSSProperties,
  }

export default function DashBoard() {
  const {DashBoard} = useFoStore((state) => state);
  const {labelArray, selectData1, selectData2} = DashBoard;
  return (
      <div>
        <SearchDiv>
            <div style={styles.leftDiv}>
              <SelectBox label={labelArray[0] as string} selectArray={selectData1}>
              </SelectBox>
              <SelectBox label={labelArray[1] as string} selectArray={selectData2}>
              </SelectBox>
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
      </div>
  );
}
