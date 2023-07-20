import { BrowserRouter, useRoutes } from 'react-router-dom'
import { Home } from '../Home'
import { MyOrder } from '../MyOrder'
import { MyAccount } from '../MyAccount'
import { MyOrders } from '../MyOrders'
import { SignIn } from '../SignIn'
import { NotFound } from '../NotFound'
import { Navbar } from '../../Components/Navbar'

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home/> },
    { path: '/myOrder', element: <MyOrder/> },
    { path: '/myOrders', element: <MyOrders/> },
    { path: '/myAccount', element: <MyAccount/> },
    { path: '/SignIn', element: <SignIn/> },
    { path: '/*', element: <NotFound/> }
  ])

  return routes
}

function App () {
  return (
    <>
      <BrowserRouter>
        <AppRoutes/>
        <Navbar/>
      </BrowserRouter>
    </>
  )
}

export default App
