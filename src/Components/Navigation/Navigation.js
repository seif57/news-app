import React from 'react';
import "./Navigation.css";


function Navigation({ onRouteChange, isSignedIn }) {

    if (isSignedIn) {
        return (
            <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p onClick={() => onRouteChange('signout')}>Sign Out</p>
            </nav>
        );

    } else {
        return (
            <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p onClick={() => onRouteChange('signin')}>Sign In</p>
                <p onClick={() => onRouteChange('register')}>Register</p>
            </nav>
        );

    }


}

export default Navigation
