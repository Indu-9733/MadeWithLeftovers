import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ImageSlider from "./components/ImageSlider";
import { SliderData } from "./components/SliderData";
import Axios from "axios";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  const addEmployee = () => {
    Axios.post("http://localhost:3001/create").then(() => {
      console.log("success");
    });
  };

  return (
    <div className="App">
      <NavBar />
      <button onClick={addEmployee}>Add Employee</button>
      <ImageSlider slides={SliderData} />
      <Footer />
    </div>
  );
}

export default App;
