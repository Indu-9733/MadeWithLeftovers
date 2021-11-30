import React, { useEffect } from "react";
import "../../App.css";
import { Form, Button } from "semantic-ui-react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import DatePicker from "react-datepicker";
import Axios from "axios";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { category } from "./test";

import services from "./CSS/Services.module.css";


export default function Services() {
  Axios.defaults.withCredentials = true;
  const [recpUserId, setRecpUserId] = useState("");
  const [recepiName, setRecepiName] = useState("");
  const [recepieCat, setRecepieCat] = useState("");
  // const [recepiePrepTime, setRecepiePrepTime] = useState([]);
  var recepiePrepTime = "";
  const [recepieIng, setRecepieIng] = useState("");
  const [recepieLink, setRecepieLink] = useState("");
  const doc = moment(new Date()).format("yyyy-MM-DD");

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn == true)
        setRecpUserId(response.data.user[0].user_id);
    });
  }, []);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data.recepiePrepTimeM);
    recepiePrepTime =
      data.recepiePrepTimeH + " hours " + data.recepiePrepTimeM + " minutes";
    Axios.post("http://localhost:3001/createRecepie", {
      recpUserId: recpUserId,
      recepiName: recepiName,
      recepieCat: recepieCat,
      recepiePrepTime: recepiePrepTime,
      recepieIng: recepieIng,
      recepieLink: recepieLink,
      doc: doc,
    }).then(() => {});

    console.log("Done!");
  };

  return (
    <div>
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Field>
        <input className={services['reci']}
            placeholder="Recepie title*"
            type="text"
            {...register("recepiName", { required: true, maxLength: 240 })}
            onChange={(event) => {
              setRecepiName(event.target.value);
            }}
          />
        </Form.Field>
        {errors.recepiName && (
          <p className="text-error">Title cannot be empty</p>
        )}
        <br></br>
        <br></br>

        <Form.Field>
          <select className={services['ty']}
            placeholder="Type of Recepie"
            {...register("recepieCat", { required: true })}
            onChange={(event) => {
              setRecepieCat(event.target.value);
            }}
          >
            {category.map((hours) => (
              <option value={hours.name}>{hours.name}</option>
            ))}
          </select>
        </Form.Field>
        {errors.recepieCat && (
          <p className="text-error">Please Select one</p>
        )}
        <br></br>
        <br></br>
        <Form.Field>
          <h4> Preparation Time </h4>
          <br></br>
          <input className={services['hrs']}
            placeholder="Hours"
            type="number"
            min="0"
            max="48"
            {...register("recepiePrepTimeH", {
              required: true,
            })}
          />
          <br></br>
          <br></br>

          <input className={services['min']}
            placeholder="Minutes"
            type="number"
            min="0"
            max="59"
            {...register("recepiePrepTimeM", {
              required: true,
            })}
          />
        </Form.Field>
        <br></br>
        
        {errors.recepiePrepTime && (
          <p className="text-error">Please enter number.</p>
        )}
        <Form.Field>
          <input className={services['ing']}
            placeholder="Number of Ingredients"
            type="number"
            min="1"
            max="20"
            {...register("recepieIng", {
              required: true,
            })}
            onChange={(event) => {
              setRecepieIng(event.target.value);
            }}
          />
        </Form.Field>
        <br></br>
        {errors.recepieIng && (
          <p className="text-error">
          </p>
        )}
        <Form.Field>
          <input className={services['ur']}
            placeholder="Recepie URL*"
            type="url"
            {...register("recepieLink", { required: true })}
            onChange={(event) => {
              setRecepieLink(event.target.value);
            }}
          />
        </Form.Field>
        <br></br>
        <br></br>
        {errors.recepiName && (
          <p className="text-error"> </p>
        )}
        <Button
        type="submit" input className={services['sub']} >SUBMIT
        </Button>
      </Form>
    </div>
    
   
    </div>
  );
}
