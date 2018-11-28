import React, { Component } from 'react';
// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';

export default class Gallery extends Component {
  render() {
    return (
      <div className="Gallery">
        <header className="App-header">
            <h1>This is a gallery</h1>
            <p>Option 1</p>
            <p>Option 2</p>
            <p>Option 3</p>
        </header>
      </div>
    );
  }
}