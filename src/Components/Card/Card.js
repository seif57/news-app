import React from 'react';
import "./Card.css";

class Card extends React.Component {
    constructor(props){
        super(props);
        this.state={
            liked:false,
            title:'',
            description:'',
            author:'',
            articleUrl:'',
        }
        this.handleClick = this.handleClick.bind(this);

    }
    handleClick() {
        this.setState({
          liked: !this.state.liked
        });
      }
    render(){
        const{title,description,author,articleUrl}=this.props
        const text = this.state.liked ? 'Unlike' : 'Like'
        return (
            <div className="card">
                <header className="card-header">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <div className="card-bottom">
                        <h3>author:{author}</h3>
    
                        <div className="button__group">
                            <button
                            onClick={this.handleClick}
                             className='like__button'>
                                {text}
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
    
}

export default Card
