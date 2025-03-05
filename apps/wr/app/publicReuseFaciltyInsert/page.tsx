'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {UiTable } from '@common/business_components';
import {UiForm} from '@common/business_components';
import { Input, TableRow } from '@common/components';
import { TableHead } from '@common/components';
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@common/business_components/ui/form/lib/form";
import Style from "../style/PublicReuseFaciltyInsert.module.css";
import { useWrStore } from '../store';
import type { TableUpperProps } from '../store/publicReuseFaciltyInsert';




  const headMakeColSpan = (upHeadList: TableUpperProps[]) => {
    return  ( <>
    <TableRow>{
    upHeadList.map((head: TableUpperProps) => 
      (!head.upSequnce?<TableHead rowSpan={2}key={head.id}>{head.title}</TableHead>:
        head.upName === 'upChangeRe'&& head.upSequnce=== 1?<TableHead key={head.id} rowSpan={1} colSpan={3}>{'중축 개축 증축 '}</TableHead>:null))}
    </TableRow>
    <TableRow>
      {upHeadList.map((head: TableUpperProps) =>
        (head.upName === 'upChangeRe'?<TableHead key={head.id}>{head.title}</TableHead>:null))}
    </TableRow>
    </> )
  }

  


  export default function PublicReuseFaciltyInsert() {
  const {  upHeadList, publicReuseFacilityUper} = useWrStore((state) => state);
  const nodeList= headMakeColSpan(upHeadList);
  const total = 100;
 
  const formSchema= z.object({
    username: z.string().min(2).max(50),
  })

const form = useForm<z.infer<typeof formSchema>>({
  resolver: zodResolver(formSchema),
  defaultValues: {
    username: "",
  },
})

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  const formField = ()=>{
    return(
    <FormField
    control={form.control}
    name="username"
    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                        <Input placeholder="shadcn" {...field} />
                        </FormControl>
                        <FormDescription>
                        This is your public display name.
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
    )}
  />
 ) }

 const makeFromField= formField();


  return (  <>
  <div>
        <div className={Style.table}>
          <UiTable publicReuseFacility={publicReuseFacilityUper} headlist={upHeadList} pageSize={100} total={total}  headName={'test'}>
            {nodeList}
           </UiTable>
        </div>
          <div className={Style.form} >
          <UiForm onSubmit={onSubmit} form={form} formField={makeFromField}      ></UiForm>

          </div>
</div>     
          
          </>
  )}



