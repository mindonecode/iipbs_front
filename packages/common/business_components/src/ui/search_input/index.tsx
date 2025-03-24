import { Input, Label } from "@common/components";
import React from "react";

const SearchInput = React.forwardRef<HTMLInputElement, {className:string, label:string, textValue:string, setText:(val:string)=>void}>(({className, label, textValue, setText}, ref) => {
    const changeText=(e:React.ChangeEvent<HTMLInputElement>)=>{
        if(e?.target?.value) setText(e.target.value)
    }

    return (
        <div className={className+" flex items-center"} >
            {label && <Label className="w-20 text-base text-gray-600">{label}</Label>}
            <Input className="flex-1 h-10 p-2 border rounded" value={textValue} onChange={changeText}></Input>
        </div>
    )
});
export { SearchInput };