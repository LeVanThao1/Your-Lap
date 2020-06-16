const mongoose = require('mongoose');
const loginSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true  
    },
    password: {
        type: String,
        min: 6,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        require: true
    }
}, { timestamps: true });

const Login = mongoose.model('User', loginSchema);
module.exports = Login;