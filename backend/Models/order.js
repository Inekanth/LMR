const mongoose = require ('mongoose');

const user = new mongoose.Schema ({
    user: {
       type: mongoose.Types.ObjectId,
       ref: 'user'
    },

    book: {
       type: mongoose.Types.ObjectId,
       ref: 'book'
    },

    status: {
       type: String,
       default: "order placement",
       enum: ["Order placed", "Out for Delivery, Delivered, Canceled" ],
    },

}, { timestamps: true })

module.exports = mongoose.model('user', user);