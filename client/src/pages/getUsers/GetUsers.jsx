import React, { useEffect, useState } from 'react'
import AdminMenu from '../../components/MenuLinks/admin/AdminMenu'
import User from './user/user'
import axios from 'axios'

const GetUsers = () => {
const [users,setUsers]=useState([])


  useEffect(()=>{
    const fetchUser = async()=>{
      try {
        const response = await axios.get('http://localhost:5000/api/v1/getusers')
        setUsers(response.data)
      } catch (error) {
        console.log(error);
      }
    }

    fetchUser()
  },[])


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
          users.map((item)=>{
            return <User user={item} key={item._id}/>
          })
        }
    </div>
      </div>
    </div>
  )
}

export default GetUsers
