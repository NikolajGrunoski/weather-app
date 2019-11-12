import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'


const Menu = () => {
    return (
        <div id='menu'>
            <ul>
                <li>
                    <Link to='/'  className='link'>Home</Link>
                </li>
                <li>
                    <Link to='/5day' className='link'>Extended 5 days Forecast</Link>
                </li>
            </ul>
        </div>
        
    )
}

export default Menu 