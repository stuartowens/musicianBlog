
import React, { Component } from 'react';

var Search = (props) => (
      <div className="Search-spotify" >
      <form>
      Search for a song  <input id="search-bar" type="text" onChange={props.search}/>
      </form>
      </div>
    );

export default Search;
