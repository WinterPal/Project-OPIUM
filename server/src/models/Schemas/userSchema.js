const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    personalData: {
        firstName: {type: String, required: true},
        lastName: {type: String, required: true},
        age: {type: Number, required: true},
        gender: {type: String, enum: ['male', 'female', 'other'], required: true},
    },
    contactData: {
        email: {type: String, required: true},
        phone: {type: String},
    },
    paymentDetails: {
        address: {type: String},
        paymentMethods: [{type: String}],
    },
    auctions: {
        won: [{type: mongoose.Schema.Types.ObjectId, ref: 'Auction'}],
        listed: [{type: mongoose.Schema.Types.ObjectId, ref: 'Auction'}],
    },
    advertisements: {
        listed: [{type: mongoose.Schema.Types.ObjectId, ref: 'Advertisement'}],
    },
    virtualWallet: {
        balance: {type: Number, default: 0},
        currency: {type: String, default: 'PLN'},
        denomination: {type: String},
    },
    password: {type: String, required: true},
    refreshToken: {type: String}
});

const User = mongoose.model('User', userSchema);

module.exports = User;