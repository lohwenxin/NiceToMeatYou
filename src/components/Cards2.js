import React, {useEffect, useState} from 'react'
import CardItem2 from './CardItem2'
import './Cards2.css'


function Cards2(props) {
    return (
      <div>
        <div>
          <div className="cards_container" >
            <div className="cards_wrapper">
              <ul className="card_items">
                {
                  Array.from(props.posts["meals"]).map(post => {return (
                    <div key = {post["idMeal"]}>
                      <CardItem2
                        src={post["strMealThumb"]}
                        text={post["strMeal"]}
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

export default Cards2