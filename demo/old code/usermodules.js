// this is how to create a shema
const mongoose = require('mongoose');

// Create the schema
const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: false
        },
        avatar: {
            type: String,
            required: false
        },
        dateCreated: {
            type: Date,
            required:true,
            default: Date.now   // we didn't put a braces because we don't want to call it here
        }
    }
)

// Create the model
const usermodules = mongoose.model('users', UserSchema);

// Export the model
module.exports = usermodules;