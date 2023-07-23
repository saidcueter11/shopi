import { useContext } from 'react'
import { ShopiCartContext } from '../../Context'
import { ShopiCartContextType } from '../../types'

export const ProductDetail = () => {
  const context = useContext(ShopiCartContext) as ShopiCartContextType
  return (
    <aside className={`w-80 flex flex-col fixed bg-white border border-slate-950 rounded-lg h-5/6 overflow-y-scroll right-4 ${context.isProductDetailOpen ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 no-scrollbar`}>
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <button onClick={context.closeProductDetail}>
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>
        </button>
      </div>

      <figure className='px-6'>
        <img className='w-full h-full rounded-lg' src={context.productToShow.image} alt={context.productToShow.title} />
      </figure>

      <p className='flex flex-col p-6 gap-2'>
        <span className='font-medium text-2xl'>$ {context.productToShow.price}</span>
        <span className='font-medium text-md text-center'>{context.productToShow.title}</span>
        <span className='text-center'>{context.productToShow.description}</span>
      </p>
    </aside>
  )
}
