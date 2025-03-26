"use client";

import { createContext, useRef } from "react";
import { createAlertStore } from "../store/alert-store";
import { createUserStore } from "../store/user-store";

type StoreContextType = {
  alertStore: ReturnType<typeof createAlertStore>;
  userStore: ReturnType<typeof createUserStore>;
};

export const StoreContext = createContext<StoreContextType | undefined>(
  undefined,
);

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const storeRef = useRef<StoreContextType | null>(null);
  if (storeRef.current === null) {
    storeRef.current = {
      alertStore: createAlertStore(),
      userStore: createUserStore(),
    };
  }

  return (
    <StoreContext.Provider value={storeRef.current}>
      {children}
    </StoreContext.Provider>
  );
};
