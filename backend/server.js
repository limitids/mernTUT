const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config() // config allows dotenv file
const port = process.env.port || 5000 // to access env
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')

connectDB()

const app = express()

app.use(express.json()) // body parser for json data NEEDED for POST req body data
app.use(express.urlencoded({extended:false}))

app.use('/api/goals',require('./routes/goalRoutes'))

app.use(errorHandler) // overrides default error handler

app.listen(port,() => console.log(`server started on ${port}`))
