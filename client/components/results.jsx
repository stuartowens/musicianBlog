import React, { Component } from 'react';
import Result from './result.jsx';

var Results = (props) => {
  return  <div className="Results" >
    <h1>Search Results</h1>
      {props.tracks.map(function(track) {
    return  <div>
        <Result track={track} click={props.click}/>
      </div>
      })
      }
    </div>
    }

export default Results;
