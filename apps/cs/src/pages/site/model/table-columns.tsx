import dayjs from "dayjs";
import { createColumnHelper } from "@tanstack/react-table";
import type { ISite } from "@/entities/site";

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
  columnHelper.accessor("siteAddr", {
    id: "siteAddr",
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
  columnHelper.accessor("rgTrNm", {
    id: "rgTrNm",
    header: "등록자",
  }),
  columnHelper.accessor("regDt", {
    id: "regDt",
    header: "등록일",
    cell: (info) => {
      const date = dayjs(info.getValue());
      return date.format("YYYY-MM-DD");
    },
  }),
];

export { columns };
