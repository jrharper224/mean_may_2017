// console.log('future mongoose connection and model loading');
var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');
console.log('connecting to database...')
mongoose.connect('mongodb://localhost/file_structure_and_simple_server')

var models_path = path.join(__dirname, './../models');

fs.readdirSync(models_path).forEach(function(file) {
    if(file.indexOf('js') >= 0){
        console.log('loading ' + file +'...');
        require(models_path + '/' + file);
    }
})
