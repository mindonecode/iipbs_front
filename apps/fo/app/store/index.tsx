'use client'

import { type ReactNode, createContext, useContext, useRef } from 'react'
import { useStore } from 'zustand'
import { type WrStore, StoreZus } from './store'


export type StoreApi = ReturnType<typeof StoreZus>

export const StoreContext = createContext<StoreApi | undefined>(
  undefined,
)

export interface StoreProviderProps {
  children: ReactNode
}

export const StoreProvider = ({
  children,
}: StoreProviderProps) => {
  const storeRef = useRef<StoreApi>(null)
  console.log("StoreProvider");
  
  if (!storeRef.current) {
    storeRef.current = StoreZus()
  }

  return (
    <StoreContext.Provider value={storeRef.current}>
      {children}
    </StoreContext.Provider>
  )
}

export const useWrStore = <T,>(
  selector: (store: WrStore) => T,
): T => {
  const storeContext = useContext(StoreContext)
  console.log("useStore", storeContext);
  
  if (!storeContext) {
    throw new Error(`useStore must be used within StoreProvider`)
  }

  return useStore(storeContext, selector)
}