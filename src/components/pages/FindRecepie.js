import React from "react";
import "../../App.css";
import Axios from "axios";
import { useState } from "react";
import MealDataIng from "../mealDataIng";
import { Form, Button } from "semantic-ui-react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { image } from "./test";
import styles from "./CSS/findRecp.module.css";

// find recepie for ingradients
export default function FindRecepie() {
  const [mealDataIng, setMealDataIng] = useState(null);
  var checkIng = "";

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const findRecepie = (data) => {
    Object.keys(data).forEach((key) => {
      if (data[key]) checkIng = checkIng + data[key] + ",+";
    });
    checkIng = checkIng.substring(0, checkIng.length - 2);
    fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=696b0c4fb4de43bd9c94815931d4d998&ingredients=${checkIng}&number=2&ranking=1`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealDataIng(data);
        checkIng = "";
        console.log(mealDataIng);
      })
      .catch(() => {
        console.log("error");
      });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(findRecepie)}>
        <Form.Field>
          <input
            type="checkbox"
            value="egg"
            id="myCheckbox1"
            {...register("myCheckbox1")}
          />
          <label for="myCheckbox1">
            <img
              src="https://spoonacular.com/cdn/ingredients_100x100/egg.png"
              alt="egg"
            />
          </label>
        </Form.Field>
        <Form.Field>
          <div>
            <input
              type="checkbox"
              value="flour"
              id="cb1"
              {...register("cb1")}
            />
            <label for="cb1">
              <img src="https://spoonacular.com/cdn/ingredients_100x100/egg.png" />
            </label>
          </div>
        </Form.Field>

        <Button type="submit">Submit</Button>
        <section className="meals">
          {mealDataIng && <MealDataIng mealDataIng={mealDataIng} />}
        </section>
      </Form>
    </div>
  );
}
