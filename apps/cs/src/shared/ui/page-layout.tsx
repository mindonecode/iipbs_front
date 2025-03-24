function PageLayout({
  children,
  pageTitle,
}: {
  children: React.ReactNode;
  pageTitle: string;
}) {
  return (
    <div className="h-auto min-h-full bg-container">
      <h2 className="px-[1.8rem] pt-[2rem] text-[2.4rem] font-semibold text-title">
        {pageTitle}
      </h2>
      {children}
    </div>
  );
}

export { PageLayout };
