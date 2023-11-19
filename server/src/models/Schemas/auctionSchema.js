const mongoose = require('mongoose');

const auctionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    startTime: {
        type: Date,
        required: true,
    },
    endTime: {
        type: Date,
        required: true,
    },
    startingPrice: {
        type: Number,
        min: 10,
        required: true,
    },
    currentPrice: {
        type: Number,
        default: function () {
            return this.startingPrice;
        },
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    auctionType: {
        type: String,
        enum: ['fixed', 'increasing'],
        default: 'fixed',
    },
    comments: [
        {
            author: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
            text: {type: String, required: true},
            date: {type: Date, required: true}
        }
    ]
});

const Auction = mongoose.model('Auction', auctionSchema);

module.exports = Auction;