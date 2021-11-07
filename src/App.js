import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ImageSlider from "./components/ImageSlider";
import { SliderData } from "./components/SliderData";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <NavBar />
      <ImageSlider slides={SliderData} />
      <Footer />
    </div>
  );
}

export default App;
