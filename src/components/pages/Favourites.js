import React, { useState } from "react";
import "./Favourites.css";
import CardItem2 from "./CardItem2";
import Footer from "../Footer";
import Axios from "axios";
import { useEffect } from "react";
import Meal from "../meal";
import FavList from "../favList";

function Favourites() {
  Axios.defaults.withCredentials = true;
  const [imageUrl, setImageUrl] = useState("");
  const [prepTime, setprepTime] = useState("");
  const [serve, setserve] = useState("");
  const [sourceUrl, setsourceUrl] = useState("");
  const [meals, setMeals] = useState([]);
  let isFav = false;
  const [userId, setUserId] = useState(null);
  const [recpId, setRecpId] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const onSubmit = () => {
      Axios.get("http://localhost:3001/login").then((response) => {
        if (response.data.loggedIn == true) {
          setUserId(response.data.user[0].user_id);
          setIsLoggedIn(true);
          console.log(response);
        }
      });
    };
    onSubmit();
  }, []);

  useEffect(() => {
    const fav = () => {
      console.log(userId);
      Axios.get("http://localhost:3001/fav", {
        params: {
          userId: userId,
        },
      }).then((response) => {
        console.log(response);
        setMeals(response.data);
      });
    };
    fav();
  }, [userId]);

  useEffect(() => {
    const mock = () => {
      console.log(meals);
    };
    mock();
  }, [meals]);


  if (isLoggedIn) {
    return (
      <div>
        <h1>Your Favourites</h1>
        {meals.map((meal) => {
          return <FavList mealData={meal} />;
        })}
      </div>
    );
  } else {
    return (
      <div>
        <div className="cards">
          <h1>Sign In To See Your Favourite Recipes!</h1>
        </div>
      </div>
    );
  }
}

export default Favourites;
