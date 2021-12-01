import React, { useEffect } from "react";
import "../../App.css";
import { Form, Button } from "semantic-ui-react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import DatePicker from "react-datepicker";
import Axios from "axios";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import signupcss from "./CSS/Signup.module.css";

export default function SignUp() {
  let dt = new Date();
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState(moment());
  const [dob1, setDob1] = useState(null);
  const [employeeList, setEmployeeList] = useState([]);
  const maxDate = dt.setDate(dt.getDate() - 3382);
  const minDate = dt.setDate(dt.getDate() - 25566);

  const {
    control,
    register,
    handleSubmit,
    reset,
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
    reset();
  };

  return (
    <div>
      <div>
        <h1>SIGN UP</h1>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <br></br>
          <Form.Field>
            <input
              className={signupcss["la"]}
              placeholder="First Name"
              type="text"
              {...register("firstName", { required: true, maxLength: 15 })}
              onChange={(event) => {
                setFirstName(event.target.value);
              }}
            />
          </Form.Field>
          {errors.firstName && (
            <p className="text-error">Please check the First Name</p>
          )}
          <br></br>
          <Form.Field>
            <input
              className={signupcss["lb"]}
              placeholder="Last Name"
              type="text"
              {...register("lastName", { required: true, maxLength: 30 })}
              onChange={(event) => {
                setLastname(event.target.value);
              }}
            />
          </Form.Field>
          {errors.lastName && (
            <p className="text-error">Please check the Last Name</p>
          )}
          <br></br>
          <Form.Field>
            <input
              className={signupcss["lc"]}
              placeholder="Email"
              type="email"
              {...register("email", {
                required: true,
                pattern:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
              onChange={(event) => {
                setEmail(event.target.value.toLowerCase());
              }}
            />
          </Form.Field>
          {errors.email && (
            <p className="text-error">Please enter a valid email.</p>
          )}
          <br></br>
          <Form.Field>
            <input
              className={signupcss["ld"]}
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
              Please enter a valid Password. Password can be 6-15 characters
              long and must include numbers and uppercase.
            </p>
          )}
          <br></br>
          <Form.Field>
            <Controller
              control={control}
              name="DatePicker"
              dateFormat="yyyy-MM-dd"
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <DatePicker
                  className={signupcss["le"]}
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
          <br></br>
          <br></br>
          <Button type="submit" input className={signupcss["lf"]}>
            SIGN UP
          </Button>
        </Form>
      </div>
      <div>
        <p>You Have Signed Up!!!</p>
      </div>
    </div>
  );
}
