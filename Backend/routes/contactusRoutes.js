const express = require('express');
const contactusRoutes = express.Router();
const { createContact, getAllContacts
} = require('../controller/contactusController');
contactusRoutes.route("/")
    .get(getAllContacts)
    .post(createContact)
// loggedin plan
module.exports = contactusRoutes;