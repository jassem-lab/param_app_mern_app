import React from "react";
import { Alert } from "react-bootstrap";

export const showErrorMsg = (msg) => <Alert variant="warning"> {msg} </Alert>;

export const showSuccessMsg = (msg, username) => (
  <Alert variant="success">
    {msg}
    {username}
  </Alert>
);
