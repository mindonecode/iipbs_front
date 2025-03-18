"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { ENDPOINT } from "@/shared/config";
import { SiteApi } from "../api/site-service";
import {
  siteFormSchema,
  type ISiteDetail,
  type SiteFormData,
} from "../model/site-interface";
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
      setMessage("수정되었습니다.");
    },
  });

  const { mutateAsync: deleteSite } = useMutation({
    mutationFn: () => SiteApi.deleteSite(siteId),
    onSuccess: () => {
      setMessage("삭제되었습니다.");
    },
  });
  const [message, setMessage] = useState("");

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
      <SiteForm
        form={form}
        siteId={siteId}
        handleSave={modifySite}
        handleDelete={deleteSite}
      />
      <Dialog open={!!message} onOpenChange={() => router.back()}>
        <DialogContent aria-describedby={undefined}>
          <div className="py-10">
            <p className="text-center text-[1.4rem]">{message}</p>
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
