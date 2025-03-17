"use client";

import { createContext, useRef } from "react";
import { createUserStore } from "@/shared/store/user-store";

type StoreContextType = {
  userStore: ReturnType<typeof createUserStore>;
};

export const StoreContext = createContext<StoreContextType | undefined>(
  undefined,
);

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const storeRef = useRef<StoreContextType | null>(null);
  if (storeRef.current === null) {
    storeRef.current = {
      userStore: createUserStore(),
    };
  }

  return (
    <StoreContext.Provider value={storeRef.current}>
      {children}
    </StoreContext.Provider>
  );
};
