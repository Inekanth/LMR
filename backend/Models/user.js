const mongoose = require ('mongoose');

const order = new mongoose.Schema ({
    username: {
        type: String,
        require: true,
        unique: true,
    },

    email: {
        type: String,
        require: true,
        unique: true,
    },

    Password: {
        type: String,
        require: true,
    },

    Address: {
        type: String,
        require: true,
    },

    avatar: {
        type: String,
        default: "https://th.bing.com/th/id/OIP.1DLYAqE5UY19idJJOkFQegHaHa?rs=1&pid=ImgDetMain",
    },

    role: {
        type: String,
        default: "user",
        enum: ["user", "admin"],
    },

    favourites: [{
        type: mongoose.Types.ObjectId,
        ref: 'books'
    }],

    cart: [{
        type: mongoose.Types.ObjectId,
        ref: 'books'
    }],

     orders: [{
        type: mongoose.Types.ObjectId,
        ref: 'order',
    }],

   

},
{ timestamps: true });

