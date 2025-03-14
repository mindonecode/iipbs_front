"use client";

import { ConfirmProvider } from "@frontend-opensource/use-react-hooks";
import { BaseLayout } from "@common/components/ui";
import { AuthProvider } from "./auth-provider";
import { CookieProvider } from "./cookie-provider";
import { QueryProvider } from "./query-provider";

const AppProvider = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <QueryProvider>
      <CookieProvider>
        <AuthProvider>
          <ConfirmProvider>
            <BaseLayout>{children}</BaseLayout>
          </ConfirmProvider>
        </AuthProvider>
      </CookieProvider>
    </QueryProvider>
  );
};

export { AppProvider };
