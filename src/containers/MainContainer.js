import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// Custom Components
import Home from '../components/Home'
import HowItWorks from '../components/HowItWorks'
import About from '../components/About'
import Plans from '../components/Plans'
import Team from '../components/Team'
import Shop from '../components/Shop'


export default class MainContainer extends Component {
    render() {
        return (
            <div className='mainContainer'>
                <Router>
                    <Switch>
                        <Route exact path='/'><Home></Home></Route>
                        <Route exact path='/about'><About></About></Route>
                        <Route exact path='/howitworks'><HowItWorks></HowItWorks></Route>
                        <Route exact path='/plans'><Plans></Plans></Route>
                        <Route exact path='/team'><Team></Team></Route>
                        <Route exact path='/shop'><Shop></Shop></Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}
