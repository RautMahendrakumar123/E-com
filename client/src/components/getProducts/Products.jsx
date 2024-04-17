import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../card/Card'

const Products = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const pageSize = 10;

    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const response = await axios.get(`http://localhost:5000/api/v1/products?page=${currentPage}&limit=${pageSize}`);
            if(response) {
              setProducts(response.data.products);
              setTotalPages(response.data.totalPages);
            }
         
          } catch (error) {
            console.error('Error fetching products:', error);
          }
        };
    
        fetchProducts();
      }, [currentPage]);


  return (
<>
      {products.length > 0 ? (
        <>
          <div className=' flex flex-wrap gap-5 items-center justify-center flex-grow'>
            {products.map((product) => (
              <Card key={product._id} product={product} />
            ))}
          </div>
          <div className="flex items-center justify-center gap-3 my-10">
            <button
              onClick={() => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))}
              disabled={currentPage === 1}
              className=' bg-teal-900 text-white px-3 py-2 w-24'
            >
              Previous
            </button>
            <span className=' border-2 border-gray-500 py-1 px-2 font-semibold'>Page {currentPage}</span>
            <button
              onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
              disabled={currentPage === totalPages}
              className=' bg-teal-900 text-white px-3 py-2 w-24'

            >
              Next
            </button>
          </div>
        </>
      ) : (
        <div>Loading products...</div>
      )}
    </>
  )
}

export default Products
