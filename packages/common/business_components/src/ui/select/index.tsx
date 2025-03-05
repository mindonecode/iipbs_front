import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./lib/selectBox";

interface SelectBox1 {
  text:string,
  val:string
}

function SelectBox(props: { selectArray: SelectBox1[]}){
  return (
    <Select>
      <SelectTrigger className="w-[100px]">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        {props.selectArray.map((selectArray) => (
          <SelectItem key={selectArray.val} value={selectArray.val}>{selectArray.text}</SelectItem>
        ))}
      </SelectContent>
    </Select>
  )  
}

export { SelectBox };
