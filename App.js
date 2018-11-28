import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import WelcomeScreen from "./WelcomeScreen";
import Button from '@material-ui/core/Button';
import Gallery from "./Gallery";



export default  class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>

                    {/*<Button activeOnlyWhenExact={true} to="/" label="Gallery" />*/}
                    <div>
                        <Route exact path="/" component={WelcomeScreen}/>
                        <Route exact path="/gallery" component={Gallery}/>
                    </div>
                </Router>
            </div>

// this.props.history.push();
            // <div className="App">
            //     <header className="App-header">
            //         <WelcomeScreen/>
            //         <a
            //             className="App-link"
            //             href="https://reactjs.org"
            //             target="_blank"
            //             rel="noopener noreferrer"
            //         >
            //             Learn React
            //         </a>
            //     </header>
            // </div>


        );
    }
}


//