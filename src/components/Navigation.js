import React from 'react';
import awatar from './../images/awatar.jpg';
import { NavLink } from 'react-router-dom';
const Navigation = () => {
    return (
        <header>
            <div className="user">
                <img src={awatar} alt="logo" />
                <h3 className="name"> Maria Doe</h3>
                <p className="post">Front End Developer</p>
            </div>
            <nav className="navbar">
                <ul>
                    <li><NavLink to="/" activeClassName="active-menu" exact>Home</NavLink></li>
                    <li><NavLink to="/about" activeClassName="active-menu" exact>About</NavLink></li>
                    <li><NavLink to="/service" activeClassName="active-menu" exact>Service</NavLink></li>
                    <li><NavLink to="/resume" activeClassName="active-menu" exact>Resume</NavLink></li>
                    <li><NavLink to="/portfolio" activeClassName="active-menu" exact>Portfolio</NavLink></li>
                    <li><NavLink to="/contact" activeClassName="active-menu" exact>Contact</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation;
