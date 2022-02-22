import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './slice/productsSlice'

export default configureStore({
    reducer: {
        products: productsSlice,
    },
})
