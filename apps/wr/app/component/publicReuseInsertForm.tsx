"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button, FileSearch, Input } from "@common/components";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@common/business_components/ui/form";
import { UiTable } from "@common/business_components/ui";
import { useWrStore } from "../store";
import Style from "../style/PublicReuseFaciltyInsert.module.css";
import { SelectBox } from "@common/business_components";
import { DatePicker } from "@common/components";

const formSchema = z.object({
  username: z.string().min(2).max(50),
  facilityName: z.string().min(2).max(50),
});


type typeOfForm = {
  labelName: string;
  type: string;
  selectvlaue?: { text: string; val: string }[];
}
export function PublicReuseFaciltyFormInsert() {
  const { upHeadList, publicReuseFacilityUper } = useWrStore((state) => state);
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

let formData =[
  {labelName:'농축수발생량(m³/일)', type:'input',selectvlaue:undefined},
  {labelName:'농축수연계지점',type:'input',selectvlaue:undefined},
  {labelName:'시설용량(m³/일)',type:'input',selectvlaue:undefined},
  {labelName:'농축수 처리방식',type:'check', selectvlaue:selectboxMethodValue},
  {labelName:'농축수 처리공법',type:'input',selectvlaue:undefined},
]



const formIter =  (formData: typeOfForm[] ) => {
  return (
    <>
        {formData.map((data:typeOfForm) =>{
          
        <div className="col-span-4">
            <FormField
              control={form.control}
              name="name_7678668236"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>data.name</FormLabel>
                  <FormControl>
                    {data.type==='input'? <Input placeholder="shadcn" type="" {...field} />:  <SelectBox selectArray={selectboxBuisValue}></SelectBox> }        
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              />
          </div>
        } )}
      </>
    )
  }

  const filedForm = formIter(formData);
  
  
  


  return (
    <>
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            {/* <div className="flex justify-between items-center mx-3"> */}
            <div className="grid grid-cols-12 gap-4 my-4">
              <div className="col-span-2 flex items-center">
                <h1 className="pl-3 text-xl">○ 재이용시설 운영정보</h1>
              </div>

              <div className="col-span-4">
                <FormField
                  control={form.control}
                  name="facilityName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="하수처리장-1" type="" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-start-12 col-end-12 flex justify-between items-end mt-3">
                <Button size="sm" type="submit">
                  Submit
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-4 my-4">
              <div className="col-span-4">
                <FormField
                  control={form.control}
                  name="name_0211213336"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>계통도</FormLabel>
                      <FormControl>
                        <FileSearch id="test1"></FileSearch>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* <FormField
                                  control={form.control}
                                  name="name_3799085626"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>계통도</FormLabel>
                                      <FormControl className="w-100">
                                      <FileUploader
                                          value={files}
                                          onValueChange={setFiles}
                                          dropzoneOptions={dropZoneConfig}
                                          className="relative bg-background rounded-lg p-2"
                                        >
                                          <FileInput
                                            id="fileInput"
                                            className="outline-dashed outline-1 outline-slate-500"
                                          >
                                            <div className="flex items-center justify-center flex-col p-8 w-full ">
                                              <CloudUpload className='text-gray-500 w-10 h-10' />
                                              <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                                                <span className="font-semibold">Click to upload</span>
                                                &nbsp; or drag and drop
                                              </p>
                                              <p className="text-xs text-gray-500 dark:text-gray-400">
                                                SVG, PNG, JPG or GIF
                                              </p>
                                            </div>
                                          </FileInput>
                                          <FileUploaderContent>
                                            {files &&
                                              files.length > 0 &&
                                              files.map((file, i) => (
                                                <FileUploaderItem key={i} index={i}>
                                                  <Paperclip className="h-4 w-4 stroke-current" />
                                                  <span>{file.name}</span>
                                                </FileUploaderItem>
                                              ))}
                                          </FileUploaderContent>
                                        </FileUploader>                                        
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                /> */}
              </div>

              <div className="con-start-2 col-end-8">
                <FormField
                  control={form.control}
                  name="name_0211213336"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>평면도</FormLabel>
                      <FormControl>
                        <FileSearch id="test"></FileSearch>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="flex justify-between items-center mx-3">
              <h1 className="pl-3 text-xl">○ 재이용시설 운영정보</h1>
              <Button size="xs">추가등록</Button>
            </div>
            <div>
              <UiTable
                publicReuseFacility={publicReuseFacilityUper}
                headlist={upHeadList}
                pageSize={100}
                total={total}
                headName={""}
                children={undefined}
              ></UiTable>
            </div>
            <div>
              <h1 className="pl-3 text-xl">○ 재이용수 공급 가능량</h1>
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-3">
                  <FormField
                    control={form.control}
                    name="name_0943143371"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>시설용량(m³/일)</FormLabel>
                        <FormControl>
                          <Input placeholder="shadcn" type="" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="col-span-3">
                  <FormField
                    control={form.control}
                    name="name_2007089217"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>하수처리량(m³/일)</FormLabel>
                        <FormControl>
                          <Input placeholder="shadcn" type="" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="col-span-3">
                  <FormField
                    control={form.control}
                    name="name_1624679275"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>재이용량(m³/일)</FormLabel>
                        <FormControl>
                          <Input placeholder="shadcn" type="" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="col-span-3">
                  <FormField
                    control={form.control}
                    name="name_1624679277"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>공급여유량(m³/일)</FormLabel>
                        <FormControl>
                          <Input placeholder="shadcn" type="" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
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
            className="space-y-8  mx-auto py-10  w-100"
          >
            <div className="flex justify-between">
              <div className="">
                <h1 className="pl-3 text-xl">
                  ○ 차수별 하수처리수 재이용 시설 현황
                </h1>
              </div>
              <div className=" flex items-center">
                <FormField
                  control={form.control}
                  name="name_1486273033"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>등록 차수</FormLabel>
                      <SelectBox selectArray={selectboxValue}></SelectBox>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button className="mx-5 mt-6" size="xs" type="submit">
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
                    <FormItem className="w-1000">
                      <FormLabel>구분</FormLabel>
                      <SelectBox selectArray={selectboxDivValue}></SelectBox>
                    </FormItem>
                  )}
                />
              </div>

              <div className="col-span-3">
                <FormField
                  control={form.control}
                  name="name_9484942814"
                  render={({ field }) => (
                    <FormItem className="w-1000">
                      <FormLabel>사업방식</FormLabel>
                      <SelectBox selectArray={selectboxBuisValue}></SelectBox>
                    </FormItem>
                  )}
                />
              </div>

              <div className="col-span-3">
                <FormField
                  control={form.control}
                  name="name_2450741594"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>설치승인인가일</FormLabel>
                      <FormControl>
                        <DatePicker mode="single" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-3">
                <FormField
                  control={form.control}
                  name="name_2450741594"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel> 사업준공일</FormLabel>
                      <FormControl>
                        <DatePicker mode="single" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
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
                    <FormItem>
                      <FormLabel>국고</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" type="" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="col-span-2">
                <FormField
                  control={form.control}
                  name="name_7913744238"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>지방비</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" type="" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="col-span-2">
                <FormField
                  control={form.control}
                  name="name_1368081408"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>민간투자비</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" type="" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-2">
                <FormField
                  control={form.control}
                  name="name_1368081408"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>원인자부담금</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" type="" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-2">
                <FormField
                  control={form.control}
                  name="name_1368081408"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>기타</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" type="" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-64">
                <FormField
                  control={form.control}
                  name="name_1368081408"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>합계</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" type="" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
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
                    <FormItem>
                      <FormLabel>시설용량(m³/일)</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" type="" {...field} />
                      </FormControl>
                 
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="col-span-4">
                <FormField
                  control={form.control}
                  name="name_7913744238"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>주처리공법</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" type="" {...field} />
                      </FormControl>
                    
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="col-span-4">
                <FormField
                  control={form.control}
                  name="name_1368081408"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>위치(주소)</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" type="" {...field} />
                      </FormControl>
                
                      <FormMessage />
                    </FormItem>
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
                    <FormItem>
                      <FormLabel  className="w-32" >재처리방식</FormLabel>
                      <FormControl>
                      <SelectBox  selectArray={selectboxReuseMethodValue}></SelectBox>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="col-span-4">
                <FormField
                  control={form.control}
                  name="name_7233630277"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>위치(처리장 내외)</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" type="" {...field} />
                      </FormControl>
               
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="col-span-4">
                <FormField
                  control={form.control}
                  name="name_0973765174"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>메인공급펌프 용량</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" type="" {...field} />
                      </FormControl>
                   
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>






         <h1 className="bg-gray-400 text-xl text-center border-2 p-2 ">
              농축수관리{" "}
            </h1>
          
              { filedForm}

                  
          </form>
        </Form>
      </div>
    </>
  );
}
