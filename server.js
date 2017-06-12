var express = require('express');
var browserify = require('browserify-middleware');
var path = require('path');
var morgan = require('morgan');

var app = express();

app.use(morgan('dev'));

app.get('/bundle.js', browserify('./client/index.js', {
  transform: [[require('babelify'), {presets: ['es2015', 'react'] } ] ]
}))

// app.get('/', function(req, res) {
//   res.send('/index')
// })

app.use(express.static(path.join(__dirname, './client')));

app.use('/style.css', function(req, res, next) {
  res.sendFile(path.join(__dirname, 'style.css'));
});

app.listen(4000, function() {
  console.log('listening on port 4000')
})
