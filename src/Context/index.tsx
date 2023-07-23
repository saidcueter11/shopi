import React, { createContext, useState } from 'react'
import { ProductType, ShopiCartContextType } from '../types'

export const ShopiCartContext = createContext<ShopiCartContextType | null>(null)

export const ShopiCartProvider = ({ children }: {children:React.ReactNode}) => {
  const [cartCounter, setCartCounter] = useState(0)
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const [productToShow, setProductToShow] = useState<ProductType>({})
  const [shopingCart, setShopingCart] = useState<ProductType[]>([])

  const addProductToCart = (product: ProductType) => setShopingCart(prev => [...prev, product])

  const showProductDetail = (product: ProductType) => {
    setIsProductDetailOpen(true)
    setProductToShow(product)
  }

  const closeProductDetail = () => setIsProductDetailOpen(false)

  return (
    <ShopiCartContext.Provider value={{
      cartCounter,
      setCartCounter,
      isProductDetailOpen,
      closeProductDetail,
      productToShow,
      showProductDetail,
      shopingCart,
      addProductToCart
    }}>
      {children}
    </ShopiCartContext.Provider>
  )
}
