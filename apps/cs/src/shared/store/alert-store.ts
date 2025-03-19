import { createStore } from "zustand/vanilla";

export type AlertState = {
  alertMessage: string;
};

export type AlertActions = {
  setAlertMessage: (message: string) => void;
};

export type AlertStore = AlertState & AlertActions;

export const defaultInitState: AlertState = {
  alertMessage: "",
};

export const createAlertStore = (initState: AlertState = defaultInitState) => {
  return createStore<AlertStore>()((set) => ({
    ...initState,
    setAlertMessage: (alertMessage: string) => set(() => ({ alertMessage })),
  }));
};
