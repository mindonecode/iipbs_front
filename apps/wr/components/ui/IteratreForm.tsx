import { FormControl, FormField, FormItem, FormLabel, FormMessage, SelectBox } from "@common/business_components";
import { Input } from "@common/components";


type typeOfForm ={
  labelName: string;
  type: string;
  selectvlaue?: { text: string; val: string }[];
  placeholder:any
  formName: string;
}

type onSelectValue = (val:string) => void;



export function IteraterFrom(formData:typeOfForm[],form:any , formClass:string , onSelectValue:onSelectValue ){

    return (
        <>
          {formData.map((data: typeOfForm, index) => (
              <FormField key={`${index}+key`}
                control={form.control}
                name={data.formName}
                render={({ field }) => (
                  <FormItem className={formClass} >
                    <FormLabel>{data.labelName}</FormLabel>
                    <FormControl>
                      {data.selectvlaue == undefined ? (
                        <Input className ='w-64'placeholder= {data.placeholder} type="" {...field} />
                      ) : (
                        <SelectBox className='' label='' selectArray={data.selectvlaue} onSelectValue={onSelectValue}   ></SelectBox>
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