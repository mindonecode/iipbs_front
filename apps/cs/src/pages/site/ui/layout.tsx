function SitePageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-auto min-h-full bg-container">
      <h2 className="px-[1.8rem] pt-[2rem] text-[2.4rem] font-semibold text-title">
        사이트 관리
      </h2>
      {children}
    </div>
  );
}

export { SitePageLayout };
