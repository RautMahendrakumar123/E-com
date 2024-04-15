
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Header from '../src/components/header/Header'
import Footer from '../src/components/footer/Footer'
import Dashboard from './pages/dashboard/Dashboard'
import Register from './pages/register/Register'

function App() {
  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <div className='px-10 flex-1'>
        <Routes>
          <Route path='/dashboard' element={<Dashboard />}>

          </Route>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
