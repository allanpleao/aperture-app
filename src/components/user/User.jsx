import { useSelector } from 'react-redux'
import Feed from '../feed/Feed'
import React from 'react'

const User = () => {
    const  user  = useSelector((state) => state.auth.user)

    
  return (
    <div>
        <h1>página de {user?.displayName}</h1>
        <Feed />
    </div>
  )
}

export default User