"use client";

import { ConfirmProvider } from "@frontend-opensource/use-react-hooks";
import { AuthWrapper } from "@/entities/auth";
import { QueryProvider, StoreProvider } from "@/shared/providers";

const AppProvider = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <StoreProvider>
      <QueryProvider>
        <ConfirmProvider>
          <AuthWrapper>{children}</AuthWrapper>
        </ConfirmProvider>
      </QueryProvider>
    </StoreProvider>
  );
};

export { AppProvider };
