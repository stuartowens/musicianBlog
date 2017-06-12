import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';
var mysql = require('mysql');
// var sequelize = require('sequelize');
// var orm = new Sequelize("Posts", "root", "5SOGCaoK2N%Q");

ReactDOM.render(<App />, document.getElementById('app'));

var Posts = {
  results: [
    {
      Title: "Getting to perform",
      Author: "Cam",
      Image: "https://upload.wikimedia.org/wikipedia/en/5/59/Joe_Robinson%2C_Photo_shoot_from_my_office%2C_Ethan_James_Photography.jpg",
      Spotify: '<iframe src="https://open.spotify.com/embed/track/29TIPp959hkgCGZKD2pUCi" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>',
      Post: "Keepin it real deal holifield"
    }
  ]
}
//
// var Posts = orm.define('post', {
//   Title: Sequelize.STRING,
//   Author: Sequelize.STRING,
//   Image: Sequelize.STRING,
//   Spotify: Sequelize.STRING,
//   Post: Sequelize.STRING
// })
//
// Posts.sync();

exports.Posts = Posts;
