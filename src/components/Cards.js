import React, {useEffect, useState} from 'react'
import CardItem from './CardItem'
import './Cards.css'


function Cards(props) {
    return (
      <div>
        <div>
          <div className="cards_container" >
            <div className="cards_wrapper">
              <ul className="card_items">
                {
                  Array.from(props.posts["meals"]).map(post => {return (
                    <div key = {post["idMeal"]}>
                      <CardItem
                        src={post["strMealThumb"]}
                        text={post["strMeal"]}
                        label={post["strCategory"]}
                        path="/display-card"
                        post={post}
                      />
                    </div>
                  );})
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Cards