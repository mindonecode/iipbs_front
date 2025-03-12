"use client";

import "@common/assets/styles/grid.css";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { Button, Input, DataTable } from "@common/components";
import { SiteApi } from "@/entities/site/api/site-service";
import type { ISite, ISiteQuery } from "@/entities/site/model/site-interface";
import { ENDPOINT } from "@/shared/config/api";
import { columns } from "../model/table-columns";
import { SitePageLayout } from "./layout";

function SitePage() {
  const router = useRouter();
  const { data: siteInfo, refetch } = useQuery({
    queryKey: [ENDPOINT.CMS_SERVICE.SITES],
    queryFn: () => SiteApi.siteInfo(siteQuery),
    enabled: false,
  });

  const [siteQuery, setSiteQuery] = useState<ISiteQuery>({
    siteNm: "",
    siteKndCd: "",
    useYn: "",
    page: 0,
    size: 0,
    sort: [],
  });

  const table = useReactTable({
    data: siteInfo?.content ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    refetch();
  };

  const handleRowClick = (row: ISite) => {
    router.push(`/site/register/${row.siteId}`);
  };

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SitePageLayout>
      <div className="card card-border !mt-6">
        <div className="card card-border !border-[#dbe2e6] !bg-[#eef7ff]">
          <form onSubmit={handleSubmit} className="flex items-center gap-2 p-2">
            <label htmlFor="" className="mr-2 text-[#657481]">
              사이트명
            </label>
            <Input
              className="h-[3.2rem] w-[24rem] rounded-sm !text-[1.3rem]"
              value={siteQuery.siteNm}
              onChange={(e) =>
                setSiteQuery({ ...siteQuery, siteNm: e.target.value })
              }
            />
            <Button className="h-[3.2rem]" type="submit">
              조회
            </Button>
          </form>
        </div>
        <div className="card card-border">
          <div className="card-header">
            <h3 className="text-2xl font-medium text-[#666]">사이트 목록</h3>
            <Button onClick={() => router.push("/site/register")}>등록</Button>
          </div>
          <div className="card !m-[1.2rem] h-[49rem] overflow-auto !p-0">
            <DataTable table={table} onRowClick={handleRowClick} />
          </div>
        </div>
      </div>
    </SitePageLayout>
  );
}

export { SitePage };
