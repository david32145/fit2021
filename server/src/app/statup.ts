import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import './mongodb'
import routes from './routes'

const app = express()

app.use(express.json())
app.use(cors())
app.use(routes)

export default app