import React, { Component } from 'react';
// import logo from './logo.svg';
import Board from './messageboard.jsx';
import PostEntry from './post.jsx';
import './App.css';

class App extends Component {
  constructor() {
    super();
    // this.state = {
    //
    // }
this.onPost = this.onPost.bind(this);
}
  onPost(e) {
    e.preventDefault();
    console.log('posted', e.target)
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React Yal</h2>
        <div className="Post-entry">
          <PostEntry onPost={this.onPost} />
        </div>
        </div>
        <Board />
      </div>
    );
  }
}

export default App;
