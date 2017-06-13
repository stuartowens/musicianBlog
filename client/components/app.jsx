import React, { Component } from 'react';
// import logo from './logo.svg';
import request from 'request';
import Board from './messageboard.jsx';
import PostEntry from './post.jsx';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //
    // }
this.onPost = this.onPost.bind(this);
}
  componentDidMount() {
    fetch('http://localhost:4000/blogs')
      .then(res => res.json())
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
