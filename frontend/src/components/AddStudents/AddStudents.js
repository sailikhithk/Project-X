import React, { useRef } from "react";

import UploadImage from "../../images/login.jpg";
import "./AddStudents.css";

const AddStudents = () => {
  // ref
  const input = useRef(null);

  return (
    <div className="body flex-grow-1 px-3">
      <div className="container-lg">
        <div className="row">
          <div className="col-lg-12 mt-1">
            <div className="d-flex justify-content-between align-items-center">
              <div className="fs-5 fw-semibold">Import Students</div>
              <div className="fs-5 fw-semibold">Import User File</div>
            </div>
          </div>
          <div className="col-lg-12 mt-4">
            <div className="d-flex justify-content-start align-items-start">
              <span className="fs-5 fw-semibold">
                Upload Student Information
              </span>
            </div>
          </div>
          <div className="col-lg-12 mt-2">
            <div className="d-flex justify-content-start align-items-start">
              <span className="fs-6 fw-normal">
                Download the excel file template from above and fill in the
                details and our tool will automatically pick them up on import
              </span>
            </div>
          </div>
          <div className="col-lg-12 mt-4">
            <div className="d-flex justify-content-between align-items-start">
              <div className="FileUploadContent-root">
                <div className="FileUploadGrid-item">
                  <div className="FileUpload-upload FileUpload-upload-drag">
                    <input
                      ref={input}
                      type="file"
                      style={{ display: "none" }}
                      accept=".csv"
                      onChange={() => {}}
                      onClick={(e) => {
                        e.target.value = null;
                      }}
                    />
                    <span className="FileUpload-upload FileUpload-upload-btn">
                      <div className="FileUpload-upload-drag-container">
                        <div>
                          <p className="FileUpload-upload-drag-icon">
                            <img
                              src={UploadImage}
                              className="img-fluid"
                              style={{ height: "45px" }}
                              alt="Upload Icon"
                            />
                          </p>
                          <p>Select a CSV or Excel file to import</p>
                          <p>or drag and drop it here</p>
                        </div>
                      </div>
                    </span>
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

export default AddStudents;
