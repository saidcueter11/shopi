import { BrowserRouter, useRoutes } from 'react-router-dom'
import { Home } from '../Home'
import { MyOrder } from '../MyOrder'
import { MyAccount } from '../MyAccount'
import { MyOrders } from '../MyOrders'
import { SignIn } from '../SignIn'
import { NotFound } from '../NotFound'
import { Navbar } from '../../Components/Navbar'
import { ShopiCartProvider } from '../../Context'
import { SignUp } from '../SignUp'
import { NavBarMobile } from '../../Components/NavBarMobile'
import { PrivateRoute } from '../../Components/PrivateRoute'

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <PrivateRoute><Home/></PrivateRoute> },
    { path: '/:category', element: <PrivateRoute><Home/></PrivateRoute> },
    { path: '/myOrder', element: <PrivateRoute><MyOrder/></PrivateRoute> },
    { path: '/myOrders', element: <PrivateRoute><MyOrders/></PrivateRoute> },
    { path: '/myOrders/last', element: <PrivateRoute><MyOrder/></PrivateRoute> },
    { path: '/myOrders/:id', element: <PrivateRoute><MyOrder/></PrivateRoute> },
    { path: '/myAccount', element: <PrivateRoute><MyAccount/></PrivateRoute> },
    { path: '/SignIn', element: <SignIn/> },
    { path: '/SignUp', element: <SignUp/> },
    { path: '/*', element: <NotFound/> }
  ])

  return routes
}

function App () {
  return (
    <ShopiCartProvider>
      <BrowserRouter>
        <AppRoutes/>
        <NavBarMobile/>
        <Navbar/>
      </BrowserRouter>
    </ShopiCartProvider>
  )
}

export default App
