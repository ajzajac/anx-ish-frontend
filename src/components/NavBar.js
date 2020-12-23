import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'

export default function NavBar() {
    return (
        <div classname='navBar'>
            <ul>
                <li><a href='/'><b>anxish</b></a></li>
                <li><a href='/products'>Products</a></li>
                <li><a href='/membership'></a>Membership</li>
                <li><a href='/stories'></a>Stories</li>
                <li><a href='/login'></a>Login</li>
                <FontAwesomeIcon icon={faShoppingCart}/>
            </ul>
        </div>
    )
}
