// setting depedencies
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const session = require('express-session')
const bcrypt = require('bcrypt');
app.use(session({
    secret: 'success'
  }))

//static path
app.use('/assets', express.static( __dirname + '/assets'));
app.use('/css', express.static( __dirname + '/css'));
app.use('/js', express.static( __dirname + '/js'));

//routes controller
const index         = require('./routes/index');
const operator      = require('./routes/api/operator');
const voucher       = require('./routes/api/voucher');
const transaction   = require('./routes/api/transaction');
const register      = require('./routes/api/register');
const login         = require('./routes/api/login');

// templating menggunakan ejs (embed javascript)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//template engine
app.set('views', './views')
app.set('view engine', 'ejs')

//routing endpoint
app.use('/', index);
app.use('/register', register);
app.use('/login', login);
app.use('/api/operator', operator);
app.use('/api/voucher', voucher);
app.use('/api/transaction', transaction);


// setting port
app.listen(3000, () => {
  console.log("server berjalan di port 3000!!!");
})
