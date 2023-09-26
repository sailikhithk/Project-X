const UserReportTitle = () => {
  return (
    <div className="row bg-white page page-container" id="page1">
      <div className="report1-main-container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div className="report1-sub-container">
            <div className="row p-4">
              <div className="col-sm-12 col-lg-12 mt-5">
                <div className="fs-3 fw-semibold report1-header">
                  START X REPORT
                </div>
              </div>
            </div>
            <div className="row p-4" style={{ marginLeft: "120px" }}>
              <div className="col-sm-6 col-lg-6 mt-5">
                <div>
                  <span className="fs-4 fw-semibold report1-title">
                    REPORT FOR
                  </span>
                </div>
                <div className="mt-2">
                  <span className="fs-5 fw-semibold">MANDA ARPITHA</span>
                </div>
              </div>
              <div className="col-sm-6 col-lg-6 mt-5">
                <div>
                  <span className="fs-4 fw-semibold report1-title">
                    CONTACT YOUR GUIDE
                  </span>
                </div>
                <div className="mt-2">
                  <span className="fs-5 fw-semibold">MANU R</span>
                </div>
                <div className="mt-2">
                  <span className="fs-5 fw-semibold">+91 8328057448</span>
                </div>
              </div>
            </div>
            <div className="line-bar"></div>
            <div className="row p-4 report1-cap-container">
              <div className="fw-bold mt-2 report1-cap">
                Candidate Assessment Report
              </div>
            </div>
            <div className="row p-4 mt-3" style={{ marginLeft: "120px" }}>
              <div className="mb-4 report1-footer">
                <span className="fs-5 fw-normal report1-footer-txt text">
                  Position: HR Transformation Consultant | Deloitte
                </span>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "100px", marginLeft: "-30px" }}>
            <div
              style={{
                width: "60px",
                height: "60px",
                background: "#dd66af",
                borderRadius: "50%",
                marginTop: "30px",
              }}
            ></div>
            <div
              style={{
                width: "60px",
                height: "60px",
                background: "#ffde59",
                borderRadius: "50%",
                marginTop: "30px",
              }}
            ></div>
            <div
              style={{
                width: "60px",
                height: "60px",
                background: "#856fab",
                borderRadius: "50%",
                marginTop: "30px",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserReportTitle;
