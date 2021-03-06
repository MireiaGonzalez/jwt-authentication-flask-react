import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import "../../styles/index.css";

import { Context } from "../store/appContext";

export const Register = () => {
  const { store, actions } = useContext(Context);
  const [redirection, setRedirection] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleRegistration = async (e) => {
    e.preventDefault();
    await actions.registerUser(userEmail, userPassword);
    setRedirection(true);
  };

  console.log(userEmail, userPassword);
  return (
    <>
      <h2 className="text-center mt-5 text-success">REGISTER</h2>
      <form className="container-fluid p-3 forms" onSubmit={handleRegistration}>
        <div className="mb-3 mt-2">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="yourname@example.com"
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
            placeholder="Choose a strong password"
            onChange={(e) => setUserPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Register
        </button>
        {redirection ? <Redirect to="/login"></Redirect> : null}
      </form>
    </>
  );
};
