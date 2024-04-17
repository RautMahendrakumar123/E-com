import React from 'react'
import watch from '../../assets/smartwatch.webp'

const ViewProduct = () => {
  return (
    <div className='flex items-center justify-center bg-blue-50' style={{ minHeight: 'calc(100vh - 160px)' }}>
      <div className='h-full flex'>
        <div className='flex-1'>
          <img src={watch} className='object-contain'/>
        </div>
        <div className='flex-1 flex items-center justify-center flex-col w-10/12 px-10'>
          <div className='py-5 font-sans font-extrabold'>Smartwatch iq 3</div>
          <div className='py-5 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quam iste ullam, repellendus culpa ex. Ipsum, iusto. Modi illo consequatur itaque esse iste eos neque odio. Provident recusandae quasi modi.</div>
          <div className='py-3 font-bold text-red-600'>Rs. 2999</div>
          <div className='py-3 px-3 bg-teal-500 text-white text-bold cursor-pointer'>Add to cart</div>
        </div>
      </div>
    </div>
  )
}

export default ViewProduct
