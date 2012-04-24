"use strict";

var express = require('express');
var http = require('http');

function startServer() {    
    var app = express();
    var server = http.createServer(app);

    app.use(express.static(__dirname + '/'));
    
    app.get('/', function(request, response) {
        response.redirect('/clock.html');
    });
    
    server.listen(process.env.PORT || 3000);
    console.log("Server has started.");
}

startServer();