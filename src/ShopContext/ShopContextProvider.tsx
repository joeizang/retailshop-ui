import React from 'react'

export interface ShopContextProps {

}

interface ShopContextProviderProps {
  children: React.ReactNode
}

export const Context = React.createContext({} as ShopContextProps)

export function ShopContextProvider({ children }: ShopContextProviderProps) {
  return (
    <Context.Provider value={{}}>
      {children}
    </Context.Provider>
  )
}