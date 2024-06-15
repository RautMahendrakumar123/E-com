import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Product from './product/product.jsx'
import AdminMenu from '../../components/MenuLinks/admin/AdminMenu.jsx'

const GetProducts = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/v1/allProducts`)
        setProducts(response.data.products)
      } catch (error) {
        console.log(error)
      }
    }
    fetchProducts()
  }, [])


  return (
    <div className='flex p-4 m-3'>
      <div className='w-2/12'>
        <div className='p-3 text-center font-bold'>
          Admin Panel
        </div>
        <div className='p-3'>
          <AdminMenu />
        </div>
      </div>
      <div className='w-10/12'>
      <div className='flex flex-wrap justify-around'>
            {
        products.map((product)=>{
          return<> <Product product={product}/></>
        })
      }
    </div>
      </div>
    </div>


  )
}

export default GetProducts
