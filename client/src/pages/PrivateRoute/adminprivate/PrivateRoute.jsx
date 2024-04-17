import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Outlet } from 'react-router-dom';

const PrivateRouteA = () => {
    const [ok, setOk] = useState(false);
    const token = localStorage.getItem('token')
    useEffect(() => {
        const authCheck = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/v1/admin-auth`, {
                    headers: {
                        Authorization: token
                    }
                });
                if (response.data.ok) {
                    setOk(true);
                } else {
                    setOk(false);
                }
            } catch (error) {
                setOk(false);
                console.error('Error during authentication check:', error);
            }
        };
        if(token) authCheck()
    }, [token])
  return (
    <div>
    {
        ok ? <Outlet /> : 'spinner'
    }
</div>
  )
}

export default PrivateRouteA