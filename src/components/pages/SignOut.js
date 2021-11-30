// signout.js
import Axios from "axios";
import React, { useState, useEffect } from "react";

export default function SignOut() {

  useEffect(() => {
    Axios.get("http://localhost:3001/logout", {}).then((response) => {
      console.log(response);
    });
  }, []);

  return (
    <div>
      <h1 Style="font-size:80px;padding:10px">Signed Out</h1>
    </div>
  );
}
