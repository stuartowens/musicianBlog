import React, { Component } from 'react';
// import logo from './logo.svg';
import request from 'request';
import Board from './messageboard.jsx';
import PostEntry from './post.jsx';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        posts: [],
        options: {
          title: 'trrr',
          author: '',
          image: '',
          spotify: '',
          post: ''
        }

      }
this.onSubmit = this.onSubmit.bind(this);
this.postPost = this.postPost.bind(this);
}
  componentDidMount() {
    fetch('http://localhost:4000/blogs')
      .then(res => res.json())
      .then(value => this.setState({posts: value}))
  }
  onSubmit(e) {
    e.preventDefault();
    console.log('posted', e.target.title.value)
    this.setState({options: {
      title: e.target.title.value,
      author: '',
      image: e.target.image.value,
      spotify: e.target.spotify.value,
      post: e.target.post.value
    }},() => ( this.postPost(this.state.options)) )

  }
  postPost(param) {
    fetch('/blogs', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify(param)
  }).then(function(res){ console.log(res) })
    .catch(function(res){ console.log(res) })
}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React Yal</h2>
        <div className="Post-entry">
          <PostEntry onSubmit={this.onSubmit} />
        </div>
        </div>
        <Board posts={this.state.posts}/>
      </div>
    );
  }
}

export default App;
