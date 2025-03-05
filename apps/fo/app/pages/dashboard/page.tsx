import { SearchDiv, SelectBox, UiTable } from "@common/business_components";
import { Button } from "@common/components/ui";
import { StoreProvider } from "../../store";

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

/**
 * selectBox data
 */
const selectData1 = [
  { text: "January", val: '00'},
  { text: "February", val: '01'},
  { text: "March", val: '03'},
  { text: "April", val: '04'},
  { text: "May", val: '05'},
  { text: "June", val: '06'},
]

const selectData2 = [
  { text: "January", val: '00'},
  { text: "February", val: '01'},
  { text: "March", val: '03'},
  { text: "April", val: '04'},
  { text: "May", val: '05'},
  { text: "June", val: '06'},
]

const labelArray = ['구분', '시도', '시군구'];

export default function DashBoard() {
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
