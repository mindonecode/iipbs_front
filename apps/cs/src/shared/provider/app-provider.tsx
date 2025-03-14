"use client";

import { BaseLayout } from "@common/components/ui";
import { AuthProvider } from "./auth-provider";
import { CookieProvider } from "./cookie-provider";
import { QueryProvider } from "./query-provider";

const AppProvider = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <QueryProvider>
      <CookieProvider>
        <AuthProvider>
          <BaseLayout>{children}</BaseLayout>
        </AuthProvider>
      </CookieProvider>
    </QueryProvider>
  );
};

export { AppProvider };
