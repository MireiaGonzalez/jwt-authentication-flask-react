import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import "../../styles/index.css";

import { Context } from "../store/appContext";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [redirection, setRedirection] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleRegistration = async (e) => {
    e.preventDefault();
    await actions.login(userEmail, userPassword);
    setRedirection(true);
  };

  return (
    <>
      <h2 className="text-center mt-5 text-success">LOG IN</h2>
      <form className="container-fluid p-3 forms" onSubmit={handleRegistration}>
        <div className="mb-3 mt-2">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter your email"
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </div>
        <div className="mb-3 mt-2">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleFormControlInput2"
            placeholder="Enter your password"
            onChange={(e) => setUserPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Log In
        </button>
        {redirection ? <Redirect to="/private"></Redirect> : null}
      </form>
    </>
  );
};
