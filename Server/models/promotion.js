const mongoose = require('mongoose');
const promotionSChema = new mongoose.Schema({
    promotionType: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PromotionType',
        require: true
    },
    percent: {
        type: Number,
        require: true
    },
    dateBegin: {
        type: Date,
        require: true
    },
    dateEnd: {
        type: Date,
        require: true
    }
}, { timestamps: true });

const Promotion = mongoose.model('Promotion', promotionSChema);
module.exports = Promotion;