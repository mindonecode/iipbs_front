import { Input, Label } from "@common/components";
import React from "react";

const SearchInput = React.forwardRef<
    HTMLDivElement& HTMLInputElement,
    React.HTMLAttributes<HTMLDivElement> & {className:string, label:string}>
(({className, label}, ref) => {
    console.log(ref);
    return (
        <div className={className+" flex"} >
            {label && <Label className="m-4 text-lg w-1/4">{label}</Label>}
            <Input className="ml-8 w-3/4 text-lg" ref={ref}></Input>
        </div>
    )
});
export { SearchInput };
