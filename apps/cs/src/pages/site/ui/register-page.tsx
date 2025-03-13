"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import {
  Button,
  Input,
  Label,
  RadioGroup,
  RadioGroupItem,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@common/components";
import { SiteApi, type ISiteDetail } from "@/entities/site";
import { CodeSelect } from "@/entities/code";
import { FormItem, FormControl, FormField, Form } from "@/shared/ui/form";
import { ENDPOINT } from "@/shared/config/api";
import { SitePageLayout } from "./layout";
import { IPManagementDialog } from "./ip-management-dialog";
import {
  DomainManagementDialog,
  type Domain,
} from "./domain-management-dialog";
import { siteFormSchema } from "../model/form-schema";

type CreateFormData = typeof siteFormSchema & {
  siteId: string;
};
type ModifyFormData = typeof siteFormSchema;
type FormData = CreateFormData | ModifyFormData;
type ViewState = Partial<ISiteDetail>;

function RegisterPage({ siteId }: { siteId: string }) {
  const isModifyMode = !!siteId;

  const router = useRouter();
  const { data: siteDetail } = useQuery({
    queryKey: [ENDPOINT.CMS_SERVICE.SITES, siteId],
    queryFn: () => SiteApi.siteDetail(siteId),
    select: (data) => {
      const newData = {
        ...data,
        faxNo: data.faxNumber,
        bscSiteYn: data.basicSiteYn,
      };
      handleViewStateChange("siteKndCd")(data.siteKndCd);
      handleViewStateChange("siteSkn")(data.siteSkn);
      return newData;
    },
    enabled: isModifyMode,
  });

  const form = useForm<FormData>({
    defaultValues: isModifyMode
      ? siteFormSchema
      : { ...siteFormSchema, siteId: "" },
  });

  const [viewState, setViewState] = useState<ViewState>({});
  const [representativeDomain, setRepresentativeDomain] = useState<string>("");

  const handleViewStateChange = (key: keyof ISiteDetail) => (value: string) => {
    setViewState({ ...viewState, [key]: value });
  };

  const handleDomainSave = (rows: Domain[]) => {
    setRepresentativeDomain(
      rows.find((row) => row.isRepresentative)?.domainUrl || "",
    );
  };

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <SitePageLayout>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="card card-border !mt-6">
            <div className="card-header">
              <h3 className="text-2xl font-medium text-label">
                사이트 등록/수정
              </h3>
            </div>
            <div className="card">
              <Table variant="secondary">
                <colgroup>
                  <col width="20%" />
                  <col width="80%" />
                </colgroup>
                <TableBody>
                  <TableRow>
                    <TableHead>사이트 코드</TableHead>
                    <TableCell className="border">
                      <FormField
                        control={form.control}
                        name="siteId"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                className="w-[12rem] !text-[1.3rem]"
                                defaultValue={siteDetail?.siteId}
                                disabled={isModifyMode}
                                {...field}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead>사이트 구분</TableHead>
                    <TableCell className="border">
                      <div className="flex gap-2">
                        <FormField
                          control={form.control}
                          name="siteKndCd"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <CodeSelect
                                  upCd="SITEKNDCD"
                                  defaultValue={siteDetail?.siteKndCd}
                                  onValueChange={(value) => {
                                    handleViewStateChange("siteKndCd")(value);
                                    field.onChange(value);
                                  }}
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        {isModifyMode && (
                          <IPManagementDialog
                            triggerDisabled={viewState.siteKndCd === "O"}
                          />
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead>사이트 디자인</TableHead>
                    <TableCell className="border">
                      <FormField
                        control={form.control}
                        name="siteSkn"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <CodeSelect
                                upCd="SITESKINCD"
                                defaultValue={siteDetail?.siteSkn}
                                onValueChange={field.onChange}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead>사이트명</TableHead>
                    <TableCell className="border">
                      <FormField
                        control={form.control}
                        name="siteNm"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                className="!text-[1.3rem]"
                                placeholder="사이트명을 입력하십시오."
                                defaultValue={siteDetail?.siteNm}
                                {...field}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead>사이트 설명</TableHead>
                    <TableCell className="border">
                      <FormField
                        control={form.control}
                        name="siteExpln"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                className="!text-[1.3rem]"
                                placeholder="사이트 설명을 입력하십시오."
                                defaultValue={siteDetail?.siteExpln}
                                {...field}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow className={`${!isModifyMode ? "hidden" : ""}`}>
                    <TableHead>사이트 도메인</TableHead>
                    <TableCell className="border">
                      <div className="flex gap-2">
                        <div className="h-[3.2rem] w-[21.5rem] cursor-not-allowed rounded-md border border-input bg-form px-3 py-2 text-[1.3rem] opacity-50">
                          {representativeDomain}
                        </div>
                        <DomainManagementDialog handleSave={handleDomainSave} />
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead>사이트 하단 표기 주소</TableHead>
                    <TableCell className="border">
                      <FormField
                        control={form.control}
                        name="siteAddr"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                className="!text-[1.3rem]"
                                placeholder="사이트 하단 주소를 입력하십시오."
                                defaultValue={siteDetail?.siteAddr}
                                {...field}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead>사이트 하단 표기 전화번호</TableHead>
                    <TableCell className="border">
                      <FormField
                        control={form.control}
                        name="telNo"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                className="!text-[1.3rem]"
                                placeholder="사이트 하단 전화번호를 입력하십시오."
                                defaultValue={siteDetail?.telNo}
                                {...field}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead>사이트 하단 표기 팩스번호</TableHead>
                    <TableCell className="border">
                      <FormField
                        control={form.control}
                        name="faxNo"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                className="!text-[1.3rem]"
                                placeholder="사이트 하단 팩스번호를 입력하십시오."
                                defaultValue={siteDetail?.faxNo}
                                {...field}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead>사이트 하단 표기 내용</TableHead>
                    <TableCell className="border">
                      <FormField
                        control={form.control}
                        name="lwndCn"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                className="!text-[1.3rem]"
                                placeholder="사이트 표기 내용을 입력하십시오. (ex. COPYRIGHT c 2013 KECO. ALL RIGHTS RESERVED.)"
                                defaultValue={siteDetail?.lwndCn}
                                {...field}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead>북마크 아이콘</TableHead>
                    <TableCell className="border">
                      <FormField
                        control={form.control}
                        name="bkmkIcon"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                className="!text-[1.3rem]"
                                placeholder="아이콘 파일 경로 및 파일명을 입력하여 주십시오."
                                defaultValue={siteDetail?.bkmkIcon}
                                {...field}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead>기본 사이트 여부</TableHead>
                    <TableCell className="border">
                      <FormField
                        control={form.control}
                        name="bscSiteYn"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <RadioGroup
                                name="bscSiteYn"
                                defaultValue={siteDetail?.bscSiteYn}
                                onValueChange={field.onChange}
                              >
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="Y" id="bscSiteY" />
                                  <Label htmlFor="bscSiteY">예</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="N" id="bscSiteN" />
                                  <Label htmlFor="bscSiteN">아니오</Label>
                                </div>
                              </RadioGroup>
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead>사용 여부</TableHead>
                    <TableCell className="border">
                      <FormField
                        control={form.control}
                        name="useYn"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <RadioGroup
                                name="useYn"
                                defaultValue={siteDetail?.useYn}
                                onValueChange={field.onChange}
                              >
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="Y" id="useY" />
                                  <Label htmlFor="useY">사용</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="N" id="useN" />
                                  <Label htmlFor="useN">사용안함</Label>
                                </div>
                              </RadioGroup>
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
          <div className="flex justify-center gap-4 pb-12 pt-10">
            <Button size="lg" type="submit">
              저장
            </Button>
            <Button size="lg" color="white" onClick={() => router.back()}>
              취소
            </Button>
            <Button size="lg" color="red">
              삭제
            </Button>
          </div>
        </form>
      </SitePageLayout>
    </Form>
  );
}

export { RegisterPage };
