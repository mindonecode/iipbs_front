import { useStore } from "zustand";
import { useContext } from "react";
import { type UserStore } from "@/shared/store/user-store";
import { StoreContext } from "../providers/store-provider";

export const useUserStore = <T>(selector: (store: UserStore) => T): T => {
  const storeContext = useContext(StoreContext);

  if (!storeContext) {
    throw new Error("useUserStore must be used within StoreProvider");
  }

  return useStore(storeContext.userStore, selector);
};
