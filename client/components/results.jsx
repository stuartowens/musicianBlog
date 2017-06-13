import React, { Component } from 'react';
import Result from './result.jsx';

class Results extends Component {
  constructor(props) {
    super(props);

  }
  componentWillReceiveProps(nextprops) {
    console.log(nextprops, "NextPropsssss")
  }
  render() {
    console.log(this.props, "props")
    return  <div className="Results" >
      <h1>Search Results</h1>
        {this.props.tracks.map(function(track) {
      return  <div>
          <Result track={track}/>
        </div>
        })
        }
      </div>
      }
    };

export default Results;
