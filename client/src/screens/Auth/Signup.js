// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import isEmail from "validator/lib/isEmail";
// import isEmpty from "validator/lib/isEmpty";
// import { showErrorMsg, showSuccessMsg } from "../../components/helpers/message";
// import { showLoading } from "../../components/helpers/Loading";
// import { signup } from "../../components/API/Auth";
// import { Container, Row } from "react-bootstrap";

// const Signup = () => {
//   const [newUser, setNewUser] = useState({
//     username: "",
//     email: "",
//     password: "",
//     successMsg: false,
//     errorMsg: false,
//     loading: false,
//   });

//   const { username, email, password, successMsg, errorMsg, loading } = newUser;

//   const handleChange = (e) => {
//     setNewUser({
//       ...newUser,
//       [e.target.name]: e.target.value,
//       successMsg: "",
//       errorMsg: "",
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Client Side validation
//     if (isEmpty(username) || isEmpty(email) || isEmpty(password)) {
//       setNewUser({
//         ...newUser,
//         errorMsg: "All fields are Required !",
//       });
//     } else if (!isEmail(email)) {
//       setNewUser({
//         ...newUser,
//         errorMsg: "invalid email",
//       });
//     } else {
//       const { username, email, password } = newUser;
//       const data = { username, email, password };
//       // Success !
//       setNewUser({
//         ...newUser,
//         successMsg: "Validation success ! You are welcome ",
//         loading: true,
//       });
//       signup(data)
//         .then((response) => {
//           setNewUser({
//             username: "",
//             email: "",
//             password: "",
//             loading: false,
//             successMsg: response.data.successMessage,
//           });
//           console.log(response);
//         })
//         .catch((err) => {
//           console.log("axios signup failed reason :", err);
//           setNewUser({
//             ...newUser,
//             loading: false,
//           });
//         });
//     }
//   };

//   const ShowSignupForm = () => (
//     <form action="" className="" onSubmit={handleSubmit}>
//       <h2>Sign Up</h2>
//       <br />
//       <label for="name">Name</label>
//       <br />
//       <input
//         id="name"
//         type="text"
//         value={username}
//         name="username"
//         onChange={handleChange}
//       />
//       <br />
//       <label for="email">Email</label>
//       <br />
//       <input
//         id="email"
//         type="email"
//         name="email"
//         value={email}
//         onChange={handleChange}
//       />
//       <br />
//       <label for="password">Password</label>
//       <br />
//       <input
//         id="password"
//         type="password"
//         name="password"
//         value={password}
//         onChange={handleChange}
//       />
//       <br />
//       <input id="button" type="submit" value="Sign Up" />
//       <br />
//       <Link
//         to="/signin"
//         style={{ textDecoration: "none" }}
//         className="signup__resetpw"
//       >
//         Have an account ? Log in{" "}
//       </Link>
//     </form>
//   );
//   return (
//     <div className="">
//       <div className="error__message">
//         {successMsg && showSuccessMsg(successMsg, username)}
//         {errorMsg && showErrorMsg(errorMsg)}
//         <div className="Loading__signup">{loading && showLoading()}</div>
//       </div>
//       {ShowSignupForm()}
//     </div>
   
//   );
// };

// export default Signup;
