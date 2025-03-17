"use client";

import { ConfirmProvider } from "@frontend-opensource/use-react-hooks";
import { AuthProvider } from "@/entities/auth";
import { CookieProvider } from "@/shared/lib";
import { QueryProvider } from "./query-provider";

const AppProvider = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <QueryProvider>
      <CookieProvider>
        <AuthProvider>
          <ConfirmProvider>{children}</ConfirmProvider>
        </AuthProvider>
      </CookieProvider>
    </QueryProvider>
  );
};

export { AppProvider };
