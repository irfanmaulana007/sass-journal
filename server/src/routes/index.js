import express from 'express'

// Routes
import userRoutes from './userRoute.js'
import journalRoutes from './journalRoute.js'

const app = express()

app.use('/api/users', userRoutes)
app.use('/api/journals', journalRoutes)

export default app