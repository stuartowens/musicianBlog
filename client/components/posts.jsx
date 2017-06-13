import React, { Component } from 'react';

var Posts = (props) => (
      <div className="Posts">
          <div>
        <div className="image">
        <img src="https://static.pexels.com/photos/30222/pexels-photo-30222.jpg" width="150px" height="150px"/>
      </div>
      <div className="Post-title">
        { props.posts.map(post =>
        <h2>{post.title}</h2>
      )}
      </div>
      <div className="Username">
        <h3>Cameron Owens</h3>
      </div>
      <div className="Post-body">
        <p>
          Nobody likes to crack notes, miss shifts, or play out of tune. Especially in front of an audience. But unless we decide to give up the experience of performing live, that’s just something that comes with the territory.
        </p>
      </div>
      <div className="SoundCloud-url">
      <iframe src="https://open.spotify.com/embed/track/29TIPp959hkgCGZKD2pUCi" width="300" height="380" frameBorder="0" allowTransparency="true"></iframe>
    </div>
      </div>
      </div>
    );


export default Posts;
