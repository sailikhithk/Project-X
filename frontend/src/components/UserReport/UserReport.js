import React from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

import "./UserReport.css";

const UserReport = () => {
  const createCanvasFromElement = async (element, options = {}) => {
    return await html2canvas(element, options);
  };

  const addImageToPDF = (pdf, canvas, x, y, marginLeft = 0, marginTop = 0) => {
    const imgData = canvas.toDataURL("image/png");
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;

    // Calculate dimensions to keep the aspect ratio
    const pdfWidth = pdf.internal.pageSize.getWidth() - marginLeft * 2; // Adjusting for margins
    const pdfHeight = (imgHeight * pdfWidth) / imgWidth;

    pdf.addImage(
      imgData,
      "PNG",
      x + marginLeft,
      y + marginTop,
      pdfWidth,
      pdfHeight
    );
  };

  const generatePDF = async (
    selector = ".page",
    jsPDFConfig = {},
    html2canvasConfig = {}
  ) => {
    try {
      const pdf = new jsPDF(jsPDFConfig);

      const pageElements = document.querySelectorAll(selector);

      for (const [i, page] of Array.from(pageElements).entries()) {
        const canvas = await createCanvasFromElement(page, html2canvasConfig);

        if (i > 0) {
          pdf.addPage();
        }

        addImageToPDF(pdf, canvas, 0, 0, 20, 20);
      }

      pdf.save("download.pdf");
    } catch (err) {
      // Handle the error based on your application's needs
      console.error("Error generating PDF:", err);
    }
  };

  return (
    <div className="body flex-grow-1">
      <div className="container-fluid">
        <div className="row bg-white page" id="page1">
          <div className="report1-main-container">
            <div className="report1-sub-container">
              <div className="row p-4">
                <div className="col-sm-12 col-lg-12 mt-5">
                  <div className="fs-5 fw-semibold report1-header">
                    START X REPORT
                  </div>
                </div>
              </div>
              <div className="row p-4">
                <div className="col-sm-6 col-lg-6 mt-5">
                  <div>
                    <span className="fs-5 fw-semibold report1-title">
                      REPORT FOR
                    </span>
                  </div>
                  <div className="mt-2">
                    <span className="fs-6 fw-semibold">MANDA ARPITHA</span>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-6 mt-5">
                  <div>
                    <span className="fs-5 fw-semibold report1-title">
                      CONTACT YOUR GUIDE
                    </span>
                  </div>
                  <div className="mt-2">
                    <span className="fs-6 fw-semibold">MANU R</span>
                  </div>
                  <div className="mt-2">
                    <span className="fs-6 fw-semibold">+91 8328057448</span>
                  </div>
                </div>
              </div>
              <div className="row p-4 report1-cap-container">
                <div className="fs-1 fw-bold mt-5 report1-cap">
                  Candidate Assessment Report
                </div>
              </div>
              <div className="row p-4 mt-3">
                <div className="mb-4 report1-footer">
                  <span className="fs-5 fw-normal report1-footer-txt">
                    Position: HR Transformation Consultant | Deloitte
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5 page" id="page2">
          <div className="row bg-white report2-section1">
            <div className="col-sm-12 col-lg-12 report2-sub-section1">
              <div className="d-flex justify-content-end align-items-center report2-top-container ">
                <span className="me-3 report2-btn-container">
                  <span className="fs-5 fw-normal report2-btn">Part One</span>
                </span>
              </div>
            </div>
          </div>
          <div className="row bg-white report2-section2">
            <div className="col-sm-12 col-lg-12 mt-2">
              <span className="fs-4 fw-semibold">
                1. Behavioral Presentation and Grooming
              </span>
            </div>
          </div>
          <div className="row bg-white p-3 report2-section3">
            <div className="col-sm-4 col-lg-4">
              <div>
                <span className="fs-1 fw-bold report2-score-red">3/10</span>
              </div>
              <div className="mt-1">
                <span className="fs-5 fw-semibold">Eye contact</span>
              </div>
              <div className="mt-2">
                <p className="fs-6 fw-normal text-break report2-text">
                  Arpitha could benefit frommaintaining more consistenteye
                  contact, which canestablish trust and foster asense of
                  connection with theinterviewer.
                </p>
              </div>
            </div>
            <div className="col-sm-4 col-lg-4">
              <div>
                <span className="fs-1 fw-bold report2-score-green">8/10</span>
              </div>
              <div>
                <span className="fs-5 fw-semibold">Posture</span>
              </div>
              <div className="mt-2">
                <p className="fs-6 fw-normal text-break report2-text">
                  While mostly upright andengaged, there weremoments of
                  slouching whichcould indicate a lack ofconfidence or interest.
                </p>
              </div>
            </div>
            <div className="col-sm-4 col-lg-4">
              <div>
                <span className="fs-1 fw-bold report2-score-green">6/10</span>
              </div>
              <div>
                <span className="fs-5 fw-semibold">Grooming</span>
              </div>
              <div className="mt-2">
                <p className="fs-6 fw-normal text-break report2-text">
                  Arpitha was well-dressed andprofessional, in line
                  withDeloitte's standards
                </p>
              </div>
            </div>
          </div>
          <div className="row bg-white p-3 report2-section4">
            <div className="col-sm-4 col-lg-4">
              <div>
                <span className="fs-1 fw-bold report2-score-red">2/10</span>
              </div>
              <div>
                <span className="fs-5 fw-semibold">Hand Gestures</span>
              </div>
              <div className="mt-2">
                <p className="fs-6 fw-normal text-break report2-text">
                  Hand gestures can add valueto verbal communication,
                  butexcessive or nervousgesturing can be distracting.Arpitha
                  should aim forbalanced and meaningfulhand movements to
                  underlinekey points.
                </p>
              </div>
            </div>
            <div className="col-sm-4 col-lg-4">
              <div>
                <span className="fs-1 fw-bold report2-score-green">8/10</span>
              </div>
              <div>
                <span className="fs-5 fw-semibold">Facial Expressions</span>
              </div>
              <div className="mt-2">
                <p className="fs-6 fw-normal text-break report2-text">
                  Arpitha has a pleasant facialexpression that indicates
                  herinterest and engagement inthe conversation. However,she
                  could benefit from moreexpressive reactions to
                  reflectunderstanding or agreementwith the interviewer.
                </p>
              </div>
            </div>
            <div className="col-sm-4 col-lg-4">
              <div>
                <span className="fs-1 fw-bold report2-score-orange">6/10</span>
              </div>
              <div>
                <span className="fs-5 fw-semibold">
                  Background and Lighting
                </span>
              </div>
              <div className="mt-2">
                <p className="fs-6 fw-normal text-break report2-text">
                  The background was cleanand uncluttered, which is idealfor a
                  video interview. However,the lighting could beimproved.
                  Frontal, soft lightingwill reduce shadows and makethe
                  candidate more clearlyvisible.
                </p>
              </div>
            </div>
          </div>
          <div className="row bg-white p-3 report2-section5">
            <div className="col-sm-4 col-lg-6 mb-3">
              <div>
                <span className="fs-1 fw-bold report2-score-green">9/10</span>
              </div>
              <div>
                <span className="fs-5 fw-semibold">Audio Quality</span>
              </div>
              <div className="mt-2">
                <p className="fs-6 fw-normal text-break report2-text">
                  The audio was clear andwithout significantbackground noise,
                  which isessential for effectivecommunication during
                  theinterview.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-6 mb-3">
              <div>
                <span className="fs-1 fw-bold report2-score-green">9/10</span>
              </div>
              <div>
                <span className="fs-5 fw-semibold">Device Position</span>
              </div>
              <div className="mt-2">
                <p className="fs-6 fw-normal text-break report2-text">
                  The device from which Arpitha wasconducting the interview was
                  placedat a proper angle, allowing a clearview of her face and
                  upper body.This is critical for non-verbalcommunication.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="d-flex justify-content-center align-items-center mt-4">
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={() =>
                generatePDF(
                  ".page",
                  {
                    orientation: "p",
                    unit: "px",
                    format: "a4",
                    compress: true,
                  },
                  {
                    scale: 1,
                    logging: true,
                    useCORS: true,
                  }
                )
              }
            >
              DOWNLOAD AS PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserReport;
