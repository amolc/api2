var connect = require('connect');
var app = connect();
var path = require('path');
var serveStatic = require('serve-static');
var apidoc = connect();
var assets = connect();
var router = require('./api/router');
var globalfunctions = require('./api/globalfunctions');

apidoc.use(serveStatic('apidoc'));
assets.use(serveStatic('assets'));

app.use('/', apidoc);
app.use('/assets', assets);


global.appRoot = path.resolve(__dirname);
app.listen(21000 );
console.log('server is started at port: 21000');