"use client";

import "@common/assets/styles/grid.css";

import TuiGrid from "tui-grid";
import Grid from "@toast-ui/react-grid";
import { BaseLayout, Button, Input } from "@common/components";
import { data, columns, header } from "../model/__mock__";

TuiGrid.applyTheme("clean", {
  row: {
    hover: {
      background: "#f5f5f5",
    },
  },
  cell: {
    normal: {
      background: "#fff",
      border: "#e0e6ea",
      text: "#666",
      showHorizontalBorder: true,
    },
    header: {
      background: "#c6ccd1",
      text: "#fff",
      showVerticalBorder: false,
    },
  },
});

const SitePage = () => {
  return (
    <BaseLayout>
      <div className="h-full bg-[#f1f6f9]">
        <h2 className="px-[1.8rem] pt-[2rem] text-[2.4rem] font-semibold text-[#4c5e6f]">
          사이트 관리
        </h2>
        <div className="card">
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
            <div className="flex items-center justify-between p-2">
              <h3>사이트 목록</h3>
              <Button className="">등록</Button>
            </div>
            <div className="card">
              <Grid
                data={data}
                columns={columns}
                header={header}
                rowHeight={25}
                bodyHeight={100}
                heightResizable={true}
                usageStatistics={false}
              />
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export { SitePage };
