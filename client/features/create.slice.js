import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  slides: JSON.parse(localStorage.getItem('slides')) || []
}

const saveSlidesToLocalStorage = (slides) => {
  localStorage.setItem('slides', JSON.stringify(slides))
}

const slidesSlice = createSlice({
  name: 'slides',
  initialState,
  reducers: {
    addSlide: (state, action) => {
      state.slides.push(action.payload)
      saveSlidesToLocalStorage(state.slides)
    },
    setSlides: (state, action) => {
      state.slides = action.payload
      saveSlidesToLocalStorage(state.slides)
    },
    deleteSlide: (state, action) => {
      state.slides = state.slides.filter((slide) => slide.id !== action.payload)
      saveSlidesToLocalStorage(state.slides)
    }
  }
})

export const { addSlide, setSlides, deleteSlide } = slidesSlice.actions
export default slidesSlice.reducer
