import { useContext } from 'react'
import { MainLayout } from '../../Components/Layout'
import { ShopiCartContext } from '../../Context'
import { Link, useLocation } from 'react-router-dom'
import { OrderDetail } from '../../Components/OrderDetail'
import { OrderType } from '../../types'

export const MyOrder = () => {
  const context = useContext(ShopiCartContext)
  const { pathname } = useLocation()
  const id = pathname.slice(10).split('%')[0]
  const currentOrder = context?.currentUser?.orders?.find(o => o.date.toString() === id)
  const lastOrder = context?.currentUser?.orders?.slice(-1)[0]

  return (
    <MainLayout>
      <section className='flex items-center w-80 justify-center gap-6 mb-6'>
        <Link to={'/myOrders'}>
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
          </svg>
        </Link>
        <h1 className='justify-self-center'>My Order</h1>
      </section>
      <div className='flex flex-col w-80'>
        {
          id !== 'last' && <OrderDetail order={currentOrder as OrderType}/>
        }

        {
          id === 'last' && <OrderDetail order={lastOrder as OrderType}/>
        }

      </div>
    </MainLayout>
  )
}
