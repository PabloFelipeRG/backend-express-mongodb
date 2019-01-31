const mongoose = require('mongoose');

const userSchema = () => {
    let Schema = mongoose.Schema;
    let user = Schema({
        name: { type: String, required: true },
        age: { type: Number, required: true },
        company: { type: String, required: true },
        role: { type: String, required: true },
        hobbies: { type: Array, required: false }
    });

    return mongoose.model('users', user);
}

module.exports = {
    userSchema
}