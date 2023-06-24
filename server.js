import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

// middlewares
app.use(express.json())

mongoose
	.connect(process.env.MONGO_URI)
	.then(() => console.log('MongoDB connected'))
	.catch((err) => console.log(err))

// routes
app.get('/api', (req, res) => {
	res.json({ data: 'hello world from nodejs api' })
})

app.listen(8000, () => console.log('Server running in port 8000'))
