"use client";

import { ConfirmProvider } from "@frontend-opensource/use-react-hooks";
import { AuthWrapper } from "@/entities/auth";
import { StoreProvider } from "@/shared/providers";
import { AlertDialog } from "@/shared/ui/alert-dialog";

const AppProvider = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <StoreProvider>
      <ConfirmProvider>
        <AuthWrapper>
          {children}
          <AlertDialog />
        </AuthWrapper>
      </ConfirmProvider>
    </StoreProvider>
  );
};

export { AppProvider };
