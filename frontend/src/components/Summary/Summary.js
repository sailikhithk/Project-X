import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Summary = () => {
  // navigation
  const navigate = useNavigate();

  return (
    <div className="body flex-grow-1 px-3">
      <div className="container-lg">
        <div className="row">
          <div className="col-sm-6 col-lg-6 mt-3">
            <div className="card bg-light mb-3">
              <div className="card-header bg-light pb-2 d-flex justify-content-between align-items-center">
                <div className="fs-5 fw-semibold mt-2 mb-2">
                  <span className="fw-bolder">Students</span>
                </div>
                <div className="fs-5 mt-2 mb-2">
                  <Link to={"/user/students"} className="btn btn-primary">
                    View All
                  </Link>
                </div>
              </div>
              <div className="card-body pb-0">
                <div className="d-flex justify-content-between align-items-start">
                  <div className="fs-5 fw-normal mt-2">
                    <span className="fw-normal">Number of Students</span>
                  </div>
                  <div className="fs-5 fw-semibold mt-2">
                    <span className="fw-normal"> 360</span>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-start mt-2">
                  <div className="fs-5 fw-normal mt-2">
                    <span className="fw-normal">Number of Departments</span>
                  </div>
                  <div className="fs-5 fw-semibold mt-2">
                    <span className="fw-normal">4</span>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-start mt-2">
                  <div className="fs-5 fw-normal mt-2">
                    <span className="fw-normal">Number of Branches</span>
                  </div>
                  <div className="fs-5 fw-semibold mt-2">
                    <span className="fw-normal">3</span>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-start mt-2 mb-4">
                  <div className="d-grid gap-2 col-6 mx-auto mt-4">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => navigate("/user/add-student")}
                    >
                      Add Students
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-6 mt-3">
            <div className="card bg-light mb-3">
              <div className="card-header bg-light pb-2 d-flex justify-content-between align-items-center">
                <div className="fs-5 fw-semibold mt-2 mb-2">
                  <span className="fw-bolder">Teachers</span>
                </div>
                <div className="fs-5 mt-2 mb-2">
                  <Link
                    to={"/user/teachers"}
                    className="btn btn-primary"
                  >
                    View All
                  </Link>
                </div>
              </div>
              <div className="card-body pb-0">
                <div className="d-flex justify-content-between align-items-start">
                  <div className="fs-5 fw-normal mt-2">
                    <span className="fw-normal">Number of Teachers</span>
                  </div>
                  <div className="fs-5 fw-semibold mt-2">
                    <span className="fw-normal">3</span>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-start mt-2">
                  <div className="fs-5 fw-normal mt-2">
                    <span className="fw-normal">Number of Departments</span>
                  </div>
                  <div className="fs-5 fw-semibold mt-2">
                    <span className="fw-normal">4</span>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-start mt-2">
                  <div className="fs-5 fw-normal mt-2">
                    <span className="fw-normal">Number of Branches</span>
                  </div>
                  <div className="fs-5 fw-semibold mt-2">
                    <span className="fw-normal">3</span>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-start mt-2 mb-4">
                  <div className="d-grid gap-2 col-6 mx-auto mt-4">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => navigate("/user/add-teacher")}
                    >
                      Add Teachers
                    </button>
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

export default Summary;
