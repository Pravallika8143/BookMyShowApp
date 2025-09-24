import React from 'react'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className='border border-dark p-3 m-2'>
      <h1>BookMyShow</h1>
      <Outlet></Outlet>
    </div>
  )
}

export default App