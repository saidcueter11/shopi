import { useContext } from 'react'
import { MainLayout } from '../../Components/Layout'
import { OrdersCard } from '../../Components/OrdersCard'
import { ShopiCartContext } from '../../Context'
import { Link } from 'react-router-dom'

export const MyOrders = () => {
  const context = useContext(ShopiCartContext)
  return (
    <MainLayout>
      <h1 className='font-medium text-xl'>My Orders</h1>
      {
        context?.currentUser?.orders?.map(o =>
          <Link key={o.date} to={`/myOrders/${o.date}}`}>
            <OrdersCard date={o.date} totalPrice={o.totalPrice} totalProducts={o.totalProducts}/>
          </Link>)
      }
    </MainLayout>
  )
}
