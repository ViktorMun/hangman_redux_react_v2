import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Words from './components/words'
import Guess  from './components/actionGuess'
import CreateGameButton from './components/CreateGameButton'

class App extends Component {
  render() {
    return (
      <div className="App">
  <h1>
  <span>H</span>
  <span>A</span>
  <span>N</span>
  <span>G</span>
  <span>M</span>
  <span>A</span>
  <span>N</span>
  </h1>
        <Words />
        <Guess />
        <ul class="list"> </ul>
        <CreateGameButton />
        <keyListener />
      </div>

    );
  }
}



export default App;
