const express = require("express");
// const load = require("express-load");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/newDb', { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('DB connection made successfully');
})

const mock = require("./controllers/mock");
const users = require("./controllers/users");

app.get('/', mock.mockGet);

app.get('/users', users.usersGet);

app.post('/register', users.userPost);

app.listen(3000, () => {
    console.log("App is running on port 3000");
});