"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { SiteApi, siteFormSchema, type SiteFormData } from "@/entities/site";
import { ENDPOINT } from "@/shared/config";
import { PageLayout } from "@/shared/ui/page-layout";
import { useAlertStore } from "@/shared/lib/use-alert-store";
import { SiteForm } from "./site-form";

function ModifyPage({ siteId }: { siteId: string }) {
  const isModifyMode = !!siteId;

  const router = useRouter();
  const queryClient = useQueryClient();
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
      alert("수정되었습니다.", () => {
        queryClient.invalidateQueries({
          queryKey: [ENDPOINT.CMS_SERVICE.SITES],
        });
      });
    },
  });

  const { mutateAsync: deleteSite } = useMutation({
    mutationFn: () => SiteApi.deleteSite(siteId),
    onSuccess: () => {
      alert("삭제되었습니다.", () => {
        queryClient.invalidateQueries({
          queryKey: [ENDPOINT.CMS_SERVICE.SITES],
        });
        router.back();
      });
    },
  });

  const form = useForm<SiteFormData>({
    resolver: zodResolver(siteFormSchema),
    values: siteDetail as SiteFormData,
  });

  return (
    <PageLayout pageTitle="사이트 관리">
      <SiteForm
        form={form}
        siteId={siteId}
        handleSave={modifySite}
        handleDelete={deleteSite}
      />
    </PageLayout>
  );
}

export { ModifyPage };
