"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormUi,
  SelectBox,
} from "@common/business_components/ui";
import { Input } from "@common/components/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useWrStore } from "@/app/store";

const formSchema = z.object({
  username: z.string().min(2).max(50),
  facilityName: z.string().min(2).max(50),
});


export function RswtrReuseFaciltyInsertForm() {
  const { rswt } = useWrStore((state) => state);
  
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
    const selectClass ="w-full h-full text-2xl";
  return (
    <div className="">
      <Form  {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          {/* <div className="flex justify-between items-center mx-3"> */}
          <div>
            <div>
              <h1 className="pl-3 text-xl ">○ 중수도 시설 운영정보</h1>
            </div>
          </div>
          <h1 className="bg-gray-400 text-xl text-center border-2 p-2 mt-4  ">
            기본정보
          </h1>
          <div className="grid grid-cols-4 gap-2 mt-4 pl-6" >
            <div   className="col-span-2">
            <FormField
                  control={form.control}
                  name="name_0211213336"
                  render={({ field }) => (
                    <FormUi label="설치완료일">
                    <Input className="" placeholder="1,000,000" type="" {...field} />
                    </FormUi>
                  )}
              />
            </div>

            <div   className="col-span-2" >
              <FormField
                control={form.control}
                name="name_9765724553"
                render={({ field }) => (
                  <FormUi label="설치비">
                   <Input className="" placeholder="1,000,000" type="" {...field} />
                  </FormUi>
                )}
              />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2 mt-4 pl-6" >
            <div   className="col-span-2">
            <FormField
                  control={form.control}
                  name="name_0211213336"
                  render={({ field }) => (
                    <FormUi label="물사용량(m³)">
                    <Input className="" placeholder="1,000,000" type="" {...field} />
                    </FormUi>
                  )}
              />
            </div>

            <div   className="col-span-2" >
              <FormField
                control={form.control}
                name="name_9765724553"
                render={({ field }) => (
                  <FormUi label="의무대상 물사용량(m³)">
                   <Input className="" placeholder="1,000,000" type="" {...field} />
                  </FormUi>
                )}
              />
            </div>
          </div>
          <div className=" my-4">
            <h1 className="bg-gray-400 text-xl text-center border-2 p-2  mt-4 pl-6" >
              중수도 시설 정보
            </h1>
          </div>
        
          <div className="grid grid-cols-10 gap-1 mt-4">
              <div   className="col-span-5 pl-6" >
                  <FormField
                    control={form.control}
                    name="name_9765724553"
                    render={({ field }) => (
                        <FormUi label="필수 종류">
                          <SelectBox selectClass={selectClass}  selectArray={rswt.selectYN} onSelectValue={onSelectValue}  {...field}/>
                        </FormUi>
                    )}
                  />
                </div>
                <div   className="col-span-5" >
                      <FormField
                        control={form.control}
                        name="name_9765724553"
                        render={({ field }) => (
                    
                            <FormUi label="주요처리공정">
                            <Input className="" placeholder="1,000,000" type="" {...field} />
                           </FormUi>
                        )}
                      />
                </div>
                <div   className="col-span-5 pl-6" >
                  <FormField
                    control={form.control}
                    name="name_9765724553"
                    render={({ field }) => (
                        <FormUi label="이용용도">
                          <SelectBox selectClass={selectClass}label={""} selectArray={rswt.selectYN} onSelectValue={onSelectValue}  {...field}/>
                        </FormUi>
                    )}
                  />
                </div>
          </div>
            
          <div className=" my-2">
            <h1 className="bg-gray-400 text-xl text-center border-2 p-2 mt-4  ">
              인센티브 정보
            </h1>
          </div>
          <div>
            <h2 className="pl-3 text-xl">✓ 1. 설치비 지원</h2>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4">
          <div   className="col-span-1 pl-6" >
                      <FormField
                        control={form.control}
                        name="name_9765724553"
                        render={({ field }) => (
                          <FormUi label="설치비 지원여부">
                          <SelectBox selectClass={selectClass} label={""} selectArray={rswt.selectYN} onSelectValue={onSelectValue}  {...field}/>
                          </FormUi>
                        )}
                      />
                </div>
                <div   className="col-span-1" >
                      <FormField
                        control={form.control}
                        name="name_9765724553"
                        render={({ field }) => (
                          <FormUi label="지원금액(원)">
                          <Input className="" placeholder="1,000,000" type="" {...field} />
                         </FormUi>
                        )}
                      />
                </div>
          </div>
            
          <div>
            <h2 className="pl-3 text-xl">✓ 2. 녹색건축물 인증</h2>
          </div>
          <div className="grid grid-cols-6 gap-2 mt-4">
                <div   className="col-span-3 pl-6" >
                      <FormField
                        control={form.control}
                        name="name_9765724553"
                        render={({ field }) => (
                          <FormUi label="인증여부">
                          <SelectBox selectClass={selectClass} label={""} selectArray={rswt.selectYN} onSelectValue={onSelectValue}  {...field}/>
                          </FormUi>
                        )}
                      />
                </div>
                <div   className="col-span-3" >
                      <FormField
                        control={form.control}
                        name="name_9765724553"
                        render={({ field }) => (
                          <FormUi label="인증년도">
                          <Input className="" placeholder="2024" type="" {...field} />
                         </FormUi>
                        )}
                      />
                </div>
                <div   className="col-span-3 pl-6" >
                      <FormField
                        control={form.control}
                        name="name_9765724553"
                        render={({ field }) => (
                          <FormUi label="인증번호">
                          <Input className="" placeholder="ab1234678" type="" {...field} />
                         </FormUi>
                        )}
                      />
                </div>
                <div   className="col-span-3" >
                      <FormField
                        control={form.control}
                        name="name_9765724553"
                        render={({ field }) => (
                          <FormUi label="인증등급">
                          <Input className="" placeholder="A" type="" {...field} />
                         </FormUi>
                        )}
                      />
                </div>
            </div>
        </form>
      </Form>
      </div>
  );
}
