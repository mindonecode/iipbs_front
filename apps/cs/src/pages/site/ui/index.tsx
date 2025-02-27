"use client";

import "@common/assets/styles/grid.css";

import {
  BaseLayout,
  Button,
  Input,
  BasicTable as Table,
} from "@common/components";
import { data, columns } from "../model/__mocks__";

const SitePage = () => {
  return (
    <BaseLayout>
      <div className="h-full bg-[#f1f6f9]">
        <h2 className="px-[1.8rem] pt-[2rem] text-[2.4rem] font-semibold text-[#4c5e6f]">
          사이트 관리
        </h2>
        <div className="card card-border">
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
              <Button className="">등록</Button>
            </div>
            <div className="card !m-[1.2rem] h-[44.5rem] overflow-auto !p-0">
              <Table data={data} columns={columns} />
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export { SitePage };
