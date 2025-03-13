import { BaseLayout } from "@common/components";

function SitePageLayout({ children }: { children: React.ReactNode }) {
  return (
    <BaseLayout>
      <div className="bg-container h-auto min-h-full">
        <h2 className="text-title px-[1.8rem] pt-[2rem] text-[2.4rem] font-semibold">
          사이트 관리
        </h2>
        {children}
      </div>
    </BaseLayout>
  );
}

export { SitePageLayout };
