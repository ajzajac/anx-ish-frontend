import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import '../App.css'

export default function NavBar() {
    return (
        <div className='navBar'>
            <div className='navLeft'>
                <ul>
                    <li><a style={{color: 'rgb(250, 178, 115)', letterSpacing: '1px', paddingRight: '5px'}} href='/'><b>anxish</b></a></li>
                    <li><a href='/products'>Products</a></li>
                    <li><a href='/membership'>Membership</a></li>
                </ul>
            </div>
            <div className='navRight'>
                <ul>
                    <li><a href='/stories'>Stories</a></li>
                    <li><a href='/help'>Help</a></li>
                    <li><a href='/login'>Login</a></li>
                    <li><a href='/cart'><FontAwesomeIcon style={{color: 'rgb(250, 178, 115)'}} icon={faShoppingCart}/></a></li>
                </ul>
            </div>
            
        </div>
    )
}
