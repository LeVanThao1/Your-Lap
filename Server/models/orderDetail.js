const mongoose = require('mongoose');

const orderDetailSchema = new mongoose.Schema({
    products: [{
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            require: true,
        },
        amount: {
            type: Number,
            require: true
        }
    }],
    order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
        require: true,
    },
    promotion: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Promotion'
    }
}, {timestamps: true});

const OrderDetail = mongoose.model('OrderDetail', orderDetailSchema);

module.exports = OrderDetail;