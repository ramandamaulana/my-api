const express = require('express')
const app = express()
// Mongoose
const mongoose = require('mongoose')
// For Env
const env = require('dotenv/config')
// function 
app.use(express.json())
const cors = require('cors')
const userRoutes = require('./routes/user')
app.use('/api/',cors(),userRoutes)


app.listen('8000',()=>{
    console.log('Hello Server Is Running')
})

mongoose.connect(process.env.DB,()=>{
console.log('database Connected')
})