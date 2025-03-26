import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ChevronRight } from "lucide-react";
import { cn } from "../../lib/utils";
import { ENDPOINT, SITE_ID } from "../../config";
import { getMenuList, type MenuItem } from "../../api";
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
} from "../sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../collapsible";
import { getParentIds } from "./lib";

export function LNB({ viewOnly }: { viewOnly?: boolean }) {
  const { data: menuList } = useQuery({
    queryKey: [ENDPOINT.CMS_SERVICE.MENU_ROLES],
    queryFn: () => getMenuList(SITE_ID),
    enabled: !viewOnly,
  });

  const [openMenuIds, setOpenMenuIds] = useState<number[]>([]);

  function MenuItem({ item }: { item: MenuItem }) {
    if (item.children) {
      return <MenuGroup item={item} />;
    }

    return (
      <SidebarMenuItem>
        <SidebarMenuButton className="h-auto py-4 text-[1.4rem] text-label transition-colors hover:bg-accent">
          <i className={cn("diveicon ml-2", `di-${item.iconNm}`)} />
          {item.menuKornNm}
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  }

  function MenuGroup({ item }: { item: MenuItem }) {
    const isOpen = openMenuIds.includes(item.menuCd);

    const handleOpenChange = (open: boolean) => {
      if (open) {
        if (!openMenuIds.includes(item.menuCd)) {
          const parentIds = getParentIds(item.menuCd)(menuList ?? []);
          setOpenMenuIds([...parentIds, item.menuCd]);
        }
      } else {
        setOpenMenuIds((prev) => prev.filter((id) => id !== item.menuCd));
      }
    };

    return (
      <Collapsible open={isOpen} onOpenChange={handleOpenChange}>
        <SidebarMenuItem>
          <CollapsibleTrigger asChild>
            <div className="group flex items-center justify-between rounded-sm py-4 pr-2 hover:bg-accent data-[state=open]:text-primary">
              <SidebarMenuButton className="group/menu-button text-[1.4rem] group-data-[state=open]:bg-transparent">
                <i
                  className={cn(
                    "diveicon ml-2 text-label group-data-[state=open]:text-primary",
                    `di-${item.iconNm}`,
                  )}
                />
                <span className="text-label group-hover/menu-button:text-foreground group-data-[state=open]:text-primary">
                  {item.menuKornNm}
                </span>
              </SidebarMenuButton>
              <ChevronRight className="size-6 text-label group-data-[state=open]:rotate-90" />
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <SidebarMenuSub className="mr-0">
              {item.children?.map((child) => (
                <MenuItem key={child.menuCd} item={child} />
              ))}
            </SidebarMenuSub>
          </CollapsibleContent>
        </SidebarMenuItem>
      </Collapsible>
    );
  }

  return (
    <Sidebar className="border-border bg-background px-4 py-[6rem]">
      <SidebarContent className="bg-background">
        <SidebarMenu className="gap-0">
          {menuList?.map((item) => <MenuItem key={item.menuCd} item={item} />)}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
