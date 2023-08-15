import { useState } from 'react'

export const NavBarMobile = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => setIsOpen(prev => !prev)

  return (
    <main className="relative w-full h-screen lg:hidden">
      <div className={`bg-white/90 h-full max-w-xs w-2/4 fixed z-20 top-0 right-0 ${!isOpen ? 'translate-x-full' : 'translate-x-0'} transition-transform`}>
        <p onClick={handleClick}>x</p>
      </div>

      <nav className="fixed top-0 p-4 backdrop-blur-sm w-full flex justify-between">
        <h2 className="font-semibold text-lg">Shopi</h2>

        <div onClick={handleClick}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>

      </nav>

    </main>
  )
}
