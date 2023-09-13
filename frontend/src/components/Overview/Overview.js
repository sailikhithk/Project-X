import React, { useState } from "react";

const Overview = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileDetails, setProfileDetails] = useState({
    institutionName: "MIT",
    contactName: "John Doe",
    contactEmail: "johndoe@example.com",
    contactPhone: "123-456-7890",
    numberOfStudents: "5000",
    institutionPOC: "Jane Doe",
    numberOfDepartments: "12",
    country: "USA",
    city: "Boston",
    contactDesignation: "Manager",
    registrationNumber: "12345",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileDetails({
      ...profileDetails,
      [name]: value,
    });
  };

  const saveChanges = () => {
    // Here you can send the updated profile details to the backend
    console.log("Sending to backend:", profileDetails);
    setIsEditing(false);
  };

  return (
    <div className="content d-flex flex-column flex-column-fluid fs-6">
      <div className="container-xxl">
        <div className="card mb-xl-10">
          <div className="d-flex justify-content-between align-items-center card-header bg-white cursor-pointer">
            <div className="card-title m-0">
              <h4 className="fw-bold m-0">Profile Details</h4>
            </div>
            <button
              className="btn btn-sm btn-primary align-self-center"
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? "Cancel" : "Edit Profile"}
            </button>
          </div>
          <div className="card-body p-9">
            {Object.keys(profileDetails).map((key, index) => (
              <div className="row mb-2 mt-1" key={index}>
                <label className="col-lg-5 fw-semibold">
                  {key.replace(/([A-Z])/g, " $1")}
                </label>
                <div className="col-lg-7">
                  {isEditing ? (
                    <input
                      type="text"
                      name={key}
                      value={profileDetails[key]}
                      onChange={handleChange}
                    />
                  ) : (
                    <span className="fw-normal fs-6">
                      {profileDetails[key]}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
          {isEditing && (
            <div className="card-footer">
              <button className="btn btn-sm btn-primary" onClick={saveChanges}>
                Save Changes
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Overview;
