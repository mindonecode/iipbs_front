"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { SiteApi } from "../api/site-service";
import { siteFormSchema, type SiteFormData } from "../model/site-interface";
import { SitePageLayout } from "./layout";
import { SiteForm } from "./site-form";
import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
} from "@common/components/ui";

function CreatePage() {
  const router = useRouter();
  const { mutateAsync: createSite } = useMutation({
    mutationFn: (data: SiteFormData) => SiteApi.createSite(data),
    onSuccess: () => {
      setIsCreateSuccess(true);
    },
  });

  const [isCreateSuccess, setIsCreateSuccess] = useState(false);

  const form = useForm<SiteFormData>({
    resolver: zodResolver(siteFormSchema),
  });

  return (
    <SitePageLayout>
      <SiteForm form={form} handleSave={createSite} />
      <Dialog open={isCreateSuccess} onOpenChange={() => router.back()}>
        <DialogContent aria-describedby={undefined}>
          <div className="py-10">
            <p className="text-center text-[1.4rem]">등록되었습니다.</p>
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

export { CreatePage };
