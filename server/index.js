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

const allowedOrigins = process.env.CLIENT_URL?.split(',') || [
  'http://localhost:4173'
]

app.use(
  cors({
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'DELETE'],
    credentials: true
  })
)

app.use('/uploads', express.static(path.join(__dirname, '/uploads')))
app.use('/sliders', slider)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
