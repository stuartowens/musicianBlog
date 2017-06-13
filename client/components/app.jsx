import React, { Component } from 'react';
// import logo from './logo.svg';
import request from 'request';
import Board from './messageboard.jsx';
import PostEntry from './post.jsx';
import Search from './search.jsx';
import Results from './results.jsx';
import './App.css';
import Spotify from 'spotify-web-api-js';
var s = new Spotify();
s.setAccessToken('BQBYTlfOx13xDDJhjtzH4mBzJaz7S_zwlZbj-JixmukIYyi_2B4CzVsGzthbDPbBJFh_X6exNlWnrp-Q2y1xQX3NmqvrfPBFM2pG_sAibAHPKkOtLDJ2_np7waNoaQtRfs2Iu76CjNqciNiR5_-GjEY');
s.searchTracks('Love')
  .then(function(data) {
    console.log('Search by "Love"', data);
  }, function(err) {
    console.error(err);
  });
// var spotifyApi = new SpotifyWebApi();

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        tracks: [],
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
    this.searchSongs('Andy');
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
searchSongs(query) {
  // query.preventDefault();
  s.searchTracks(query)
  .then(function(data) {
    console.log('Search by "Andy"', data.tracks.items);
    this.setState({})
  }, function(err) {
    console.error(err);
  });
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
        <div id="searchBar">
          <Search search={this.searchSongs}/>
        </div>
        <div id="searchResults">
          <Results />
        </div>
        <Board posts={this.state.posts}/>
      </div>
    );
  }
}

export default App;
