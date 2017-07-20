import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Navigation from './Navigation';
import Text from './Text';
import Footer from './Footer';
import store from "../store";


export default class Main extends Component{
    render(){
        return(
                <div>
                    <div className='container'>
                        <h1 className="left-align">Web Accessibility Design Guide</h1>
                        <Text />
                    </div>
                    <Footer />
                </div>
               )
    }
}

