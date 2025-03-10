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
  React.HTMLAttributes<HTMLDivElement> & {label:string, className:string, selectArray:SelectBox1[]}
>(({ label, className, selectArray }, ref)=>{
  const placeHolder = selectArray?.[0]?.text ?? "";

  return (
    <div className={className+" flex items-center"} ref={ref}>
      {label && <Label className="m-4 text-lg w-1/4">{label}</Label>}
      <Select>
        <SelectTrigger className="ml-8 w-3/4 text-lg">
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
