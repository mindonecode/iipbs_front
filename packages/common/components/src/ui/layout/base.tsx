import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { LNB } from "./lnb";
import { Header } from "../header";
import { Footer } from "./footer";

import "./common.css";

const queryClient = new QueryClient();

export function BaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Header />
        <div className="flex h-[calc(100vh-50px)]">
          <LNB />
          <div className="flex flex-1 flex-col">
            <div className="max-h-[calc(100%-50px)] flex-1 overflow-auto">
              {children}
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </QueryClientProvider>
  );
}
