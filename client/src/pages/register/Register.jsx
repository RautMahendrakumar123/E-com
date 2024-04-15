import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'

const Register = () => {

  const [formData,setFormData]=useState({
    name:"",
    email:"",
    contact:"",
    password:"",
    image:"",
    cpassword:""
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      setFormData((prevformdata) => ({
        ...prevformdata,
        [e.target.name]: e.target.files[0],
      }));
    } else {
      setFormData((prevformdata) => ({
        ...prevformdata,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('contact', formData.contact);
    formDataToSend.append('password', formData.password);
    formDataToSend.append('cpassword', formData.cpassword);
    formDataToSend.append('image', formData.image);

      const response = await axios.post(`http://localhost:5000/api/v1/register`,formDataToSend,{
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      if(response){
        toast.success('Registered Successfully')
        navigate('/login')
        setFormData({
          name: '',
          email: '',
          contact: '',
          password: '',
          cpassword: '',
          image:''
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
          <div className='w-64 mt-3'>
            <input type='file' name='image' onChange={handleChange} className='border-2 w-full border-gray-200 p-2 focus:outline-none' />
          </div>
          <div className='mt-6 w-64 flex justify-center items-center'>
            <button type='submit' className='bg-blue-500 px-3 py-2 w-full text-white font-bold hover:bg-blue-700'>Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
