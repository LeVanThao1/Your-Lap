const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        max: 30,
        min: 10,
        required:true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        // required: true
    },
    dateOfBirth: {
        type: Date
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        min: 6,
        // required: true
    },
    type: {
        type: String,
        enum: ['member', 'admin'],
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
    deleteAt: {
        type: Date
    },
    facebook: {
        id: {
            type: String,
            max: 50
        } 
    },
    verifyCode: {
        type: String
    },
    verifyCodeExpiredAt: {
        type: Date
    }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;