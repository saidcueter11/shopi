import { useContext } from 'react'
import { ShopiCartContext } from '../../Context'
import { ShopiCartContextType } from '../../types'
import { OrderCard } from '../OrderCard'
import { getTotalPrice } from '../../utils'
import { Link } from 'react-router-dom'

export const CheckoutSideMenu = () => {
  const context = useContext(ShopiCartContext) as ShopiCartContextType
  const totalPrice = getTotalPrice(context.shopingCart)

  const handleCheckout = () => context.addNewOrder(context.shopingCart, totalPrice, context.cartCounter)

  return (
    <aside className={`w-80 flex flex-col fixed bg-white border border-slate-950 rounded-lg h-5/6 overflow-y-scroll right-4 ${context.isCheckSideMenuOpen ? 'opacity-100' : 'opacity-0 hidden'} transition-opacity duration-300 no-scrollbar`}>
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Orders</h2>
        <button onClick={context.closeCheckoutSideMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>
        </button>
      </div>

      <div className='px-6 flex-1'>
        {
          context.shopingCart.map(product => <OrderCard key={product.id} {...product}/>)
        }
      </div>

      <footer className='px-6 mb-6 backdrop-blur-md rounded-full sticky bottom-6'>
        <p className='flex justify-between items-center p-3'>
          <span className='font-medium text-lg'>Total: </span>
          <span className='font-bold text-xl'>$ {totalPrice}</span>
        </p>
        <Link to='/myOrders/last'>
          <button className='bg-slate-900 w-full py-3 text-slate-50 rounded-lg' onClick={handleCheckout}>Checkout</button>
        </Link>
      </footer>

    </aside>
  )
}
