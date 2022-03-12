import React from "react";
import "./Cards.css";
import CardItem from "./pages/CardItem2";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these TRENDING Recipes!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://spoonacular.com/recipeImages/637790-312x231.jpg"
              text="Make an upside Down cake"
              label="Cake"
              path="/services"
              href="https://www.foodista.com/recipe/YXFZ3Z84/cherry-upside-down-cake-extremely-easy-to-make"
            />
            <CardItem
              src=""
              src="https://spoonacular.com/recipeImages/640713-312x231.jpg"
              text="Enjoy in the comfort of tomato soup "
              label="Comfort"
              path="/services"
              href="https://spoonacular.com/creamy-tomato-soup-640713"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src=""
              text="Fancy it up with this Lobster recipe"
              src="https://spoonacular.com/recipeImages/662883-312x231.jpg"
              text="Fancy it up with this Lobster cocktail"
              label="Luxury "
              path="/services"
              href="https://spoonacular.com/tarragon-lobster-cocktails-662883"
            />
            <CardItem
              src=""
              src="https://spoonacular.com/recipeImages/660403-312x231.jpg"
              text="Eat your Greens with this Chipotle Salad"
              label="Vegetarian"
              path="/products"
              href="https://spoonacular.com/smoky-chipotle-sweet-potato-salad-660403"
            />
            <CardItem
              src=""
              src="https://spoonacular.com/recipeImages/636600-312x231.jpg"
              text="Halloween Special"
              label="Seasonal"
              path="/sign-up"
              href="https://spoonacular.com/butternut-squash-soup-636600"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
