import React, { Component } from 'react';
// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';

export default class ModalWindow extends Component {
  render() {
    return (
      <div className="Modal">
        <header className="App-header">
            <h1>This is a modal</h1>
            <p>woop</p>
            <p>dee</p>
            <p>doo</p>
        </header>
      </div>
    );
  }
}