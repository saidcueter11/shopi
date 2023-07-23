import { SyntheticEvent, useContext } from 'react'
import { ProductType, ShopiCartContextType } from '../../types'
import { ShopiCartContext } from '../../Context'

export const ProductCard = (item: ProductType) => {
  const context = useContext(ShopiCartContext) as ShopiCartContextType

  const addProduct = (e: SyntheticEvent) => {
    e.stopPropagation()
    context.setCartCounter(context.cartCounter + 1)
    context.addProductToCart(item)
  }

  return (
    <article className="bg-white cursor-pointer w-56 h-60 hover:scale-105 transition-all" onClick={() => context.showProductDetail(item)}>
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-2 left-2 px-3 py-0.5 bg-white/60 rounded-lg text-black text-xs">{item.category}</span>

        <img className="w-full h-full object-cover rounded-lg" src={item.image} alt={item.description} />

        <button className="absolute top-2 right-2 flex justify-center items-center rounded-full bg-white w-6 h-6 shadow-lg hover:bg-slate-900/40 hover:fill-white hover:-translate-y-1 transition-all" onClick={addProduct}>
          <svg xmlns="http://www.w3.org/2000/svg" height="12" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
        </button>

      </figure>

      <p className="flex justify-between">
        <span className="text-sm font-light truncate mr-2 w-36">{item.title}</span>
        <span className="text-lg font-medium">$ {item.price}</span>
      </p>
    </article>
  )
}
