const mongoose = require('mongoose');

const orderDetailSchema = new mongoose.Schema({
    product: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        require: true,
    }],
    order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
        require: true,
    },
    amount: {
        type: Number,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    promotion: {
        type: mongoose.Schema.Types.ObjectId,
    }
}, {timestamps: true});

const OrderDetail = mongoose.model('Order', orderDetailSchema);

module.exports = OrderDetail;