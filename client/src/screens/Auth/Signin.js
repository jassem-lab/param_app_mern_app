import React from "react";
import { Link } from "react-router-dom";
import "./Signin.css";

function Signin() {
  return (
    <div>
      <form action="" className="signup__form">
        <h2>Log In</h2>
        <br />

        <br />
        <label for="email">Email</label>
        <br />
        <input id="email" type="email" name="email" />
        <br />
        <label for="password">Password</label>
        <br />
        <input id="password" type="password" name="password" />
        <br />
        <input id="button" type="submit" value="Connect" />
        <br />
      </form>
    </div>
  );
}

export default Signin;
