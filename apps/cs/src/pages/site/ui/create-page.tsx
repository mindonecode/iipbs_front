"use client";

import type { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { siteFormSchema } from "../model/form-schema";
import { SiteForm } from "./site-form";

function CreatePage() {
  const form = useForm<z.infer<typeof siteFormSchema>>({
    defaultValues: siteFormSchema.parse({
      siteId: "",
      siteNm: "",
      siteKndCd: "",
    }),
    resolver: zodResolver(siteFormSchema),
  });

  return <SiteForm form={form} handleSave={() => {}} />;
}

export { CreatePage };
