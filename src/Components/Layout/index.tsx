import React from 'react'

interface MainLayoutProps {
  children: React.ReactNode
}

export const MainLayout = ({ children }:MainLayoutProps) => {
  return (
    <main className='flex items-center flex-col mt-20'>
      {children}
    </main>
  )
}
