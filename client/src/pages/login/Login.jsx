import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'
import axios from 'axios'
import { useDispatch } from "react-redux";
import {include} from '../../redux/userSlice';

const Login = () => {

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setFormData((prevformdata) => ({
      ...prevformdata,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:5000/api/v1/login`, formData)
      if (response) {
        localStorage.setItem('token',response.data.token)
        if(response.data){
          dispatch(include(response))
          toast.success('Login Successfull')
        }
        setTimeout(() => {
          navigate('/')
        }, 1000);
        setFormData({
          email: '',
          password: ''
        })
      }
    } catch (error) {
      toast.error('Something Went Wrong')
      console.log(error)
    }
  }

  return (
    <div className='flex items-center justify-center bg-blue-100'  style={{ minHeight: 'calc(100vh - 160px)' }}>
      <div className='flex flex-col items-center justify-center w-full sm:w-1/4 md:w-1/2 lg:w-1/4 bg-white py-8 rounded-lg'>
        <div className='pb-5 font-serif font-extrabold'>
          LOGIN
        </div>
        <form onSubmit={handleSubmit}>
          <div className='w-64 sm:w-full mt-3'>
            <input type='text' placeholder='email' name='email' value={formData.email} onChange={handleChange} className='border-2 w-full border-gray-300 rounded-md p-2 focus:outline-none' />
          </div>
          <div className='w-64 sm:w-full mt-3'>
            <input type='password' placeholder='password'  name='password' value={formData.password} onChange={handleChange} className='border-2 w-full border-gray-300 rounded-md p-2 focus:outline-none' />
          </div>
          <div className='mt-1 text-center'>
            don't have account <Link to='/register'><span className='text-blue-500'>Sign Up </span></Link>
            <span>/ Admin <Link to='/adminregister'><span className='text-blue-500'>Admin</span></Link></span>
          </div>
          <div className='mt-6 w-64 sm:w-full flex justify-center items-center'>
            <button type='submit' className='bg-blue-500 px-3 py-2 w-full text-white font-bold hover:bg-blue-700 rounded-md'>Sign In</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
