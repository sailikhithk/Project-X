import React from "react";
import { Link } from "react-router-dom";

const Overview = () => {
  return (
    <div className="content d-flex flex-column flex-column-fluid fs-6">
      <div className="container-xxl">
        <div className="card mb-xl-10">
          <div className="d-flex justify-content-between align-items-center card-header bg-white cursor-pointer">
            <div className="card-title m-0">
              <h4 className="fw-bold m-0">Profile Details</h4>
            </div>
            <Link
              className="btn btn-sm btn-primary align-self-center"
              to={"/account/settings"}
            >
              Edit Profile
            </Link>
          </div>
          <div className="card-body p-9">
            <div className="row mb-2 mt-1">
              <label className="col-lg-5 fw-semibold">Institution Name</label>
              <div className="col-lg-7">
                <span className="fw-normal fs-6">ABCD</span>
              </div>
            </div>
            <div className="row mb-2 mt-3">
              <label className="col-lg-5 fw-semibold">Contact Name</label>
              <div className="col-lg-7">
                <span className="fw-normal fs-6">ABCD</span>
              </div>
            </div>
            <div className="row mb-2 mt-3">
              <label className="col-lg-5 fw-semibold">
                Contact Email Address
              </label>
              <div className="col-lg-7">
                <span className="fw-normal fs-6">ABCD</span>
              </div>
            </div>
            <div className="row mb-2 mt-3">
              <label className="col-lg-5 fw-semibold">
                Contact Phone Number
              </label>
              <div className="col-lg-7">
                <span className="fw-normal fs-6">ABCD</span>
              </div>
            </div>
            <div className="row mb-2 mt-3">
              <label className="col-lg-5 fw-semibold">Number of Students</label>
              <div className="col-lg-7">
                <span className="fw-normal fs-6">ABCD</span>
              </div>
            </div>
            <div className="row mb-2 mt-3">
              <label className="col-lg-5 fw-semibold">
                Institution POC (Point Of Contact)
              </label>
              <div className="col-lg-7">
                <span className="fw-normal fs-6">ABCD</span>
              </div>
            </div>
            <div className="row mb-2 mt-3">
              <label className="col-lg-5 fw-semibold">
                Number of Departments
              </label>
              <div className="col-lg-7">
                <span className="fw-normal fs-6">ABCD</span>
              </div>
            </div>
            <div className="row mb-2 mt-3">
              <label className="col-lg-5 fw-semibold">Country</label>
              <div className="col-lg-7">
                <span className="fw-normal fs-6">ABCD</span>
              </div>
            </div>
            <div className="row mb-2 mt-3">
              <label className="col-lg-5 fw-semibold">City</label>
              <div className="col-lg-7">
                <span className="fw-normal fs-6">ABCD</span>
              </div>
            </div>
            <div className="row mb-2 mt-3">
              <label className="col-lg-5 fw-semibold">
                Contact's Designation
              </label>
              <div className="col-lg-7">
                <span className="fw-normal fs-6">ABCD</span>
              </div>
            </div>
            <div className="row mb-2 mt-3">
              <label className="col-lg-5 fw-semibold">
                Registration Number
              </label>
              <div className="col-lg-7">
                <span className="fw-normal fs-6">ABCD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
