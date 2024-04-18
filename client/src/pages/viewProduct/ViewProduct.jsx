import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ViewProduct = () => {
  const { productId } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/v1/product/${productId}`);
        if (response) {
          setData(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [productId]);

  return (
    <div className='flex items-center justify-center bg-blue-50' style={{ minHeight: 'calc(100vh - 160px)' }}>
      <div className='flex flex-1'>
        <div className='flex-1'>
          <img src={`http://localhost:5000/images/${data.image}`} alt={data.productname} className='max-h-96 w-auto object-cover bg-transparent' style={{mixBlendMode:'multiply'}}/>
        </div>
        <div className='flex-1 flex items-center justify-center flex-col w-10/12 px-10'>
          <div className='py-5 font-sans font-extrabold text-xl'>{data.productname}</div>
          <div className='py-5 font-semibold text-gray-700'>{data.desc}</div>
          <div className='py-3 font-bold text-red-600'>Rs. {data.price}</div>
          <button className='py-3 px-9 bg-teal-600 text-white font-semibold cursor-pointer rounded-lg hover:bg-teal-700'>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
