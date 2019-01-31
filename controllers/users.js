const model = require('../models/users');
const User = model.userSchema();

const usersGet = (req, res) => {
    User.find((erro, users) => {
        if (erro) {
            res.status(404).json(erro);
        } else {
            res.json(users);
        }
    });
};

const userPost = (req, res) => {
    let {name, age, company, role, hobbies} = req.body;

    let newUser = {
        name: name,
        age: age,
        company: company,
        role: role,
        hobbies: hobbies
    };

    User.create(newUser, (error, user) => {
        if (error) {
            res.status(400).json(error);
        } else {
            res.json(user);
        }
    });
}

module.exports = {
    usersGet,
    userPost
}