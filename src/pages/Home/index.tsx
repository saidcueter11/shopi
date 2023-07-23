import { useEffect, useState } from 'react'
import { MainLayout } from '../../Components/Layout'
import { ProductCard } from '../../Components/ProductCard'
import { ProductType } from '../../types'
import { ProductDetail } from '../../Components/ProductDetail'
import { CheckoutSideMenu } from '../../Components/CheckoutSideMenu'

export const Home = () => {
  const [items, setItems] = useState<ProductType[]>([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setItems(json))
  }, [])

  return (
    <MainLayout>
      <section className='grid grid-cols-3 w-full max-w-screen-lg justify-items-center'>
        {
          items.map(item => <ProductCard key={item.id} {...item}/>)
        }
      </section>
      <ProductDetail/>
      <CheckoutSideMenu/>
    </MainLayout>
  )
}
