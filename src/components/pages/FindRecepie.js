import React from "react";
import "../../App.css";
import Axios from "axios";
import { useState } from "react";
import MealDataIng from "../mealDataIng";
import { Form, Button } from "semantic-ui-react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { image } from "./test";
import styles from "./CSS/findRecp.module.css";
import chicken from "../../components/images/chicken.png";
import fish from "../../components/images/fish.png";
import mushroom from "../../components/images/mushroom.jpeg";
import tomatoes from "../../components/images/tomatoes.jpeg";
import onions from "../../components/images/onions.jpeg";
import pepper from "../../components/images/pepper.jpeg";
import salt from "../../components/images/salt.jpeg";
import basil from "../../components/images/basil.jpeg";

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
          <h2>Choose your Protien</h2>
          <input className={styles['chck']}
            type="checkbox"
            value="egg"
            id="myCheckbox1"
            {...register("myCheckbox1")}
          />
          <label for="myCheckbox1">
            <img className={styles['check']}
              src="https://spoonacular.com/cdn/ingredients_100x100/egg.png"
              
              alt="egg"
            />
          </label>
          <br></br>

          <input 
            type="checkbox"
            value="chicken"
            id="myCheckbox1"
            {...register("myCheckbox1")}
          />
          <label for="myCheckbox1">
            <img className={styles['check']}
              src="src/components/images/chicken 100x100.png"
              
              alt="chicken"
              src={chicken}
            />
            </label>
            <br></br>
            <input 
            type="checkbox"
            value="fish"
            id="myCheckbox1"
            {...register("myCheckbox1")}
          />
          <label for="myCheckbox1">
            <img className={styles['check']}
              src="hsrc/components/images/fish.png"
              
              alt="fish"
              src={fish}
            />
            </label>




        </Form.Field>
        <Form.Field>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        <h2>Choose your Vegetables</h2>
          <div>
            <input
              type="checkbox"
              value="tomatoes "
              id="cb1"
              {...register("cb1")}
            />
            <label for="cb1">
              <img src="src/components/images/tomatoes_100x100.jpeg" 
              alt="tomatoes"
              src={tomatoes}
              />

            </label>
            <br></br>
            <input
              type="checkbox"
              value="flour"
              id="cb1"
              {...register("cb1")}
            />
            <label for="cb1">
              <img src="src/components/images/onions_100x100.jpeg" 
              alt="onions"
              src={onions}
              />
            </label>
            <br></br>
            <input
              type="checkbox"
              value="flour"
              id="cb1"
              {...register("cb1")}
            />
            <label for="cb1">
              <img src="src/components/images/mushroom_100x100.jpeg" 
              alt="mushroom"
              src={mushroom}
              />
            </label>

          </div>
        </Form.Field>


        <br></br>
        <Form.Field>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        <h2>Choose your Spices and Herbs</h2>
          <div>
            <input
              type="checkbox"
              value="flour"
              id="cb1"
              {...register("cb1")}
            />
            <label for="cb1">
              <img src="src/components/images/basil_100x100.jpeg"
              alt="basil"
              src={basil}
              />
            </label>
            <br></br>
            <input
              type="checkbox"
              value="flour"
              id="cb1"
              {...register("cb1")}
            />
            <label for="cb1">
              <img src="src/components/images/pepper_100x100.jpeg" 
              alt="pepper"
              src={pepper}
              />
            </label>
            <br></br>
            <input
              type="checkbox"
              value="flour"
              id="cb1"
              {...register("cb1")}
            />
            
            <label for="cb1">
              <img src="src/components/images/salt_100x100.jpeg" 
              alt="salt"
              src={salt}
              />
            </label>
          </div>
        </Form.Field>

        <Form onSubmit={handleSubmit(findRecepie)}>
        
        <Button
        type="submit" input className={styles['btn']} >GENERATE RECIPE
        </Button>
        
        <section className="meals">
          {mealDataIng && <MealDataIng mealDataIng={mealDataIng} />}
        </section>
      </Form>
      </Form>
    </div>
  );
}
