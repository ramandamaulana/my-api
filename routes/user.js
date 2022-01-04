const express = require('express')
const router = express.Router()
const cors = require('cors')
const UserModel = require('../models/User')

router.get('/home',cors(), async(req,res)=>{
    res.json({
        body:{
            message:'Hello  Dude'
        }
    })
})

// Create
router.post('/add', cors(), async (req,res)=>{
    const user = new UserModel({
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        email : req.body.email,
        password : req.body.password,
    })

    // Insert
    user.save().then(response=>{
        res.send(response)
    }).catch(error=>{
        res.send(error)
    })
})
// Get All
router.get('/all',cors(),async (req,res)=>{
    const users = await UserModel.find()
    
    try{
        res.send(users)
    }catch(err){
        res.send(err)
    }
})
// Get Id 
router.get('/user/:id',async(req,res)=>{
    const id = req.params.id;
    const user =  await UserModel.findById(id)

    try{
        res.send(user)
    }catch(err){
        res.send(err)
    }
})
// Delete

router.delete('/user/:id',async(req,res)=>{
    const id = req.params.id;
    const deleteUser =  await UserModel.remove({
        _id : id
    })  

    try{
        res.send(deleteUser)
    }catch(err){
        res.send(err)
    }
})
module.exports = router ;