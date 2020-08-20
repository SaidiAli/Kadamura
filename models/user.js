const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

userSchema.methods.validPassword = function (password) {return (this.password === password)};

module.exports = User = mongoose.model('users', userSchema)