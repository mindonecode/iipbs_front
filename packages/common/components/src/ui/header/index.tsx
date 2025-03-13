"use client";

import { images } from "@common/assets";
import { useUsersQuery } from "../../api";
import { AUTH_USER_ID } from "../../config";
import { getToken } from "../../lib";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../dropdown-menu";
import { Button } from "../button";

export function Header() {
  const { data: userInfo } = useUsersQuery({
    userUniqId: getToken(AUTH_USER_ID) ?? "",
  });

  return (
    <header className="sticky top-0 box-border flex h-[5rem] w-full items-center justify-between border-b border-solid border-border bg-background">
      <div className="flex items-center">
        <div className="MobMenuBtn">
          <img src={images.menuBtn} />
        </div>
        <h1 className="flex items-center gap-4">
          <img src={images.logo} className="h-[3rem]" alt="logo" />
          <span className="text-[1.8rem] font-semibold text-foreground">
            통합플랫폼관리
          </span>
        </h1>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="group m-0 flex h-[3rem] items-center !bg-background px-4 py-0 text-label">
            <i className="diveicon di-account-circle static translate-y-0.5 pr-2 text-3xl" />
            {userInfo?.data.userName}
            <i className="diveicon di-chevron-down static p-0 transition-transform group-data-[state=open]:rotate-180" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>프로필 설정</DropdownMenuItem>
          <div className="flex flex-col items-start gap-0 px-4 py-3">
            <p className="text-base text-label">최종접속일</p>
            <p>{userInfo?.data.lastLoginDate}</p>
          </div>
          <div className="flex flex-col items-start gap-0 px-4 py-3">
            <p className="text-base text-label">접속 IP</p>
            <p></p>
          </div>
          <DropdownMenuItem>로그아웃</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
