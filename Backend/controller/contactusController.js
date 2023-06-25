const mongoose = require('mongoose');
const ContactModel = require('../model/contactusModel'); // Assuming the ContactModel is defined in a separate file

// Function to create a new contact
async function createContact(req,res) {
  try {
    const { name, email, howdidyoufindus, review } = req.body;
    const newContact = new ContactModel({
      name,
      email,
      howdidyoufindus,
      review
    });
    const savedContact = await newContact.save();
    res.status(201).json(savedContact);
  } catch (error) {
    console.error('Error creating contact:', error);
    throw error;
  }
}

// Function to retrieve all contacts
async function getAllContacts() {
  try {
    const contacts = await ContactModel.find({});
    console.log('All contacts:', contacts);
    return contacts;
  } catch (error) {
    console.error('Error retrieving contacts:', error);
    throw error;
  }
}

module.exports = {
  createContact,
  getAllContacts
};
