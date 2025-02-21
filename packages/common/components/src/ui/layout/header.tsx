import { BASE_ASSETS_PATH } from "../../env";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../dropdown-menu";
import { Button } from "../button";

export function Header() {
  return (
    <header className="sticky top-0 box-border flex h-[5rem] w-full items-center justify-between border-b border-solid border-border">
      <div className="flex items-center">
        <div className="MobMenuBtn">
          <img src={`${BASE_ASSETS_PATH}/images/mob_menuBtn.svg`} />
        </div>
        <h1 className="flex items-center gap-4">
          <img
            src={`${BASE_ASSETS_PATH}/images/logo.png`}
            className="h-[3rem]"
            alt="logo"
          />
          <span className="text-[1.8rem] font-semibold">통합플랫폼관리</span>
        </h1>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="group m-0 flex h-[3rem] items-center !bg-background px-4 py-0 text-label">
            <i className="diveicon di-account-circle static translate-y-0.5 pr-2 text-3xl" />
            관리자
            <i className="diveicon di-chevron-down static p-0 transition-transform group-data-[state=open]:rotate-180" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>프로필</DropdownMenuItem>
          <DropdownMenuItem>설정</DropdownMenuItem>
          <DropdownMenuItem>로그아웃</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
