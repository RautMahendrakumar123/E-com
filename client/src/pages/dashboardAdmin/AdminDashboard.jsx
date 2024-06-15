import React, { useEffect, useState } from 'react'
import AdminMenu from '../../components/MenuLinks/admin/AdminMenu'
import axios from 'axios'
import avatar from '../../assets/noavatar.png'

const AdminDashboard = () => {
  const [user,setUser]=useState([]);
const token = localStorage.getItem('token')

useEffect(()=>{
  const fetchUser = async()=>{
    const response = await axios.get('http://localhost:5000/api/v1/getuser',{
      headers:{
        Authorization:token
      }
    })
    if(response.status===200){
      setUser(response.data)
    }
  }
  fetchUser()
},[])

  return (
    <div className='flex p-4 m-3 h-screen'>
    <div className='w-2/12'>
      <div className='p-3 text-center font-bold'>
        Admin Panel
      </div>
      <div className='p-3'>
      <AdminMenu />
      </div>
    </div>
    <div className='w-10/12 h-full'>
      <div className='p-3 flex items-center flex-col justify-center border-2 border-gray-400 rounded-lg h-2/3'>
      <div className=' w-28'>
        <img src={user.image ? `http://localhost:5000/images/${user.image}` : avatar} className='w-full rounded-3xl'/>
      </div>
        <hr className=''/>
        <div className='py-5 text-2xl font-bold'>Name : {user.name}</div>
        <hr className=''/>
        <div className='py-5 text-xl font-semibold'>Email : {user.email}</div>
        <hr className=''/>
        <div className='py-5 text-xl font-semibold'>Contact : {user.contact}</div>
      </div>
    </div>
  </div>
  )
}

export default AdminDashboard
