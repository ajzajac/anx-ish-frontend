import React from 'react'

export default function NavBar() {
    return (
        <div className='navBar'>
            <ul>
                <li><a href='/about'>About</a></li>
                <li><a href='/howitworks'>How It Works</a></li>
                {/* <li><a href='/plans'>Plans</a></li>
                <li><a href='/team'>Team</a></li> */}
                <li><a href='/shop'>Shop</a></li>
            </ul>
        </div>
    )
}
