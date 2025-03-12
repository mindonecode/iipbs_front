"use client";

import { useState } from "react";
import { SiteApi } from "@/entities/site";
import { ENDPOINT } from "@/shared/config/api";
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
import { useQuery } from "@tanstack/react-query";
import { CodeSelect } from "@/entities/code";
import { SitePageLayout } from "./layout";
import { IPManagementDialog } from "./ip-management-dialog";

function RegisterPage({ siteId }: { siteId: string }) {
  const { data: siteDetail } = useQuery({
    queryKey: [ENDPOINT.CMS_SERVICE.SITES, siteId],
    queryFn: () => SiteApi.siteDetail(siteId),
    select: (data) => {
      setSiteKndCd(data.siteKndCd);
      return data;
    },
    enabled: !!siteId,
  });
  const [siteKndCd, setSiteKndCd] = useState<string>("");
  const [, setSiteSkinCd] = useState<string>("");

  return (
    <SitePageLayout>
      <div className="card card-border !mt-6">
        <div className="card-header">
          <h3 className="text-2xl font-medium text-[#666]">사이트 등록/수정</h3>
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
                  <Input
                    className="w-[12rem] !text-[1.3rem]"
                    defaultValue={siteDetail?.siteId}
                    disabled={!!siteId}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHead>사이트 구분</TableHead>
                <TableCell className="border">
                  <div className="flex gap-2">
                    <CodeSelect
                      upCd="SITEKNDCD"
                      defaultValue={siteDetail?.siteKndCd}
                      onValueChange={(value) => {
                        setSiteKndCd(value);
                      }}
                    />
                    <IPManagementDialog triggerDisabled={siteKndCd === "O"} />
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHead>사이트 디자인</TableHead>
                <TableCell className="border">
                  <CodeSelect
                    upCd="SITESKINCD"
                    defaultValue={siteDetail?.siteSkn}
                    onValueChange={(value) => {
                      setSiteSkinCd(value);
                    }}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHead>사이트명</TableHead>
                <TableCell className="border">
                  <Input
                    className="!text-[1.3rem]"
                    placeholder="사이트명을 입력하십시오."
                    defaultValue={siteDetail?.siteNm}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHead>사이트 설명</TableHead>
                <TableCell className="border">
                  <Input
                    className="!text-[1.3rem]"
                    placeholder="사이트 설명을 입력하십시오."
                    defaultValue={siteDetail?.siteExpln}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHead>사이트 하단 표기 주소</TableHead>
                <TableCell className="border">
                  <Input
                    className="!text-[1.3rem]"
                    placeholder="사이트 하단 주소를 입력하십시오."
                    defaultValue={siteDetail?.siteAddr}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHead>사이트 하단 표기 전화번호</TableHead>
                <TableCell className="border">
                  <Input
                    className="!text-[1.3rem]"
                    placeholder="사이트 하단 전화번호를 입력하십시오."
                    defaultValue={siteDetail?.telNo}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHead>사이트 하단 표기 팩스번호</TableHead>
                <TableCell className="border">
                  <Input
                    className="!text-[1.3rem]"
                    placeholder="사이트 하단 팩스번호를 입력하십시오."
                    defaultValue={siteDetail?.faxNumber}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHead>사이트 하단 표기 내용</TableHead>
                <TableCell className="border">
                  <Input
                    className="!text-[1.3rem]"
                    placeholder="사이트 표기 내용을 입력하십시오. (ex. COPYRIGHT c 2013 KECO. ALL RIGHTS RESERVED.)"
                    defaultValue={siteDetail?.lwndCn}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHead>북마크 아이콘</TableHead>
                <TableCell className="border">
                  <Input
                    className="!text-[1.3rem]"
                    placeholder="아이콘 파일 경로 및 파일명을 입력하여 주십시오."
                    defaultValue={siteDetail?.bkmkIcon}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHead>기본 사이트 여부</TableHead>
                <TableCell className="border">
                  <RadioGroup
                    defaultValue={siteDetail?.basicSiteYn}
                    onValueChange={(value) => {
                      console.log(value);
                    }}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="default" id="r1" />
                      <Label htmlFor="r1">예</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="comfortable" id="r2" />
                      <Label htmlFor="r2">아니오</Label>
                    </div>
                  </RadioGroup>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHead>사용 여부</TableHead>
                <TableCell className="border">
                  <RadioGroup
                    defaultValue={siteDetail?.useYn}
                    onValueChange={(value) => {
                      console.log(value);
                    }}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="default" id="r1" />
                      <Label htmlFor="r1">사용</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="comfortable" id="r2" />
                      <Label htmlFor="r2">사용안함</Label>
                    </div>
                  </RadioGroup>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
      <div className="flex justify-center gap-4 pb-12 pt-10">
        <Button size="lg">저장</Button>
        <Button size="lg" color="white">
          취소
        </Button>
        <Button size="lg" color="red">
          삭제
        </Button>
      </div>
    </SitePageLayout>
  );
}

export { RegisterPage };
