const mongoose = require('mongoose');

const advertisementSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    expirationDate: {
        type: Date,
        required: true,
    },
    comments: [
        {
            author: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
            text: {type: String, required: true},
            date: {type: Date, required: true}
        }
    ]
});

const Advertisement = mongoose.model('Advertisement', advertisementSchema);

module.exports = Advertisement;