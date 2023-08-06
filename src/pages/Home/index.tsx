import { SyntheticEvent, useEffect, useState } from 'react'
import { MainLayout } from '../../Components/Layout'
import { ProductCard } from '../../Components/ProductCard'
import { ProductType } from '../../types'
import { ProductDetail } from '../../Components/ProductDetail'
import { CheckoutSideMenu } from '../../Components/CheckoutSideMenu'
import { useParams } from 'react-router-dom'

export const Home = () => {
  const [items, setItems] = useState<ProductType[]>([])
  const [searchByTitle, setSearchByTitle] = useState<string>('')
  const { category } = useParams()

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setItems(json))
  }, [])

  const handleChange = (e: SyntheticEvent<HTMLInputElement>) => setSearchByTitle(e.currentTarget.value)

  const filteredItems = category
    ? items.filter(item => item.category?.includes(category as string) && item.title?.toLocaleLowerCase()?.startsWith(searchByTitle))
    : items.filter(item => item.title?.toLocaleLowerCase()?.startsWith(searchByTitle))

  return (
    <MainLayout>
      <header className='flex items-center justify-center relative w-80 mb-4 flex-col gap-3'>
        <h1 className='font-medium text-xl'>Exclusive Products</h1>
        <input type="text" placeholder='Search a product...' className='rounded-lg border border-black/90 w-80 p-4 mb-4' onChange={handleChange}/>
      </header>
      <section className='grid grid-cols-3 w-full max-w-screen-lg justify-items-center'>
        {
          filteredItems.map(item => <ProductCard key={item.id} {...item}/>)
        }

        {
          (filteredItems.length === 0) && <p className='col-span-3 self-center justify-self-center font-medium text-xl'>No item found</p>
        }
      </section>
      <ProductDetail/>
      <CheckoutSideMenu/>
    </MainLayout>
  )
}
