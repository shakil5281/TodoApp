import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navber } from './components'

const App = () => {
  return (
   <>
    <Navber />
    <Outlet />
   </>
  )
}

export default App