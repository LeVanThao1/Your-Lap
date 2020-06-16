const mongoose = require('mongoose');
const nsxSChema = new mongoose.Schema({
    name: {
        type: String,
        max: 30,
        min: 10,
        require:true
    },
    nation: {
        type: String,
        require: true
    }
}, { timestamps: true });

const NSX = mongoose.model('NSX', nsxSChema);
module.exports = NSX;