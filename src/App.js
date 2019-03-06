import React, { Component } from 'react';
import { Player } from 'video-react'
import "../node_modules/video-react/dist/video-react.css"; // import css
import './App.css';

class App extends Component {
  render() {
    return (
      <Player
      playsInline
      poster="/assets/poster.png"
      src="http://www.old.circalightingblog.com/various_assets/IMG_0059.m4v"
    />
      
      
    );
  }
}

export default App;
