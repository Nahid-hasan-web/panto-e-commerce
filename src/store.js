import { configureStore } from '@reduxjs/toolkit'
import  cartproductSlice  from './slices/cartproductSlice'

export default configureStore({
    reducer: {
      cartProductid : cartproductSlice
  },
})