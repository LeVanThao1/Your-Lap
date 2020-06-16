const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        max: 30,
        min: 10,
        require:true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        // required: true
    },
    dateOfBirth: {
        type: Date
    },
    type: {
        type: String,
        emun: ['member', 'admin'],
        default: 'member'
    },
    address: {
        type: String
    },
    phoneNumber: {
        type: String,
        min: 10,
        max: 10
    },
    state: {
        type: Boolean,
        default: false
    },
    cart: {
        type: mongoose.Schema.Types.ObjectId
    },
    deleteAt: {
        type: Date
    }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;