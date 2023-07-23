import React, { createContext, useState } from 'react'
import { ProductType, ShopiCartContextType } from '../types'

export const ShopiCartContext = createContext<ShopiCartContextType | null>(null)

export const ShopiCartProvider = ({ children }: {children:React.ReactNode}) => {
  const [cartCounter, setCartCounter] = useState(0)
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const [isCheckSideMenuOpen, setIsCheckSideMenuOpen] = useState(false)
  const [productToShow, setProductToShow] = useState<ProductType>({})
  const [shopingCart, setShopingCart] = useState<ProductType[]>([])

  const addProductToCart = (product: ProductType) => {
    setIsCheckSideMenuOpen(true)
    setIsProductDetailOpen(false)
    setShopingCart(prev => [...prev, product])
  }

  const showProductDetail = (product: ProductType) => {
    setIsProductDetailOpen(true)
    setIsCheckSideMenuOpen(false)
    setProductToShow(product)
  }

  const closeProductDetail = () => setIsProductDetailOpen(false)
  const closeCheckoutSideMenu = () => setIsCheckSideMenuOpen(false)

  return (
    <ShopiCartContext.Provider value={{
      cartCounter,
      setCartCounter,
      isProductDetailOpen,
      closeProductDetail,
      productToShow,
      showProductDetail,
      shopingCart,
      addProductToCart,
      closeCheckoutSideMenu,
      isCheckSideMenuOpen
    }}>
      {children}
    </ShopiCartContext.Provider>
  )
}
