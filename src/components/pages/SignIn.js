import React, { useEffect } from "react";
// import "././App.css";
import { Form, Button } from "semantic-ui-react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import DatePicker from "react-datepicker";
import Axios from "axios";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

export default function SignIp() {
  // const [registerEmail, setRegisterEmail] = useState("");
  // const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    Axios.get("http://localhost:3001/searchUser", {
      params: {
        loginEmail: loginEmail,
        loginPassword: loginPassword,
      },
    }).then((response) => {
      console.log(response);
      if(response.data !=null)
      {
          // go to different page
      }
      else
      {
        //   user does not exist
      }

    });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Field>
          <input
            placeholder="Email"
            type="email"
            {...register("email", {
              required: true,
              pattern:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
            onChange={(event) => {
              setLoginEmail(event.target.value);
            }}
          />
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
            })}
            onChange={(event) => {
              setLoginPassword(event.target.value);
            }}
          />
        </Form.Field>
        {errors.password && (
          <p className="text-error">Password cannot be empty.</p>
        )}
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}
