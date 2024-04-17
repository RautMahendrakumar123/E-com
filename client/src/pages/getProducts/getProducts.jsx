import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Product from './product/product.jsx'

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
    <div className='flex flex-wrap justify-around'>
            {
        products.map((product)=>{
          return<> <Product product={product}/></>
        })
      }
    </div>
  )
}

export default GetProducts
