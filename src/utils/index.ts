import { ProductType } from '../types'

export const getTotalPrice = (products: ProductType[]) => {
  let price = 0
  products.forEach(p => { if (p.price) price += p.price })
  return price
}
