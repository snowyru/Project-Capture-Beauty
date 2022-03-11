const mongoose = require('mongoose');

// Create the schema
const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        surName: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        },
        region: {
            type: String,
            required: true
        },
        bio: {
            type: String,
            required: false
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        avatar: {
            type: String,
            required: false
        }
    }
)

// Create the model
const UserModel = mongoose.model('users', UserSchema);

// Export the model
module.exports = UserModel;