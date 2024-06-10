const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    name: {
        type: String
    },
    email: {
        type: String
    },
    role: {
        type: String
    }
    // date: {
    //     type: date,
    //     default: Date.now
    // }
});

mongoose.models = {};
module.exports = mongoose.model('users', userSchema);