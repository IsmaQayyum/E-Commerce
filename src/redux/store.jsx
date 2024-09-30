import { configureStore } from "@reduxjs/toolkit"
import cartReducer from './productSlice'

const store = configureStore({
    reducer: {
  cartReducer
    }
})


export default store;