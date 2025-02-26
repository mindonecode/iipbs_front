"use client";

import { createRoot } from "react-dom/client";
import type { AlignType } from "tui-grid/types/store/column";
import type { CellRendererProps } from "tui-grid/types/renderer";

import { Switch } from "@common/components";

class SwitchComponent {
  private el: HTMLDivElement;

  constructor(props: CellRendererProps) {
    this.el = document.createElement("div");

    const { value } = props;

    createRoot(this.el).render(
      <Switch
        defaultChecked={value as boolean}
        className="!h-[1.8rem] !w-[4.2rem] !bg-[length:2.4rem] !bg-[center_right_.1rem] data-[state=checked]:!bg-[center_left_.2rem] [&>span]:!size-[1.6rem] [&>span]:data-[state=checked]:!translate-x-[2.6rem]"
      />,
    );
  }

  getElement() {
    return this.el;
  }
}

const data = [
  {
    id: 1,
    siteCode: "WR",
    siteName: "물재이용",
    siteUrl: "https://www.hasudoon.kr/wr/",
    enabled: true,
    active: true,
    registrant: "홍길동",
    createdAt: "2025-01-01",
  },
  {
    id: 2,
    siteCode: "SN",
    siteName: "하수관로",
    siteUrl: "https://www.hasudoon.kr/sn/",
    enabled: false,
    active: true,
    registrant: "홍길동",
    createdAt: "2025-01-01",
  },
  {
    id: 3,
    siteCode: "CS",
    siteName: "통합관리시스템",
    siteUrl: "https://www.hasudoon.kr/cs/",
    enabled: false,
    active: true,
    registrant: "홍길동",
    createdAt: "2025-01-01",
  },
];
const columns = [
  { name: "id", header: "NO", align: "center" as AlignType },
  { name: "siteCode", header: "사이트코드", align: "center" as AlignType },
  { name: "siteName", header: "사이트명", align: "center" as AlignType },
  { name: "siteUrl", header: "대표 URL", align: "center" as AlignType },
  {
    name: "enabled",
    header: "기본 사이트 여부",
    align: "center" as AlignType,
    renderer: {
      type: SwitchComponent,
    },
  },
  {
    name: "active",
    header: "사용 여부",
    align: "center" as AlignType,
    renderer: {
      type: SwitchComponent,
    },
  },
  { name: "registrant", header: "등록자", align: "center" as AlignType },
  { name: "createdAt", header: "등록일", align: "center" as AlignType },
];
const header = {
  align: "center" as AlignType,
};

export { data, columns, header };
