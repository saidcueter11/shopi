import { useContext, useState } from 'react'
import { MainLayout } from '../../Components/Layout'
import { NavLink } from 'react-router-dom'
import { ShopiCartContextType } from '../../types'
import { ShopiCartContext } from '../../Context'

export const SignIn = () => {
  const context = useContext(ShopiCartContext) as ShopiCartContextType
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogIn = () => {
    if (context.accounts.length === 0) {
      setError('No Account was found')
      return
    }

    context.accounts.forEach(account => {
      if (account.email !== email) {
        setError('Account not found')
        return
      }

      if (account.email === email && account.password !== password) {
        setError('Email or password does not match')
      }

      if (account.email === email && account.password === password) {
        context.setLogged(true)
      }
    })
  }

  return (
    <MainLayout>
      <form action="" className='w-80 flex flex-col justify-center items-center gap-5'>
        <div className='flex flex-col gap-2 justify-between'>
          <label htmlFor="email" className='font-medium text-lg'>Email</label>
          <input type="email" id='email' className='border border-black/80 rounded-lg p-4' onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className='flex flex-col gap-2 justify-between'>
          <label htmlFor="password" className='font-medium text-lg'>Password</label>
          <input type="password" id='password' className='border border-black/80 rounded-lg p-4' onChange={(e) => setPassword(e.target.value)}/>
        </div>

        <button onClick={handleLogIn} type='button' className='bg-slate-900 w-4/5 p-4 border border-black text-slate-50 rounded-lg font-medium hover:bg-transparent transition-colors hover:text-slate-900'>Sign In</button>

        {
          error.length > 0 && <p className='font-medium text-red-500'>{error}</p>
        }
      </form>

      <NavLink to={'/SignUp'} className='p-4 px-8 border border-black/80 mt-4 rounded-lg font-medium hover:bg-slate-900 hover:text-slate-50 transition-colors'>Sign Up</NavLink>

    </MainLayout>
  )
}
