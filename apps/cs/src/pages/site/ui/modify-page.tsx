"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { ENDPOINT } from "@/shared/config";
import { useAlertStore } from "@/shared/lib/use-alert-store";
import { SiteApi } from "../api/site-service";
import { siteFormSchema, type SiteFormData } from "../model/site-interface";
import { SitePageLayout } from "./layout";
import { SiteForm } from "./site-form";

function ModifyPage({ siteId }: { siteId: string }) {
  const isModifyMode = !!siteId;

  const router = useRouter();
  const { setMessage: alert } = useAlertStore((state) => state);
  const { data: siteDetail } = useQuery({
    queryKey: [ENDPOINT.CMS_SERVICE.SITES, siteId],
    queryFn: () => SiteApi.siteDetail(siteId),
    select: (data) => {
      const keys = Object.keys(siteFormSchema.shape);
      const filteredData = Object.fromEntries(
        Object.entries(data).filter(([key]) => keys.includes(key)),
      );
      return {
        ...filteredData,
        faxNo: data.faxNumber,
        bscSiteYn: data.basicSiteYn,
      };
    },
    enabled: isModifyMode,
  });

  const { mutateAsync: modifySite } = useMutation({
    mutationFn: (data: SiteFormData) => SiteApi.modifySite(siteId, data),
    onSuccess: () => {
      alert("수정되었습니다.");
    },
  });

  const { mutateAsync: deleteSite } = useMutation({
    mutationFn: () => SiteApi.deleteSite(siteId),
    onSuccess: () => {
      alert("삭제되었습니다.", router.back);
    },
  });

  const form = useForm<SiteFormData>({
    resolver: zodResolver(siteFormSchema),
    values: siteDetail as SiteFormData,
  });

  return (
    <SitePageLayout>
      <SiteForm
        form={form}
        siteId={siteId}
        handleSave={modifySite}
        handleDelete={deleteSite}
      />
    </SitePageLayout>
  );
}

export { ModifyPage };
