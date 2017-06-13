import React, { Component } from 'react';
import Posts from './Posts.jsx';

var Board = (props) => (
      <div className="Board">
        <div className="Board-header">
          <h2>Message Board</h2>
        </div>
      <div className="Posts">
        <Posts posts={props.posts}/>
      </div>
      </div>
    );

export default Board;
