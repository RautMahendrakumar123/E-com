import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo1.png';
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [user,setUser]=useState([]);
  const [cartproduct,setCartproduct]=useState([])
  const token = localStorage.getItem('token')
const navigate = useNavigate()

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(()=>{
    const fetchUser = async()=>{
      const response = await axios.get('http://localhost:5000/api/v1/getuser',{
        headers:{
          Authorization:token
        }
      })
      if(response.status===200){
        setUser(response.data)
      }
    }
    fetchUser()
  },[token])

  useEffect(()=>{
    const fetchProduct = async()=>{
        const response = await axios.get('http://localhost:5000/api/v1/get-cart-product',{
            headers:{
                Authorization:token
            }
        })
        if(response){
            setCartproduct(response.data.cart.items)
        }
    }
    fetchProduct()
},[token])


  const handleLogout = () => {
    localStorage.removeItem('token');
    setTimeout(() => {
      navigate('/')
    }, 1000);
    window.location.reload()
  }

  return (
    <div className='px-10 h-20 border-b-2 flex items-center justify-center bg-gray-100'>
      <div className='flex justify-between w-full items-center p-2'>
        <Link to='/'><div className='w-14'><img src={logo} alt="Logo" style={{mixBlendMode:'multiply'}}/></div></Link>
        <div className='sm:w-64 p-1'>
          <input type='text' className='border-2 p-1 border-gray-400 w-full h-9 rounded-md focus:outline-none' placeholder='Search...' />
        </div>

        <div className='flex gap-8 p-2 items-center'>
          {/* Show button on mobile to toggle menu */}
          <div className="sm:hidden">
            <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>

          <div className="hidden sm:flex gap-8 items-center">
            {!token ?
              <div>
                <Link to="/login">
                  <button type="button" className="px-3 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-md hover:bg-blue-800">LOGIN</button>
                </Link>
              </div>
              :
              <div onClick={handleLogout}>
                  <button type="button" className="px-3 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-800">LOGOUT</button>
              </div>
            }
            <Link to='/dashboard/cart'>
            <div className='relative'>
              <FaShoppingCart className='h-7 w-full cursor-pointer text-gray-600' />
              <div className='absolute top-0 right-0 -mt-2 -mr-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs'>{cartproduct.length>0 ? cartproduct.length : 0}</div>
            </div>
            </Link>
            <Link to={user.role===1? '/admindashboard/admin' : '/dashboard/user'}>
            <div className="hover:text-zinc-700 font-bold text-center text-zinc-500 border-2 border-gray-300 p-2 cursor-pointer">DASHBOARD</div>
            </Link>
          </div>


          {showMenu && (
            <div className="sm:hidden absolute right-0 top-16 w-48 bg-white border border-gray-300 rounded-lg shadow-md z-10">
              <ul>
                <li>
                  <Link to="/login" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Login</Link>
                </li>
                <li>
                  <Link to="/dashboard/cart" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Cart</Link>
                </li>
                <li>
                  <Link to={user.role===1? '/admindashboard/admin' : '/dashboard/user'} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Dashboard</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
