import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export default class MainContainer extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path='/'> </Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}
