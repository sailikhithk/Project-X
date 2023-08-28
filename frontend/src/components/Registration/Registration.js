import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Registration.css";

const Registration = () => {
  const [formData, setFormData] = useState({
    institutionName: "",
    contactName: "",
    contactEmailAddress: "",
    contactPhoneNumber: "",
    numberOfStudents: "",
    institutionPOC: "",
    numberOfDepartments: "",
    country: "",
    city: "",
    contactDesignation: "",
    registrationNumber: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("/registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 200) {
        console.log("Registration successful");
      } else {
        console.log("Registration failed");
      }
    } catch (error) {
      console.log("There was an error sending the data", error);
    }
  };

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
                      Kick start your journey to get access to our expert insights about your students across departments, branches, and cities today!
                    </p>
                    <div className="registration-form-container">
                      <div className="row">
                        <div className="col">
                          <div className="mb-3">
                            <label htmlFor="institutionName" className="form-label registration-form-label">
                              Institution Name
                            </label>
                            <input
                              type="text"
                              className="form-control registration-input-control"
                              id="institutionName"
                              name="institutionName"
                              placeholder="Enter your University's name as per any Govt Records"
                              value={formData.institutionName}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col">
                          <div className="mb-3">
                            <label htmlFor="contactName" className="form-label registration-form-label">
                              Contact Name
                            </label>
                            <input
                              type="text"
                              className="form-control registration-input-control"
                              id="contactName"
                              name="contactName"
                              placeholder="Enter the name of who needs to be contacted"
                              value={formData.contactName}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <div className="mb-3">
                            <label htmlFor="contactEmailAddress" className="form-label registration-form-label">
                              Contact Email Address
                            </label>
                            <input
                              type="email"
                              className="form-control registration-input-control"
                              id="contactEmailAddress"
                              name="contactEmailAddress"
                              placeholder="Enter the email of the person who needs to be contacted"
                              value={formData.contactEmailAddress}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col">
                          <div className="mb-3">
                            <label htmlFor="contactPhoneNumber" className="form-label registration-form-label">
                              Contact Phone Number
                            </label>
                            <input
                              type="text"
                              className="form-control registration-input-control"
                              id="contactPhoneNumber"
                              name="contactPhoneNumber"
                              placeholder="Enter the phone number of the person who needs to be contacted"
                              value={formData.contactPhoneNumber}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <div className="mb-3">
                            <label htmlFor="numberOfStudents" className="form-label registration-form-label">
                              Number of Students
                            </label>
                            <input
                              type="number"
                              className="form-control registration-input-control"
                              id="numberOfStudents"
                              name="numberOfStudents"
                              placeholder="Enter the number of students"
                              value={formData.numberOfStudents}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col">
                          <div className="mb-3">
                            <label htmlFor="institutionPOC" className="form-label registration-form-label">
                              Institution POC (Point Of Contact)
                            </label>
                            <input
                              type="text"
                              className="form-control registration-input-control"
                              id="institutionPOC"
                              name="institutionPOC"
                              placeholder="Enter the name of the point of contact"
                              value={formData.institutionPOC}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <div className="mb-3">
                            <label htmlFor="numberOfDepartments" className="form-label registration-form-label">
                              Number of Departments
                            </label>
                            <input
                              type="number"
                              className="form-control registration-input-control"
                              id="numberOfDepartments"
                              name="numberOfDepartments"
                              placeholder="Enter the number of departments"
                              value={formData.numberOfDepartments}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col">
                          <div className="mb-3">
                            <label htmlFor="country" className="form-label registration-form-label">
                              Country
                            </label>
                            <input
                              type="text"
                              className="form-control registration-input-control"
                              id="country"
                              name="country"
                              placeholder="Enter Country"
                              value={formData.country}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <div className="mb-3">
                            <label htmlFor="city" className="form-label registration-form-label">
                              City
                            </label>
                            <input
                              type="text"
                              className="form-control registration-input-control"
                              id="city"
                              name="city"
                              placeholder="Enter City"
                              value={formData.city}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col">
                          <div className="mb-3">
                            <label htmlFor="contactDesignation" className="form-label registration-form-label">
                              Contact's Designation
                            </label>
                            <input
                              type="text"
                              className="form-control registration-input-control"
                              id="contactDesignation"
                              name="contactDesignation"
                              placeholder="Enter Designation"
                              value={formData.contactDesignation}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <div className="mb-3">
                            <label htmlFor="registrationNumber" className="form-label registration-form-label">
                              Registration Number
                            </label>
                            <input
                              type="text"
                              className="form-control registration-input-control"
                              id="registrationNumber"
                              name="registrationNumber"
                              placeholder="Enter Registration Number"
                              value={formData.registrationNumber}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col">
                          <div className="mb-3">
                            <label htmlFor="password" className="form-label registration-form-label">
                              Password
                            </label>
                            <input
                              type="password"
                              className="form-control registration-input-control"
                              id="password"
                              name="password"
                              placeholder="Enter Password"
                              value={formData.password}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="d-grid gap-2 col-6 mx-auto mt-4">
                        <button type="button" className="btn btn-primary" onClick={handleSubmit}>
                          Submit
                        </button>
                      </div>
                      <div className="mt-1 text-center">
                        <span className="registration-footer-container">
                          Already have an account?
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
