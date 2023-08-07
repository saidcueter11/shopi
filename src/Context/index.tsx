import React, { createContext, useState } from 'react'
import { AccountType, OrderType, ProductType, ShopiCartContextType } from '../types'
import { useLocalStorage } from '../hooks/useLocalStorage'

export const ShopiCartContext = createContext<ShopiCartContextType | null>(null)

export const ShopiCartProvider = ({ children }: {children:React.ReactNode}) => {
  const [accounts, setAccounts] = useLocalStorage<AccountType[]>('accounts', [])
  const [logged, setLogged] = useLocalStorage<boolean>('logged', false)
  const [cartCounter, setCartCounter] = useState(0)
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const [isCheckSideMenuOpen, setIsCheckSideMenuOpen] = useState(false)
  const [productToShow, setProductToShow] = useState<ProductType>({})
  const [shopingCart, setShopingCart] = useState<ProductType[]>([])
  const [order, setOrder] = useState<OrderType[]>([])

  const addProductToCart = (product: ProductType) => {
    setIsCheckSideMenuOpen(true)
    setIsProductDetailOpen(false)
    setShopingCart(prev => [...prev, product])
  }

  const removeProductFromCart = (product: ProductType) => {
    setIsCheckSideMenuOpen(true)
    setIsProductDetailOpen(false)
    const newCart = shopingCart.filter(currentProduct => currentProduct.id !== product.id)
    setShopingCart(newCart)
  }

  const showProductDetail = (product: ProductType) => {
    setIsProductDetailOpen(true)
    setIsCheckSideMenuOpen(false)
    setProductToShow(product)
  }

  const addNewOrder = (products: ProductType[], totalPrice: number, totalProducts: number) => {
    const newOrder: OrderType = { date: Date.now(), products, totalPrice, totalProducts }
    setOrder(prev => [...prev, newOrder])
    setCartCounter(0)
    setShopingCart([])
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
      isCheckSideMenuOpen,
      removeProductFromCart,
      order,
      addNewOrder,
      accounts,
      setAccounts,
      logged,
      setLogged
    }}>
      {children}
    </ShopiCartContext.Provider>
  )
}
