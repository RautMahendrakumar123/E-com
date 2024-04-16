import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'


const RegisterAdmin = () => {

    const [formData,setFormData]=useState({
        question:"",
        name:"",
        email:"",
        contact:"",
        password:"",
        image:"",
        cpassword:""
      })

      const navigate = useNavigate()

      const handleChange = (e) => {
        setFormData((prevformdata) => ({
          ...prevformdata,
          [e.target.name]: e.target.value
        }))
      }
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post(`http://localhost:5000/api/v1/adminregister`, formData)
          if (response) {
            toast.success('Registered Successfully')
            navigate('/login')
            setFormData({
              question:'',
              name: '',
              email: '',
              contact: '',
              password: '',
              cpassword: '',
              image: ''
            })
          }
        } catch (error) {
          toast.error('Something Went Wrong')
          console.log(error)
        }
      }

  return (
    <div className=' flex items-center justify-center bg-blue-100' style={{ minHeight: 'calc(100vh - 160px)' }}>
    <div className='flex flex-col items-center justify-center w-full sm:w-1/4 md:w-1/2 lg:w-1/4 bg-white py-8'>
      <div className='pb-5 font-serif font-extrabold'>
        REGISTER
      </div>
      <form onSubmit={handleSubmit}  encType="multipart/form-data">
      <div className='w-64 mt-3'>
          <input type='text' placeholder='your answer' name='question' value={formData.question} onChange={handleChange} className='border-2 w-full border-gray-500 p-2 focus:outline-none' />
        </div>
        <div className='w-64 mt-3'>
          <input type='text' placeholder='name' name='name' value={formData.name} onChange={handleChange} className='border-2 w-full border-gray-500 p-2 focus:outline-none' />
        </div>
        <div className='w-64 mt-3'>
          <input type='text' placeholder='email' name='email' value={formData.email} onChange={handleChange} className='border-2 w-full border-gray-500 p-2 focus:outline-none' />
        </div>
        <div className='w-64 mt-3'>
          <input type='text' placeholder='contact' name='contact' value={formData.contact} onChange={handleChange} className='border-2 w-full border-gray-500 p-2 focus:outline-none' />
        </div>
        <div className='w-64 mt-3'>
          <input type='password' placeholder='password' name='password' value={formData.password} onChange={handleChange} className='border-2 w-full border-gray-500 p-2 focus:outline-none' />
        </div>
        <div className='w-64 mt-3'>
          <input type='password' placeholder='confirm password' name='cpassword' value={formData.cpassword} onChange={handleChange} className='border-2 w-full border-gray-500 p-2 focus:outline-none' />
        </div>
        <div className='mt-6 w-64 flex justify-center items-center'>
          <button type='submit' className='bg-blue-500 px-3 py-2 w-full text-white font-bold hover:bg-blue-700'>Sign Up</button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default RegisterAdmin
