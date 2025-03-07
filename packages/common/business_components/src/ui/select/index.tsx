import { Label } from "@common/components";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./lib/selectBox";

/** 차트 기본 스타일 */
const styles = {
    selectBoxDiv : {
      marginLeft : '2rem',
      display : 'flex'
    } as React.CSSProperties,
    labelStyle : {
      margin:'0.8rem 0.8rem 0.8rem 1rem',
      fontSize: '10px',
    } as React.CSSProperties
}

interface SelectBox1 {
  text:string,
  val:string
}

function SelectBox(props: {label : string, selectArray: SelectBox1[], styleClassName : string, styleSelect : React.CSSProperties}){
  const placeHolder = props.selectArray?.[0]?.text ?? "";

  return (
    <div className={props.styleClassName+" flex"} >
      {props.label && <Label style={styles.labelStyle}>{props.label}</Label>}
      <Select>
        <SelectTrigger style={props.styleSelect} className="">
          <SelectValue placeholder={placeHolder} />
        </SelectTrigger>
        <SelectContent>
          {props.selectArray.map((selectArray) => (
            <SelectItem key={selectArray.val} value={selectArray.val}>{selectArray.text}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )  
}

export { SelectBox };