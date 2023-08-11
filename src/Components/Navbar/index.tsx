import { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ShopiCartContext } from '../../Context'
import { ShopiCartContextType } from '../../types'
import { LoadingCategories } from '../LoadingCategories'

export const Navbar = () => {
  const context = useContext(ShopiCartContext) as ShopiCartContextType
  const activeStyle = 'underline underline-offset-4'
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(json => setCategories(json))
  }, [])

  const isRouteActive = (isActive: boolean) => isActive ? activeStyle : undefined

  const handleSignOut = () => context.setLogged(false)

  return (
    <nav className='flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-normal top-0 backdrop-blur-sm'>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg'><NavLink to={'/'}>Shopi</NavLink></li>
        <li><NavLink to={'/'} className={({ isActive }) => isRouteActive(isActive)}>All</NavLink></li>
        {
          categories.length
            ? categories.map((category, i) => <li key={i}><NavLink to={category} className={({ isActive }) => isRouteActive(isActive)}>{category}</NavLink></li>)
            : <LoadingCategories/>
        }
      </ul>

      <ul className='flex items-center gap-3'>
        {
          context.logged &&
            <>
              <li className='text-black/60'>{context.currentUser?.email}</li>
              <li><NavLink className={({ isActive }) => isRouteActive(isActive)} to={'/myOrders'}>My Orders</NavLink></li>
              <li><NavLink className={({ isActive }) => isRouteActive(isActive)} to={'/myAccount'}>My Account</NavLink></li>
              <li><NavLink onClick={handleSignOut} className={({ isActive }) => isRouteActive(isActive)} to={'/SignIn'}>Sign out</NavLink></li>
              <li className='flex gap-1 items-center cursor-pointer hover:scale-105' onClick={context.openCheckoutSideMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
                <span>{context.cartCounter}</span>
              </li>
            </>
        }

        {
          !context.logged && <li><NavLink className={({ isActive }) => isRouteActive(isActive)} to={'/SignIn'}>Sign In</NavLink></li>
        }
      </ul>
    </nav>
  )
}
