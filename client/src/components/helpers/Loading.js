import { Spinner } from "react-bootstrap";

export const showLoading = () => (
  <Spinner animation="border" role="status">
    <span className="sr-only">Loading ...</span>{" "}
  </Spinner>
);
