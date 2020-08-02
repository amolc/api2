var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var env = require('./env');

// handle cors
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header( "Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH,OPTIONS" );
  res.header("Access-Control-Allow-Credentials", false);
  next();
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({limit: "50mb",extended: true,type: "application/json"}));
app.use(bodyParser.urlencoded({limit: "50mb",extended: true,type: "application/x-www-form-urlencoding"}));
app.use(bodyParser.json({type: "application/json"}));
app.use(bodyParser.raw({limit: "50mb" }));


//handle routes

var user = require("./user");

// app.use("/user/getallUser", user.findAll);
app.get('/user/getallUser', (req, res) => res.send('Hello World!'));

var business = require("./business");

console.log("router called");
module.exports = app;


/* Amol C 
* Todo - This should be the route file. Since we are basically routing all information
*/


  
  