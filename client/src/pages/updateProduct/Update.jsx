import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast'

const Update = () => {

    const [formData,setFormData]=useState({
        productname:"",
        image:"",
        desc:"",
        price:"",
        category:"",
        special:""
      })

      const  {id}  = useParams()

      const navigate = useNavigate()

      useEffect(() => {
        const getProductById = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/v1/product/${id}`);
                const { productname, image, desc, price, category, special } = response.data;
                setFormData({
                    ...formData,
                    productname,
                    image,
                    desc,
                    price,
                    category,
                    special,
                });
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };
        getProductById();
    }, [id]);

      const handleChange = (e)=>{
        if(e.target.name==='image'){
          setFormData((prev)=>({
              ...prev,
              [e.target.name]:e.target.files[0]
          }))
        }else{
          setFormData((prev)=>({
              ...prev,
              [e.target.name]:e.target.value
          }))
        }
        }

        const handleSubmit = async (e) => {
          e.preventDefault();
          const formDataToSend = new FormData();
          formDataToSend.append('productname', formData.productname);
          formDataToSend.append('image', formData.image);
          formDataToSend.append('desc', formData.desc);
          formDataToSend.append('price', formData.price);
          formDataToSend.append('category', formData.category);
          formDataToSend.append('special', formData.special);
          try {
              const response = await axios.put(`http://localhost:5000/api/v1/product/update/${id}`, formDataToSend);
              console.log('Product updated:', response.data);
              toast.success('product updated')
              navigate('/admindashboard/getproducts')
  
          } catch (error) {
              toast.error('something went wrong')
              console.error('Error updating product:', error);
          }
      }

  return (
 <div className=' flex items-center justify-center bg-blue-100' style={{ minHeight: 'calc(100vh - 160px)' }}>
      <div className='flex flex-col items-center justify-center w-full sm:w-1/4 md:w-1/2 lg:w-1/4 bg-white py-8 rounded-lg'>
        <div className='pb-5 font-serif font-extrabold'>
          Update Product
        </div>
        <form onSubmit={handleSubmit}  encType="multipart/form-data">
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
            <button type='submit' className='bg-blue-500 px-3 py-2 w-full text-white font-bold hover:bg-blue-700'>Update</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Update
