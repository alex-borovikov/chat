const mongoose = require('mongoose')

const MessageSchema = mongoose.Schema({
    dialogueId: {type: String, required: true},
    author: {type: String, default: 'Noname', required: true},
    text: {type: String, default: '', required: true},
    files: [{type: mongoose.Types.ObjectId, ref: 'File'}],
    read: {type: Boolean, default: false},
}, {
    timestamps: true
})

module.exports = mongoose.model('Message', MessageSchema)