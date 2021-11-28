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

export default function Services() {
  let dt = new Date();
  const [recepiName, setRecepiName] = useState("");
  const [recepieCat, setRecepieCat] = useState("");
  const [recepiePrepTime, setRecepiePrepTime] = useState("");
  const [recepieIng, setRecepieIng] = useState(0);
  const [doc, setDoc] = useState(moment());
  const [recepieLink, setRecepieLink] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState(moment());
  const [dob1, setDob1] = useState(null);
  const [employeeList, setEmployeeList] = useState([]);
  const maxDate = dt.setDate(dt.getDate() - 3382);
  const minDate = dt.setDate(dt.getDate() - 25566);

  const displayEmojiName = (event) => alert(event.target.id);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    Axios.get("http://localhost:3001/searchUser", {
      params: {
        loginEmail: email,
        loginPassword: password,
      },
    }).then((response) => {
      console.log(response);
      if (response.data != false) {
        console.log("print user exits");
      } else {
        Axios.post("http://localhost:3001/createUser", {
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: password,
          dob: dob,
        }).then(() => {});
      }
    });

    console.log("Done!");
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Field>
          <input
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
        <Form.Field>
          <select
            placeholder="Type of Recepie"
            {...register("recepieCat", { required: true})}
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
          <p className="text-error">Please check the Last Name</p>
        )}
        <Form.Field>
        <select
            placeholder="Type of Recepie"
            {...register("recepieCat", { required: true})}
            onChange={(event) => {
              setRecepieCat(event.target.value);
            }}
          >
            {category.map((hours) => (
              <option value={hours.name}>{hours.name}</option>
            ))}
          </select>
        </Form.Field>
        {errors.email && (
          <p className="text-error">Please enter a valid email.</p>
        )}
        <Form.Field>
          <input
            placeholder="Password"
            type="password"
            {...register("password", {
              required: true,
              pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
            })}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </Form.Field>
        {errors.password && (
          <p className="text-error">
            Please enter a valid Password. Password can be 6-15 characters long
            and must include numbers and uppercase.
          </p>
        )}
        <Form.Field>
          <Controller
            control={control}
            name="DatePicker"
            dateFormat="yyyy-MM-dd"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <DatePicker
                placeholderText="Select date of birth"
                onChange={(dob) => setDob(moment(dob).format("yyyy-MM-DD"))}
                onBlur={onBlur}
                selected={dob1}
                minDate={minDate}
                maxDate={maxDate}
                dateFormat="yyyy-MM-dd"
              />
            )}
          />
        </Form.Field>

        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}
