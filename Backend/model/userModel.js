//tech knowledge  
// (schema) -> set of features and rules a certain entity should 
// follow
// * how to create a db ->  link share
// connect to my app // mongoose 
const mongoose = require('mongoose'); //npm i mongoose
// db server link -> mongodb atlas ka link
let secrets = require("../secrets");

// db  server connect -> mongodbAtlas connect 
mongoose
    .connect(secrets.DB_LINK)
    .then(function () {
        console.log("connected");
    })
    .catch(function (err) {
        console.log("error", err);
    })
// how to create a schema-> only entries written will be added to your db no one else 
let userSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: [true, "Name is not send"],
    },
    email: {
        type: String,
        // required: [true, "email is missing"],
        // unique: true
    },
    password: {
        type: String,
        // required: [true, "password is missing"]
    },
    confirmPassword: {
        type: String,
        // required: [true, "confirmPassword is missing "],
        // custom validator
        validate: {
            validator: function () {
                // this referes to the current entry 
                return this.password == this.confirmPassword;
            },
            //    error message
            message: "password miss match"
        },
    },
    profileImage: {
        type: String,
        default: "dp.png",
    },
    otp: {
        type: String
    },
    otpExpiry: {
        type: Date
    },
    role :{
        type:String,
        enum:['admin','user'],
        default:'user'
    }
})
// model is similar to your collection 
const FooduserModel = mongoose.model
    ('FooduserModel', userSchema);
module.exports = FooduserModel;