export interface Rating {
  rate: number
  count: number
}

export interface ProductType {
  id?: number
  title?: string
  price?: number
  description?: string
  category?: string
  image?: string
  rating?: Rating
}

export interface OrderType {
  date: number
  products: ProductType[]
  totalProducts: number
  totalPrice: number
}

export interface ShopiCartContextType {
  cartCounter: number
  setCartCounter: (count: number) => void
  closeProductDetail: () => void
  productToShow: ProductType
  showProductDetail: (product: ProductType) => void
  isProductDetailOpen: boolean
  shopingCart: ProductType[]
  addProductToCart: (product: ProductType) => void
  removeProductFromCart: (product: ProductType) => void
  closeCheckoutSideMenu: () => void
  isCheckSideMenuOpen: boolean
  order: OrderType[]
  addNewOrder: (products: ProductType[], totalProducts: number, totalPrice: number) => void
}
