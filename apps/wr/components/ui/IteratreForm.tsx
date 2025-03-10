import { FormControl, FormField, FormItem, FormLabel, FormMessage, SelectBox } from "@common/business_components";
import { Input } from "@common/components";


type typeOfForm ={
  labelName: string;
  type: string;
  selectvlaue?: { text: string; val: string }[];
  placeholder:any
  formName: string;
}

export function IteraterFrom(formData:typeOfForm[],form:any , colSpanValue:string){

    return (
        <>
          {formData.map((data: typeOfForm, index) => (
              <FormField key={`${index}+key`}
                control={form.control}
                name={data.formName}
                render={({ field }) => (
                  <FormItem className='col-span-4' >
                    <FormLabel>{data.labelName}</FormLabel>
                    <FormControl>
                      {data.selectvlaue == undefined ? (
                        <Input className ='w-64'placeholder= {data.placeholder} type="" {...field} />
                      ) : (
                        <SelectBox className='' label =''selectArray={data.selectvlaue}></SelectBox>
                      )}
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
          ))}
        </>
      );
    };