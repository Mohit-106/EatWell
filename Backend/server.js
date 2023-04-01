// const userModel = require("./models/UserModel")
const express = require("express");
const app = express();
const cookiesParser = require("cookie-parser");
app.use(cookiesParser());
app.use(express.json());
app.listen(3000, function () {
    console.log("server started at port 3000");
})


//user Router
const userRouter = express.Router();
let users=[];
app.use('/user',userRouter);
userRouter
.route('/')
.get(getUser)
.post(postUser)
.patch(updateUser)
.delete(deleteUser)
userRouter.route('/:id').get(getUserById)
function getUser(req,res){
    res.send(users);
}
function postUser(req,res){
    console.log(req.body);
    users=req.body;
    res.json({
        message:"data received successfully",
        user:req.body
    })
}
function updateUser(req,res){
    console.log(req.body);
    let datatoBeUpdated = req.body;
    for(key in datatoBeUpdated){
        users[key] = datatoBeUpdated[key];
        res.json({
            message:"Data updated successfully"
        })
    }
}
function deleteUser(req,res){
    users = {};
    res.json({
        message:"Data has been deleted"
    }) 
}
function getUserById(req,res){
    console.log(req.params.id);
    let paramId=req.params.id;
    let obj={};
    for(let i =0; i<users.length; i++){
        if(users[i]['id']==paramId){
            obj=users[i]
        }
    }
    res.json({
        message:"req received",
        data:obj
    })
}

//Auth Router
const authRouter = express.Router();
app.use("/auth",authRouter);
authRouter.route('/signup')
.get(getSignUp)
.post(postSignUp)
function getSignUp(req,res){
    res.sendFile('/public/index.html',{root:__dirname});
}
function postSignUp(req,res){
    let obj = req.body;
    console.log(obj);
    res.json({
        message:"user signed up",
        data:obj
    });
}

//COOKIES
userRouter
.route("/getCookies")
.get(getCookies)

userRouter
.route("/setCookies")
.get(setCookies)

function getCookies(req,res){
    let cookies = res.cookie;
    console.log(cookies);
}

function setCookies(req,res){
    res.cookie('isLoggedIn',false)
    res.send("done")
}










