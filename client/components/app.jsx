import React, { Component } from 'react';
import request from 'request';
import Board from './messageboard.jsx';
import PostEntry from './post.jsx';
import Search from './search.jsx';
import Results from './results.jsx';
import './App.css';
import Spotify from 'spotify-web-api-js';
var s = new Spotify();
s.setAccessToken('BQAZcKDWXwqdgkplbRelK1dwCWl8tS-Ns5tGObVvTYUkjzdpONtWRsyruQuPXVJGl88o5n6d19ffAv-ZW64hvgodPhYm-ZVydsqvJhQq47QyRgY0ZyIALB32HgI5mlBeA5ZUL26H3fddnN9F5kDPGTY');

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        tracks: [],
        trackId: '',
        posts: [],
        options: {
          title: '',
          author: '',
          image: '',
          spotify: '',
          post: ''
        }

      }
this.onSubmit = this.onSubmit.bind(this);
this.postPost = this.postPost.bind(this);
this.searchSongs = this.searchSongs.bind(this);
this.onClick = this.onClick.bind(this);
this.onDelete = this.onDelete.bind(this);
this.get = this.get.bind(this);

}
  componentDidMount() {
    // this.searchSongs('Andy');
    fetch('http://localhost:4000/blogs')
      .then(res => res.json())
      .then(value => this.setState({posts: value}))

  }
  get() {
    fetch('http://localhost:4000/blogs')
      .then(res => res.json())
      .then(value => this.setState({posts: value}))
  }
  onSubmit(e) {
    e.preventDefault();
    console.log('posted', e.target.title.value)
    this.setState({options: {
      title: e.target.title.value,
      author: e.target.author.value,
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
}).then((res) => {
  this.setState({
  tracks: [],
  trackId: '',
  options: {
    title: '',
    author: '',
    image: '',
    spotify: '',
    post: ''
  }})
  document.getElementById('title').value = '';
  document.getElementById('img').value = '';
  document.getElementById('post').value = '';
  document.getElementById('author').value = '';
})
.then(() => this.get())
.catch(function(res){ console.log(res) })

}
searchSongs(q) {
  s.searchTracks(q.target.value)
  .then((data) => {this.setState({tracks: data.tracks.items})});
}
onClick(id) {
  this.setState({trackId: id})
}
onDelete(e) {
  console.log(e)
  fetch('/blogs', {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  method: 'delete',
  body: JSON.stringify({id: e})
}).then(() => this.get())
this.forceUpdate()
}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Post a story about your music here</h2>
        <div className="Post-entry">
          <PostEntry onSubmit={this.onSubmit} trackId={this.state.trackId} />
        </div>
        </div>
        <div id="searchBar">
          <Search search={this.searchSongs}/>
        </div>
        <div id="searchResults">
          <Results tracks={this.state.tracks} click={this.onClick}/>
        </div>
        <Board posts={this.state.posts} onDelete={this.onDelete}/>
      </div>
    );
  }
}

export default App;
