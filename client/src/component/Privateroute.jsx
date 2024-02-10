import React from 'react'
import { Navigate, Outlet,useLocation } from 'react-router-dom'

const Privateroute = () => {
    const auth = localStorage.getItem('user');
    const location = useLocation();
    return auth?<Outlet />:<Navigate to="/adminlogin" replace state={{ from: location }}/>
}

export default Privateroute
