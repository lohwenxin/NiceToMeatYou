import React from 'react';
import { useLocation } from 'react-router-dom';
import "../DisplayCard.css";

function DisplayCard() {
    const ingredients = ["strIngredient1", "strIngredient2","strIngredient3","strIngredient4","strIngredient5","strIngredient6","strIngredient7","strIngredient8","strIngredient9","strIngredient10","strIngredient11","strIngredient12","strIngredient13","strIngredient14","strIngredient15","strIngredient16","strIngredient17", "strIngredient18","strIngredient19","strIngredient20"]
    const location = useLocation();
    const { post } = location.state;

  return (
    <div className="container">
      <div className="top">
        <div className="imageContainer">
          <img className="pic" src = {post["strMealThumb"]}/>
        </div>
        <div className="textContainer">
          <h1 className="name">{post["strMeal"]}</h1>
          <h1 className="category">{post["strCategory"]}</h1>
          <h1 className="ingredients">Ingredients</h1>
          {
            ingredients.map(ingredient => (
              <p key={ingredient} className="ingredient">{post[ingredient]}</p>
            ))
          }
        </div>
      </div>
      <div className="bottom">
        <p className="instructions">{post["strInstructions"]}</p>
      </div>
    </div>
  )
}

export default DisplayCard;
