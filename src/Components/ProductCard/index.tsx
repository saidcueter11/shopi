import { SyntheticEvent, useContext } from 'react'
import { ProductType, ShopiCartContextType } from '../../types'
import { ShopiCartContext } from '../../Context'

export const ProductCard = (item: ProductType) => {
  const context = useContext(ShopiCartContext) as ShopiCartContextType

  const isItemInCart = context.shopingCart.find(product => product.id === item.id)

  const addProduct = (e: SyntheticEvent) => {
    e.stopPropagation()
    if (!isItemInCart) {
      context.setCartCounter(context.cartCounter + 1)
      context.addProductToCart(item)
    }
  }

  return (
    <article className="bg-white cursor-pointer w-56 h-60 hover:scale-105 transition-all" onClick={() => context.showProductDetail(item)}>
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-2 left-2 px-3 py-0.5 bg-white/60 rounded-lg text-black text-xs">{item.category}</span>

        <img className="w-full h-full object-contain" src={item.image} alt={item.description} />

        <button className={`absolute top-2 right-2 flex justify-center items-center rounded-full bg-white w-6 h-6 shadow-lg ${isItemInCart ? 'bg-black text-white' : 'hover:-translate-y-1 transition-transform hover:scale-105'}`} onClick={addProduct}>
          {
            isItemInCart
              ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.1" stroke="black" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              : <svg xmlns="http://www.w3.org/2000/svg" height="12" viewBox="0 0 448 512">
                  <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
                </svg>
          }
        </button>

      </figure>

      <p className="flex justify-between items-center">
        <span className="text-sm font-light truncate mr-2 w-36">{item.title}</span>
        <span className="text-lg font-medium">$ {item.price}</span>
      </p>
    </article>
  )
}
