"use client";

import { BaseLayout } from "@common/components/ui";

export default function WithBaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <BaseLayout>{children}</BaseLayout>;
}
