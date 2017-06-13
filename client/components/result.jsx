import React, { Component } from 'react';

var Result = (props) => {
  console.log(props, "PROPSSSS in REsult")
    return  <div className="Tracks" onClick={()=>props.click(props.track.id)}>
      <div className="Track-title">
        <h2>{props.track.name}</h2>
      </div>
      <div className="Track-Artist">
        <h3>{props.track.artists[0].name}</h3>
      </div>
      <div className="Album">
        <p>
          {props.track.album.name}
        </p>
      </div>
      <div className="Url">
      <iframe src={"https://open.spotify.com/embed/track/" +  props.track.id} width="300" height="380" frameborder="0" allowtransparency="true"></iframe>
      </div>
      </div>
    };


export default Result;
