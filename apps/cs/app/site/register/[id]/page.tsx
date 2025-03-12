import { RegisterPage as ViewRegisterPage } from "@/pages/site";

export default async function RegisterPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <ViewRegisterPage siteId={id} />;
}
