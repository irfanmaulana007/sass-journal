import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import connectDB from './src/config/db.js'
// import routes from './src/routes/index.js'
import journalRoutes from './src/routes/journalRoute.js'
import userRoutes from './src/routes/userRoute.js'

connectDB()
dotenv.config()

const app = express()
app.use(cors())
// routes()

app.use('/api/users', userRoutes)
app.use('/api/journals', journalRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`App is running in ${process.env.NODE_ENV} mode on port ${PORT}`))
