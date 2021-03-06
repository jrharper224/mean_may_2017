var express = require('express')
var app = express()
var bp = require('body-parser')
var path = require('path')

app.use(bp.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname,'./client/static')))
app.use(express.static(__dirname + '/node_modules'))

app.set('views', path.join(__dirname, './client/views'))
app.set('view engine', 'ejs')

require('./server/config/mongoose.js')

var routes_setter = require('./server/config/routes.js')
routes_setter(app)

app.listen(8000, function(){
	console.log("listening on port 8000")
})