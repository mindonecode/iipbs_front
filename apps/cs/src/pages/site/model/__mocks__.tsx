import { createColumnHelper } from "@tanstack/react-table";
import { fakerKO as faker } from "@faker-js/faker";

type Site = {
  id: number;
  사이트코드: string;
  사이트명: string;
  대표_URL: string;
  기본_사이트_여부: boolean;
  사용_여부: boolean;
  등록자: string;
  등록일: string;
};

faker.seed(123);

const data: Site[] = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  사이트코드: faker.string.alpha(2).toUpperCase(),
  사이트명: faker.lorem.word(),
  대표_URL: faker.internet.url(),
  기본_사이트_여부: faker.datatype.boolean(),
  사용_여부: faker.datatype.boolean(),
  등록자: faker.person.fullName(),
  등록일: faker.date.recent().toISOString().split("T")[0] as string,
}));

const columnHelper = createColumnHelper<Site>();

const columns = [
  columnHelper.accessor("id", {
    header: "NO",
  }),
  columnHelper.accessor("사이트코드", {
    header: "사이트코드",
  }),
  columnHelper.accessor("사이트명", {
    header: "사이트명",
  }),
  columnHelper.accessor("대표_URL", {
    header: "대표_URL",
  }),
  columnHelper.accessor("기본_사이트_여부", {
    header: "기본 사이트 여부",
    cell: (info) => (info.getValue() ? "Y" : "N"),
  }),
  columnHelper.accessor("사용_여부", {
    header: "사용 여부",
    cell: (info) => (info.getValue() ? "Y" : "N"),
  }),
  columnHelper.accessor("등록자", {
    header: "등록자",
  }),
  columnHelper.accessor("등록일", {
    header: "등록일",
  }),
];

export { data, columns };
