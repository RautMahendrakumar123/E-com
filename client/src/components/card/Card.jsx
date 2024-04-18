import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ product }) => {
  return (
    <div className='flex w-64 h-72 flex-col bg-white border-2 mb-5'>
      <Link to={`/viewproduct/${product._id}`}>
      <div className='flex-1 h-48 bg-gray-100'>
        <img src={`http://localhost:5000/images/${product.image}`} alt={product.productname} className='object-contain w-full h-full' style={{mixBlendMode:'multiply'}}/>
      </div>
      </Link>
      <div className='flex-1 flex flex-col items-center justify-center'>
        <div className='font-bold py-1'>{product.productname}</div>
        <div className='text-gray-700 py-1'>Rs. {product.price}</div>
        <button className='bg-teal-500 hover:bg-teal-800 text-white w-64 h-full py-3 mb-0 font-semibold'>Add to cart</button>
      </div>
    </div>
  );
};

export default Card;