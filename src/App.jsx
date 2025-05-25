import React from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import LayoutOne from './layouts/LayoutOne'
import Home from './pages/Home'
import CheckoutPage from './pages/CheckoutPage'
import AllProducts from './pages/AllProducts'
import ProductDetails from './components/ProductDetails'
import Contact from './pages/Contact'
  import { ToastContainer } from 'react-toastify';

const App = () => {
  const myRoute = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<LayoutOne />}>
      <Route  index element={<Home />} /> 
      <Route   path='/checkout' element={< CheckoutPage/>} /> 
      <Route   path='/allProduct' element={< AllProducts/>} /> 
      <Route path='/productDetails/:productId/:prodcutName' element={< ProductDetails />} /> 
      <Route path='/contact' element={<Contact />}/>
    </Route>
  ))




  return (
    <>
      <ToastContainer />
    
      <RouterProvider router={myRoute} />
    </>
  )
}

export default App