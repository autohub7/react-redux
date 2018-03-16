// Full Documentation - https://www.turbo360.co/docs
//const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})

// initialize app
// const app = vertex.app()
var express = require('express');
var path = require('path');
var mustacheExpress = require('mustache-express');

var app = express();
// import routes
const index = require('./routes/index')
const api = require('./routes/api')

app.engine('mustache', mustacheExpress());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'mustache');

//app.set('views', __dirname + '/views');
//var routhPath = __dirname+'/restaurant' 
// console.log(path.resolve(__dirname, 'restaurant' + '/public'))
// app.use(express.static(path.join(__dirname, 'restaurant' + '/public')));
app.use(express.static(path.join(__dirname, 'public')));
// set routes
app.use('/', index)
app.use('/api', api) // sample API Routes

const port = 8081
app.set('port', port)
app.listen(port)

module.exports = app
// app.listen(3000)

// var express = require('express')

//var app = require('../../../app.js') // vertex app

//const port = 3000

//console.log('listening on 3000...')

