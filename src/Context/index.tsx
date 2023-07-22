import React, { createContext, useState } from 'react'

export const ShopiCartContext = createContext({ cartCounter: 0, setCartCounter: (count: number) => {} })

export const ShopiCartProvider = ({ children }: {children:React.ReactNode}) => {
  const [cartCounter, setCartCounter] = useState(0)
  return (
    <ShopiCartContext.Provider value={{
      cartCounter, setCartCounter
    }}>
      {children}
    </ShopiCartContext.Provider>
  )
}
