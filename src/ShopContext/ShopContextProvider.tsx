import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ShopContextProps {}

interface ShopContextProviderProps {
  children: React.ReactNode
}

export const Context = React.createContext({} as ShopContextProps)

export function ShopContextProvider({ children }: ShopContextProviderProps) {
  return <Context.Provider value={{}}>{children}</Context.Provider>
}
