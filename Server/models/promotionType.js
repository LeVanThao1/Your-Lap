const mongoose = require('mongoose');

const promotionTypeSchema = new mongoose.Schema({
    name: {
        type: String,
        require: 10,
        require: true
    },
    deleteAt: {
        type: Date
    }   
}, {timestamps: true});

const PromotionType = mongoose.model('PromotionType', promotionTypeSchema);

module.exports = PromotionType;