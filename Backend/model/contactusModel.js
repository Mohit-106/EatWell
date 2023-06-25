const mongoose = require('mongoose'); //npm i mongoose
let contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "kindly pass the name"]
    },
    email: {
        type: String,
        required: [true, "You Need to provide Email"]
    },
    howdidyoufindus:{
        type: String,
        required: true
    },
    review: {
        type: String,
        required: true
    }
})
const ContactModel = mongoose.model
    // name of the collection, the set of rules this collection should follow
    ('ContactModel', contactSchema);
module.exports = ContactModel;