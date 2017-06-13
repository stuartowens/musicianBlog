import React, { Component } from 'react';

var PostEntry = (props) => (
      <div className="Post-entry" >
        <form onSubmit={props.onSubmit}>
        Post Title: <input type="text" maxLength="50" name="title"/>
        Image Url: <input type="url" name="image"/>
        Spotify Url:  <input type="url" name="spotify"/>
        Post: <input type="text"  maxLength="500" size="100" name="post"/>
        <button type="submit">
          Create a new Blog Post
        </button>
      </form>
      </div>
    );

export default PostEntry;
