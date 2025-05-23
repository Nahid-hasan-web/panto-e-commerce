import { createSlice } from '@reduxjs/toolkit'

export const cartproductSlice = createSlice({
  name: 'counter',
  initialState: {
    value: JSON.parse(localStorage.getItem('cartProductId')) || [],
  },
  reducers: {

  cartPorduct: (state, action) => {
      state.value = action.payload
    },
    removeCartId: (state, action) => {
        state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { cartPorduct , removeCartId } = cartproductSlice.actions

export default cartproductSlice.reducer