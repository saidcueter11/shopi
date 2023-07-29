import { useContext } from 'react'
import { MainLayout } from '../../Components/Layout'
import { ShopiCartContext } from '../../Context'
import { OrderCard } from '../../Components/OrderCard'

export const MyOrder = () => {
  const context = useContext(ShopiCartContext)

  return (
    <MainLayout>
      <div className='flex flex-col w-80'>
        {
          context?.order.slice(-1)[0].products.map(product => <OrderCard key={product.id} {...product}/>)
        }
      </div>
    </MainLayout>
  )
}
