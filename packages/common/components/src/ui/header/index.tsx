import { useQuery } from "@tanstack/react-query";
import { images } from "@common/assets";
import { getCookie, setCookie } from "../../lib";
import { getSiteInfo, getUserInfo } from "../../api";
import { AUTH_USER_ID, ENDPOINT, SITE_ID } from "../../config";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../dropdown-menu";
import { Button } from "../button";

export function Header({ viewOnly }: { viewOnly?: boolean }) {
  const userUniqId = getCookie(AUTH_USER_ID) ?? "";

  const { data: userInfo } = useQuery({
    queryKey: [ENDPOINT.USER_SERVICE.USERS],
    queryFn: () => getUserInfo(userUniqId),
    enabled: !viewOnly,
  });

  const { data: siteInfo } = useQuery({
    queryKey: [ENDPOINT.CMS_SERVICE.SITES, SITE_ID],
    queryFn: () => getSiteInfo(SITE_ID),
    select: (data) => {
      if (data.siteSkn) {
        const siteSkin = data.siteSkn.toLowerCase();
        setCookie("site-theme-key", siteSkin);
        document.documentElement.setAttribute("data-theme", siteSkin);
      }
      return data;
    },
    enabled: !viewOnly,
  });

  return (
    <header className="sticky top-0 z-30 box-border flex h-[5rem] w-full items-center justify-between border-b border-solid border-border bg-background">
      <div className="flex items-center">
        <div className="MobMenuBtn">
          <img src={images.menuBtn} />
        </div>
        <h1 className="flex items-center gap-4">
          <img src={images.logo} className="h-[3rem]" alt="logo" />
          <span className="text-[1.8rem] font-semibold text-foreground">
            {siteInfo?.siteNm}
          </span>
        </h1>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="group m-0 flex h-[3rem] items-center !bg-background px-4 py-0 text-label">
            <i className="diveicon di-account-circle static translate-y-0.5 pr-2 text-3xl" />
            {userInfo?.userName}
            <i className="diveicon di-chevron-down static p-0 transition-transform group-data-[state=open]:rotate-180" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>프로필 설정</DropdownMenuItem>
          <div className="flex flex-col items-start gap-0 px-4 py-3">
            <p className="text-base text-label">최종접속일</p>
            <p>{userInfo?.lastLoginDate}</p>
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
