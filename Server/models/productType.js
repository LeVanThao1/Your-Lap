const mongoose = require('mongoose');

const productTypeSchema = new mongoose.Schema({
    name: {
        type: String,
        min: 3,
        require: true
    },
    depot: {
        type: mongoose.Schema.Types.String,
        ref: 'Depot'
    }
}, {timestamps: true});

const ProductType = mongoose.model('ProductType', productTypeSchema);
module.exports = ProductType;