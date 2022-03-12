import React from "react";
import { useState, useEffect } from "react";
import Heart from "react-animated-heart";
import Button from "@material-ui/core/Button";

export default function MealListIng({ mealDataIng }) {
  const id = mealDataIng.id;
  const title = mealDataIng.title;
  const [imageUrl, setimageUrl] = useState("");
  const usedIngredientCount = mealDataIng.usedIngredientCount;
  const missedIngredientCount = mealDataIng.missedIngredientCount;
  const [prepTime, setprepTime] = useState("");
  const [serve, setserve] = useState("");
  const [sourceUrl, setsourceUrl] = useState("");
  const [countUp, setCountUp] = useState(0);
  const [isClick, setClick] = useState(false);

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${mealDataIng.id}/information?apiKey=696b0c4fb4de43bd9c94815931d4d998&`
    )
      .then((response) => response.json())
      .then((data) => {
        setprepTime(data.readyInMinutes);
        setserve(data.servings);
        setsourceUrl(data.sourceUrl);
        setimageUrl(data.image);
      })
      .catch(() => {
        console.log("error");
      });
  }, [mealDataIng.id]);

  return (
    <article>
      <h1>{title}</h1>
      <img
        src={imageUrl}
        alt="recipe"
        Style="font-size:40px;margin-left:45%;margin-top:70px;font-family:monospace;font-weight:lighter;"
      />
      <ul
        className="instructions"
        Style="font-size:40px;margin-left:45%;margin-top:70px;font-family:monospace;font-weight:lighter;"
      >
        <li>Ingredients matched: {usedIngredientCount}</li>
        <li>Ingredients missing: {missedIngredientCount}</li>
        <li>Preparation time: {prepTime} minutes</li>
        <li>Number of servings: {serve}</li>
      </ul>
      <a
        Style="font-size:40px;margin-left:45%;margin-top:70px;font-family:monospace;font-weight:lighter;"
        href={sourceUrl}
      >
        Go to Recipe
      </a>{" "}
      <Heart
        styles="font-size:40px;margin-left:45%;margin-top:70px;font-family:monospace;font-weight:lighter;"
        isClick={isClick}
        onClick={() => setClick(!isClick)}
      />

      <Button onClick={() => setCountUp(countUp + 1)}>
        {`${countUp === 0 ? "" : countUp}`}
      </Button>
    </article>
  );
}
