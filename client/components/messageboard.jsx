import React, { Component } from 'react';
import Posts from './Posts.jsx';

var Board = (props) => {
  return <div className="Board">
    <div className="Board-header">
      <h2>Message Board</h2>
    </div>
    {props.posts.map((post) => (
      <div className="Posts">
        <Posts post={post} onDelete={props.onDelete}/>
      </div>
    ))}
      </div>
    };

export default Board;
