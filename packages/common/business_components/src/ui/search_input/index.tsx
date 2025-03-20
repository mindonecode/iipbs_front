import { Input, Label } from "@common/components";
import React from "react";

const SearchInput = React.forwardRef<HTMLInputElement, {className:string, label:string, textValue:string, setText:(val:string)=>void}>(({className, label, textValue, setText}, ref) => {
    const changeText=(e:React.ChangeEvent<HTMLInputElement>)=>{
        if(e?.target?.value) setText(e.target.value)
    }

    return (
        <div className={className+" flex"} >
            {label && <Label className="m-4 text-2xl w-1/4">{label}</Label>}
            <Input className="ml-8 w-3/4 text-lg" value={textValue} onChange={changeText}></Input>
        </div>
    )
});
export { SearchInput };
