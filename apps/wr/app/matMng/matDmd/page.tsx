"use client"


import {
  useForm
} from "react-hook-form"
import {
  zodResolver
} from "@hookform/resolvers/zod"
import * as z from "zod"

import {
  Calendar as CalendarIcon
} from "lucide-react"
import { Form, FormField, FormUi, ScrollArea, SelectBox } from "@common/business_components/ui"
import { Button, Input } from "@common/components/ui"
import { BaseForm } from "@/components/ui/matDmd/baseForm/component"
import { WqForm } from "@/components/ui/matDmd/wqForm/component"

const formSchema = z.object({
  ctpv: z.string(),
  sgg: z.string(),
  coNm: z.string().min(1).min(0).max(20),
  bznmNo: z.string().min(1).min(9).max(12),
  name_5973331634: z.string().min(1).min(6).max(20),
  telNo: z.string().min(8).max(12),
  dmdSel: z.string().min(1).min(0),
  dmdTmng: z.coerce.date(),
  dmdWq: z.string().min(1).optional(),
  useUsgCd: z.string(),
  wntUntprc: z.string().min(1),
  grssClfg: z.string().min(1),
  tn: z.string().min(1).optional(),
  combResdch: z.string().min(1),
  tp: z.string().min(1),
  trbt: z.string().min(1).optional(),
  ph: z.string().min(1),
  bod: z.string().min(1).optional(),
  clIonQnt: z.string().min(1),
  smll: z.string().min(1).optional(),
  cdtnv: z.string().min(1).optional(),
  crmty: z.string().min(1).optional(),
  rmrk: z.string().min(1)
});

export default function MyForm() {

  const form = useForm < z.infer < typeof formSchema >> ({
    resolver: zodResolver(formSchema),
    defaultValues: {
      "dmdTmng": new Date()
    },
  })

  function onSubmit(values: z.infer < typeof formSchema > ) {
    try {
      console.log(values);
      /*
      toast(
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      );*/
    } catch (error) {
      console.error("Form submission error", error);
    //  toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <>
    <div>
            <h1 className="pl-3 text-4xl" >수요처 정보 등록 </h1>
    </div>
   
    <div>
      <div>
            <h1 className="space-y-8 max-w-3xl mx-auto py-1 text-2xl" >정보입력 </h1>
      </div>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-3xl mx-auto py-10">

      <ScrollArea>
        <BaseForm >{form} </BaseForm>
        
        
        <WqForm> {form}</WqForm>
       
        <Button type="submit">Submit</Button>
        </ScrollArea>
      </form>
    </Form>
    </div>
    </>
  )
}