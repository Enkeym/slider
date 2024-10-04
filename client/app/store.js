// store.js
import { configureStore } from '@reduxjs/toolkit'
import { slidesApi } from '../app/services/slides.api'
import slidesReducer from '../features/create.slice'

const store = configureStore({
  reducer: {
    slides: slidesReducer, 
    [slidesApi.reducerPath]: slidesApi.reducer 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(slidesApi.middleware) 
})

export default store
