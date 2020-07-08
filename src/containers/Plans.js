import React from 'react'
import Plan from '../components/Plan'

export default function Plans() {
    return (
        <div className='plansPage'>
            <div className='plansPageTitle'>
                <h2>Find the right plan for you</h2>
            </div>
                <div className='plansGrid'>
                    <Plan></Plan>
                    <Plan></Plan>
                    <Plan></Plan>
                </div>
        </div>
    )
}
