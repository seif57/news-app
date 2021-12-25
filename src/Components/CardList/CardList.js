import React from 'react';
import "./CardList.css";
import Card from "../Card/Card.js";
import { motion } from 'framer-motion';


class CardList extends React.Component {
    
    render() {
        const { data, isFavourite,isReady,onFavouriteSelect } = this.props
        return (
            isReady?<motion.div
                initial={{ x: -500 }}
                animate={{ x: -10 }}
                transition={{ duration: 1 }}
            >
                <div className="card-list">
                    {
                        data.map((item, i) => {
                            return <Card
                                key={i}
                                reCardList={onFavouriteSelect}
                                articleid={data[i].article_id}
                                userid={this.props.id}
                                title={data[i].title}
                                description={data[i].description}
                                author={data[i].author === null ? "unkonwn" : data[i].author}
                                articleUrl={data[i].url}
                                buttonTitle={isFavourite ? "Delete" : "Add To"}
                            />
        

                        })
                    }

                </div>
            </motion.div>:
            ''
        )
    }



}

export default CardList
