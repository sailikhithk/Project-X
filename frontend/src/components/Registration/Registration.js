import React from "react";
import { Link } from "react-router-dom";

import "./Registration.css";

const Registration = () => {
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col">
            <div className="card-group">
              <div className="card p-2">
                <div className="card-body">
                  <div>
                    <h2 className="registration-header">Create Institution</h2>
                    <p className="registration-sub-header">
                      Kick start your journey to get access to our expert
                      insights about your students across departments, branches
                      and cities today!
                    </p>
                    <div className="registration-form-container">
                      <div class="row">
                        <div class="col">
                          <div className="mb-3">
                            <label
                              htmlFor="institutionName"
                              className="form-label registration-form-label"
                            >
                              Institution Name
                            </label>
                            <input
                              type="text"
                              className="form-control registration-input-control"
                              id="institutionName"
                              name="institutionName"
                              placeholder="Enter your University's name as per any Govt Records"
                            />
                          </div>
                        </div>
                        <div class="col">
                          <div className="mb-3">
                            <label
                              htmlFor="contactName"
                              className="form-label registration-form-label"
                            >
                              Contact Name
                            </label>
                            <input
                              type="text"
                              className="form-control registration-input-control"
                              id="contactName"
                              name="contactName"
                              placeholder="Enter the name of who needs to be contacted"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">
                          <div className="mb-3">
                            <label
                              htmlFor="contactEmailAddress"
                              className="form-label registration-form-label"
                            >
                              Contact Email address
                            </label>
                            <input
                              type="text"
                              className="form-control registration-input-control"
                              id="contactEmailAddress"
                              name="contactEmailAddress"
                              placeholder="Enter the email of the person who needs to be contacted"
                            />
                          </div>
                        </div>
                        <div class="col">
                          <div className="mb-3">
                            <label
                              htmlFor="contactPhoneNumber"
                              className="form-label registration-form-label"
                            >
                              Contact Phone Number
                            </label>
                            <input
                              type="text"
                              className="form-control registration-input-control"
                              id="contactPhoneNumber"
                              name="contactPhoneNumber"
                              placeholder="Enter the email of the person who needs to be contacted"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">
                          <div className="mb-3">
                            <label
                              htmlFor="numberOfStudents"
                              className="form-label registration-form-label"
                            >
                              Number of students
                            </label>
                            <input
                              type="text"
                              className="form-control registration-input-control"
                              id="numberOfStudents"
                              name="numberOfStudents"
                              placeholder="Enter the name of students"
                            />
                          </div>
                        </div>
                        <div class="col">
                          <div className="mb-3">
                            <label
                              htmlFor="instutionPOC"
                              className="form-label registration-form-label"
                            >
                              Institutuin POC (point of contact)
                            </label>
                            <input
                              type="text"
                              className="form-control registration-input-control"
                              id="instutionPOC"
                              name="instutionPOC"
                              placeholder="Enter the email of the person who needs to be contacted"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">
                          <div className="mb-3">
                            <label
                              htmlFor="numberOfDepartment"
                              className="form-label registration-form-label"
                            >
                              Number of departments
                            </label>
                            <input
                              type="text"
                              className="form-control registration-input-control"
                              id="numberOfDepartment"
                              name="numberOfDepartment"
                              placeholder="Enter the number of departments"
                            />
                          </div>
                        </div>
                        <div class="col">
                          <div className="mb-3">
                            <label
                              htmlFor="country"
                              className="form-label registration-form-label"
                            >
                              Country
                            </label>
                            <input
                              type="text"
                              className="form-control registration-input-control"
                              id="country"
                              name="country"
                              placeholder="Enter Country"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">
                          <div className="mb-3">
                            <label
                              htmlFor="city"
                              className="form-label registration-form-label"
                            >
                              City
                            </label>
                            <input
                              type="text"
                              className="form-control registration-input-control"
                              id="city"
                              name="city"
                              placeholder="Enter City"
                            />
                          </div>
                        </div>
                        <div class="col">
                          <div className="mb-3">
                            <label
                              htmlFor="contactDesignation"
                              className="form-label registration-form-label"
                            >
                              Contact's Designation
                            </label>
                            <input
                              type="text"
                              className="form-control registration-input-control"
                              id="contactDesignation"
                              name="contactDesignation"
                              placeholder="Enter Designation"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="registrationNumber"
                          className="form-label registration-form-label"
                        >
                          Registration number
                        </label>
                        <input
                          type="text"
                          className="form-control registration-input-control"
                          id="registrationNumber"
                          name="registrationNumber"
                          placeholder="Enter Reg. no"
                        />
                      </div>
                    </div>
                    <div className="d-grid gap-2 col-6 mx-auto mt-4">
                      <button type="button" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                    <div className="mt-1 text-center">
                      <span className="registration-footer-container">
                        Already have an account?{" "}
                      </span>
                      <span className="registration-footer-container login-redirect">
                        <Link className="text-decoration-none" to={"/"}>
                          Login
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
