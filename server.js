var express = require('express');
var browserify = require('browserify-middleware');
var path = require('path');
var morgan = require('morgan');
var mysql = require('mysql');
var Sequelize = require('sequelize');
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt-nodejs');


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

var Users = orm.define('user', {
  Username: Sequelize.STRING,
  Password: Sequelize.STRING
}, {
  timestamps: false
})

Posts.sync();
Users.sync();


var app = express();
var session = require('express-session');
app.use(bodyParser.json());

var isLoggedIn = function(req, res) {
  return req.session ? !!req.session.user : false;
};

var checkAuth = function(req, res, next) {
  if(!isLoggedIn(req)) {
    res.redirect('/login')
  } else {
    next();
  }
}

app.get('/login', function(req, res) {
  res.send("login")
})

app.use(session({
  secret: "XXXX" ,
  saveUninitialized: true,
  resave: false
},function(err){
  console.log(err);
}));

app.post('/signup', function(req, res) {
  var password = req.body.password;
  var username = req.body.username;

  bcrypt.hash(password, null, null, function(err, hash) {
    if(err) {
      throw err
    }
    password = hash;
    var params = {
      Username: username,
      Password: password
    }
    console.log(params)
    Users.create(params).then(function(){
      req.session.regenerate(function() {
        req.session.user = username
        res.redirect('/blogs')
      })
    })
  })
})

app.post('/login', function(req, res) {
  var username = {
    where: {
      Username: req.body.username
    }
  }
  var password = {
    where: {
      Password: req.body.password
    }
  }
  Users.findAll(username).then(function(user) {
    console.log(user)

    if(!user) {
      res.redirect('/signup')
    } else {
      bcrypt.compare(req.body.password, user[0].dataValues.Password, function(err, isMatch) {
        if(err) {
          throw err;
        }
        if (isMatch) {
          req.session.regenerate(function() {
            req.session.user = req.body.username
            res.redirect('/blogs')
          })
        }
      })
    }
  })

})

app.use(morgan('dev'));

app.get('/bundle.js', browserify('./client/index.js', {
  transform: [[require('babelify'), {presets: ['es2015', 'react'] } ] ]
}))

app.use(express.static(path.join(__dirname, './client')));
console.log('express', express.static)
app.use('/style.css', function(req, res, next) {
  res.sendFile(path.join(__dirname, 'style.css'));
});
//Sends back all blogs
app.get('/blogs', function(req, res) {
  Posts.findAll({order: [['id', 'DESC']]})
  .then(function(result) {
    res.json(result)
  })
})



app.post('/blogs', function(req, res) {
  console.log(req.body)
  var params = {
    Title: req.body['title'],
    Author: req.body['author'],
    Image: req.body['image'],
    Spotify: req.body['spotify'],
    Post: req.body['post']
  }
  Posts.create(params).then(task => res.send(task))
})

app.delete('/blogs', function(req, res) {
  console.log(req.body)
  var id = {
   where: {
      id: req.body['id']
   }
}
  Posts.destroy(id).then(function(task) {
    if (task === 1) {
      res.send('Successfully deleted the record')
    } else {
      res.send('Didnt work')
    }
  }).catch(err=> console.log(err))
})

app.listen(4000, function() {
  console.log('listening on port 4000')
})
exports.Posts = Posts;
