"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { SiteApi } from "../api/site-service";
import { siteFormSchema, type SiteFormData } from "../model/site-interface";
import { SitePageLayout } from "./layout";
import { SiteForm } from "./site-form";
import { useAlertStore } from "@/shared/lib/use-alert-store";

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
  });

  return (
    <SitePageLayout>
      <SiteForm form={form} handleSave={createSite} />
    </SitePageLayout>
  );
}

export { CreatePage };
