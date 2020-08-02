

var mysql = require('mysql');
var nodemailer = require('nodemailer');
var mg = require('nodemailer-mailgun-transport');
var os = require('os');
var mysqlBackbone = require('mysql-backbone');

var env = {
     Dbconnection: mysql.createPool({database: 'apidb',user: 'aws1',password: '10gXWOqeaf!',host: '167.71.211.112' }),
     connection: {database: 'apidb',user: 'aws1',password: '10gXWOqeaf!',host: '167.71.211.112' }
}

module.exports = env;


