import React from 'react';
import "./CountryPick.css"

function CountryPick({ onButtonClick,name }) {
    return (
        <div className="center">
            <div className="countrypick__top">
                <h2>
                    {`Hi ${name}, Welcome Back`}
                </h2>

            </div>
            <div className="countrypick__bottom">
                <h2>Choose Your Country :</h2>
                <button className="button__left"
                    onClick={onButtonClick}

                >Egypt</button>
                <button
                    onClick={onButtonClick}
                    className="button__right">UAE</button>
            </div>
        </div>
    )
}

export default CountryPick
