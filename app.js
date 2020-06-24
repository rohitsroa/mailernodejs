var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs','html',);
app.use(express.static(path.join(__dirname, 'views',)));
app.use(express.static(path.join(__dirname, 'public',)));
var dotenv = require("dotenv")
dotenv.config()
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({extended: false}));
// parse application/json
app.use(express.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));
// parse application/json
app.use(bodyParser.json());
var index=require('./routes/index');
app.use('/',index);
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Server started on port ' + port);
});
