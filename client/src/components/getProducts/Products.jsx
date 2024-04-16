import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../card/Card'

const Products = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const pageSize = 12;

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
          <div className=''>
            {products.map((product) => (
              <Card key={product._id} product={product} />
            ))}
          </div>
          <div className="pagination-controls">
            <button
              onClick={() => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))}
              disabled={currentPage === 1}
              className=''
            >
              Previous
            </button>
            <span>page {currentPage}</span>
            <button
              onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
              disabled={currentPage === totalPages}
              className=''

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
