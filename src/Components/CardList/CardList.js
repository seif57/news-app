import React from 'react';
import "./CardList.css";
import Card from "../Card/Card.js";
import { motion } from 'framer-motion'


function CardList({ data }) {

    return (
        <motion.div
            initial={{ x: -500 }}
            animate={{ x: -10 }}
            transition={{ duration: 1 }}
        >
            <div className="card-list">
                {
                    data.map((item, i) => {
                        return <Card
                            key={i}
                            title={data[i].title}
                            description={data[i].description}
                            author={data[i].author === null ? "unkonwn" : data[i].author}
                            articleUrl={data[i].url}
                        />
                    })
                }

            </div>
        </motion.div>

    )
}

export default CardList
