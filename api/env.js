//for database connection
var mysql = require('mysql');
var http = require('http');
var nodemailer = require('nodemailer');
var mg = require('nodemailer-mailgun-transport');
var os = require('os');
var aws = require('aws-sdk');


var env = {
    Dbconnection: mysql.createPool({database: '80mobileshop',user: 'root',password: '10gXWOqeaf',host: '146.185.179.99' }),
    timestamp: function () {
        var UTCtimestamp = new Date();
        return UTCtimestamp.getTime();
    }

}

env.siteUrl = 'https://www.sparksinasia.com/assets/';
env.uploadpath = 'https://www.sparksinasia.com/assets/web';
env.emailBaseUrl = 'http://node.fountaintechies.com:4500/';
//enviroment.siteUrl = 'http://localhost:2000/assets/';

//if (os.hostname == "sparksinasia.com" || os.hostname == "www.sparksinasia.com"){
//	enviroment.siteUrl = 'http://www.sparksinasia.com/assets/';
//	//enviroment.siteUrl = 'https://www.createmobileshop.com/assets/';
//	enviroment.uploadpath = 'http://www.sparksinasia.com/assets/web';
//	enviroment.emailBaseUrl = 'http://node.fountaintechies.com:4500/';
//
//} else {
//	enviroment.siteUrl = 'http://localhost:2000/assets/';
//	//enviroment.siteUrl = 'https://www.createmobileshop.com/assets/';
//	enviroment.uploadpath = 'http://localhost:2000/assets/web';
//	enviroment.emailBaseUrl = 'http://node.fountaintechies.com:4500/';
//
//}

aws.config.loadFromPath('config.json');


// create Nodemailer SES transporter

env.transporter = nodemailer.createTransport({
    SES: new aws.SES({
        apiVersion: '2010-12-01'
    })
});



// enviroment.transporter = nodemailer.createTransport(mandrillTransport({
//     auth: {
//       apiKey : 'F9E0Hvx-FBXauFHYHeulyg'
//     }
// }));
//enviroment.transporter = nodemailer.createTransport({
//     host : 'in-v3.mailjet.com',
//     port: '587',
//     auth: {
//         user: '66ca4479851e0bd9cedc629bdff36ee6',
//         pass: 'a3ec60f55a89f7fab98891e86818c8db'
//     }
//});

module.exports = env;
