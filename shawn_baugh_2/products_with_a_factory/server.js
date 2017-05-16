var express = require('express');
var bp = require('body-parser');

var app = express();

app.use(express.static(__dirname + '/clients'));
app.use(express.static(__dirname + '/bower_components'));

app.listen(8000, function() {
    console.log('Listening on your mf server');
})
