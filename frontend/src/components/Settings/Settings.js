import React, { useState } from "react";

const Settings = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userSettings, setUserSettings] = useState({
    username: "john_doe",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserSettings({
      ...userSettings,
      [name]: value,
    });
  };

  const saveChanges = () => {
    // Here you can send the updated username to the backend
    console.log("Sending to backend:", userSettings);
    setIsEditing(false);
  };

  const resetPassword = () => {
    // Handle password reset here, e.g., open a modal for password reset
    console.log("Resetting password...");
  };

  return (
    <div className="content d-flex flex-column flex-column-fluid fs-6">
      <div className="container-xxl">
        <div className="card mb-xl-10">
          <div className="d-flex justify-content-between align-items-center card-header bg-white cursor-pointer">
            <div className="card-title m-0">
              <h4 className="fw-bold m-0">Settings</h4>
            </div>
            <button
              className="btn btn-sm btn-primary align-self-center"
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? "Cancel" : "Edit Settings"}
            </button>
          </div>
          <div className="card-body p-9">
            <div className="row mb-2 mt-1">
              <label className="col-lg-5 fw-semibold">Username</label>
              <div className="col-lg-7">
                {isEditing ? (
                  <input
                    type="text"
                    name="username"
                    value={userSettings.username}
                    onChange={handleChange}
                  />
                ) : (
                  <span className="fw-normal fs-6">
                    {userSettings.username}
                  </span>
                )}
              </div>
            </div>
            <div className="row mb-2 mt-3">
              <label className="col-lg-5 fw-semibold">Reset Password</label>
              <div className="col-lg-7">
                <button
                  className="btn btn-sm btn-warning"
                  onClick={resetPassword}
                >
                  Reset Password
                </button>
              </div>
            </div>
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

export default Settings;
