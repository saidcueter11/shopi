import { MainLayout } from '../../Components/Layout'

export const SignIn = () => {
  return (
    <MainLayout>
      <form action="" className='w-80 flex flex-col justify-center items-center gap-5'>
        <div className='flex flex-col gap-2 justify-between'>
          <label htmlFor="" className='font-medium text-lg'>Email</label>
          <input type="text" className='border border-black/80 rounded-lg p-4'/>
        </div>
        <div className='flex flex-col gap-2 justify-between'>
          <label htmlFor="" className='font-medium text-lg'>Password</label>
          <input type="text" className='border border-black/80 rounded-lg p-4'/>
        </div>

        <button type='button' className='bg-slate-900 w-4/5 p-4 text-slate-50 rounded-lg font-medium hover:opacity-80 transition-opacity'>Sign In</button>
      </form>

      <button className='p-4 px-8 border border-black/80 mt-4 rounded-lg font-medium hover:bg-slate-900 hover:text-slate-50 transition-colors'>Sign Up</button>

    </MainLayout>
  )
}
