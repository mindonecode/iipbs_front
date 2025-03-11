import { FormField, FormUi, SelectBox } from "@common/business_components";
import { Input } from "@common/components";

export function baseFrom(form:any){
    

    return(

        <>
           <FormField
          control={form.control}
          name="ctpv"
          render={({ field }) => (
                <FormUi label="시도">
                <SelectBox selectClass={''} label={""} selectArray={rain.selectYN} onSelectValue={field.onChange} />
                </FormUi>

          )}
        />
        
        <FormField
          control={form.control}
          name="sgg"
          render={({ field }) => (
            <FormUi label="시군구">
            <SelectBox selectClass={''} label={""} selectArray={rain.selectYN} onSelectValue={field.onChange} />
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
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[240px] pl-3 text-left font-normal",
                    !field.value && "text-muted-foreground"
                  )}
                >
                  {field.value ? (
                    format(field.value, "PPP")
                  ) : (
                    <span>Pick a date</span>
                  )}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
                initialFocus
              />
            </PopoverContent>
          </Popover>
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
            <SelectBox selectClass={''} label={""} selectArray={rain.selectYN} onSelectValue={field.onChange} />
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