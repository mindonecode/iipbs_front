'use client'
import { FileUpload, SelectBox } from "@common/business_components";
import { UiTable } from "@common/business_components/ui";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@common/business_components/ui/form";
import { Button, FileSearch, Input } from "@common/components";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useWrStore } from "../store";

const formSchema = z.object({
  username: z.string().min(2).max(50),
  facilityName: z.string().min(2).max(50)
})

export function PublicReuseFaciltyFormInsert() {
  const { upHeadList, publicReuseFacilityUper } = useWrStore((state) => state);
  const total = 100;

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


  const selectboxValue = [
    {
      text: '1치',
      val: '1'
    },
    {
      text: '2차',
      val: '2'
    }
  ]
  const [files, setFiles] = useState < File[] | null > (null);

  return (
    <>
      <div   >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} >
            {/* <div className="flex justify-between items-center mx-3"> */}
            <div className="grid grid-cols-12 gap-4">
              <div className="colspan-6">
              </div>
              <div className="colspan-6"></div>
              <div className="colspan-6"></div>
              <div className="colspan-6"></div>
              <div className="colspan-6">
                <Button size="sm">신규등록</Button>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-4">

              <div className="col-span-4">

                <FormField
                  control={form.control}
                  name="name_3799085626"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>계통도</FormLabel>
                      <FormControl>
                        <FileSearch id="test1"></FileSearch>
                        {/* <FileUploader
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
                                        </FileUploader> */}
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="col-span-1" />
              <div className="col-span-4">

                <FormField
                  control={form.control}
                  name="name_0211213336"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>평면도</FormLabel>
                      <FormControl>
                        <FormField
                          control={form.control}
                          name="name_0973831747"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Select File</FormLabel>
                              <FormControl>
                                <FileUpload files={files} setFiles={setFiles} fileTypes="PDF"></FileUpload>
                              </FormControl>
                              <FormDescription>Select a file to upload.</FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        {/* <FileUploader
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
                                        </FileUploader> */}
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

            </div>



            <div className="flex justify-between items-center mx-3">
              <h1 className="pl-3 text-xl">○ 재이용시설 운영정보</h1>
              <Button size='xs'>추가등록</Button>
            </div>
            <div>
              <UiTable publicReuseFacility={publicReuseFacilityUper} headlist={upHeadList} pageSize={100} total={total} headName={''} children={undefined}  ></UiTable>
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
                          <Input
                            placeholder="shadcn"

                            type=""
                            {...field} />
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
                          <Input
                            placeholder="shadcn"

                            type=""
                            {...field} />
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
                          <Input
                            placeholder="shadcn"

                            type=""
                            {...field} />
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
                          <Input
                            placeholder="shadcn"

                            type=""
                            {...field} />
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
      {/* 차수별 등록 현호아 폼 */}
      <div className="justify-between">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8  mx-auto py-10  w-100" >

            <div className="flex justify-between">
              <div className="">
                <h1 className="pl-3 text-xl">○ 하수처리수 재이용 시설 현황</h1>
              </div>
              <div className=" flex items-center">
                <FormField
                  control={form.control}
                  name="name_1486273033"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>등록 차수</FormLabel>
                      <SelectBox selectArray={selectboxValue} ></SelectBox>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button className="mx-5 mt-6" size='xs' type="submit">신규등록</Button>
              </div>
            </div>
          </form>
        </Form>
      </div>

    </>
  );
}