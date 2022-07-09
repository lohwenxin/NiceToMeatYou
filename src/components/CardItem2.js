import React from 'react'
import { Link } from 'react-router-dom'

function CardItem2(props) {
  return (
    <>
      <li className = "cards_item">
        <Link className = "cards_item_link"
        to={{
          pathname: props.path,
          state: { post: props.post }
        }}>
            <figure className = "cards_item_pic-wrap" >
              <img src = {props.src} alt = "Travel Image" className="cards_item_img"/>
            </figure>
            <div className="cards_item_info">
                <h5 className="cards_item_text">
                  {props.text}
                </h5>
            </div>
        </Link>
      </li>
    </>
  )
}

export default CardItem2
