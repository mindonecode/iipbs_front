import { Input, Label } from "@common/components";
import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../select/lib/selectBox";
export type SelectDataType = {
    text: string;
    val: string;
}
/**
 * 검색 입력 및 선택 컴포넌트
 * @param className - string tailwindcss class
 * @param label - string label
 * @param selectData - SelectDataType[] 선택 데이터
 * @param onSelectValue - (val:string)=>void 선택 값 콜백
 * @param refs - React.forwardRef<HTMLInputElement> | null 입력값 ref
 * @returns React.FC
 */
const SearchInputSelect = React.forwardRef<HTMLInputElement, {className:string, label:string, selectData: SelectDataType[], onSelectValue:(val:string)=>void}>(({className, label, selectData, onSelectValue}, refs) => {
    return (
        <div className={className+" flex items-center"} >
            {label && <Label className="m-4 text-lg w-1/4">{label}</Label>}
            <div className="flex w-full items-center">
                <Input className="w-2/3 text-lg" ref={refs}/>
                <Select onValueChange={onSelectValue}>
                    <SelectTrigger className="ml-2 w-1/3 text-lg" >
                    <SelectValue placeholder={selectData?.[0]?.text ?? ""} />
                    </SelectTrigger>
                    {/* <SelectContent ref={refs ? (refs as unknown as RefType)?.selectValue : null}> */}
                    <SelectContent >
                    {selectData.map((selectArray) => (
                        <SelectItem key={selectArray.val} value={selectArray.val}>{selectArray.text}</SelectItem>
                    ))}
                    </SelectContent>
                </Select>
            </div>
        </div>
    )
});
export { SearchInputSelect };
