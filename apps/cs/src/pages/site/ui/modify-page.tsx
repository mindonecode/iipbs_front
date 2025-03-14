"use client";

import { useEffect } from "react";
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

function ModifyPage({ siteId }: { siteId: string }) {
  const isModifyMode = !!siteId;

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
    onSuccess: (data) => {
      console.log("success!", data);
    },
  });

  const form = useForm<SiteFormData>({
    defaultValues: siteFormSchema.omit({ siteId: true }).parse({
      siteNm: "",
      siteKndCd: "",
    }),
    resolver: zodResolver(siteFormSchema),
  });

  const handleSave = (data: SiteFormData) => {
    console.log(data);
    modifySite(data);
  };

  useEffect(() => {
    if (!siteDetail) return;

    const keys = Object.keys(siteFormSchema.shape);
    for (const key of keys) {
      form.setValue(
        key as keyof SiteFormData,
        siteDetail[key as keyof ISiteDetail],
      );
    }
  }, [siteDetail]);

  console.log(form.watch());

  return (
    <SitePageLayout>
      <SiteForm form={form} siteId={siteId} handleSave={handleSave} />
    </SitePageLayout>
  );
}

export { ModifyPage };
