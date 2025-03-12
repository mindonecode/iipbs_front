import { useWrStore } from "@/app/store";
import { selectClass } from "@/app/store/rainReuseFacilityInsert";
import { DatePicker, FormField, FormItem, FormLabel, FormUi, SelectBox } from "@common/business_components";
import {  Input } from "@common/components";
import { useState } from "react";

export function DmdRegForm(form: any) {
  const { dmd } = useWrStore((state) => state);
  
    const [dmdDate, setDmdDate] = useState(new Date())


  const onChangeDate = (val: Date|undefined) => {
    if(val)setDmdDate(val)
  }
  
  return (
    <>
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
         <DatePicker mode={"single"} field={{ value: dmdDate, onChange: onChangeDate }} />
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
            <SelectBox selectClass={selectClass} label={""} selectArray={dmd.selectUsg} onSelectValue={field.onChange} className={""} />
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
        
       <div className="grid grid-cols-5">
        <h1 className="	col-start-3 col-span-1  pl-5 text-2xl">
            요구수질
          </h1>
        </div>
      <div className="grid grid-cols-12 gap-4">
     
        <div className="col-span-6">
          <FormField
            control={form.control}
            name="grssClfg"
            render={({ field }) => (
              <FormUi label="총대장균군">
                <Input placeholder="10" type="text" {...field} />
              </FormUi>
            )}
          />
        </div>

        <div className="col-span-6">
          <FormField
            control={form.control}
            name="tn"
            render={({ field }) => (
              <FormUi label="총질소">
                <Input placeholder="10" type="text" {...field} />
              </FormUi>
            )}
          />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-6">
          <FormField
            control={form.control}
            name="combResdch"
            render={({ field }) => (
              <FormUi label="결합잔류염소">
                <Input placeholder="10" type="text" {...field} />
              </FormUi>
            )}
          />
        </div>

        <div className="col-span-6">
          <FormField
            control={form.control}
            name="tp"
            render={({ field }) => (
              <FormUi label="총인">
                <Input placeholder="10" type="text" {...field} />
              </FormUi>
            )}
          />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-6">
          <FormField
            control={form.control}
            name="trbt"
            render={({ field }) => (
              <FormUi label="탁도">
                <Input placeholder="10" type="text" {...field} />
              </FormUi>
            )}
          />
        </div>

        <div className="col-span-6">
          <FormField
            control={form.control}
            name="ph"
            render={({ field }) => (
              <FormUi label="수소이온농도">
                <Input placeholder="10" type="text" {...field} />
              </FormUi>
            )}
          />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-6">
          <FormField
            control={form.control}
            name="bod"
            render={({ field }) => (
              <FormUi label="생물학적 산소요구량">
                <Input placeholder="10" type="text" {...field} />
              </FormUi>
            )}
          />
        </div>

        <div className="col-span-6">
          <FormField
            control={form.control}
            name="clIonQnt"
            render={({ field }) => (
              <FormUi label="염화물">
                <Input placeholder="10" type="text" {...field} />
              </FormUi>
            )}
          />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-6">
          <FormField
            control={form.control}
            name="smll"
            render={({ field }) => (
              <FormUi label="냄새">
                <Input placeholder="10" type="text" {...field} />
              </FormUi>
            )}
          />
        </div>

        <div className="col-span-6">
          <FormField
            control={form.control}
            name="cdtnv"
            render={({ field }) => (
              <FormUi label="전기전도도">
                <Input placeholder="10" type="text" {...field} />
              </FormUi>
            )}
          />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-6">
          <FormField
            control={form.control}
            name="crmty"
            render={({ field }) => (
              <FormUi label="색도">
                <Input placeholder="10" type="text" {...field} />
              </FormUi>
            )}
          />
        </div>

        <div className="col-span-6">
          <FormField
            control={form.control}
            name="rmrk"
            render={({ field }) => (
              <FormUi label="비고">
                <Input placeholder="10" type="text" {...field} />
              </FormUi>
            )}
          />
        </div>
      </div>


      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-6">
          <FormField
            control={form.control}
            name="crmty"
            render={({ field }) => (
              <FormUi label="색도">
                <Input placeholder="10" type="text" {...field} />
              </FormUi>
            )}
          />
        </div>

        <div className="col-span-6">
          <FormField
            control={form.control}
            name="rmrk"
            render={({ field }) => (
              <FormUi label="비고">
                <Input placeholder="10" type="text" {...field} />
              </FormUi>
            )}
          />
        </div>
      </div>

    </>
  );
}
