import "./signup2.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import isEmail from "validator/lib/isEmail";
import isEmpty from "validator/lib/isEmpty";
import { showErrorMsg, showSuccessMsg } from "../../components/helpers/message";
import { showLoading } from "../../components/helpers/Loading";
import { signup } from "../../components/API/Auth";

const Signup = () => {
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
    successMsg: false,
    errorMsg: false,
    loading: false,
  });

  const { username, email, password, successMsg, errorMsg, loading } = newUser;

  const handleChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
      successMsg: "",
      errorMsg: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Client Side validation
    if (isEmpty(username) || isEmpty(email) || isEmpty(password)) {
      setNewUser({
        ...newUser,
        errorMsg: "All fields are Required !",
      });
    } else if (!isEmail(email)) {
      setNewUser({
        ...newUser,
        errorMsg: "invalid email",
      });
    } else {
      const { username, email, password } = newUser;
      const data = { username, email, password };
      // Success !
      setNewUser({
        ...newUser,
        successMsg: "Validation success ! You are welcome ",
        loading: true,
      });
      signup(data)
        .then((response) => {
          setNewUser({
            username: "",
            email: "",
            password: "",
            loading: false,
            successMsg: response.data.successMessage,
          });
          console.log(response);
        })
        .catch((err) => {
          console.log("axios signup failed reason :", err);
          setNewUser({
            ...newUser,
            loading: false,
          });
        });
    }
  };

  const FormInput = (props) => (
    <div class="row">
      <label>{props.description}</label>
      <input type={props.type} placeholder={props.placeholder} />
    </div>
  );

  const ShowSignupForm = () => (
    <>
      <form action="" className="signup__form" onSubmit={handleSubmit}>
        <div id="loginform">
          <div title="Login">
            <h2 id="headerTitle">Signup</h2>
          </div>
          <FormInput
            description="Username"
            placeholder="Enter your username"
            type="text"
            value={username}
            name="username"
            onChange={handleChange}
          />
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
            <button>Sign up</button>
          </div>
        </div>
        <div id="alternativeLogin">
          <label>Or sign in with:</label>
          <div id="iconGroup">
            <a href="#" id="facebookIcon"></a>
            <a href="#" id="twitterIcon"></a>
            <a href="#" id="googleIcon"></a>
          </div>
          <Link
            to="/signin"
            style={{ textDecoration: "none" }}
            className="signup__resetpw"
          >
            Have an account ? Log in{" "}
          </Link>
        </div>
      </form>
    </>
  );
  return (
    <div className="logCtrl">
      <div className="SignupPage">
        <div className="error__message">
          {successMsg && showSuccessMsg(successMsg, username)}
          {errorMsg && showErrorMsg(errorMsg)}
          <div className="Loading__signup">{loading && showLoading()}</div>
        </div>
        {ShowSignupForm()}
      </div>
    </div>
  );
};

export default Signup;
