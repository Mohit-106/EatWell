const express = require("express");
const app = express();
// npm i cookie parser
const cookieParser = require("cookie-parser");

const userRouter = require("./routes/userRoutes");
const authRouter = require("./routes/authRoutes");
const planRouter = require("./routes/planRoutes");
const reviewRouter = require("./routes/reviewRoutes");
const contactusRouter = require("./routes/contactusRoutes");
const paymentRouter = require("./routes/paymentRoutes");
// to  add post body data to req.body
const rateLimit = require('express-rate-limit')

const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

// Apply the rate limiting middleware to API calls only
app.use('/api', apiLimiter);

app.use(express.json());
// add cookies to req.cookies
app.use(cookieParser());
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/plan", planRouter);
app.use("/api/v1/review", reviewRouter);
app.use("/api/v1/contact",contactusRouter);
app.use("/api/v1/payment",paymentRouter);


app.listen(3000, function () {
    console.log("server started at port 3000");
})








