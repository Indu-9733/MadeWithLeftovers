import Meal from "./meal";
import React, { useState, useEffect } from "react";
import Heart from "react-animated-heart";
import Axios from "axios";

export default function FavList({ mealData }) {
  console.log(mealData);

  const [imageUrl, setImageUrl] = useState("");
  const [prepTime, setprepTime] = useState("");
  const [serve, setserve] = useState("");
  const [sourceUrl, setsourceUrl] = useState("");
  const [title, setTitle] = useState("");
  let isFav = false;
  const [userId, setUserId] = useState(0);
  const [recpId, setRecpId] = useState("");

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${mealData.recp_id}/information?apiKey=696b0c4fb4de43bd9c94815931d4d998&`
    )
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.image);
        setprepTime(data.readyInMinutes);
        setserve(data.servings);
        setsourceUrl(data.sourceUrl);
        setRecpId(mealData.recp_id);
        setTitle(data.title);
      })
      .catch(() => {
        console.log("error");
      });
  }, [mealData.recp_id]);

  const onSubmit = () => {
    isFav = !isFav;
    console.log(isFav);
    Axios.post("http://localhost:3001/saveFav", {
      isFav: isFav,
      recpId: recpId,
      userId: userId,
    }).then(() => {});
  };

  return (
    <article>
      <h1>{title}</h1>
      <img
        Style="font-size:40px;margin-left:45%;margin-top:70px;font-family:monospace;font-weight:lighter;"
        src={imageUrl}
        alt="recipe"
      />
      <ul
        className="instructions"
        Style="font-size:40px;margin-left:45%;margin-top:70px;font-family:monospace;font-weight:lighter;"
      >
        <li>Preparation time: {prepTime} minutes</li>
        <li>Number of servings: {serve}</li>
      </ul>
      <Heart
        Style="font-size:40px;margin-left:45%;margin-top:70px;font-family:monospace;font-weight:lighter;"
        isClick={isFav}
        onClick={() => {
          onSubmit();
        }}
      />

      <a
        Style="font-size:40px;margin-left:45%;margin-top:70px;font-family:monospace;font-weight:lighter;"
        href={sourceUrl}
      >
        Go to Recipe
      </a>
    </article>
  );
}
