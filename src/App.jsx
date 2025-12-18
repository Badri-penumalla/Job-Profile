import React from 'react'
import './component/style/style.css'
import { RouterProvider } from 'react-router-dom'
import routers from './component/routes/routes'

const App = () => {
  return (
    <RouterProvider router={routers}></RouterProvider>
  )
}

export default App