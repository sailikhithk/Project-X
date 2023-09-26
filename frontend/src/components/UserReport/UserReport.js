import React, { useRef, useState } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

import "./UserReport.css";
import UserReportTitle from "./UserReportTitle";
import UserReportPartOne from "./UserReportPartOne";
import UserReportPartTwo from "./UserReportPartTwo";
import UserReportPartThree from "./UserReportPartThree";
import UserReportPartFour from "./UserReportPartFour";
import UserReportPartSeven from "./UserReportPartSeven";
import UserReportPartFive from "./UserReportPartFive";
import UserReportPartSix from "./UserReportPartSix";
import CircularProgress from '@mui/material/CircularProgress';

const UserReport = () => {
  const reportTemplateRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const handleGeneratePdf = async () => {
    setLoading(true);
    const pdfContainer = reportTemplateRef.current;
    const pdfWidth = 210; // A4 width in points (about 8.27 inches)
    const pdfHeight =
      (pdfContainer.clientHeight * pdfWidth) / pdfContainer.clientWidth; // Maintain aspect ratio

    // Create a canvas from your HTML content
    const canvas = await html2canvas(pdfContainer);

    // Convert the canvas to a data URL
    const imgData = canvas.toDataURL("image/png");

    // Create a jsPDF instance
    const doc = new jsPDF({
      format: [pdfWidth, pdfHeight],
      orientation: "portrait", // You can also use 'landscape' for landscape mode
    });

    // Insert the image into the PDF
    doc.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight,'','FAST');
    doc.save("UserReports.pdf");
    setLoading(false);

    // const doc = new jsPDF({
    //   format: "a4",
    //   unit: "px",
    // });

    // // Adding the fonts.
    // doc.setFont("Inter-Regular", "normal");
    // await doc.html(reportTemplateRef.current, {
    //   margin: [5, 0, 5, 0],
    //   html2canvas: {
    //     scale: 0.38, // default is window.devicePixelRatio
    //   },
    //   callback: (doc) => {
    //     doc.save("User Reprots.pdf");
    //     setLoading(false);
    //   },
    // });
  };

  return (
    <div className="body flex-grow-1">
      <div className="container-fluid">
        <div ref={reportTemplateRef}>
          <div>
            <UserReportTitle />
          </div>
          <div>
            <UserReportPartOne />
          </div>
          <div>
            <UserReportPartTwo />
          </div>
          <div>
            <UserReportPartThree />
          </div>
          <div>
            <UserReportPartFour />
          </div>
          <div>
            <UserReportPartFive />
          </div>
          <div>
            <UserReportPartSix />
          </div>
          <div>
            <UserReportPartSeven />
          </div>
        </div>
        <div className="row mt-5">
          <div className="d-flex justify-content-center align-items-center mt-4">
            <button
              type="button"
              className="btn btn-primary btn-lg d-flex justify-content-center align-items-center "
              onClick={() => handleGeneratePdf()}
            >
              DOWNLOAD AS PDF  { loading && <CircularProgress style={{color: '#fff', marginLeft: '10px'}}/>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserReport;
