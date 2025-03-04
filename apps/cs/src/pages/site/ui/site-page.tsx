"use client";

import "@common/assets/styles/grid.css";

import { useRouter } from "next/navigation";
import { Button, Input } from "@common/components";
import { SitePageLayout } from "./layout";

function SitePage() {
  const router = useRouter();

  return (
    <SitePageLayout>
      <div className="card card-border !mt-6">
        <div className="card card-border !border-[#dbe2e6] !bg-[#eef7ff]">
          <div className="flex items-center gap-2 p-2">
            <label htmlFor="" className="mr-2 text-[#657481]">
              사이트명
            </label>
            <Input className="h-[3.2rem] w-[24rem] rounded-sm !text-[1.3rem]" />
            <Button className="h-[3.2rem]">조회</Button>
          </div>
        </div>
        <div className="card card-border">
          <div className="card-header">
            <h3 className="text-2xl font-medium text-[#666]">사이트 목록</h3>
            <Button onClick={() => router.push("/site/register")}>등록</Button>
          </div>
          <div className="card !m-[1.2rem] h-[49rem] overflow-auto !p-0">
            {/* <DataTabledata={data} columns={columns} /> */}
          </div>
        </div>
      </div>
    </SitePageLayout>
  );
}

export { SitePage };
