import React from 'react';
import './css/Navigation.css';

const Logo = () => {
    return (
        <h1 className="logo">RoboStore</h1>
    );
}

const Navigation = () => {
    return (
        <div className="navbar">
            <Logo />
            <ul>
                <li>Home</li>
                <li>About</li>
            </ul>
        </div>
    );
}



export default Navigation;