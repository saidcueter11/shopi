import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  const activeStyle = 'underline underline-offset-4'

  const isRouteActive = (isActive: boolean) => isActive ? activeStyle : undefined

  return (
    <nav className='flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-normal top-0'>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg'><NavLink to={'/'}>Shopi</NavLink></li>
        <li><NavLink to={'/'} className={({ isActive }) => isRouteActive(isActive)}>All</NavLink></li>
        <li><NavLink to={'/'} className={({ isActive }) => isRouteActive(isActive)}>Clothes</NavLink></li>
        <li><NavLink to={'/'} className={({ isActive }) => isRouteActive(isActive)}>Electronics</NavLink></li>
        <li><NavLink to={'/'} className={({ isActive }) => isRouteActive(isActive)}>Furnitiures</NavLink></li>
        <li><NavLink to={'/'} className={({ isActive }) => isRouteActive(isActive)}>Toys</NavLink></li>
        <li><NavLink to={'/'} className={({ isActive }) => isRouteActive(isActive)}>Others</NavLink></li>
      </ul>

      <ul className='flex items-center gap-3'>
        <li className='text-black/60'>email@domain.com</li>
        <li><NavLink className={({ isActive }) => isRouteActive(isActive)} to={'/myOrders'}>My Orders</NavLink></li>
        <li><NavLink className={({ isActive }) => isRouteActive(isActive)} to={'/myAccount'}>My Account</NavLink></li>
        <li><NavLink className={({ isActive }) => isRouteActive(isActive)} to={'/SignIn'}>Sign In</NavLink></li>
      </ul>
    </nav>
  )
}
