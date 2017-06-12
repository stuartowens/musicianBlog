import React, { Component } from 'react';

var PostEntry = (props) => (
      <div className="Post-entry" >
        <form onSubmit={props.onPost}>
        Post Title: <input type="text" maxLength="50"/>
        Image Url: <input type="url" />
        Spotify Url:  <input type="url" />
        Post: <input type="text"  maxLength="500" size="100"/>
        <button type="submit">
          Create a new Blog Post
        </button>
      </form>
      </div>
    );

export default PostEntry;
