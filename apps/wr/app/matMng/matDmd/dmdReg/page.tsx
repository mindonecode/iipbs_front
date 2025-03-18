"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form } from "@common/business_components/ui";
import { Button } from "@common/components/ui";
import { DmdRegForm } from "@/components/ui/matDmd/dmdRegform/component";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  dmdSel: z.string().min(1),
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
  sply1: z.string().min(1).optional(),
  sply2: z.string().min(1).optional(),
  sply3: z.string().min(1).optional(),
  password: z.string().min(1),
});

export default function MyForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      dmdSel:'',
      dmdTmng: new Date(),
      dmdWq: "",
      useUsgCd: "",
      wntUntprc: "",
      grssClfg: "",
      tn: "",
      combResdch: "",
      tp: "",
      trbt: "",
      ph: "",
      bod: "",
      clIonQnt: "",
      smll: "",
      cdtnv: "",
      crmty: "",
      rmrk: "",
      sply1: "",
      sply2: "",
      sply3: "",
      password: "",
    },
  });

  const router = useRouter();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {

      toast.success("✅ 수요신청이 완료되었습니다.");
    await new Promise((resolve) => setTimeout(resolve, 3000));
    router.push("../../")
    } catch (error) {
      toast.error("수요신청을 다시입력해주시길 바랍니다.");
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
        <div className="col-span-1 " />
        <div className="col-span-3  max-h-[78vh] overflow-y-scroll ">
          <div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 max-w-3xl mx-auto"
              >
                <DmdRegForm> {form}</DmdRegForm>

                <Button type="submit"> 수요신청</Button>
              </form>
            </Form>
          </div>
        </div>
        <div className="col-span-1 ">
          <Toaster position="top-center" />
        </div>
      </div>
    </>
  );
}
