const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    username : String,
    email : String,
});

module.exports = mongoose.model('registeredUsers',userSchema);