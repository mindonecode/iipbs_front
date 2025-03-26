"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@common/components/ui";
import { SiteApi } from "@/entities/site";
import { ENDPOINT } from "@/shared/config";
import { PageLayout } from "@/shared/ui/page-layout";
import { MenuApi } from "../api/menu-service";
import {
  MENU_TYPE,
  menuFormSchema,
  type MenuFormData,
} from "../model/menu-interface";
import { MenuTree } from "./menu-tree";
import { MenuForm } from "./menu-form";
import { generateTreeData } from "../lib/utils";

function MenuPage() {
  const [siteId, setSiteId] = useState("");

  const { data: treeData } = useQuery({
    queryKey: [ENDPOINT.CMS_SERVICE.MENUS, siteId],
    queryFn: () => MenuApi.getTreeMenuList(siteId),
    select: (data) => generateTreeData(data),
    enabled: !!siteId,
  });

  const { data: options } = useQuery({
    queryKey: [ENDPOINT.CMS_SERVICE.SITES],
    queryFn: () => SiteApi.getSiteList({}),
    select: (data) =>
      data.content.map((site) => ({
        label: site.siteNm,
        value: site.siteId,
      })),
  });

  const form = useForm<MenuFormData>({
    resolver: zodResolver(menuFormSchema),
    defaultValues: {
      menuLnkgTypeCd: MENU_TYPE.EMPTY,
    },
  });

  const handleSave = async (data: MenuFormData) => {
    console.log(data);
  };

  const handleDelete = async () => {};

  return (
    <PageLayout pageTitle="메뉴 관리">
      <div className="card flex gap-2">
        <div className="card card-border w-[24rem]">
          <Select value={siteId} onValueChange={setSiteId}>
            <SelectTrigger>
              <SelectValue placeholder="선택하세요" />
            </SelectTrigger>
            <SelectContent>
              {options?.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {treeData && (
            <>
              <div className="my-4 flex gap-2">
                <Button size="sm" color="primary" className="flex-1">
                  메뉴 추가
                </Button>
                <Button size="sm" color="red" className="flex-1">
                  메뉴 삭제
                </Button>
              </div>
              <div className="card card-border !mx-0">
                <MenuTree treeData={treeData ?? []} siteId={siteId} />
              </div>
            </>
          )}
        </div>
        <div className="card card-border flex-1">
          <MenuForm
            form={form}
            handleSave={handleSave}
            handleDelete={handleDelete}
          />
        </div>
      </div>
    </PageLayout>
  );
}

export { MenuPage };
