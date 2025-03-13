"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
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
import {
  DomainManagementDialog,
  type Domain,
} from "./domain-management-dialog";
import type { ISiteDetail } from "@/entities/site/model/site-interface";

type ViewState = Partial<ISiteDetail>;

function RegisterPage({ siteId }: { siteId: string }) {
  const router = useRouter();
  const { data: siteDetail } = useQuery({
    queryKey: [ENDPOINT.CMS_SERVICE.SITES, siteId],
    queryFn: () => SiteApi.siteDetail(siteId),
    select: (data) => {
      handleViewStateChange("siteKndCd")(data.siteKndCd);
      handleViewStateChange("siteSkn")(data.siteSkn);
      return data;
    },
    enabled: !!siteId,
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

  return (
    <SitePageLayout>
      <div className="card card-border !mt-6">
        <div className="card-header">
          <h3 className="text-2xl font-medium text-label">사이트 등록/수정</h3>
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
                    onChange={(e) =>
                      handleViewStateChange("siteId")(e.target.value)
                    }
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
                      onValueChange={handleViewStateChange("siteKndCd")}
                    />
                    {siteId && (
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
                  <CodeSelect
                    upCd="SITESKINCD"
                    defaultValue={siteDetail?.siteSkn}
                    onValueChange={handleViewStateChange("siteSkn")}
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
                    onChange={(e) =>
                      handleViewStateChange("siteNm")(e.target.value)
                    }
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
                    onChange={(e) =>
                      handleViewStateChange("siteExpln")(e.target.value)
                    }
                  />
                </TableCell>
              </TableRow>
              <TableRow className={`${!siteId ? "hidden" : ""}`}>
                <TableHead>사이트 도메인</TableHead>
                <TableCell className="border">
                  <div className="flex gap-2">
                    <div className="bg-form h-[3.2rem] w-[21.5rem] cursor-not-allowed rounded-md border border-input px-3 py-2 text-[1.3rem] opacity-50">
                      {representativeDomain}
                    </div>
                    <DomainManagementDialog handleSave={handleDomainSave} />
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHead>사이트 하단 표기 주소</TableHead>
                <TableCell className="border">
                  <Input
                    className="!text-[1.3rem]"
                    placeholder="사이트 하단 주소를 입력하십시오."
                    defaultValue={siteDetail?.siteAddr}
                    onChange={(e) =>
                      handleViewStateChange("siteAddr")(e.target.value)
                    }
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
                    onChange={(e) =>
                      handleViewStateChange("telNo")(e.target.value)
                    }
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
                    onChange={(e) =>
                      handleViewStateChange("faxNumber")(e.target.value)
                    }
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
                    onChange={(e) =>
                      handleViewStateChange("lwndCn")(e.target.value)
                    }
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
                    onChange={(e) =>
                      handleViewStateChange("bkmkIcon")(e.target.value)
                    }
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHead>기본 사이트 여부</TableHead>
                <TableCell className="border">
                  <RadioGroup
                    name="basicSiteYn"
                    defaultValue={siteDetail?.basicSiteYn}
                    onValueChange={handleViewStateChange("basicSiteYn")}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Y" id="basicSiteY" />
                      <Label htmlFor="basicSiteY">예</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="N" id="basicSiteN" />
                      <Label htmlFor="basicSiteN">아니오</Label>
                    </div>
                  </RadioGroup>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHead>사용 여부</TableHead>
                <TableCell className="border">
                  <RadioGroup
                    name="useYn"
                    defaultValue={siteDetail?.useYn}
                    onValueChange={handleViewStateChange("useYn")}
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
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
      <div className="flex justify-center gap-4 pb-12 pt-10">
        <Button size="lg">저장</Button>
        <Button size="lg" color="white" onClick={() => router.back()}>
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
