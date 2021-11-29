import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Footer from "/Users/samyuktha/Documents/GitHub/hcirepo/src/components/Footer.js";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import { Search } from "semantic-ui-react";

const routing = (
    <Router>
      <div>
      <Route exact path="/" component={Home} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Search" component={Search} />
        
       
        <Footer />
      </div>
    </Router>
  );

ReactDOM.render(<App />, document.getElementById("root"));
