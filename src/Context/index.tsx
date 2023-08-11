import React, { createContext, useState } from 'react'
import { AccountType, OrderType, ProductType, ShopiCartContextType } from '../types'
import { useLocalStorage } from '../hooks/useLocalStorage'

export const ShopiCartContext = createContext<ShopiCartContextType | null>(null)

export const ShopiCartProvider = ({ children }: {children:React.ReactNode}) => {
  const [accounts, setAccounts] = useLocalStorage<AccountType[]>('accounts', [])
  const [logged, setLogged] = useLocalStorage<boolean>('logged', false)
  const [currentUser, setCurrentUser] = useLocalStorage<AccountType>('currentUser', {})
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
    const updatedAccounts = accounts.map(acc => {
      if (acc.email === currentUser?.email) acc.orders?.push(newOrder)
      return acc
    })

    currentUser.orders?.push(newOrder)
    setCurrentUser(currentUser)

    setAccounts(updatedAccounts)
    setCartCounter(0)
    setShopingCart([])
  }

  const closeProductDetail = () => setIsProductDetailOpen(false)
  const closeCheckoutSideMenu = () => setIsCheckSideMenuOpen(false)
  const openCheckoutSideMenu = () => setIsCheckSideMenuOpen(true)

  return (
    <ShopiCartContext.Provider value={{
      openCheckoutSideMenu,
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
      addNewOrder,
      accounts,
      setAccounts,
      logged,
      setLogged,
      currentUser,
      setCurrentUser
    }}>
      {children}
    </ShopiCartContext.Provider>
  )
}
