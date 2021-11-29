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
import SearchBar from "./components/pages/SearchBar";
import Axios from "axios";
import FindRecepie from "./components/pages/FindRecepie";
import Favourites from './components/pages/Favourites';

function App() {
  Axios.defaults.withCredentials = true;
  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      console.log(response);
    });
  }, []);

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
          <Route path='/favourites' component={Favourites} />
        </Switch>
      </Router>
    </>
  );
}

export default observer(App);
