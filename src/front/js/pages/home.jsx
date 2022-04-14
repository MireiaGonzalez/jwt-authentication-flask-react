import React from "react";
import { Link } from "react-router-dom";

import "../../styles/home.css";

export const Home = () => {
  return (
    <div className="container-fluid d-flex justify-content-center home-div">
      <Link to="/register">
        <button type="button" className="btn btn-success">
          Register
        </button>
      </Link>
      <div className="m-2"></div>
      <Link to="/login">
        <button type="button" className="btn btn-secondary">
          Log In
        </button>
      </Link>
    </div>
  );
};
