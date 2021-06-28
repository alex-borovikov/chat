const mongoose = require('mongoose');

const DialogueSchema = mongoose.Schema({
    members: {type: Array},
    lastMessage: {type: String, default: 'last message'}
}, {
    timestamps: true
})

module.exports = mongoose.model('Dialogue', DialogueSchema)