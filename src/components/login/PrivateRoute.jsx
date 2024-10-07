import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import Loading from '../helper/Loading'

const PrivateRoute = () => {
    const { user, loading } = useSelector((state) => state.auth)
    if (loading) {
        return <Loading />
    }
    if (user) {
        return <Outlet />
    } else {
        return <Navigate to={'/login'} replace/>
    }
}

export default PrivateRoute