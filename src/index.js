import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Footer from "./components/Footer.js";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import { Search } from "semantic-ui-react";


ReactDOM.render(<App />, document.getElementById("root"));
