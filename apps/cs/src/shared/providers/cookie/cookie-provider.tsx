"use client";

import {
  getCookie,
  setCookie,
  removeCookie,
  getToken,
  setToken,
  removeToken,
} from "../../lib/cookie";

import { createContext, useContext } from "react";

export interface CookieContextType {
  getToken: (key: string) => string | undefined;
  setToken: (
    key: string,
    token: string,
    options: Cookies.CookieAttributes,
  ) => void;
  removeToken: (key: string) => void;
  getCookie: (name: string) => string | undefined;
  setCookie: (
    name: string,
    value: string,
    options: Cookies.CookieAttributes,
  ) => void;
  removeCookie: (name: string, options: Cookies.CookieAttributes) => void;
}

export const CookieContext = createContext<CookieContextType | null>(null);

export function CookieProvider({ children }: { children: React.ReactNode }) {
  const cookieContextValue: CookieContextType = {
    getToken,
    setToken,
    removeToken,
    getCookie,
    setCookie,
    removeCookie,
  };

  return (
    <CookieContext.Provider value={cookieContextValue}>
      {children}
    </CookieContext.Provider>
  );
}

export function useCookie(): CookieContextType {
  const context = useContext(CookieContext);
  if (!context) {
    throw new Error("useCookie must be used within a CookieProvider");
  }
  return context;
}
