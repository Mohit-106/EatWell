const mongoose = require("mongoose");
const reviewSchema = new mongoose.Schema({
    description: {
        type: String,
        required: [true, "Review can't be empty"]
    },
    rating: {
        type: String,
        min: 1,
        max: 5,
        required: [true, "Review must contain some rating"]
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    user: {
        // info
        type: String,
        required: [true, "Review can't be empty"]    
    },
    plan: {
        // info
        type: String,
        required: [true, "Review can't be empty"]    
    }
})
const ReviewModel = mongoose.model("FoodreviewModel",
 reviewSchema);
module.exports = ReviewModel;