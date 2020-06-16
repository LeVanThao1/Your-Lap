const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    carts: [{
        product: {
            type: 
        }
    }] 
    deleteAt: {
        type: Date
    }
}, { timestamps: true });

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;