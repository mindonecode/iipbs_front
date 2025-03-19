import { createStore } from "zustand/vanilla";

export type AlertState = {
  message: string;
  callback?: () => void;
};

export type AlertActions = {
  setMessage: (message: string, callback?: () => void) => void;
};

export type AlertStore = AlertState & AlertActions;

export const defaultInitState: AlertState = {
  message: "",
  callback: undefined,
};

export const createAlertStore = (initState: AlertState = defaultInitState) => {
  return createStore<AlertStore>()((set) => ({
    ...initState,
    setMessage: (message: string, callback?: () => void) =>
      set(() => ({ message, callback })),
  }));
};
