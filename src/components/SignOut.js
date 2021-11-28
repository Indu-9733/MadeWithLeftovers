// signout.js
import { Axios } from "axios";
import React, { useState, useEffect } from "react";
import SignIn from "./pages/SignIn";
import UserStore from "./UserStore";

export default function SignOut() {
  //   const [imageUrl, setImageUrl] = useState("");
  //   const [prepTime, setprepTime] = useState("");
  //   const [serve, setserve] = useState("");
  //   const [sourceUrl, setsourceUrl] = useState("");

  const onSubmit = () => {
    Axios.get("http://localhost:3001/logout", {}).then((response) => {
      console.log(response);
      //   console.log(response.data[0].first_name);
      if (response.data != null) {
        UserStore.isLoggedIn = false;
        UserStore.username = "";
      }
    });
  };

  if (UserStore.isLoggedIn) {
    return (
      <div>
        <Button type="submit" onClick={onSubmit}>
          Sign Out
        </Button>
      </div>
    );
  } else {
    return (
      <div>
        <div>
          <SignIn />
        </div>
      </div>
    );
  }
}
