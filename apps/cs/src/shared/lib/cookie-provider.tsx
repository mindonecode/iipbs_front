"use client";

import { createContext } from "react";
import { getCookie, setCookie, removeCookie } from "./cookie";

export interface CookieContextType {
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
