//slider.js
import express from 'express'
import {
  addSlider,
  deleteSlider,
  getSliders
} from '../controllers/slide.controller.js'
import upload from '../middleware/multer.config.js'

const router = express.Router()

router.get('/', getSliders)
router.post('/add', upload.single('src'), addSlider)
router.delete('/delete/:id', deleteSlider)

export default router
