"use client";

import { ConfirmProvider } from "@frontend-opensource/use-react-hooks";
import { AuthProvider } from "./auth-provider";
import { CookieProvider } from "./cookie-provider";
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
