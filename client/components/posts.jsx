import React, { Component } from 'react';

var Posts = (props) => {
  console.log(props)
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
      <div className="SoundCloud-url">
      {props.post.Spotify}
      </div>
      </div>
    };


export default Posts;
