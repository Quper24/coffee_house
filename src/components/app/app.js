import React, {Component} from 'react';
import MainPage from '../mainPage/';
import OurCoffee from '../ourCoffee';
import YourPleasure from '../yourPleasure';
import {BrowserRouter as Router, Route} from 'react-router-dom';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div className='app'>
                    <Route path="/" exact component={MainPage}/>
                    <Route path="/ourcoffee" component={OurCoffee}/>
                    <Route path="/yourpleasure" component={YourPleasure}/>
                </div>
            </Router>
        )
    }
}


