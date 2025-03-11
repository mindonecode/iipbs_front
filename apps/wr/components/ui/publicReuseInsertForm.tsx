"use client";

import { SelectBox } from "@common/business_components";
import { DatePicker, FileUpload, FormUi, UiTable } from "@common/business_components/ui";
import { Form, FormField } from "@common/business_components/ui/form";
import { Button, Input } from "@common/components";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useWrStore } from "../../app/store/index";

const formSchema = z.object({
  username: z.string().min(2).max(50),
  facilityName: z.string().min(2).max(50),
});


// type typeOfForm = {
//   labelName: string;
//   type: string;
//   selectvlaue?: { text: string; val: string }[];
// }
export function PublicReuseFaciltyFormInsert() {
  const { pubFac } = useWrStore((state) => state);
  const { pubFacHeadList, publicReuseFacilityData } = pubFac;
  const total = 100;

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

  const selectboxValue = [
    { text: "1치", val: "1" },
    { text: "2차", val: "2" },
  ];
  const selectboxDivValue = [
    { text: "신규", val: "1" },
    { text: "진행", val: "2" },
  ];
  const selectboxBuisValue = [
    { text: "재정", val: "1" },
    { text: "만루", val: "2" },
  ];
  const selectboxReuseMethodValue = [
    { text: "물리적처리", val: "1" },
    { text: "생물학적처리", val: "2" },
  ];
  const selectboxMethodValue = [
    { text: "처리장연계", val: "1" },
    { text: "자쳬처리", val: "2" },
    { text: "자쳬+연계", val: "3" },
  ];

  const [datePick, setDatePick] = useState(new Date())
  const [files, setFiles] = useState(null);

  return (
    <div>
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            {/* <div className="flex justify-between items-center mx-3"> */}
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-2 flex items-top">
                <h1 className="pl-3 text-xl">○ 재이용시설 운영정보</h1>
              </div>

              <div className="col-span-6 ">
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
              <div className="col-span-2 col-end-13">
                <Button className="mr-3 rounded-lg" type="submit">
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
              <Button className="mr-3 rounded-lg" >추가등록</Button>
            </div>
            <div>
              <UiTable
                tableData={publicReuseFacilityData}
                headlist={pubFacHeadList}
                pageSize={100}
                total={total}
                headName={""}
                children={undefined}
              ></UiTable>
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
              <div className="col-span-6">
                <h1 className="pl-3 text-xl">
                  ○ 차수별 하수처리수 재이용 시설 현황
                </h1>
              </div>
              <div className="col-span-4">
                <FormField
                  control={form.control}
                  name="name_1486273033"
                  render={({ field }) => (
                    <FormUi label="">
                      <SelectBox label ='등록차수'selectArray={selectboxValue}></SelectBox>
                    </FormUi>
                  )}
                />
              </div>
              <div className="col-span-2 flex items-center mx-3">
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
                      <SelectBox selectArray={selectboxDivValue} />
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
                      <SelectBox selectArray={selectboxBuisValue}/>
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
                      <SelectBox selectArray={selectboxReuseMethodValue}/>
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
                      <Input placeholder="" type="" {...field} />
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
            
          </form>
        </Form>
      </div>
    </div>
  );
}
