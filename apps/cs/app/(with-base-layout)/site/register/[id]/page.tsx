import { ModifyPage as VModifyPage } from "@/pages/site";

export default async function ModifyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <VModifyPage siteId={id} />;
}
