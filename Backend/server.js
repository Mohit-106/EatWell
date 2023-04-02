const express = require("express");
const userRouter = require("./Routers/userRouter");
const authRouter = require("./Routers/authRouter");
const app = express();
app.use(express.json());
app.listen(3000, function () {
    console.log("server started at port 3000");
})
app.use('/user',userRouter);
app.use('/auth',authRouter);










