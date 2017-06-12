import React, { Component } from 'react';
// import logo from './logo.svg';
import Board from './messageboard.jsx';
import './App.css';

class App extends Component {
  constructor() {
    super();
    // this.state = {
    //
    // }

  //   onSearch: function(options, )
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React Yal</h2>
        </div>
        <Board />
      </div>
    );
  }
}

export default App;
