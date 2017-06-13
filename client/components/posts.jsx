import React, { Component } from 'react';

var Posts = (props) => {
  console.log(props.post.Spotify)
    return  <div className="Posts">
        <div className="image">
        <img src={props.post.Image} width="150px" height="150px"/>
      </div>
      <div className="Post-title">
        <h2>{props.post.Title}</h2>
      </div>
      <div className="Username">
        <h3>Andy Owens</h3>
      </div>
      <div className="Post-body">
        <p>
          {props.post.Post}
        </p>
      </div>
      <div className="Spotify-Player">
      <iframe src={"https://open.spotify.com/embed/track/" + props.post.Spotify} width="300" height="380" frameborder="0" allowtransparency="true"></iframe>
      </div>
      </div>
    };


export default Posts;
