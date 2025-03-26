import { QueryProvider } from "../../provider/query-provider";
import { SidebarProvider } from "../sidebar";
import { LNB } from "../lnb";
import { Header } from "../header";
import { Footer } from "./footer";

import "./common.css";
import type { QueryClient } from "@tanstack/react-query";

export function VBaseLayout({
  children,
  queryClient,
}: {
  children: React.ReactNode;
  queryClient?: QueryClient;
}) {
  return (
    <QueryProvider client={queryClient}>
      <SidebarProvider>
        <div className="flex-1">
          <Header viewOnly />
          <div className="flex h-[calc(100vh-50px)]">
            <LNB viewOnly />
            <div className="flex flex-1 flex-col">
              <div className="max-h-[calc(100%-50px)] flex-1 overflow-auto">
                {children}
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </SidebarProvider>
    </QueryProvider>
  );
}
