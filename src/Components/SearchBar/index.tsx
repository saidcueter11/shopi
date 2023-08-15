import { SyntheticEvent, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { LoadingCategoriesMobile } from '../LoadingCategoriesMobile'

export const SearchBar = ({ handleChange }: {handleChange: (e:SyntheticEvent<HTMLInputElement>) => void}) => {
  const [categories, setCategories] = useState([])
  const activeStyle = 'border border-black/90 rounded-full px-4 py-1 text-slate-50 bg-black/90'

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(json => setCategories(json))
  }, [])

  const isRouteActive = (isActive: boolean) => isActive ? activeStyle : 'border border-black/90 rounded-full px-4 py-1'

  return (
    <>
      <header className='flex items-center justify-center relative w-80 mb-4 flex-col gap-3'>
        <h1 className='font-medium text-xl'>Exclusive Products</h1>
        <input type="text" placeholder='Search a product...' className='rounded-lg border border-black/90 w-80 p-4 lg:mb-4' onChange={handleChange}/>

        {
          categories.length > 0
            ? <ul className='flex overflow-x-scroll w-screen px-4 py-3 gap-2 md:justify-center lg:hidden'>
                <li className=''><NavLink className={({ isActive }) => isRouteActive(isActive)} to={'/'}>All</NavLink></li>
                {
                  categories.map((category, i) => <li className='min-w-fit' key={i}><NavLink className={({ isActive }) => isRouteActive(isActive)} to={`/${category}`}>{category}</NavLink></li>)
                }
              </ul>
            : <LoadingCategoriesMobile/>
        }

      </header>

    </>
  )
}
