import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import NavBar from '../components/NavBar'
import LandingPage from '../components/LandingPage'
import Login from './Login'
import SignUp from '../containers/SignUp'
import Membership from '../components/Membership'
import Stories from '../containers/Stories'
import Products from '../containers/Products'


export default class MainContainer extends Component {
   
   
    render() {
        return (
            <div>
                <NavBar/>
                    <div className='contentView'>
                        <Switch>
                            <Route exact path='/' render={(routerProps) => <LandingPage {...routerProps}/>} />
                            <Route exact path='/products' render={(routerProps) => <Products {...routerProps}/>} />
                            <Route exact path='/membership' render={(routerProps) => <Membership {...routerProps}/>} />
                            <Route exact path='/stories' render={(routerProps) => <Stories {...routerProps}/>} />
                            <Route exact path='/login' render={(routerProps) => <Login {...routerProps}/>} />
                            <Route exact path='/signup' render={(routerProps) => <SignUp {...routerProps}/>} />
                        </Switch>
                    </div>
            </div>
        )
    }
}
