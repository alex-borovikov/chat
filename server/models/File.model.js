const mongoose = require('mongoose')

const FileSchema = mongoose.Schema({
    name: {type: String, required: true},
    systemName: {type: String, required: true},
    size: {type: Number, required: true},
    type: {type: String, required: true},
    path: {type: String, required: true}
})

module.exports = mongoose.model('File', FileSchema)