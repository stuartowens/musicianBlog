import React, { Component } from 'react';

var PostEntry = (props) => (
      <div className="Post-entry" >
        <form onSubmit={props.onSubmit}>
        Post Title:<input id="title" type="text" maxLength="50" name="title"/>
        Author:<input id="author" type="text" maxLength="50" name="author"/>
        Image-Url:<input id="img" type="url" name="image" />
        Spotify-Id:<input type="text" name="spotify" value={props.trackId}/>
        Post:<input type="text" id="post" maxLength="500" size="50" name="post"/>
        <button type="submit">
          Create a new Blog Post
        </button>
      </form>
      </div>
    );

export default PostEntry;
