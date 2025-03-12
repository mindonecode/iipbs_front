"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormField,
  FormUi,
  ScrollArea,
  SelectBox,
} from "@common/business_components/ui";
import { Button } from "@common/components/ui";
import {  CoRegForm } from "@/components/ui/matDmd/coRegForm/component";
import toast from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  ctpv: z.string(),
  sgg: z.string(),
  coNm: z.string().min(1).max(20),
  bznmNo: z.string().min(1).min(9).max(12),
  addr: z.string().min(1).min(6).max(20),
  telNo: z.string().min(8).max(12),

});

export default function MyForm() {


  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      coNm:'',
      bznmNo:'',
      addr:'',
      telNo:'',
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
     router.push('./dmdReg')
  //  <Link href='matMng/matDmd/dmdReg'></Link>
    } catch (error) {
      console.error("Form submission error", error);
       toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <>
        <div className="grid h-40 grid-cols-3 place-content-center">
        <h1 className="	col-start-2 col-span-1  text-4xl underline">
            수요처 정보입력
          </h1>
        </div>

      <div className="grid grid-cols-5 gap-4  overflow-hidden">
        <div className="col-span-1 "/>
        <div className="col-span-3  ">
          <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 max-w-3xl mx-auto"
            >
               <CoRegForm>{form}</CoRegForm> 

                {/* <WqForm> {form}</WqForm> */}

                <Button  type="submit">수요처등록</Button>
            </form>
          </Form>
          </div>
        </div>
        <div className="col-span-1 " />
      </div>
    </>
  );
}

