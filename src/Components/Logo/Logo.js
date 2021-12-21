import React from 'react';
import "./Logo.css";
import Tilt from 'react-tilt';
import news from './news.png'

function Logo() {
    return (
        <div className="logo">
            <Tilt className="Tilt" options={{ max: 55 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner"><img src={news} alt="logo" /> </div>
            </Tilt>
        </div>
    )
}

export default Logo
