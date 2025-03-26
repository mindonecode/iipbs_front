import { useStore } from "zustand";
import { useContext } from "react";
import type { AlertStore } from "../store/alert-store";
import { StoreContext } from "../providers/store-provider";

export const useAlertStore = <T>(selector: (store: AlertStore) => T): T => {
  const storeContext = useContext(StoreContext);

  if (!storeContext) {
    throw new Error("useAlertStore must be used within StoreProvider");
  }

  return useStore(storeContext.alertStore, selector);
};
