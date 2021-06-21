const mongoose = require('mongoose');

const DialogueSchema = mongoose.Schema({
    members: {type: Array},
}, {
    timestamps: true
})

module.exports = mongoose.model('Dialogue', DialogueSchema)