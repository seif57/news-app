import React from 'react';
import "./Card.css";
function Card({title,description,author,articleUrl,buttonTitle}) {
        
        return (
            <div className="card">
                <header className="card-header">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <div className="card-bottom">
                        <h3>author:{author}</h3>
    
                        <div className="button__group">
                            <button
                           
                             className='like__button'>
                                {buttonTitle}
                            </button>
                            <button className='button'>
                                <a rel="noreferrer" target="_blank" href={articleUrl}>Read More</a>
                            </button>
                        </div>
    
    
    
                    </div>
    
                </header>
            </div>
        )
}

export default Card
