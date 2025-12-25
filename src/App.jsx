import React from 'react'
import './component/style/style.css'
import { RouterProvider } from 'react-router-dom'
import routers from './component/routes/routes'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
      <Toaster/>
    </>
  )
}

export default App