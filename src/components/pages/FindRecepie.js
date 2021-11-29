import React from "react";
import "../../App.css";
import Axios from "axios";
import { useState } from "react";
import MealDataIng from "../mealDataIng";
import { Form, Button } from "semantic-ui-react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
  
  // find recepie for ingradients
  export default function FindRecepie() {

    const [mealDataIng, setMealDataIng] = useState(null);

    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

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

    //   const onSubmit = () => {
    //     Axios.get("http://localhost:3001/searchUser", {
    //       params: {
    //         loginEmail: email,
    //         loginPassword: password,
    //       },
    //     }).then((response) => {
    //       console.log(response);
    //       if (response.data != false) {
    //         console.log("print user exits");
    //       } else {
    //         Axios.post("http://localhost:3001/createUser", {
    //           firstname: firstname,
    //           lastname: lastname,
    //           email: email,
    //           password: password,
    //           dob: dob,
    //         }).then(() => {});
    //       }
    //     });
    
    //     console.log("Done!");
    //   };
    
      return (
        <div>
          <Form onSubmit={handleSubmit(findRecepie)}>
            
            <Button type="submit">Submit</Button>
          </Form>
        </div>
      );
  };