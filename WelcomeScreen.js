import React, { Component } from 'react';
// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
// import { Link as Link } from 'react-router-dom'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Gallery from "./Gallery";
import ModalWindow from "./ModalWindow";

export default class WelcomeScreen extends Component {

    showModalWindow = () 

  render() {

    return (
      <div className="WelcomeScreen">
        <header className="App-header">
            <h1>Fag App Welcome Screen</h1>
            <Button component={Link} to="/gallery" variant={"contained"}>
                Gallery
            </Button>

            <Button onClick={this.showModalWindow} variant={"contained"} /*className={classes.button}*/>
                Input
            </Button>

            <Button variant={"contained"} /*className={classes.button}*/>
                Output
            </Button>
        </header>
      </div>
    );
  }
}