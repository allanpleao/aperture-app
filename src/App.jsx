import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/header/Header'

function App() {

  return (
    <div>
      <Header />
      <main className='MainContainer'>
      <Outlet />
      </main>
    </div>
  )
}

export default App
