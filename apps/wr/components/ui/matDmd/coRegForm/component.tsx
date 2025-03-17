import { useWrStore } from "@/app/store";
import { selectClass } from "@/app/store/rainReuseFacilityInsert";
import { DatePicker, FormField, FormItem, FormLabel, FormUi, SelectBox } from "@common/business_components";
import {  Button, Input } from "@common/components";
import { useState } from "react";

export function CoRegForm(form:any){
    
  const { dmd } = useWrStore((state) => state);

    return(

        <>
           <FormField
          control={form.control}
          name="ctpv"
          render={({ field }) => (
                <FormUi label="시도">
                <SelectBox selectClass={selectClass} label={""} selectArray={dmd.selectSido} onSelectValue={field.onChange} className={""} />
                </FormUi>

          )}
        />
        
        <FormField
          control={form.control}
          name="sgg"
          render={({ field }) => (
            <FormUi label="시군구">
            <SelectBox selectClass={selectClass} label={""} selectArray={dmd.selectSgg} onSelectValue={field.onChange} className={""} />
            </FormUi>
         
          )}
        />
        
        <FormField
          control={form.control}
          name="coNm"
          render={({ field }) => (
            <FormUi label="회사명">
                <Input placeholder="" type="text"  {...field} />
            </FormUi>
          )}
        />
        
        <FormField
          control={form.control}
          name="bznmNo"
          render={({ field }) => (
            <FormUi label="사업자번호">
                <Input 
                placeholder="a0123456789"
                type="text"
                {...field} />
            </FormUi>
          )}
        />
        
        <FormField
          control={form.control}
          name="addr"
          render={({ field }) => (
            <FormUi label="주소">
                <Input 
                placeholder="성북로24길 16"
                
                type="text"
                {...field} />
            </FormUi>
          )}
        />
        
          <FormField
            control={form.control}
            name="telNo"
            render={({ field }) => (
                <FormUi label="전화번호">
                <Input 
                placeholder="01033332222"
                
                type="text"
                {...field} />
            </FormUi>
          
            )}
          />
        
      
        </>
    )
}