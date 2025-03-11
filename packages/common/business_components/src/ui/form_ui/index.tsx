import React from "react";
import { FormControl, FormItem, FormLabel, FormMessage } from "../form";

const FormUi = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {label:string|undefined}
>(({children, label},ref)=>{
    return (
        <FormItem ref={ref}>
            {label?<FormLabel className="text-xl">{label}</FormLabel>:<></>}
            <FormControl>
            {children}
            </FormControl>
            <FormMessage />
        </FormItem>
    )
})
FormUi.displayName = 'FormUi';
export { FormUi };
