"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { SiteApi, siteFormSchema, type SiteFormData } from "@/entities/site";
import { useAlertStore } from "@/shared/lib/use-alert-store";
import { PageLayout } from "@/shared/ui/page-layout";
import { SiteForm } from "./site-form";

function CreatePage() {
  const router = useRouter();
  const { setMessage: alert } = useAlertStore((state) => state);
  const { mutateAsync: createSite } = useMutation({
    mutationFn: (data: SiteFormData) => SiteApi.createSite(data),
    onSuccess: () => {
      alert("등록되었습니다.", router.back);
    },
  });

  const form = useForm<SiteFormData>({
    resolver: zodResolver(siteFormSchema),
    defaultValues: {
      siteId: "",
      siteNm: "",
      siteExpln: "",
      siteKndCd: "",
      siteAddr: "",
      faxNo: "",
      telNo: "",
      lwndCn: "",
      bscSiteYn: "",
      bkmkIcon: "",
      useYn: "",
      siteSkn: "",
    },
  });

  return (
    <PageLayout pageTitle="사이트 관리">
      <SiteForm form={form} handleSave={createSite} />
    </PageLayout>
  );
}

export { CreatePage };
