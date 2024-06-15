
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Header from '../src/components/header/Header'
import Footer from '../src/components/footer/Footer'
import Dashboard from './pages/dashboard/Dashboard'
import Register from './pages/register/Register'
import RegisterAdmin from './pages/registerAdmin/RegisterAdmin'
import Upload from './pages/uploadProduct/Upload'
import ViewProduct from './pages/viewProduct/ViewProduct'
import Update from './pages/updateProduct/Update'
import GetProducts from './pages/getProducts/getProducts'
import PrivateRoute from './pages/PrivateRoute/userprivate/PrivateRoute'
import PrivateRouteA from './pages/PrivateRoute/adminprivate/PrivateRoute'
import AdminDashboard from './pages/dashboardAdmin/AdminDashboard'
import PageNotFound from './pages/pagenotfound/PageNotFound'
import Cart from './pages/cartPage/Cart'
import GetUsers from './pages/getUsers/GetUsers'


function App() {
  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <div className='px-10 flex-1'>
        <Routes>
          <Route path='/dashboard' element={<PrivateRoute />}>
            <Route path='user' element={<Dashboard />} />
            <Route path='cart' element={<Cart />} />
          </Route>
          <Route path='/admindashboard' element={<PrivateRouteA />}>
            <Route path='admin' element={<AdminDashboard />} />
            <Route path='update/:id' element={<Update />} />
            <Route path='getproducts' element={< GetProducts />} />
          <Route path='getusers' element={<GetUsers />} />
          <Route path='upload' element={<Upload />} />
          </Route>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/adminregister' element={<RegisterAdmin />} />
          <Route path='/viewproduct/:productId' element={<ViewProduct />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
