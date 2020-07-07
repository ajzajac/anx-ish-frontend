import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../components/Home'


export default class MainContainer extends Component {
    render() {
        return (
            <div className='mainContainer'>
                <Router>
                    <Switch>
                        <Route exact path='/'><Home></Home></Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}
