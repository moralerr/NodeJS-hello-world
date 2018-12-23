//Importing node framework
var express = require('express');
var app = express();
var exports = module.exports = {};

//Respon with "Hello World" for request that hit our root "/"
app.get('/', function (req, res) {
    res.send('Hello World!')
});

//Listen to port 8081 by default
var server = app.listen(8081, function () {
    console.log('app is listening on port 8081!')
});

exports.closeServer = function(){
  server.close();
};
