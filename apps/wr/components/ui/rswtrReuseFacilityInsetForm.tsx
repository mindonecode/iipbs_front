"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  SelectBox,
} from "@common/business_components/ui";
import { Input } from "@common/components/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { IteraterFrom } from "./IteratreForm";

const formSchema = z.object({
  username: z.string().min(2).max(50),
  facilityName: z.string().min(2).max(50),
});

type typeOfForm = {
  labelName: string;
  type: string;
  selectvlaue?: { text: string; val: string }[];
  formName: string;
};

export function RswtrReuseFaciltyInsertForm() {
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
    const selectYNValue = [
      { text: "Y", val: "1" },
      { text: "N", val: "2" },
    ];

    let homeWaterData = [
      {
        labelName: "종류",
        type: "check",
        selectvlaue: undefined,
        formName: "homeWaterData 1",
        placeholder:'ooo'
      },
      {
        labelName: "주요처리공정",
        type: "input",
        selectvlaue: undefined,
        formName: "homeWaterData 2",
         placeholder:'1,000,000'
      },
      {
        labelName: "이용용도",
        type: "check",
        selectvlaue: undefined,
        formName: "homeWaterData 2",
         placeholder:'1,000,000'
      }
    ];

    let filtrTrtmfct = [
      {
        labelName: "설치비지원 여",
        type: "input",
        selectvlaue: undefined,
        formName: "filtrTrtmfct 1",
        placeholder:'Y'
      },
      {
        labelName: "용량",
        type: "input",
        selectvlaue: undefined,
        formName: "filtrTrtmfct 2",
        placeholder:100000
      
      },
      {
          labelName: "처리공정",
          type: "input",
          selectvlaue: undefined,
          formName: "filtrTrtmfct 3",
          placeholder:'원수취수'
        },
    ];
    let instlCst = [
      {
        labelName: "지원여부",
        type: "input",
        selectvlaue: undefined,
        formName: "instlCst 1",
        placeholder:'Y'
      },
      {
        labelName: "지원여부(원)",
        type: "input",
        selectvlaue: undefined,
        formName: "instlCst 2",
        placeholder:1000000
      },
    ];
    let greenBuilding = [
      {
        labelName: "설치완료일",
        type: "chek",
        selectvlaue: selectYNValue ,
        formName: "greenBuilding 1",
         placeholder:'Y'
      },
      {
        labelName: "인증년도",
        type: "input",
        selectvlaue: undefined,
        formName: " greenBuilding 2",
         placeholder:'2024'
      },
      {
          labelName: "인증번호",
          type: "input",
          selectvlaue: undefined,
          formName: "greenBuilding 3",
          placeholder:'wr123456789'
        },
        {
          labelName: "인증등급",
          type: "input",
          selectvlaue: undefined,
          formName: "greenBuilding 4",
          placeholder:'A'
        },
    ];

  let baseInfo = [
    {
      labelName: "설치완료일",
      type: "input",
      selectvlaue: undefined ,
      formName: "baseInfo 1",
       placeholder:'2022-1010'
    },
    {
      labelName: "설치비(월)",
      type: "input",
      selectvlaue: undefined,
      formName: " baseInfo 2",
       placeholder:'10000000'
    },
    {
      labelName: "물사용량(m³)",
      type: "input",
      selectvlaue: undefined,
      formName: " baseInfo 2",
       placeholder:'10000000'
    },
    {
      labelName: "의무대상 물사용량(m³)",
      type: "input",
      selectvlaue: undefined,
      formName: " baseInfo 2",
       placeholder:'10000000'
    }
    
  ];

  return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          {/* <div className="flex justify-between items-center mx-3"> */}
          <div>
            <div>
              <h1 className="pl-3 text-xl">○ 중수도 시설현황 등록</h1>
            </div>
          </div>
          <div>
            {IteraterFrom(baseInfo,form,'1' )}
          </div>
          <div className=" my-4">
            <h1 className="bg-gray-400 text-xl text-center border-2 p-2  mt-4">
              중수도 시설 정보{" "}
            </h1>
          <div className="grid grid-cols-2 gap-4 mt-4">{IteraterFrom(homeWaterData,form,'3' )}</div>
          </div>
      
            
       
          <div className=" my-2">
            <h1 className="bg-gray-400 text-xl text-center border-2 p-2 mt-4 ">
              인센티브 정보
            </h1>
          </div>
          <div>
            <h2 className="pl-3 text-l">✓ 1. 설치비 지원</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">{IteraterFrom(filtrTrtmfct,form,'1' )}</div>
            
          <div>
            <h2 className="pl-3 text-l">✓ 2. 녹색건축물 인증</h2>
          </div>
          <div className="grid grid-cols-12 gap-4 mt-4">{IteraterFrom(greenBuilding,form,'1' )}</div>


        </form>
      </Form>
  );
}
