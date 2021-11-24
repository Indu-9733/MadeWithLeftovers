import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/Footer";
import Spotify from "./components/spotify";
import NavBar from "./components/NavBar";
import ImageSlider from "./components/ImageSlider";
import { SliderData } from "./components/SliderData";
import MealList from "./components/mealList";
import Axios from "axios";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import MealDataIng from "./components/mealDataIng";
// api-ID 696b0c4fb4de43bd9c94815931d4d998

function App() {
  const [data, setData] = React.useState(null);
  const [id, setId] = useState("");
  const [mealData, setMealData] = useState(null);
  const [mealDataIng, setMealDataIng] = useState(null);
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastname] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [newWage, setNewWage] = useState(0);

  const [employeeList, setEmployeeList] = useState([]);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        setData(data.message);
        setMealDataIng(data);
      });
  }, []);

  const addUser = () => {
    Axios.post("http://localhost:3001/createUser", {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
      dob: dob,
    }).then(() => {
      setEmployeeList([
        ...employeeList,
        {
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: password,
          dob: dob,
        },
      ]);
    });
  };

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
    /* To send the fav recepie id to DB to save *start*
      <div className="information">
        <label>Id:</label>
        <input
          type="text"
          onChange={(event) => {
            setId(event.target.value);
          }}
        />
      </div>
      <button onClick={favRecepie}>Search Recepie</button>
      {employeeList.map((val, key) => {
        return (
          <div className="employee">
            <div>
              <h3>Name: {val.first_name}</h3>
            </div>
          </div>
        );
      })}*/

    <div className="App">
      <NavBar />
      <section>
        <SearchBar />
      </section>
      <div className="information">
        <label>First Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setFirstName(event.target.value);
          }}
        />
      </div>
      <div className="information">
        <label>Last Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setLastname(event.target.value);
          }}
        />
      </div>
      <div className="information">
        <label>Email:</label>
        <input
          type="text"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
      </div>
      <div className="information">
        <label>Password:</label>
        <input
          type="text"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
      </div>
      <div className="information">
        <label>Date of Birth:</label>
        <input
          type="text"
          onChange={(event) => {
            setDob(event.target.value);
          }}
        />
      </div>
      <button onClick={addUser}>Add User</button>

      <div className="information">
        <label>Id:</label>
        <input
          type="text"
          onChange={(event) => {
            setId(event.target.value);
          }}
        />
      </div>
      <button onClick={() => getRecepie(id)}>Search Recepie</button>
      {mealData && <MealList mealData={mealData} />}

      <button onClick={() => findRecepie()}>FindRecepie</button>
      <section className="meals">
        {mealDataIng && <MealDataIng mealDataIng={mealDataIng} />}
      </section>
      <Spotify />
      <ImageSlider slides={SliderData} />
      <Footer />
    </div>
  );
}

export default App;
