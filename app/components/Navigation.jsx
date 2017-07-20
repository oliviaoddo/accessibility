import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export default class Navigation extends Component {
    render(){
        return (
                  <nav>
                    <div className="nav-wrapper  red lighten-2" >
                    <a href = "/" className="brand-logo left"><i className="material-icons">assignment</i></a>
                    </div>
                  </nav>

            );

    }
}

