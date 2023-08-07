import { Link } from 'react-router-dom'
import { MainLayout } from '../../Components/Layout'
import { useContext, useState } from 'react'
import { ShopiCartContext } from '../../Context'
import { AccountType, ShopiCartContextType } from '../../types'

export const SignUp = () => {
  const context = useContext(ShopiCartContext) as ShopiCartContextType
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignUp = () => {
    const newAccount: AccountType = {
      email,
      name,
      password,
      orders: []
    }

    const newAccounts = [...context.accounts, newAccount]

    context.setAccounts(newAccounts)
    context.setLogged(true)
  }

  return (
    <MainLayout>
      <form action="" className='w-80 flex flex-col justify-center items-center gap-5'>
        <Link to={'/SignIn'} className='self-start'>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
            </svg>
        </Link>
        <h2 className='font-medium text-lg'>Sign Up</h2>

        <div className='flex flex-col gap-2 justify-between'>
          <label htmlFor="name" className='font-medium text-lg'>Name</label>
          <input type="text" id='name' onChange={(e) => setName(e.target.value)} className='border border-black/80 rounded-lg p-4'/>
        </div>
        <div className='flex flex-col gap-2 justify-between'>
          <label htmlFor="signUpEmail" className='font-medium text-lg'>Email</label>
          <input type="email" id='signUpEmail' onChange={(e) => setEmail(e.target.value)} className='border border-black/80 rounded-lg p-4'/>
        </div>
        <div className='flex flex-col gap-2 justify-between'>
          <label htmlFor="signUpPassword" className='font-medium text-lg'>Password</label>
          <input type="password" id='signUpPassword' onChange={(e) => setPassword(e.target.value)} className='border border-black/80 rounded-lg p-4'/>
        </div>

        <button type='button' className='bg-slate-900 w-4/5 p-4 text-slate-50 rounded-lg font-medium hover:opacity-80 transition-opacity' onClick={handleSignUp}>Sign Up</button>
      </form>
    </MainLayout>
  )
}
