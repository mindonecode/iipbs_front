"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
} from "@common/business_components/ui";
import { Button } from "@common/components/ui";
import { DmdRegForm } from "@/components/ui/matDmd/dmdRegform/component";
import toast from "react-hot-toast";

const formSchema = z.object({
  dmdSel: z.string().min(1).min(0),
  dmdTmng: z.coerce.date(),
  dmdWq: z.string().min(1).optional(),
  useUsgCd: z.string(),
  wntUntprc: z.string().min(1),
  grssClfg: z.string().min(1),
  tn: z.string().min(1).optional(),
  combResdch: z.string().min(1).optional(),
  tp: z.string().min(1).optional(),
  trbt: z.string().min(1).optional(),
  ph: z.string().min(1).optional(),
  bod: z.string().min(1).optional(),
  clIonQnt: z.string().min(1).optional(),
  smll: z.string().min(1).optional(),
  cdtnv: z.string().min(1).optional(),
  crmty: z.string().min(1).optional(),
  rmrk: z.string().min(1).optional(),
});

export default function MyForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      dmdTmng: new Date(),
      dmdWq: '',
      useUsgCd: '',
      wntUntprc: '',
      grssClfg: '',
      tn: '',
      combResdch: '',
      tp: '',
      trbt:'',
      ph: '',
      bod: '',
      clIonQnt: '',
      smll: '',
      cdtnv: '',
      crmty: '',
      rmrk: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
      
      toast(
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      );
    } catch (error) {
      console.error("Form submission error", error);
      //  toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <>
        <div className="grid h-40 grid-cols-3 place-content-center">
        <h1 className="	col-start-2 col-span-1  text-4xl underline">
            수요 신청정보입력
          </h1>
        </div>

      <div className="grid grid-cols-5 gap-4  overflow-hidden">
        <div className="col-span-1 "/>
        <div className="col-span-3  max-h-[78vh] overflow-y-scroll ">
          <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 max-w-3xl mx-auto"
            >

           <DmdRegForm> {form}</DmdRegForm> 

                <Button  type="submit"> 수요신청</Button>
            </form>
          </Form>
          </div>
        </div>
        <div className="col-span-1 " />
      </div>
    </>
  );
}
