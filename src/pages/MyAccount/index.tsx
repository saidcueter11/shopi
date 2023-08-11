import { useContext } from 'react'
import { MainLayout } from '../../Components/Layout'
import { ShopiCartContext } from '../../Context'
import { ShopiCartContextType } from '../../types'

export const MyAccount = () => {
  const context = useContext(ShopiCartContext) as ShopiCartContextType
  return (
    <MainLayout>
      <h2 className='font-medium text-lg mb-4'>Account Info</h2>
      <section>
        <p>
          <span className='font-medium text-lg'>Name: </span>
          <span className='font-light'>{context.currentUser?.name}</span>
        </p>
        <p>
          <span className='font-medium text-lg'>Email: </span>
          <span className='font-light'>{context.currentUser?.email}</span>
        </p>
      </section>
    </MainLayout>
  )
}
