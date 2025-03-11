import { createColumnHelper } from "@tanstack/react-table";
import type { ISite } from "@/entities/site/model/site-interface";

const columnHelper = createColumnHelper<ISite>();

const columns = [
  columnHelper.accessor((_, index) => index + 1, {
    id: "no",
    header: "NO",
  }),
  columnHelper.accessor("siteId", {
    id: "siteId",
    header: "사이트코드",
  }),
  columnHelper.accessor("siteNm", {
    id: "siteNm",
    header: "사이트명",
  }),
  columnHelper.accessor("siteKindCode", {
    id: "unknown1",
    header: "대표 URL",
  }),
  columnHelper.accessor("bscSiteYn", {
    id: "bscSiteYn",
    header: "기본 사이트 여부",
    cell: (info) => (info.getValue() ? "Y" : "N"),
  }),
  columnHelper.accessor("useYn", {
    id: "useYn",
    header: "사용 여부",
    cell: (info) => (info.getValue() ? "Y" : "N"),
  }),
  columnHelper.accessor("siteId", {
    id: "unknown2",
    header: "등록자",
  }),
  columnHelper.accessor("siteId", {
    id: "ununknown3",
    header: "등록일",
  }),
];

export { columns };
