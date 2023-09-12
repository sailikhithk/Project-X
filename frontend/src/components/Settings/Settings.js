import React, { useState } from "react";

const Settings = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userSettings, setUserSettings] = useState({
    username: "john_doe",
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserSettings({
      ...userSettings,
      [name]: value,
    });
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData({
      ...passwordData,
      [name]: value,
    });
  };

  const saveChanges = () => {
    console.log("Sending to backend:", userSettings);
    setIsEditing(false);
  };

  const resetPassword = () => {
    if (passwordData.newPassword === passwordData.confirmPassword) {
      console.log("Sending password reset to backend:", passwordData);
      setPasswordData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    } else {
      console.log("Passwords do not match.");
    }
  };

  return (
    <div className="content d-flex flex-column flex-column-fluid fs-6">
      <div className="container-xxl">
        <div className="card mb-xl-10">
          <div className="d-flex justify-content-between align-items-center card-header bg-white cursor-pointer">
            <div className="card-title m-0">
              <h4 className="fw-bold m-0">Settings</h4>
            </div>
          </div>
          <div className="card-body p-9">
            <div className="row mb-2 mt-3">
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
              <div className="col-lg-12 d-flex justify-content-end">
                {isEditing ? (
                  <button
                    className="btn btn-sm btn-success"
                    onClick={saveChanges}
                  >
                    Save Changes
                  </button>
                ) : (
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => setIsEditing(true)}
                  >
                    Edit Username
                  </button>
                )}
              </div>
            </div>
            <div className="row mb-2 mt-3">
              <label className="col-lg-5 fw-semibold">Reset Password</label>
              <div className="col-lg-7">
                <div>
                  <input
                    type="password"
                    name="currentPassword"
                    placeholder="Current Password"
                    value={passwordData.currentPassword}
                    onChange={handlePasswordChange}
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="newPassword"
                    placeholder="New Password"
                    value={passwordData.newPassword}
                    onChange={handlePasswordChange}
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm New Password"
                    value={passwordData.confirmPassword}
                    onChange={handlePasswordChange}
                  />
                </div>
                <button
                  className="btn btn-sm btn-warning"
                  onClick={resetPassword}
                >
                  Reset Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
