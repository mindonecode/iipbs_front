"use client";

import { SelectBox } from "@common/business_components";
import { DatePicker, FileUpload, FormUi, UiTable } from "@common/business_components/ui";
import { Form, FormField } from "@common/business_components/ui/form";
import { Button, Input, TableHead, TableRow } from "@common/components";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useWrStore } from "../../app/store/index";
import { selectClass, type TableUpperProps } from "@/app/store/rainReuseFacilityInsert";

const formSchema = z.object({
  username: z.string().min(2).max(50),
  facilityName: z.string().min(2).max(50),
});


 const headMakeColSpan = (upHeadList: TableUpperProps[]) => {
  return (<>
    <TableRow>{
      upHeadList.map((head: TableUpperProps) =>
      (!head.upSequnce ? <TableHead  rowSpan={2} key={head.id}>{head.title}</TableHead> :
        head.upName === 'upChangeRe' && head.upSequnce === 1 ? <TableHead key={head.id} rowSpan={1} colSpan={2}>{'운영대행기간'}</TableHead> : null))}
    </TableRow>
    <TableRow>
      {upHeadList.map((head: TableUpperProps) =>
        (head.upName === 'upChangeRe' ? <TableHead key={head.id}>{head.title}</TableHead> : null))}
    </TableRow>
  </>)
}
export function PublicReuseFaciltyFormInsert() {
  const { pubFac } = useWrStore((state) => state);
  const { pubMngUpHeadList, pubMngFacData,erctUswtrCd,cyclCd,seCd,buseCd,rprcsCd,buseMet,rprcLoCd} = pubFac;
const nodeList = headMakeColSpan(pubMngUpHeadList);


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  const onSelectValue=(val:string)=>{
    console.log(val)

}

  const [datePick, setDatePick] = useState(new Date())
  const [files, setFiles] = useState(null);

  return (
    <div  className="pl-3">
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            {/* <div className="flex justify-between items-center mx-3"> */}
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-2 flex items-top">
                <h1 className="pl-3 text-xl">○ 재이용시설 운영정보</h1>
              </div>

              <div className="col-span-3 ">
                <FormField
                  control={form.control}
                  name="facilityName"
                  render={({ field }) => (
                    <FormUi label="">
                      <Input  placeholder="하수처리장-1" type="" {...field} />
                    </FormUi>
                  )}
                />
              </div>
              <div className="col-span-1 col-start-11 pl-10 ">
                <Button className=" rounded-lg" type="submit">
                  신규등록
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-4 my-4">
              <div className="col-span-6">
                <FormField
                  control={form.control}
                  name="name_0211213336"
                  render={({  }) => (
                    <FormUi label="계통도">
                      <FileUpload files={files} setFiles={setFiles} fileTypes="PDF"></FileUpload>
                    </FormUi>
                  )}
                />
                  </div>
              <div className="col-span-6">
                <FormField
                  control={form.control}
                  name="name_0211213336"
                  render={({  }) => (
                    <FormUi label="평면도">
                      <FileUpload files={files} setFiles={setFiles} fileTypes="PDF"></FileUpload>
                    </FormUi>
                  )}
                />
              </div>
            </div>

            <div className="flex justify-between items-center mx-3 mb-3">
              <h1 className="pl-3 text-xl">○ 재이용시설 운영정보</h1>
              <Button className=" rounded-lg" >추가등록</Button>
            </div>
            <div>
              <UiTable
                tableData={pubMngFacData}
                headlist={pubMngUpHeadList}
                pageSize={100}
                total={-1}
                headName={""}
              >{nodeList}</UiTable>
            </div>
            <div>
              <h1 className="pl-3 text-xl mb-3">○ 재이용수 공급 가능량</h1>
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-3">
                  <FormField
                    control={form.control}
                    name="name_0943143371"
                    render={({ field }) => (
                      <FormUi label="시설용량(m³/일)">
                        <Input placeholder="" type="" {...field} />
                      </FormUi>
                    )}
                  />
                </div>

                <div className="col-span-3">
                  <FormField
                    control={form.control}
                    name="name_2007089217"
                    render={({ field }) => (
                      <FormUi label="하수처리량(m³/일)">
                        <Input placeholder="" type="" {...field} />
                      </FormUi>
                    )}
                  />
                </div>

                <div className="col-span-3">
                  <FormField
                    control={form.control}
                    name="name_1624679275"
                    render={({ field }) => (
                      <FormUi label="재이용량(m³/일)">
                        <Input placeholder="" type="" {...field} />
                      </FormUi>
                    )}
                  />
                </div>
                <div className="col-span-3">
                  <FormField
                    control={form.control}
                    name="name_1624679277"
                    render={({ field }) => (
                      <FormUi label="공급여유량(m³/일)">
                        <Input placeholder="" type="" {...field} />
                      </FormUi>
                    )}
                  />
                </div>
              </div>
            </div>
          </form>
        </Form>
      </div>
      {/* 차수별 등록 현황 폼 */}
      <div className="justify-between">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8  mx-auto w-full mt-7">
            <div className="grid grid-cols-12">
              <div className="col-span-5">
                <h1 className="pl-3 text-xl">
                  ○ 차수별 하수처리수 재이용 시설 현황
                </h1>
              </div>
              <div className="col-span-5 ">
                <FormField
                  control={form.control}
                  name="name_1486273033"
                  render={({ field }) => (
                    <FormUi label="">
                      <SelectBox label='등록차수' selectArray={cyclCd} className={""} selectClass={selectClass} onSelectValue={onSelectValue }></SelectBox>
                    </FormUi>
                  )}
                />
              </div>
              <div className="col-span-1 flex items-center mx-3">
                <Button className="rounded-lg">
                  신규등록
                </Button>
              </div>
            </div>
            <div>
              <h1 className="pl-3 text-xl">♦︎하수처리수 재이용 시설 현황</h1>
              <h1 className="bg-gray-400 text-xl text-center border-2 p-2 ">
                사업개요{" "}
              </h1>
              <h1 className="pl-4 text-xl my-0">1. 현황</h1>
            </div>

            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-3">
                <FormField
                  control={form.control}
                  name="name_8928357542"
                  render={({ field }) => (
                    <FormUi label="구분">
                      <SelectBox selectArray={seCd} className={""} label={""} selectClass={selectClass} onSelectValue={onSelectValue} />
                    </FormUi>
                  )}
                />
              </div>

              <div className="col-span-3">
                <FormField
                  control={form.control}
                  name="name_9484942814"
                  render={({ field }) => (
                    <FormUi label="사업방식">
                      <SelectBox selectArray={buseMet} className={""} label={""} selectClass={selectClass} onSelectValue={onSelectValue}/>
                    </FormUi>
                  )}
                />
              </div>

              <div className="col-span-3">
                <FormField
                  control={form.control}
                  name="name_2450741594"
                  render={({ field }) => (
                    <FormUi label="설치승인인가일">
                      <DatePicker field={{
                        value: datePick,
                        onChange: (date: Date | undefined): void =>{
                          if (date) setDatePick(date)
                        }
                      }} mode="single" {...field}/>
                    </FormUi>
                  )}
                />
              </div>
              <div className="col-span-3">
                <FormField
                  control={form.control}
                  name="name_2450741594"
                  render={({ field }) => (
                    <FormUi label="사업준공일">
                        <DatePicker field={{
                        value: datePick,
                        onChange: function (date: Date | undefined): void {
                          if (date) setDatePick(date)
                        }
                      }} mode="single" {...field} />
                    </FormUi>
                  )}
                />
              </div>
            </div>
            <h1 className="pl-4 text-xl">2. 사업비</h1>
            <div className="grid grid-cols-10 gap-4">
              <div className="col-span-2">
                <FormField
                  control={form.control}
                  name="name_7678668236"
                  render={({ field }) => (
                    <FormUi label="국고">
                      <Input placeholder="" type="" {...field} />
                    </FormUi>
                  )}
                />
              </div>

              <div className="col-span-2">
                <FormField
                  control={form.control}
                  name="name_7913744238"
                  render={({ field }) => (
                    <FormUi label="지방비">
                      <Input placeholder="" type="" {...field} />
                    </FormUi>
                  )}
                />
              </div>

              <div className="col-span-2">
                <FormField
                  control={form.control}
                  name="name_1368081408"
                  render={({ field }) => (
                    <FormUi label="민간투자비">
                      <Input placeholder="" type="" {...field} />
                    </FormUi>
                  )}
                />
              </div>
              <div className="col-span-2">
                <FormField
                  control={form.control}
                  name="name_1368081408"
                  render={({ field }) => (
                    <FormUi label="원인자부담금">
                      <Input placeholder="" type="" {...field} />
                    </FormUi>
                  )}
                />
              </div>
              <div className="col-span-2">
                <FormField
                  control={form.control}
                  name="name_1368081408"
                  render={({ field }) => (
                    <FormUi label="기타">
                      <Input placeholder="" type="" {...field} />
                    </FormUi>
                  )}
                />
              </div>
              <div className="w-64">
                <FormField
                  control={form.control}
                  name="name_1368081408"
                  render={({ field }) => (
                    <FormUi label="합계">
                      <Input placeholder="" type="" {...field} />
                    </FormUi>
                  )}
                />
              </div>
            </div>
            <h1 className="bg-gray-400 text-xl text-center border-2 p-2 ">
              재처리시설{" "}
            </h1>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-4">
                <FormField
                  control={form.control}
                  name="name_7678668236"
                  render={({ field }) => (
                    <FormUi label="시설용량(m³/일)">
                      <Input placeholder="" type="" {...field} />
                    </FormUi>
                  )}
                />
              </div>

              <div className="col-span-4">
                <FormField
                  control={form.control}
                  name="name_7913744238"
                  render={({ field }) => (
                    <FormUi label="주처리공법">
                      <Input placeholder="" type="" {...field} />
                    </FormUi>
                  )}
                />
              </div>

              <div className="col-span-4">
                <FormField
                  control={form.control}
                  name="name_1368081408"
                  render={({ field }) => (
                    <FormUi label="위치(주소)">
                      <Input placeholder="" type="" {...field} />
                    </FormUi>
                  )}
                />
              </div>
            </div>

            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-4 ">
                <FormField
                  control={form.control}
                  name="name_5139286452"
                  render={({ field }) => (
                    <FormUi label="재처리방식">
                      <SelectBox selectArray={rprcsCd} className={""} label={""} selectClass={selectClass} onSelectValue={onSelectValue }/>
                    </FormUi>
                  )}
                />
              </div>

              <div className="col-span-4">
                <FormField
                  control={form.control}
                  name="name_7233630277"
                  render={({ field }) => (
                    <FormUi label="위치(처리장 내외)">
                         <SelectBox selectArray={rprcLoCd} className={""} label={""} selectClass={selectClass} onSelectValue={onSelectValue}/>
                    </FormUi>
                  )}
                />
              </div>

              <div className="col-span-4">
                <FormField
                  control={form.control}
                  name="name_0973765174"
                  render={({ field }) => (
                    <FormUi label="메인공급펌프 용량">
                      <Input placeholder="" type="" {...field} />
                    </FormUi>
                  )}
                />
              </div>
            </div>

         <h1 className="bg-gray-400 text-xl text-center border-2 p-2 ">
              농축수관리{" "}
            </h1>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-4">
                <FormField
                  control={form.control}
                  name="name_7678668236"
                  render={({ field }) => (
                    <FormUi label="눙축수 발생량(m³/일)">
                      <Input placeholder="" type="" {...field} />
                    </FormUi>
                  )}
                />
              </div>

              <div className="col-span-4">
                <FormField
                  control={form.control}
                  name="name_7913744238"
                  render={({ field }) => (
                    <FormUi label="눙축수연계지점">
                      <Input placeholder="" type="" {...field} />
                    </FormUi>
                  )}
                />
              </div>

              <div className="col-span-4">
                <FormField
                  control={form.control}
                  name="name_1368081408"
                  render={({ field }) => (
                    <FormUi label="시설용량(m³/일)">
                      <Input placeholder="" type="" {...field} />
                    </FormUi>
                  )}
                />
              </div>
            </div>

            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-4 ">
                <FormField
                  control={form.control}
                  name="name_5139286452"
                  render={({ field }) => (
                    <FormUi label="눙축수처리방식">
                      <SelectBox selectArray={erctUswtrCd} className={""} label={""} selectClass={selectClass} onSelectValue={onSelectValue}/>
                    </FormUi>
                  )}
                />
              </div>

              <div className="col-span-4">
                <FormField
                  control={form.control}
                  name="name_7233630277"
                  render={({ field }) => (
                    <FormUi label="눙축수처리공법">
                      <Input placeholder="" type="" {...field} />
                    </FormUi>
                  )}
                />
              </div>

            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
