import { useContext } from 'react'
import { MainLayout } from '../../Components/Layout'
import { OrdersCard } from '../../Components/OrdersCard'
import { ShopiCartContext } from '../../Context'
import { Link } from 'react-router-dom'

export const MyOrders = () => {
  const context = useContext(ShopiCartContext)
  const sortedOrders = context?.currentUser?.orders?.sort((a, b) => b.date - a.date)
  console.log(context?.currentUser)
  return (
    <MainLayout>
      <h1 className='font-medium text-xl mb-4'>My Orders</h1>
      {
        sortedOrders?.map(o =>
          <Link key={o.date} to={`/myOrders/${o.date}}`}>
            <OrdersCard date={o.date} totalPrice={o.totalPrice} totalProducts={o.totalProducts}/>
          </Link>)
      }
    </MainLayout>
  )
}
