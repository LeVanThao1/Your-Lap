const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    state: {
        type: String,
        enum: ["Đang giao", "Đã Nhận", "Chưa Giao"],
        default: "Chưa Giao",
        require: true
    },
    dateOfBooking: {
        type: Date,
        require: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
    recipientName: {
        type: String,
        min: 10,
        max: 30
    },
    recipientPhone: {
        type: String,
        min: 10,
        max: 10
    },
    recipientAddress: {
        type: String,
        min: 10,line item
        require: true
    },
    recipientEmail: {
        type: String,
        require: true
    }
}, {timestamps: true});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;