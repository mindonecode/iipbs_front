import { FileUpload, FormControl, FormField, FormItem, FormLabel, FormMessage, SelectBox } from "@common/business_components";
import { DatePicker } from "@common/components";
import { Input } from "@common/components";


export type typeOfForm ={
  labelName: string;
  type: string;
  placeholder:any;
  formName: string;
  selectValue:selectValue|undefined;
}
type onSelectValue = (val:string) => void;
export type selectValue ={
  label:string,
  value:{ text: string; val: string }[],
  fun:onSelectValue 
}


export function IteraterFrom(formData:typeOfForm[],form:any , formClass:string   ){

  const formItem =(data:typeOfForm,field:any)=>{
    let tag
    if(data.type==='select'){
      tag= (data.selectValue ? <SelectBox className='' label={data.selectValue.label} selectArray={data.selectValue.value} onSelectValue={data.selectValue.fun}   >{...form}</SelectBox> : null)
    }else if(data.type==='date'){
      tag =(<DatePicker mode="single" {...field} />)
    }else{
      tag=(<Input className ='w-64'placeholder= {data.placeholder} type="" {...field} />)
    }
    return tag;
  } 
  
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
                      {formItem(data,field)} 
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
          ))}
        </>
      );
    };