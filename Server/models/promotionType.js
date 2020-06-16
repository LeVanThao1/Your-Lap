const mongoose = require('mongoose');

const promotionTypeSchema = new mongoose.Schema({
    name: {
        type: String,
        require: 10
    }
    
}, {timestamps: true});

const PromotionType = mongoose.model('PromotionType', promotionTypeSchema);

module.exports = PromotionType;