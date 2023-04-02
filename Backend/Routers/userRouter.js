const express = require("express");
const userModel = require("../Models/UserModel");
//user Router
const userRouter = express.Router();
userRouter
.route('/')
.get(getUsers)
.post(setUser)
.patch(updateUser)
.delete(deleteUser)
userRouter.route('/:id').get(getUserById)

async function getUsers(req,res){
    let allUsers = await userModel.find();
    res.json({
        message:'list of all users', data: allUsers
    })
}

async function setUser(req,res){
    let obj = req.body;
    let data = await userModel.create(obj);
    console.log(data);
    res.json({
        message:"data received successfully",
        user:req.body
    })
}

async function updateUser(req,res){
    let datatoBeUpdated = req.body;
    let user = await userModel.findOneAndUpdate({email:'mwk5757@gmail.com'},datatoBeUpdated); 
    res.json({
        message:"Data has been updated"
    })
}

async function deleteUser(req,res){
    let userTobeDeleted = req.body;
    let user = await userModel.findOneAndDelete(userTobeDeleted);
    res.json({
        message:"Data has been deleted"
    }) 
}

async function getUserById(req,res){
    console.log(req.params.id);
    let user = await userModel.findOne({email:"mwk5757@gmail.com"});
    res.json({
        message:"req received",
        data:user
    })
}




module.exports = userRouter;