const mongoose = require ('mongoose');

const book = new mongoose.Schema ({
    url: {
       type: String,
       require: true,
    },

    title: {
       type: mongoose.Types.ObjectId,
       ref: 'book'
    },

    author: {
       type: String,
       require: true,
    },

    price: {
       type: Number,
       require: true,
    },

    desc: {
       type: String,
       require: true,
    },

    language: {
       type: String,
       require: true,
    },

}, { timestamps: true })

module.exports = mongoose.model('books', book);