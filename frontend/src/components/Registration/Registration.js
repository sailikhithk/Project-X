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
                      insights about your students across departments, branches,
                      and cities today!
                    </p>
                    <div className="registration-form-container">
                      {/* Existing form fields */}
                      {/* Row 1 */}
                      <div className="row">
                        <div className="col">
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
                        <div className="col">
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

                      {/* Row 2 */}
                      <div className="row">
                        <div className="col">
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
                        <div className="col">
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
                              placeholder="Enter the phone number of the person who needs to be contacted"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Row 3 */}
                      <div className="row">
                        <div className="col">
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
                              placeholder="Enter the number of students"
                            />
                          </div>
                        </div>
                        <div className="col">
                          <div className="mb-3">
                            <label
                              htmlFor="institutionPOC"
                              className="form-label registration-form-label"
                            >
                              Institution POC (point of contact)
                            </label>
                            <input
                              type="text"
                              className="form-control registration-input-control"
                              id="institutionPOC"
                              name="institutionPOC"
                              placeholder="Enter the point of contact for the institution"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Row 4 */}
                      <div className="row">
                        <div className="col">
                          <div className="mb-3">
                            <label
                              htmlFor="numberOfDepartments"
                              className="form-label registration-form-label"
                            >
                              Number of departments
                            </label>
                            <input
                              type="text"
                              className="form-control registration-input-control"
                              id="numberOfDepartments"
                              name="numberOfDepartments"
                              placeholder="Enter the number of departments"
                            />
                          </div>
                        </div>
                        <div className="col">
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
                              placeholder="Enter country"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Row 5 */}
                      <div className="row">
                        <div className="col">
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
                              placeholder="Enter city"
                            />
                          </div>
                        </div>
                        <div className="col">
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
                              placeholder="Enter contact's designation"
                            />
                          </div>
                        </div>
                      </div>

                      {/* New row for Registration Number and Password */}
                      <div className="row">
                        {/* Registration Number */}
                        <div className="col">
                          <div className="mb-3">
                            <label
                              htmlFor="registrationNumber"
                              className="form-label registration-form-label"
                            >
                              Registration Number
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
                        {/* Password */}
                        <div className="col">
                          <div className="mb-3">
                            <label
                              htmlFor="password"
                              className="form-label registration-form-label"
                            >
                              Password
                            </label>
                            <input
                              type="password"
                              className="form-control registration-input-control"
                              id="password"
                              name="password"
                              placeholder="Enter Password"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Submit button and footer */}
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
    </div>
  );
};

export default Registration;
