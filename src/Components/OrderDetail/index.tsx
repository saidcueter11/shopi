import { OrderType } from '../../types'
import { OrderCard } from '../OrderCard'

export const OrderDetail = ({ order }: {order: OrderType}) => {
  const orderDate = new Date(order?.date as number).toDateString()
  return (
    <>
      <p className='flex justify-between mb-4'>
        <span className='font-medium'>Order placed on: </span>
        <span className='font-light'>{orderDate}</span>
      </p>
      {
        order?.products.map(product => <OrderCard key={product.id} {...product}/>)
      }
      <p className='flex justify-between mt-4'>
        <span className='font-medium text-lg'>Total: </span>
        <span className='font-light'>$ {order?.totalPrice.toFixed(2)}</span>
      </p>
    </>
  )
}
