import { BaseLayout } from "@common/components";

function SitePageLayout({ children }: { children: React.ReactNode }) {
  return (
    <BaseLayout>
      <div className="h-full bg-[#f1f6f9]">
        <h2 className="px-[1.8rem] pt-[2rem] text-[2.4rem] font-semibold text-[#4c5e6f]">
          사이트 관리
        </h2>
        {children}
      </div>
    </BaseLayout>
  );
}

export { SitePageLayout };
