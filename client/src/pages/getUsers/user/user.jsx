import React from 'react'
import avatar from '../../../assets/noavatar.png'

const User = ({user}) => {
  return (
    <div className='bg-white flex justify-around items-start w-full mb-3'>
      <div className='w-28'>
        <img src={user.image? `http://localhost:5000/images/${user.image}`:avatar} className='w-full rounded-3xl'/>
      </div>
      <div className='flex items-center justify-around w-full h-full'>
      <div>{user.name}</div>
      <div>{user.email}</div>
      <div>{user.contact}</div>
      {/* <div>name</div> */}
      </div>
    </div>
  )
}

export default User
