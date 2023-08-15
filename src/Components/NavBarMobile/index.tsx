import { useContext, useState } from 'react'
import { ShopiCartContext } from '../../Context'
import { ShopiCartContextType } from '../../types'
import { NavLink } from 'react-router-dom'

export const NavBarMobile = () => {
  const context = useContext(ShopiCartContext) as ShopiCartContextType
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => setIsOpen(prev => !prev)

  const handleSignOut = () => {
    context.setLogged(false)
    setIsOpen(prev => !prev)
  }

  const handleCart = () => {
    setIsOpen(prev => !prev)
    context.openCheckoutSideMenu()
  }

  return (
    <main className="relative w-full lg:hidden">
      <div className={`bg-white flex flex-col shadow-lg rounded-lg h-full max-w-xs min-w-fit w-2/4 fixed z-20 top-0 right-0 p-4 ${!isOpen ? 'translate-x-full' : 'translate-x-0'} transition-transform`}>
        <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>

        <div className='mt-10 flex flex-col gap-3 flex-1'>
          <p className='text-black/60'>{context.currentUser?.email}</p>
          <p onClick={handleClick}><NavLink to={'/myOrders'}>My orders</NavLink></p>
          <p onClick={handleClick}><NavLink to={'/myAccount'}>My account</NavLink></p>
          <p onClick={handleCart}>My Cart</p>
        </div>

        <p onClick={handleSignOut} className='text-red-500/90'><NavLink to={'/SignIn'}>Sign out</NavLink></p>

      </div>

      <nav className="fixed top-0 p-4 backdrop-blur-sm w-full flex justify-between">
        <h2 className="font-semibold text-lg"><NavLink to={'/'}>Shopi</NavLink></h2>

        {
          context.logged &&
            <div onClick={handleClick}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </div>
        }

      </nav>

    </main>
  )
}
