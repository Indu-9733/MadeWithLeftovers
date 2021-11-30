import React, { useState, useEffect } from "react";
import axios from "axios";
import MealList from "../mealList";
import sbarcss from "./CSS/searchbar.module.css";
import glass from "../../components/images/glass.jpg";
import Spotify from "../spotify";
import Cards from "../Cards";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState(""); //text written by user in search box
  const [queryResults, setqueryResults] = useState([]); //users ; all the recepies returned unfiltered
  const [suggestions, setSuggestions] = useState([]);
  const [mealData, setMealData] = useState(null);
  const [recepie, setRecepie] = useState("");

  useEffect(() => {
    fetchAutoComplete(searchQuery)
      .then((resp) => setSuggestions(resp))
      .catch((err) => console.log(err));
  }, [searchQuery]);

  const getRecepie = (recepie) => {
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=696b0c4fb4de43bd9c94815931d4d998&query=${recepie}&number=2`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
      })
      .catch(() => {
        console.log("error");
      });
  };

  // function handleChange(searchQuery) {
  //   console.log("text" + searchQuery);
  //   const response = axios.get(
  //     `https://api.spoonacular.com/recipes/autocomplete?apiKey=696b0c4fb4de43bd9c94815931d4d998&number=2&query=${searchQuery}`
  //   );
  //   console.log("hid" + response.data);
  //   setqueryResults(response);
  //   let matches = [];

  //   if (searchQuery.length > 0) {
  //     matches = queryResults.filter((queryResult) => {
  //       const regex = new RegExp(`${searchQuery}`, "gi");
  //       return queryResult.title.match(regex);
  //     });
  //   }
  //   console.log("matches", matches);
  //   setSuggestions(matches);
  //   setSearchQuery(searchQuery);
  //   console.log(searchQuery);
  // }

  function handleSuggest(searchQuery) {
    // console.log(suggestions[1].title);
    setSearchQuery(searchQuery);
    setRecepie(searchQuery);
    setSuggestions([]);
  }

  const fetchAutoComplete = (searchQuery) => {
    return fetch(
      `https://api.spoonacular.com/recipes/autocomplete?apiKey=696b0c4fb4de43bd9c94815931d4d998&number=2&query=${searchQuery}`
    )
      .then((resp) => resp.json())
      .catch((err) => console.log(err));
  };

  // async function fetchAutoComplete(searchTerm) {
  //   fetch(
  //     `https://api.spoonacular.com/recipes/autocomplete?apiKey=696b0c4fb4de43bd9c94815931d4d998&number=2&query=${searchTerm}`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setMealData(data);
  //     })
  //     .catch(() => {
  //       console.log("error");
  //     });
  // }

  const searchInputField = React.createRef();

  return (
    <div className="Cards">
      <div >
        <input className={sbarcss["lol"]}
          ref={searchInputField}
          id="search-bar-input"
          className="col-md-12 input"
          style={{ marginTop: 10 }}
          //--keydown doesn't redirect to recipes page from other??
          onChange={(e) => {
            setSearchQuery(document.querySelector("#search-bar-input").value);
          }}
          type="text"
          value={searchQuery}
          placeholder="Get inspired by 1000's of recipes..."
          onBlur={() => {
            setTimeout(() => {
              setSuggestions([]);
            }, 100);
          }}
        />

        {suggestions &&
          searchQuery &&
          suggestions.map((suggestion, i) => (
            <div
              key={i}
              className={sbarcss['suggestion col-md-12 justify-content-md-center']}
              onMouseDown={() => handleSuggest(suggestion.title)}
            >
              {suggestion.title}
            </div>
          ))}
        <img
          onClick={() => getRecepie(recepie)}
          className={sbarcss["glass"]}
          alt="magnifying glass"
          src={glass}
        />
        {mealData && <MealList mealData={mealData} />}
      </div>

      <div className="cards__container"><Spotify/></div>

    </div>
  );
};

export default SearchBar;
