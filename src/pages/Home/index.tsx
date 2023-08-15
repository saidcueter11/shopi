import { SyntheticEvent, useEffect, useState } from 'react'
import { MainLayout } from '../../Components/Layout'
import { ProductCard } from '../../Components/ProductCard'
import { ProductType } from '../../types'
import { ProductDetail } from '../../Components/ProductDetail'
import { CheckoutSideMenu } from '../../Components/CheckoutSideMenu'
import { useParams } from 'react-router-dom'
import { LoadingItems } from '../../Components/LoadingItems'
import { SearchBar } from '../../Components/SearchBar'

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
    ? items.filter(item => item.category?.includes(category as string) && item.title?.toLocaleLowerCase()?.startsWith(searchByTitle.toLocaleLowerCase()))
    : items.filter(item => item.title?.toLocaleLowerCase()?.startsWith(searchByTitle.toLocaleLowerCase()))

  return (
    <MainLayout>
      <SearchBar handleChange={handleChange}/>
      <section className='grid grid-cols-1 w-full max-w-screen-lg justify-items-center sm:grid-cols-2 md:grid-cols-3'>
        {
          filteredItems.map(item => <ProductCard key={item.id} {...item}/>)
        }

        {
          !items.length && <LoadingItems/>
        }

        {
          (filteredItems.length === 0 && !items) && <p className='col-span-3 self-center justify-self-center font-medium text-xl'>No item found</p>
        }

      </section>
      <ProductDetail/>
      <CheckoutSideMenu/>
    </MainLayout>
  )
}
