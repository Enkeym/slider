// store.js
import { configureStore } from '@reduxjs/toolkit'
import { slidesApi } from './services/slidesApi' 

const store = configureStore({
  reducer: {
    [slidesApi.reducerPath]: slidesApi.reducer 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(slidesApi.middleware) 
})

export default store
