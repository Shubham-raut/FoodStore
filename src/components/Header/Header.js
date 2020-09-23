import React from 'react';
import { NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {
    return (

        <header className='header'>
            <NavLink exact to="/" className='title'>FoodStore</NavLink>

            <div className='headerMid'>
                <input className="headerCitySearch input" type="text" />
            </div>

            <div className='headerBtns'>
                <NavLink to="/about" className='headerLink'>About</NavLink>
                <button className="headerBtn">Login</button>
                <button className="headerBtn">Signup</button>
            </div>
        </header>
    );
}


export default Header;