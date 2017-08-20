import React, { Component } from 'react';
{/* <div className="Spotify-Player">
<iframe src={"https://open.spotify.com/embed/track/" + props.post.Spotify} width="300" height="380" frameborder="0" allowtransparency="true"></iframe>
</div> */}
var Posts = (props) => {
  console.log(props.post.Spotify)
    return <div>
        <div className="Post card">
        <div className="image card-img-top">
        <img src={props.post.Image} />
      </div>
      <div className="card-body">
      <div className="Post-title card-header">
        <h2>{props.post.Title}</h2>
      </div>
      <div className="Username card-body">
        <h3>{props.post.Author}</h3>
      </div>
      <div className="Post-body card-text">
        <p>
          {props.post.Post}
        </p>
      </div>
      </div>

      <div className="Delete">
        <button onClick={()=> props.onDelete(props.post.id)}>Delete</button>
      </div>
      </div>
      </div>
    };


export default Posts;
