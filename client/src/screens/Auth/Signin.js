import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import isEmail from "validator/lib/isEmail";
import isEmpty from "validator/lib/isEmpty";
import "./Signin.css";

function Signin() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { email, password } = user;

  const handleChange = (e) => {
    e.preventDefault();

    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Client Side validation
    if (isEmpty(email) || isEmpty(password)) {
      setUser({
        ...user,
        errorMsg: "All fields are Required !",
      });
    } else if (!isEmail(email)) {
      setUser({
        ...user,
        errorMsg: "invalid email",
      });
    } else {
      // Success !
      setUser({
        ...user,
      });
    }
  };

  return (
    <div>
      <form action="" className="signup__form" onSubmit={handleSubmit}>
        <h2>Log In</h2>
        <br />

        <br />
        <label for="email">Email</label>
        <br />
        <input id="email" type="email" name="email" onChange={handleChange} />
        <br />
        <label for="password">Password</label>
        <br />
        <input
          id="password"
          type="password"
          name="password"
          onChange={handleChange}
        />
        <br />
        <input id="button" type="submit" value="Connect" />
        <br />
      </form>
    </div>
  );
}

export default Signin;
