"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  SiteApi,
  siteFormSchema,
  type ISiteDetail,
  type SiteFormData,
} from "@/entities/site";
import { ENDPOINT } from "@/shared/config/api";
import { SitePageLayout } from "./layout";
import { SiteForm } from "./site-form";
import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
} from "@common/components/ui";

function ModifyPage({ siteId }: { siteId: string }) {
  const isModifyMode = !!siteId;

  const router = useRouter();
  const { data: siteDetail } = useQuery({
    queryKey: [ENDPOINT.CMS_SERVICE.SITES, siteId],
    queryFn: () => SiteApi.siteDetail(siteId),
    select: (data) => ({
      ...data,
      faxNo: data.faxNumber,
      bscSiteYn: data.basicSiteYn,
    }),
    enabled: isModifyMode,
  });

  const { mutateAsync: modifySite } = useMutation({
    mutationFn: (data: SiteFormData) => SiteApi.modifySite(siteId, data),
    onSuccess: () => {
      setIsModifySuccess(true);
    },
  });

  const [isModifySuccess, setIsModifySuccess] = useState(false);

  const form = useForm<SiteFormData>({
    resolver: zodResolver(siteFormSchema),
  });

  useEffect(() => {
    if (!siteDetail) return;

    const keys = Object.keys(siteFormSchema.shape);
    for (const key of keys) {
      form.setValue(
        key as keyof SiteFormData,
        siteDetail[key as keyof ISiteDetail] ?? "",
      );
    }
  }, [siteDetail]);

  return (
    <SitePageLayout>
      <SiteForm form={form} siteId={siteId} handleSave={modifySite} />
      <Dialog open={isModifySuccess} onOpenChange={() => router.back()}>
        <DialogContent aria-describedby={undefined}>
          <div className="py-10">
            <p className="text-center text-[1.4rem]">수정되었습니다.</p>
          </div>
          <DialogFooter className="!justify-center">
            <DialogClose asChild>
              <Button>확인</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </SitePageLayout>
  );
}

export { ModifyPage };
