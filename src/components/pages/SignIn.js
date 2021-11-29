import React, { useEffect } from "react";

import { Form, Button } from "semantic-ui-react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import DatePicker from "react-datepicker";
import Axios from "axios";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import signincss from "./CSS/signin.module.css"


 function SignIn() {
  // const [registerEmail, setRegisterEmail] = useState("");
  // const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [logInUser, setLogInUser] = useState("");
  Axios.defaults.withCredentials = true;

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn == true)
        setLogInUser(response.data.user[0].first_name);
    });
  }, []);

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
      if (response.data == false) {
        console.log("User does not Exist");
      } else {
        if (response.data.length != 1) console.log(response.data.message);
        else {
          console.log(response);
          setLogInUser(response.data[0].first_name);
          setLoginEmail("");
          setLoginPassword("");
        }
      }
    });
  };

  return (
    <div>
      <h1 Style="font-size:80px;padding:10px">WELCOME{logInUser}</h1>
      
    
      <forms>
      <p Style="font-size:40px;padding-left:120px;margin-left:110px">  SIGN IN</p>
       
      <Form onSubmit={handleSubmit(onSubmit)}>
        
        <Form.Field>
          <input className={signincss['ap']}
            placeholder="Email"
            type="email"
            {...register("email", {
              required: true,
              pattern:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
            onChange={(event) => {
              setLoginEmail(event.target.value.toLowerCase());
            }}
          />
        </Form.Field>
        
        {errors.email && (
          <p className={signincss["text-error"]}>Please enter a valid email.</p>
        )}
    
     
        <Form.Field>
          <input className={signincss['ip']}
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
          <p className={signincss["text-error"]}>Password canot be empty.</p>
        )}
    

        
        <Button
        type="submit" input className={signincss['sp']} >SUBMIT
        </Button>
        
      </Form>
      
      </forms>
    </div>
  );
}

export default SignIn;
