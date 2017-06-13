var express = require('express');
var browserify = require('browserify-middleware');
var path = require('path');
var morgan = require('morgan');
var mysql = require('mysql');
var Sequelize = require('sequelize');
var orm = new Sequelize("Blog", "root", "", {
  dialect: 'mysql'
});

var Posts = orm.define('post', {
  Title: Sequelize.STRING,
  Author: Sequelize.STRING,
  Image: Sequelize.STRING,
  Spotify: Sequelize.STRING,
  Post: Sequelize.STRING
}, {
    timestamps: false
})

Posts.sync();


var app = express();

app.use(morgan('dev'));

app.get('/bundle.js', browserify('./client/index.js', {
  transform: [[require('babelify'), {presets: ['es2015', 'react'] } ] ]
}))

// app.get('/', function(req, res) {
//   res.send('/index')
// })

// app.get('/', function(req, res) {
//   Posts.findAll().then(function(err, results){
//     res.json(results)
//   }
//   )
// })

app.use(express.static(path.join(__dirname, './client')));

app.use('/style.css', function(req, res, next) {
  res.sendFile(path.join(__dirname, 'style.css'));
});
//Sends back all blogs
app.get('/blogs', function(req, res) {
  Posts.findAll()
  .then(function(result) {
    res.json(result)
  })
})

app.listen(4000, function() {
  console.log('listening on port 4000')
})
exports.Posts = Posts;
