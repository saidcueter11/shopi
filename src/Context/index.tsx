import React, { createContext, useState } from 'react'

export const ShopiCartContext = createContext({ cartCounter: 0, setCartCounter: (count: number) => {}, isProductDetailOpen: false, openProductDetail: () => {} })

export const ShopiCartProvider = ({ children }: {children:React.ReactNode}) => {
  const [cartCounter, setCartCounter] = useState(0)
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)

  const openProductDetail = () => setIsProductDetailOpen(prev => !prev)

  return (
    <ShopiCartContext.Provider value={{
      cartCounter, setCartCounter, isProductDetailOpen, openProductDetail
    }}>
      {children}
    </ShopiCartContext.Provider>
  )
}
