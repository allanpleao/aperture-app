import { useState } from 'react'
import './App.css'
import Feed from './components/feed/Feed'
import { Outlet } from 'react-router-dom'

function App() {


  return (
    <>
      
      <Outlet />
    </>
  )
}

export default App
