import React from 'react';
import dreamer from '../img/dreamer.png';
import '../css/nav.css'

const Nav = () => {
    return(
        <nav className='navBar'>
            <img src={dreamer} alt='girl dreaming logo'>
            </img>
            <ul>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default Nav;