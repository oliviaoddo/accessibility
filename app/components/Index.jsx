import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import SideNavBar from './SideNav';
import Text from './Text';
import Images from './Images';
import Icons from './Icons';
import About from './About';
import Forms from './Forms';
import Footer from './Footer';
import store from "../store";


export default class Main extends Component{
    render(){
        return(
               <div>
                   <Router>
                    <div className='container'>
                        <SideNavBar />
                        <Switch>
                            <Route exact path={`/`} component={About} />
                            <Route exact path={`/text`} component={Text} />
                            <Route exact path={`/images`} component={Images} />
                            <Route exact path={`/icons`} component={Icons} />
                            <Route exact path={`/forms`} component={Forms} />
                        </Switch>
                    </div>
                    </Router>
                    <Footer />
                </div>
               )
    }
}

