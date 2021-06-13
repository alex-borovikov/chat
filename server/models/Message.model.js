const mongoose = require('mongoose')

const MessageSchema = mongoose.Schema({
    author: {type: String, default: 'Name not specified', required: true},
    dialogId: {type: String, required: true},
    text: {type: String, default: '', required: true},
    files: [{type: mongoose.Types.ObjectId, ref: 'File'}],
    read: {type: Boolean, default: false},
}, {
    timestamps: true
})

module.exports = mongoose.model('Message', MessageSchema)