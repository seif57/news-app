import React from 'react';
import "./Card.css";




function Card({title,description,author,articleUrl,buttonTitle,userid,articleid, reCardList}) {

    function  onCategory(event) {
        let cardButton= event.target.innerHTML;
        if (cardButton==="Add To") {

            fetch('http://localhost:3000/addto', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id: userid,
                    title:title,
                    description: description,
                    author: author,
                    articleurl: articleUrl
                })
            })
           .then(response=>alert('Added to Favourites'))
        } else if(cardButton==="Delete") {
            fetch('http://localhost:3000/deletefav', {
                method: 'delete',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id: articleid
                })
            })
            .then(response=>{
                alert('Article Deleted');
                reCardList();
            })

        }
            
    }
        return (
            <div className="card">
                <header className="card-header">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <div className="card-bottom">
                        <h3>author:{author}</h3>
    
                        <div className="button__group">
                            <button
                             onClick={onCategory}
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
