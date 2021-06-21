const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name: {type: String, required: true},
    surname: {type: String, default: ''},
    login: String,
    email: {type: String, required: true, unique: true},
    password: {type: String},
    avatar: {type: String, default: null},
    last_seen: String,
    dialogs: [{type: mongoose.Types.ObjectId, ref: 'Dialog'}],
    status: String
}, {
    timestamps: true
})

module.exports = mongoose.model('User', UserSchema)