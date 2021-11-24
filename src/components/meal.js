// Meal.js
import React, { useState, useEffect } from "react";

export default function Meal({ meal }) {
  const [imageUrl, setImageUrl] = useState("");
  const [prepTime, setprepTime] = useState("");
  const [serve, setserve] = useState("");
  const [sourceUrl, setsourceUrl] = useState("");

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=696b0c4fb4de43bd9c94815931d4d998&`
    )
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.image);
        setprepTime(data.readyInMinutes);
        setserve(data.servings);
        setsourceUrl(data.sourceUrl);
      })
      .catch(() => {
        console.log("error");
      });
  }, [meal.id]);

  return (
    <article>
      <h1>{meal.title}</h1>
      <img src={imageUrl} alt="recipe" />
      <ul className="instructions">
        <li>Preparation time: {prepTime} minutes</li>
        <li>Number of servings: {serve}</li>
      </ul>

      <a href={sourceUrl}>Go to Recipe</a>
    </article>
  );
}
