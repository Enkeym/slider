import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { prisma } from '../prisma/prisma.client.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const getSliders = async (req, res) => {
  try {
    const sliders = await prisma.slide.findMany()
    res.json(sliders)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch sliders' })
  }
}

export const addSlider = async (req, res) => {
  const { type, content } = req.body
  const file = req.file

  try {
    if (content && file) {
      return res.status(400).json({
        error: 'Content and image cannot be added at the same time'
      })
    }

    let slideData

    if (type !== 'text' && type !== 'image') {
      return res.status(400).json({
        error: 'Type must be either "text" or "image"'
      })
    }

    if (type === 'text') {
      slideData = {
        type: 'text',
        content: content,
        src: null
      }
    }

    if (type === 'image' && file) {
      if (!file.mimetype.startsWith('image/')) {
        return res.status(400).json({
          error: 'Uploaded file must be an image'
        })
      }

      const relativePath = `uploads/${file.filename}`

      slideData = {
        type: 'image',
        content: null,
        src: relativePath
      }
    }

    if (!slideData) {
      return res.status(400).json({
        error: 'You must provide content for text or an image.'
      })
    }

    const newSlide = await prisma.slide.create({
      data: slideData
    })

    return res.status(201).json(newSlide)
  } catch (error) {
    console.error('Error adding slider:', error)
    return res.status(500).json({
      error: 'Failed to add slider'
    })
  }
}

export const deleteSlider = async (req, res) => {
  const { id } = req.params

  try {
    const slide = await prisma.slide.findUnique({ where: { id } })

    if (!slide) {
      return res.status(404).json({ error: 'Slide not found' })
    }

    if (slide.type === 'image' && slide.src) {
      const filePath = path.join(__dirname, '..', slide.src)

      try {
        if (fs.existsSync(filePath)) {
          await fs.promises.unlink(filePath)
          console.log('Image deleted:', filePath)
        } else {
          console.log('File not found, skipping deletion.')
        }
      } catch (err) {
        console.error('Error deleting image:', err)
      }
    }

    await prisma.slide.delete({ where: { id } })

    res.status(200).json({ message: 'Slide deleted successfully' })
  } catch (error) {
    console.error('Error deleting slide:', error)
    return res.status(500).json({ error: 'Failed to delete slide' })
  }
}
