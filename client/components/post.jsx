import React, { Component } from 'react';

var PostEntry = () => (
      <div className="Post-entry">
        <form>
        Post Title: <input type="text" value="Title" maxLength="50"/>
        Image Url: <input type="url" />
        Spotify Url:  <input type="url" />
        Post: <input type="text"  maxLength="500" size="100"/>
      </form>
      </div>
    );

export default PostEntry;
