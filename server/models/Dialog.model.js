const mongoose = require('mongoose');

const DialogSchema = mongoose.Schema({
    _author: {type: mongoose.Types.ObjectId, ref: 'User'},
    _partner: [{type: mongoose.Types.ObjectId, ref: 'User'}],
    messages: [{type: mongoose.Types.ObjectId, ref: 'Message'}],
}, {
    timestamps: true
})

module.exports = mongoose.model('Dialog', DialogSchema)