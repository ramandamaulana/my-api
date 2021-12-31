const express = require('express')
const app = express()
const mongoose = require('mongoose')

// function 
app.use(express.json())


app.get('/home',(req,res)=>{
    res.json({
        body:{
            message:''
        }
    })
})

app.post('/add',(req,res)=>{
    res.json(req.body)
})
app.listen('3000',()=>{
    console.log('Hello Server Is Running')
})

mongoose.connect('mongodb+srv://ramanda:123@cluster0.hwawo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',()=>{
console.log('database Connected')
})