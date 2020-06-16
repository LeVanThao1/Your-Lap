const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        min: 10,
        require: true
    },
    description: {
        type: String,
        min: 30
    },
    image: [{
        type: String,
        require: true
    }],
    price: {
        type: Number,
        require: true
    },
    NSX: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'NSX'
    },
    amount: {
        type: Number,
        require: true
    },
    loaiSP: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProductType'
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    deleteAt: {
        type: Date
    }
}, {timestamps: true});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;