import React from 'react'
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';
import toast from 'react-hot-toast'

const Product = ({product}) => {

    const handleProductDelete = async(productId)=>{
        console.log(productId)
        try {
          await axios.delete(`http://localhost:5000/api/v1/product/delete/${productId}`)
          console.log('product deleted')
          toast.success('product deleted')
        } catch (error) {
          console.log(error)
        }
      }


  return (
    <div className='flex w-64 h-80 flex-col bg-white border-2 my-10'>
      <div className='flex-1 h-48 bg-gray-100'>
        <img src={`http://localhost:5000/images/${product.image}`} alt={product.productname} className='object-contain w-full h-full' />
      </div>
      <div className='flex-1 flex flex-col items-center justify-center'>
        <div className='font-bold py-1'>{product.productname}</div>
        <div className='text-gray-700 py-1'>Rs. {product.price}</div>
        <NavLink to={`/dashboard/update/${product._id}`}>
        <button className='bg-teal-600 text-white w-64 h-full py-3 mb-0'>Update</button>
        </NavLink>
        <button onClick={()=>handleProductDelete(product._id)} className='bg-red-800 text-white w-64 py-3 mb-0'>Delete</button>
      </div>
    </div>
  )
}

export default Product
