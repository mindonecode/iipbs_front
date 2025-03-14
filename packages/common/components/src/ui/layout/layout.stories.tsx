import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../input";
import { Button } from "../button";
import { DataTable } from "../data-table";
import { BaseLayout } from "./base";
import "./stories.css";

import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { fakerKO as faker } from "@faker-js/faker";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../dropdown-menu";
import { RadioGroup, RadioGroupItem } from "../radio-group";
import { Label } from "../label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../dialog";
import { Checkbox } from "../checkbox";

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
    header: "대표 URL",
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

const meta: Meta<typeof BaseLayout> = {
  title: "Layout/Base",
  component: BaseLayout,
  parameters: {
    layout: "fullscreen",
    controls: { disable: true },
    actions: { disable: true },
  },
  tags: ["!autodocs"],
};

export default meta;
type Story = StoryObj<typeof BaseLayout>;

export const Default: Story = {
  render: () => (
    <BaseLayout>
      <div className="h-full bg-muted p-4 text-xl text-muted-foreground">
        개발 영역
      </div>
    </BaseLayout>
  ),
};

export const 사이트_관리: Story = {
  render: function Component() {
    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
    });
    return (
      <BaseLayout>
        <div className="h-auto min-h-full bg-[#f1f6f9]">
          <h2 className="px-[1.8rem] pt-[2rem] text-[2.4rem] font-semibold text-[#4c5e6f]">
            사이트 관리
          </h2>
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
                <h3 className="text-2xl font-medium text-[#666]">
                  사이트 목록
                </h3>
                <Button>등록</Button>
              </div>
              <div className="card !m-[1.2rem] h-[49rem] overflow-auto !p-0">
                <DataTable table={table} />
              </div>
            </div>
          </div>
        </div>
      </BaseLayout>
    );
  },
};

export const 사이트_등록: Story = {
  render: function Component() {
    return (
      <BaseLayout>
        <div className="h-auto min-h-full bg-[#f1f6f9]">
          <h2 className="px-[1.8rem] pt-[2rem] text-[2.4rem] font-semibold text-[#4c5e6f]">
            사이트 관리
          </h2>
          <div className="card card-border !mt-6">
            <div className="card-header">
              <h3 className="text-2xl font-medium text-[#666]">
                사이트 등록/수정
              </h3>
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
                      <Input className="w-[12rem] !text-[1.3rem]" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead>사이트 구분</TableHead>
                    <TableCell className="border">
                      <div className="flex gap-2">
                        <DropdownMenu>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                color="white"
                                className="group w-[12rem] justify-between px-4"
                              >
                                선택
                                <i className="diveicon di-chevron-down translate-y-0.5 transition-transform group-data-[state=open]:translate-y-0 group-data-[state=open]:rotate-180" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-[12rem]">
                              <DropdownMenuItem>내부</DropdownMenuItem>
                              <DropdownMenuItem>외부</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </DropdownMenu>
                        <IPManagementDialog />
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead>사이트 디자인</TableHead>
                    <TableCell className="border">
                      <DropdownMenu>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              color="white"
                              className="group w-[12rem] justify-between px-4"
                            >
                              선택
                              <i className="diveicon di-chevron-down translate-y-0.5 transition-transform group-data-[state=open]:translate-y-0 group-data-[state=open]:rotate-180" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="w-[12rem]">
                            <DropdownMenuItem>라이트</DropdownMenuItem>
                            <DropdownMenuItem>다크</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead>사이트명</TableHead>
                    <TableCell className="border">
                      <Input
                        className="!text-[1.3rem]"
                        placeholder="사이트명을 입력하십시오."
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead>사이트 설명</TableHead>
                    <TableCell className="border">
                      <Input
                        className="!text-[1.3rem]"
                        placeholder="사이트 설명을 입력하십시오."
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead>사이트 하단 표기 주소</TableHead>
                    <TableCell className="border">
                      <Input
                        className="!text-[1.3rem]"
                        placeholder="사이트 하단 주소를 입력하십시오."
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead>사이트 하단 표기 전화번호</TableHead>
                    <TableCell className="border">
                      <Input
                        className="!text-[1.3rem]"
                        placeholder="사이트 하단 전화번호를 입력하십시오."
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead>사이트 하단 표기 팩스번호</TableHead>
                    <TableCell className="border">
                      <Input
                        className="!text-[1.3rem]"
                        placeholder="사이트 하단 팩스번호를 입력하십시오."
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead>사이트 하단 표기 내용</TableHead>
                    <TableCell className="border">
                      <Input
                        className="!text-[1.3rem]"
                        placeholder="사이트 표기 내용을 입력하십시오. (ex. COPYRIGHT c 2013 KECO. ALL RIGHTS RESERVED.)"
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead>북마크 아이콘</TableHead>
                    <TableCell className="border">
                      <Input
                        className="!text-[1.3rem]"
                        placeholder="아이콘 파일 경로 및 파일명을 입력하여 주십시오."
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead>기본 사이트 여부</TableHead>
                    <TableCell className="border">
                      <RadioGroup defaultValue="comfortable">
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
                      <RadioGroup defaultValue="comfortable">
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
        </div>
      </BaseLayout>
    );
  },
};

function IPManagementDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>IP 관리</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>IP 관리</DialogTitle>
        </DialogHeader>
        <div className="mb-4 flex justify-end gap-2">
          <Button size="sm" color="green">
            엑셀 업로드
          </Button>
          <Button size="sm">저장</Button>
          <Button size="sm" color="white">
            항목 추가
          </Button>
          <Button size="sm" color="red">
            항목 삭제
          </Button>
        </div>
        <div className="card card-border">
          <Table>
            <colgroup>
              <col width="10%" />
              <col width="10%" />
              <col width="55%" />
              <col width="25%" />
            </colgroup>
            <TableHeader>
              <TableRow>
                <TableHead>NO</TableHead>
                <TableHead>선택</TableHead>
                <TableHead>IP 주소</TableHead>
                <TableHead>허용여부</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell align="center">1</TableCell>
                <TableCell align="center">
                  <Checkbox className="cursor-pointer" />
                </TableCell>
                <TableCell align="center">
                  <Input className="!text-[1.3rem]" />
                </TableCell>
                <TableCell align="center">
                  <RadioGroup className="flex justify-center">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="true" id="allow-1" />
                      <label htmlFor="allow-1">예</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="false" id="deny-1" />
                      <label htmlFor="deny-1">아니오</label>
                    </div>
                  </RadioGroup>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </DialogContent>
    </Dialog>
  );
}
