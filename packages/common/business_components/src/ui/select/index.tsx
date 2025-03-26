import { Label } from "@common/components";
import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./lib/selectBox";

/** 차트 기본 스타일 */
interface SelectBox1 {
  text:string,
  val:string
}

const SelectBox = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    label:string, 
    selectClass:string|undefined, 
    className:string, 
    selectArray:SelectBox1[], 
    onSelectValue:(val:string)=>void,
    value?: string
  }
>(({ label, className, selectClass, selectArray, onSelectValue, value }, ref)=>{
  const placeHolder = selectArray?.[0]?.text ?? "";

  return (
    <div className={className+" flex items-center"} ref={ref}>
      {label && <Label className="w-20 text-base text-gray-600">{label}</Label>}
      <Select onValueChange={onSelectValue} value={value}>
        <SelectTrigger className={selectClass?selectClass:"flex-1 p-2 border rounded"}>
          <SelectValue placeholder={placeHolder} />
        </SelectTrigger>
        <SelectContent>
          {selectArray.map((selectArray) => (
            <SelectItem key={selectArray.val} value={selectArray.val}>{selectArray.text}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )  
})

export { SelectBox };