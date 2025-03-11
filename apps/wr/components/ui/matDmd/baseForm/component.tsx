import { useWrStore } from "@/app/store";
import { FormField, FormItem, FormLabel, FormUi, SelectBox } from "@common/business_components";
import { DatePicker, Input } from "@common/components";

export function BaseForm(form:any){
    
  const { dmd } = useWrStore((state) => state);

    return(

        <>
           <FormField
          control={form.control}
          name="ctpv"
          render={({ field }) => (
                <FormUi label="시도">
                <SelectBox selectClass={''} label={""} selectArray={dmd.selectSido} onSelectValue={field.onChange} />
                </FormUi>

          )}
        />
        
        <FormField
          control={form.control}
          name="sgg"
          render={({ field }) => (
            <FormUi label="시군구">
            <SelectBox selectClass={''} label={""} selectArray={dmd.selectSgg} onSelectValue={field.onChange} />
            </FormUi>
         
          )}
        />
        
        <FormField
          control={form.control}
          name="coNm"
          render={({ field }) => (
            <FormUi label="회사명">
                <Input placeholder="스타벅스" type="text"{...field} />
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
          name="name_5973331634"
          render={({ field }) => (
            <FormUi label="주소">
                <Input 
                placeholder="성북로24길 16"
                
                type=""
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
                
                type=""
                {...field} />
            </FormUi>
          
            )}
          />
            
        
        <FormField
          control={form.control}
          name="dmdSel"
          render={({ field }) => (
            <FormUi label="수요처명">
            <Input 
            placeholder="수요처명 검색"
            
             type="text"
            {...field} />
        </FormUi>
          )}
        />
        
      <FormField
      control={form.control}
      name="dmdTmng"
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel>요구시기</FormLabel>
         <DatePicker mode={"single"} {...field} />
        </FormItem>
      )}
    />
        
        <FormField
          control={form.control}
          name="dmdWq"
          render={({ field }) => (
            <FormUi label="요구수질">
            <Input 
            placeholder="55.22"
            
            type="text"
            {...field} />
        </FormUi>
           
          )}
        />
        
        <FormField
          control={form.control}
          name="useUsgCd"
          render={({ field }) => (
            <FormUi label="사용용도">
            <SelectBox selectClass={''} label={""} selectArray={dmd.selectUsg} onSelectValue={field.onChange} />
            </FormUi>
           
          )}
        />
        
        <FormField
          control={form.control}
          name="wntUntprc"
          render={({ field }) => (
            <FormUi label="희망단가">
            <Input 
            placeholder="1000000000000000"
            
            type="text"
            {...field} />
            </FormUi>
           
          )}
        />
        
        </>
    )
}