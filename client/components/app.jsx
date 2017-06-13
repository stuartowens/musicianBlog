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
s.setAccessToken('BQBcVqroR2JWP_IfBdVMxPKyw1VMyehEHJ-xUirUR4RaGxAam8Uc-LNo0NhJ-QTpY9hG85LQfKrcV_cNrkOQ72PpLrMUdvtBVkK_g4wLI3aoTzC9arFGQxYAi7XIMfA-qn4BWWoaIKnX4THlU36L_l0');

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

}
  componentDidMount() {
    // this.searchSongs('Andy');
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
searchSongs(q) {
  // query.preventDefault();
      console.log(q.target.value, 'query')
  s.searchTracks(q.target.value)
  .then((data) => {this.setState({tracks: data.tracks.items})});
}
onClick(id) {
  console.log(id);
  this.setState({trackId: id})
}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React Yal</h2>
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
        <Board posts={this.state.posts}/>
      </div>
    );
  }
}

export default App;
