import { Label } from "@common/components";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./lib/selectBox";

/** 차트 기본 스타일 */
const styles = {
    selectBoxDiv : {
      marginLeft : '2rem',
      display : 'flex'
    } as React.CSSProperties,
    selectStyle : {
      marginLeft: '1rem',
      width:'8rem'
    } as React.CSSProperties,
    labelStyle : {
      margin:'0.8rem 0.8rem 0.8rem 0.8rem',
      fontSize: '10px',
    } as React.CSSProperties
}

interface SelectBox1 {
  text:string,
  val:string
}

function SelectBox(props: {label : string, selectArray: SelectBox1[]}){
  return (
    <div style={styles.selectBoxDiv}>
      <Label style={styles.labelStyle}>{props.label}</Label>
      <Select style={styles.selectStyle}>
        <SelectTrigger style={styles.selectStyle} className="w-[180px]">
          <SelectValue placeholder="Theme" />
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