import React, { useState } from "react";
import { Link } from "react-router-dom";

import LoginImage from "../../images/login.jpg";
import "./Login.css";

const Login = () => {
  // states
  const [universityId, setUniversityId] = useState("");
  const [password, setPassword] = useState("");

  // utils
  const loginInputHandler = (e) => {
    const { name = "", value = "" } = e.target;
    if (name === "universityId") {
      setUniversityId(value);
    } else {
      setPassword(value);
    }
  };

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col">
            <div className="card-group">
              <div className="card p-4">
                <div className="card-body">
                  <div>
                    <h2 className="login-header">Institution Login</h2>
                    <p className="login-sub-header">
                      Get access to our expert insights about your students
                      across departments, branches and cities today!
                    </p>
                    <div className="login-form-container">
                      <div className="mb-3">
                        <label
                          htmlFor="universityId"
                          className="form-label login-form-label"
                        >
                          University ID
                        </label>
                        <input
                          type="text"
                          className="form-control login-input-control"
                          id="universityId"
                          name="universityId"
                          placeholder="UNIV01UB"
                          value={universityId}
                          onChange={(e) => loginInputHandler(e)}
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="password"
                          className="form-label login-form-label"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control login-input-control"
                          id="password"
                          name="password"
                          placeholder="********"
                          value={password}
                          onChange={(e) => loginInputHandler(e)}
                        />
                      </div>
                    </div>
                    <div className="d-grid gap-2 col-6 mx-auto mt-4">
                      <button type="button" className="btn btn-primary">
                        Login
                      </button>
                    </div>
                    <div className="mt-4 text-center">
                      <span className="login-footer-container">
                        Not a member with us yet?{" "}
                      </span>
                      <span className="login-footer-container login-join-us">
                        <Link
                          className="text-decoration-none"
                          to={"/registration"}
                        >
                          Join Us Today!
                        </Link>
                      </span>
                    </div>
                    <div className="mt-4">
                      <span className="login-footer-container">
                        Having issues logging in?
                      </span>
                      <span className="login-footer-container fw-bolder">
                        {" "}
                        Contact Support
                      </span>
                    </div>
                    <div className="mt-1">
                      <span className="login-footer-container">
                        By continuing, you agree to our
                      </span>
                      <span className="login-footer-container fw-bolder">
                        {" "}
                        Terms of Service
                      </span>
                      <span className="login-footer-container"> and </span>
                      <span className="login-footer-container fw-bolder">
                        Privacy Policy
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <img
                  src={LoginImage}
                  className="img-fluid login-image-container"
                  alt="Login"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
