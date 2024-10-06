//index.js
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import slider from './routes/slider.js'

dotenv.config()

const PORT = process.env.PORT || 5000

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/uploads', express.static(path.join(__dirname, '/uploads')))
app.use('/sliders', slider)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
