import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Validation = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.validation();
  }, []);

  return (
    <div>
      <h2 className="text-center mt-5 text-success">PRIVATE PAGE</h2>
      {store.token === undefined ? (
        <div>
          <h4 className="text-center mt-4">
            Sorry, you don't have access to this page.
          </h4>
          <Link to="/" className="ms-3">
            <button type="button" className="btn btn-secondary">
              Back to Home
            </button>
          </Link>
        </div>
      ) : (
        <>
          <div className="d-flex justify-content-center mt-3">
            <h3>CONGRATULATIONS! You have access to this page!🥳</h3>
          </div>
          <Link to="/" className="ms-4">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => localStorage.removeItem("token")}
            >
              Log Out
            </button>
          </Link>
        </>
      )}
    </div>
  );
};
