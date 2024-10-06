import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  slides: []
}

const slidesSlice = createSlice({
  name: 'slides',
  initialState,
  reducers: {
    addSlide: (state, action) => {
      state.slides.push(action.payload)
    },
    setSlides: (state, action) => {
      state.slides = action.payload
    },
    deleteSlide: (state, action) => {
      state.slides = state.slides.filter((slide) => slide.id !== action.payload)
    }
  }
})

export const { addSlide, setSlides, deleteSlide } = slidesSlice.actions
export default slidesSlice.reducer
