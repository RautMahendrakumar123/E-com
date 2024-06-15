import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'
import AdminMenu from '../../components/MenuLinks/admin/AdminMenu';

const Upload = () => {

  const [formData, setFormData] = useState({
    productname: "",
    image: "",
    desc: "",
    price: "",
    category: "",
    special: ""
  })


  const navigate = useNavigate()

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.files[0]
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formDataToSend = new FormData();
    formDataToSend.append('productname', formData.productname)
    formDataToSend.append('image', formData.image)
    formDataToSend.append('desc', formData.desc)
    formDataToSend.append('price', formData.price)
    formDataToSend.append('category', formData.category)
    formDataToSend.append('special', formData.special)
    try {
      const response = await axios.post(`http://localhost:5000/api/v1/upload`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      if (response) {

        toast.success('Product Added')
        setFormData({
          productname: "",
          image: "",
          desc: "",
          price: "",
          category: "",
          special: false
        })
        e.target.reset()
        console.log(response)
      }
    } catch (error) {
      toast.error('Something Went Wrong')
      console.log(error)
    }

  }
  console.log(formData)

  return (

    <div className='flex p-4 m-3'>
    <div className='w-2/12'>
      <div className='p-3 text-center font-bold'>
        Admin Panel
      </div>
      <div>
      <AdminMenu />
      </div>
    </div>
    <div className='w-10/12'>
    <div className=' flex items-center justify-center bg-blue-100' style={{ minHeight: 'calc(100vh - 180px)' }}>
      <div className='flex flex-col items-center justify-center sm:w-2/4 md:w-1/2 lg:w-4/12 bg-white py-6 rounded-lg'>
        <div className='pb-3 font-serif font-extrabold'>
          Upload Product
        </div>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className='w-64 mt-3'>
            <input type='text' placeholder='Product Name' name='productname' value={formData.productname} onChange={handleChange} className='border-2 w-full border-gray-300 rounded-md p-2 focus:outline-none' />
          </div>
          <div className='w-64 mt-3'>
            <input type='text' placeholder='description' name='desc' value={formData.desc} onChange={handleChange} className='border-2 w-full border-gray-300 rounded-md p-2 focus:outline-none' />
          </div>
          <div className='w-64 mt-3'>
            <input type='number' placeholder='price' name='price' value={formData.price} onChange={handleChange} className='border-2 w-full border-gray-300 rounded-md p-2 focus:outline-none' />
          </div>
          <div className='w-64 mt-3'>
            <label >
              <select name='category' value={formData.category} onChange={handleChange} className='border-2 w-full border-gray-300 rounded-md p-2 focus:outline-none'>
                <option value='Mobile'>Mobile</option>
                <option value='Laptop'>Laptop</option>
                <option value='Groceries'>Groceries</option>
                <option value='Beauty and Toy'>Beauty and Toy</option>
                <option value='Home'>Home</option>
                <option value='Fashion'>Fashion</option>
              </select>
            </label>
          </div>
          <div className='w-64 mt-3'>
            <label>
              Special :-
              <select name='special' value={formData.special} onChange={handleChange} className='border-2 w-full border-gray-300 rounded-md p-2 focus:outline-none'>
                <option value='false'>False</option>
                <option value='true'>True</option>
              </select>
            </label>
          </div>
          <div className='w-64 mt-3'>
            <input type='file' name='image' onChange={handleChange} className='border-2 w-full border-gray-300 rounded-md p-2 focus:outline-none' />
          </div>
          <div className='mt-6 w-64 flex justify-center items-center'>
            <button type='submit' className='bg-blue-500 px-3 py-2 w-full text-white font-bold hover:bg-blue-700'>Upload</button>
          </div>
        </form>
      </div>
    </div>
    </div>
  </div>
   
  )
}

export default Upload
