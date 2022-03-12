import React, { useEffect } from "react";
import Navbar from "./components/NavBar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";
import { observer } from "mobx-react-lite";
import SignIn from "./components/pages/SignIn";
import SignOut from "./components/pages/SignOut";
import SearchBar from "./components/pages/SearchBar";
import Axios from "axios";
import FindRecepie from "./components/pages/FindRecepie";
import Favourites from "./components/pages/Favourites";
import Footer from "./components/Footer";

function App() {
  Axios.defaults.withCredentials = true;
  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      console.log(response);
    });
  }, []);

  // find recepie for ingradients
  const findRecepie = () => {
    fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=696b0c4fb4de43bd9c94815931d4d998&ingredients="pasta,+flour,+sugar"&number=2&ranking=2`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealDataIng(data);
        console.log(mealDataIng);
      })
      .catch(() => {
        console.log("error");
      });
  };

  //get recepie from search bar
  const getRecepie = (id) => {
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=696b0c4fb4de43bd9c94815931d4d998&query=${id}&number=2`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
      })
      .catch(() => {
        console.log("error");
      });
  };

  // function handleChange(e) {
  //   setCalories(e.target.value);
  // }

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/products" component={Products} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/search-bar" component={SearchBar} />
          <Route path="/find-recepie" component={FindRecepie} />
          <Route path="/favourites" component={Favourites} />
          <Route path="/sign-out" component={SignOut} />
        </Switch>
      </Router>
    </>
  );
}

export default observer(App);
