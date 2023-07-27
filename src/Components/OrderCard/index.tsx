import { useContext } from 'react'
import { ProductType } from '../../types'
import { ShopiCartContext } from '../../Context'

export const OrderCard = (item: ProductType) => {
  const context = useContext(ShopiCartContext)

  return (
    <div className="flex justify-between items-center mb-2">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img className="w-full h-full rounded-lg object-contain" src={item.image} alt="" />
        </figure>
        <h3 className="text-sm font-light truncate w-24">{item.title}</h3>
      </div>

      <div className="flex items-center gap-2">
        <p className="font-medium text-lg">$ {item.price}</p>
        <button onClick={() => context?.removeProductFromCart(item)}>
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>
        </button>
      </div>
    </div>
  )
}
