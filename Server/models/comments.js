const mongoose = require('mongoose');
const commentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        require: true
    },
    description: {
        type: String,
        require: true
    }
}, { timestamps: true });

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;