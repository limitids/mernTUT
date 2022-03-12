const express = require('express')
const dotenv = require('dotenv').config() // config allows dotenv file
const port = process.env.port || 5000 // to access env

const app = express()

app.use('/api/goals',require('./routes/goalRoutes'))

app.listen(port,() => console.log(`server started on ${port}`))
