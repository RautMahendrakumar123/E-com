import React from 'react'
import watch from '../../assets/smartwatch.webp'

const Card = () => {
  return (
      <div className='flex w-64 h-72 flex-col bg-white border-2'>
        <div className='flex-1 h-48 bg-gray-100'>
        {/* border-b-2 border-gray-300 */}
            <img src={watch} alt='smartwatch' className='object-contain w-full h-full'/>
        </div>
        <div className='flex-1 flex flex-col items-center justify-center flex-grow'>
            <div className='font-bold py-1'>Noise colorfit ultra 3</div>
            <div className='text-gray-700 py-1'>Rs. 2999</div>
            <div><button className='bg-teal-400 text-white w-64 py-3'>Add to cart</button></div>
        </div>
      </div>
  )
}

export default Card
