import React from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import LayoutOne from './layouts/LayoutOne'
import Home from './pages/Home'
import CheckoutPage from './pages/CheckoutPage'
import AllProducts from './pages/AllProducts'
import ProductDetails from './components/ProductDetails'


const App = () => {
  const myRoute = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<LayoutOne />}>
      <Route  index element={<Home />} /> 
      <Route   path='/checkout' element={< CheckoutPage/>} /> 
      <Route   path='/allProduct' element={< AllProducts/>} /> 
      <Route   path='/productDetails' element={< ProductDetails/>} /> 
    </Route>
  ))




  return (
    <>
    
      <RouterProvider router={myRoute} />
    </>
  )
}

export default App