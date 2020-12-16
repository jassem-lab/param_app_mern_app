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

  const FormInput = (props) => (
    <div class="row">
      <label>{props.description}</label>
      <input type={props.type} placeholder={props.placeholder} />
    </div>
  );

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
    <div className="logCtrl">
      <form action="" className="signup__form" onSubmit={handleSubmit}>
      <div id="loginform">
          <div title="Login">
            <h2 id="headerTitle">Signup</h2>
          </div>
        
          <FormInput
            description="Email"
            placeholder="Enter your Email"
            type="email"
            value={email}
            name="email"
            onChange={handleChange}
          />
          <FormInput
            description="Password"
            placeholder="Enter your Password"
            type="password"
            value={password}
            name="password"
            onChange={handleChange}
          />

          <div id="button" class="row">
            <button id="button" type="submit" value="Connect">Sign in</button>
          </div>
        </div>

       
        <br />
      </form>
    </div>
  );
}

export default Signin;
