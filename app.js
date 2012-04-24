"use strict";

var express = require('express');

function startServer() {    
    var app = express.createServer(app);

    app.use(express.static(__dirname + '/'));
    
    app.get('/', function(request, response) {
        response.redirect('/clock.html');
    });
    
    app.listen(process.env.PORT || 3000);
    console.log("Server has started.");
}

startServer();