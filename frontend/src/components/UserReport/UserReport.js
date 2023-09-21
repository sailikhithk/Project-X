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

    // Get the dimensions of the PDF page
    const pdfPageWidth = pdf.internal.pageSize.getWidth() - marginLeft * 2;
    const pdfPageHeight = pdf.internal.pageSize.getHeight() - marginTop * 2;

    // Calculate the aspect ratio of the canvas and the PDF page
    const canvasAspectRatio = imgWidth / imgHeight;
    const pdfPageAspectRatio = pdfPageWidth / pdfPageHeight;

    let dimensions;

    if (canvasAspectRatio > pdfPageAspectRatio) {
      dimensions = {
        width: pdfPageWidth,
        height: pdfPageWidth / canvasAspectRatio,
      };
    } else {
      dimensions = {
        width: pdfPageHeight * canvasAspectRatio,
        height: pdfPageHeight,
      };
    }

    pdf.addImage(
      imgData,
      "PNG",
      x + marginLeft,
      y + marginTop,
      dimensions.width,
      dimensions.height
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
          <div className="bg-white report2-section1">
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
        <div className="row mt-5 page" id="page3">
          <div className="row bg-white report3-section1">
            <div className="col-sm-12 col-lg-12">
              <div className="d-flex justify-content-between align-items-center">
                <div className="mt-4 ms-4 mb-4">
                  <span className="fs-4 fw-semibold">
                    Interview Score by Category
                  </span>
                </div>
                <div className="mt-4 me-4 mb-4 report3-btn-container">
                  <span className="fs-5 fw-normal report3-btn">Part Two</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row bg-white report3-section2">
            <div className="col-sm-4 col-lg-4 p-4 mt-4">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <div>
                  <span className="fs-1 fw-bold report3-mindset">8/10</span>
                </div>
                <div>
                  <span className="fs-5 fw-semibold report3-mindset">
                    Mindset/Attitude
                  </span>
                </div>
              </div>
            </div>
            <div className="col-sm-8 col-lg-8 p-4 mt-4">
              <div>
                <span className="fs-4 fw-semibold report3-growth">
                  Growth Mindset
                </span>
              </div>
              <div>
                <p className="fs-6 fw-normal text-break">
                  Arpitha exhibited a growth mindset and apositive attitude
                  throughout the interview.However, she sometimes sounded
                  defensivewhen asked about past failures, instead ofembracing
                  them as learning opportunities.
                </p>
              </div>
            </div>
          </div>
          <div className="row bg-white report3-section3">
            <div className="col-sm-6 col-lg-6 p-4 mt-4">
              <div>
                <span className="fs-4 fw-semibold report3-red">2/10</span>
                <span className="fs-5 fw-semibold ms-2 text-decoration-underline">
                  Resilience
                </span>
              </div>
              <div className="ms-5">
                <p className="fs-6 fw-semibold text-break">
                  Arpitha showed resilience indealing with past challenges,
                  butthere were moments where sheappeared defensive when
                  askedabout failures. It's essential topresent these instances
                  aslearning experiences.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-6 p-4 mt-4">
              <div>
                <span className="fs-4 fw-semibold report3-orange">7/10</span>
                <span className="fs-5 fw-semibold ms-2 text-decoration-underline">
                  Teamwork
                </span>
              </div>
              <div className="ms-5">
                <p className="fs-6 fw-semibold text-break">
                  She shared relevant instances ofsuccessful team
                  collaboration.However, she could improve onrecognizing and
                  articulating thecontributions of team membersto project
                  successes.
                </p>
              </div>
            </div>
          </div>
          <div className="row bg-white report3-section4">
            <div className="col-sm-6 col-lg-6 p-4 mt-4">
              <div>
                <span className="fs-4 fw-semibold report3-green">9/10</span>
                <span className="fs-5 fw-semibold ms-2 text-decoration-underline">
                  Adaptability
                </span>
              </div>
              <div className="ms-5">
                <p className="fs-6 fw-semibold text-break">
                  Arpitha provided good examplesof adapting to
                  changingcircumstances in her previousroles, demonstrating her
                  abilityto manage change effectively.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-6 p-4 mt-4">
              <div>
                <span className="fs-4 fw-semibold report3-red">5/10</span>
                <span className="fs-5 fw-semibold ms-2 text-decoration-underline">
                  Initiative
                </span>
              </div>
              <div className="ms-5">
                <p className="fs-6 fw-semibold text-break">
                  While Arpitha showed initiativein certain scenarios, she
                  mayneed to emphasize moreproactive behavior in identifyingand
                  addressing challenges.
                </p>
              </div>
            </div>
          </div>
          <div className="row bg-white report3-section5">
            <div className="col-sm-12 col-lg-12 p-4">
              <div className="mt-3 report3-description-container">
                <span className="fs-5 fw-semibold text-break report3-description">
                  Can you describe a time when you showed resilience in
                  achallenging work situation?
                </span>
              </div>
            </div>
          </div>
          <div className="row bg-white report3-section6">
            <div className="col-sm-6 col-lg-6 p-4">
              <div>
                <span className="fs-5 fw-semibold">Arpitha's Answer:</span>
                <p className="fs-6 fw-normal text-break">
                  "Well, there was a time when we had a majorissue with a
                  project I was handling. I justmade sure we got it done."
                </p>
              </div>
              <div className="mt-4">
                <span className="fs-5 fw-semibold">Insights</span>
                <p className="fs-6 fw-normal text-break">
                  Arpitha's answer is rather brief and lacksspecificity. She
                  could benefit fromexplaining the situation more
                  vividly,describing her actions in detail, andhighlighting the
                  result of her resilience.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-6 p-4">
              <span className="fs-5 fw-semibold">Curated Answer</span>
              <p className="fs-6 fw-normal text-break">
                "At my previous job, we faced a situationwhere a critical HR
                transformationproject was at risk due to unexpectedbudget cuts.
                Instead of giving up, I tookthe initiative to reassess our
                resourcesand recalibrate our project plan. Westreamlined our
                activities, prioritizedtasks more effectively, and managed
                tocomplete the project successfully underbudget. This experience
                has honed myresilience and ability to adapt tochallenging
                circumstances."
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-5 page" id="page4">
          <div className="row bg-white report4-section1">
            <div className="col-sm-12 col-lg-12">
              <div className="d-flex justify-content-between align-items-center">
                <div className="mt-4 ms-4 mb-4">
                  <span className="fs-4 fw-semibold">
                    Interview Score by Category
                  </span>
                </div>
                <div className="mt-4 me-4 mb-4 report4-btn-container">
                  <span className="fs-5 fw-normal report4-btn">Part Two</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row bg-white report4-section2">
            <div className="col-sm-4 col-lg-4 p-4 mt-4">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <div>
                  <span className="fs-1 fw-bold report4-skill">6/10</span>
                </div>
                <div>
                  <span className="fs-5 fw-semibold report4-skill">
                    Knowledge/Skill
                  </span>
                </div>
              </div>
            </div>
            <div className="col-sm-8 col-lg-8 p-4 mt-4">
              <div>
                <span className="fs-4 fw-semibold report4-hrPro">HR Pro</span>
              </div>
              <div>
                <p className="fs-6 fw-normal text-break">
                  Arpitha demonstrated good understanding ofHR transformation
                  concepts, but struggled abit with some Deloitte-specific
                  methodologies.This may indicate a lack of preparation
                  orresearch.
                </p>
              </div>
            </div>
          </div>
          <div className="row bg-white report4-section3">
            <div className="col-sm-6 col-lg-6 p-4 mt-4">
              <div>
                <span className="fs-4 fw-semibold report4-red">2/10</span>
                <span className="fs-5 fw-semibold ms-2 text-decoration-underline">
                  HR Transformation Knowledge
                </span>
              </div>
              <div className="ms-5">
                <p className="fs-6 fw-semibold text-break">
                  Arpitha has a solidunderstanding of HRtransformation. She
                  struggled abit with Deloitte's specificmethodologies, which
                  indicatesa need for more company-specific research.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-6 p-4 mt-4">
              <div>
                <span className="fs-4 fw-semibold report4-orange">7/10</span>
                <span className="fs-5 fw-semibold ms-2 text-decoration-underline">
                  Communication Skills:
                </span>
              </div>
              <div className="ms-5">
                <p className="fs-6 fw-semibold text-break">
                  She communicates her ideaseffectively. However, claritycould
                  be improved whendiscussing complex topics.
                </p>
              </div>
            </div>
          </div>
          <div className="row bg-white report4-section4">
            <div className="col-sm-6 col-lg-6 p-4 mt-4">
              <div>
                <span className="fs-4 fw-semibold report4-green">9/10</span>
                <span className="fs-5 fw-semibold ms-2 text-decoration-underline">
                  Leadership Skills
                </span>
              </div>
              <div className="ms-5">
                <p className="fs-6 fw-semibold text-break">
                  Arpitha has shown she can leadinitiatives, but her ability
                  toinspire and direct teams couldbe further demonstrated.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-6 p-4 mt-4">
              <div>
                <span className="fs-4 fw-semibold report4-red">5/10</span>
                <span className="fs-5 fw-semibold ms-2 text-decoration-underline">
                  Technical Skills
                </span>
              </div>
              <div className="ms-5">
                <p className="fs-6 fw-semibold text-break">
                  Arpitha demonstrated goodfamiliarity with HR
                  technologies.However, knowledge of up-to-date technologies,
                  especiallythose used by Deloitte, wouldmake her a stronger
                  candidate.
                </p>
              </div>
            </div>
          </div>
          <div className="row bg-white report4-section5">
            <div className="col-sm-12 col-lg-12 p-4">
              <div className="mt-3 report4-description-container">
                <span className="fs-5 fw-semibold text-break report4-description">
                  Can you tell us about a situation where you leveraged your
                  HRtransformation knowledge to drive change in an organization?
                </span>
              </div>
            </div>
          </div>
          <div className="row bg-white report4-section6">
            <div className="col-sm-6 col-lg-6 p-4">
              <div>
                <span className="fs-5 fw-semibold">Arpitha's Answer:</span>
                <p className="fs-6 fw-normal text-break">
                  "Yes, I used my HR knowledge to make somechanges in our
                  processes at my last job."
                </p>
              </div>
              <div className="mt-4">
                <span className="fs-5 fw-semibold">Insights</span>
                <p className="fs-6 fw-normal text-break">
                  Arpitha's response is lacking in detail anddoesn't provide a
                  clear picture of herexpertise in action. By detailing
                  thesituation, task, action, and result, Arpithacan better
                  showcase her skills andknowledge.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-6 p-4">
              <span className="fs-5 fw-semibold">Curated Answer</span>
              <p className="fs-6 fw-normal text-break">
                In my previous role at XYZ Corp, we werestruggling with outdated
                and inefficientHR processes. Leveraging my knowledgein HR
                transformation, I identified the needfor a more robust, digital
                solution. Iproposed the implementation of a cloud-based HR
                platform, outlining its benefitsfor efficiency and scalability.
                Aftergetting the green light, I led the migrationprocess from
                legacy systems to the newplatform, and trained the HR team on
                itsuse. As a result, we improved our HRoperations efficiency by
                40%.
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-5 page" id="page5">
          <div className="row bg-white report5-section1">
            <div className="col-sm-12 col-lg-12">
              <div className="d-flex justify-content-between align-items-center">
                <div className="mt-4 ms-4 mb-4">
                  <span className="fs-4 fw-semibold">
                    Interview Score by Category
                  </span>
                </div>
                <div className="mt-4 me-4 mb-4 report5-btn-container">
                  <span className="fs-5 fw-normal report5-btn">Part Two</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row bg-white report5-section2">
            <div className="col-sm-4 col-lg-4 p-4 mt-4">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <div>
                  <span className="fs-1 fw-bold report5-skill">6/10</span>
                </div>
                <div>
                  <span className="fs-5 fw-semibold report5-skill">
                    Experience/ Practical Thinking
                  </span>
                </div>
              </div>
            </div>
            <div className="col-sm-8 col-lg-8 p-4 mt-4">
              <div>
                <span className="fs-4 fw-semibold report4-hrPro">
                  Equipped Mastery
                </span>
              </div>
              <div>
                <p className="fs-6 fw-normal text-break">
                  Arpitha's practical experience is evident in her responses.She
                  provided solid examples of her previous work in
                  HRtransformation. However, the we detected some confusionin
                  her tone while addressing complex problems,suggesting she may
                  need to practice articulating herthoughts clearly.
                </p>
              </div>
            </div>
          </div>
          <div className="row bg-white report5-section3">
            <div className="col-sm-6 col-lg-6 p-4 mt-4">
              <div>
                <span className="fs-4 fw-semibold report5-red">2/10</span>
                <span className="fs-5 fw-semibold ms-2 text-decoration-underline">
                  Problem-solving
                </span>
              </div>
              <div className="ms-5">
                <p className="fs-6 fw-semibold text-break">
                  Arpitha has demonstrated herability to solve practicalproblems
                  through herexperience. However, sheoccasionally seemed
                  confusedwhen addressing complex issues.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-6 p-4 mt-4">
              <div>
                <span className="fs-4 fw-semibold report5-orange">7/10</span>
                <span className="fs-5 fw-semibold ms-2 text-decoration-underline">
                  Decision-making
                </span>
              </div>
              <div className="ms-5">
                <p className="fs-6 fw-semibold text-break">
                  Arpitha showed good decision-making skills in past
                  scenarios.However, she could work onpresenting these decisions
                  moreconfidently.
                </p>
              </div>
            </div>
          </div>
          <div className="row bg-white report5-section4">
            <div className="col-sm-6 col-lg-6 p-4 mt-4">
              <div>
                <span className="fs-4 fw-semibold report5-green">9/10</span>
                <span className="fs-5 fw-semibold ms-2 text-decoration-underline">
                  Experience with HR Initiatives
                </span>
              </div>
              <div className="ms-5">
                <p className="fs-6 fw-semibold text-break">
                  Arpitha's experience with HRtransformations is strong
                  andevident in her responses. She hasgiven specific examples
                  ofprojects she's led.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-6 p-4 mt-4">
              <div>
                <span className="fs-4 fw-semibold report5-red">5/10</span>
                <span className="fs-5 fw-semibold ms-2 text-decoration-underline">
                  Project Management
                </span>
              </div>
              <div className="ms-5">
                <p className="fs-6 fw-semibold text-break">
                  Arpitha showed strong skills inmanaging projects,
                  timelines,and resources in her previousroles. She should
                  continue toemphasize this strength.
                </p>
              </div>
            </div>
          </div>
          <div className="row bg-white report5-section5">
            <div className="col-sm-12 col-lg-12 p-4">
              <div className="mt-3 report5-description-container">
                <span className="fs-5 fw-semibold text-break report5-description">
                  Can you discuss an experience where your practical thinkingled
                  to a significant positive outcome?
                </span>
              </div>
            </div>
          </div>
          <div className="row bg-white report5-section6">
            <div className="col-sm-6 col-lg-6 p-4">
              <div>
                <span className="fs-5 fw-semibold">Arpitha's Answer:</span>
                <p className="fs-6 fw-normal text-break">
                  I once solved a problem at work. It workedout pretty well.
                </p>
              </div>
              <div className="mt-4">
                <span className="fs-5 fw-semibold">Insights</span>
                <p className="fs-6 fw-normal text-break">
                  Arpitha's response is too generic. She needsto provide a more
                  specific example to trulyillustrate her practical thinking
                  skills andhow they resulted in a positive outcome.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-6 p-4">
              <span className="fs-5 fw-semibold">Curated Answer</span>
              <p className="fs-6 fw-normal text-break">
                During my tenure at ABC Company, we werefacing low employee
                engagement scores. Usingmy experience, I hypothesized that this
                was dueto a lack of transparent communication andrecognition
                within the organization. I proposed acomprehensive employee
                engagementprogram, which included regular town hallmeetings, an
                internal newsletter, and a monthlyrecognition system.
                Implementing theseinitiatives led to a 25% increase in our
                employeeengagement scores over the next six months,demonstrating
                the power of practical,experience-based problem-solving
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-5 page" id="page6">
          <div className="row bg-white report6-section1">
            <div className="col-sm-12 col-lg-12">
              <div className="d-flex justify-content-between align-items-center">
                <div className="mt-5 ms-4 mb-5">
                  <span className="fs-3 fw-semibold report6-wus">
                    Where you stand
                  </span>
                </div>
                <div className="mt-5 me-4 mb-5 report6-btn-container">
                  <span className="fs-5 fw-normal report6-btn">Part Three</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row bg-white report6-section2">
            <div className="col-sm-12 col-lg-12">
              <div className="mt-5 ms-4 mb-5">
                <span className="fs-5 fw-normal">
                  Certain Application Insight
                </span>
              </div>
            </div>
          </div>
          <div className="row bg-white report6-section3">
            <div className="col-sm-12 col-lg-12">
              <div className="d-flex justify-content-between align-items-center">
                <div className="mt-5 ms-4 me-4 mb-5">
                  <div>
                    <span className="fs-1 fw-bold report6-text">75%</span>
                  </div>
                  <div>
                    <span className="fs-5 fw-semibold report6-text">
                      You wouldstand in thetop 75% applicants
                    </span>
                  </div>
                </div>
                <div className="mt-5 ms-4 me-4 mb-5">
                  <div>
                    <span className="fs-1 fw-bold report6-text">50</span>
                  </div>
                  <div>
                    <span className="fs-5 fw-semibold report6-text">
                      Content
                    </span>
                  </div>
                </div>
                <div className="mt-5 ms-4 me-4 mb-5">
                  <div>
                    <span className="fs-1 fw-bold report6-text">3</span>
                  </div>
                  <div>
                    <span className="fs-5 fw-semibold report6-text">
                      Content Highlight
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5 page" id="page7">
          <div className="row bg-white report7-section1">
            <div className="col-sm-12 col-lg-12">
              <div className="d-flex justify-content-between align-items-center">
                <div className="mt-5 ms-4 mb-5">
                  <span className="fs-3 fw-semibold report7-crb">
                    Company and Role Based Curated Summary
                  </span>
                </div>
                <div className="mt-5 me-4 mb-5 report7-btn-container">
                  <span className="fs-5 fw-normal report7-btn">Part Three</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row bg-white ps-5 report7-section2">
            <div className="col-sm-4 col-lg-4 d-flex justify-content-center align-items-center mb-4 report7-wrapper">
              <div>
                <span className="fs-5 fw-semibold report7-text-clr">
                  About TheCompany
                </span>
              </div>
            </div>
            <div className="col-sm-8 col-lg-8">
              <div className="mt-4 ms-4 mb-5">
                <div>
                  <p>
                    Deloitte is a global leader in consulting and has a
                    robustframework for HR transformation, which includes
                    cloudtechnologies, process improvement, and
                    changemanagement. Familiarize yourself with their approach.
                  </p>
                  <p>
                    Deloitte often works with diverse, global teams. If you
                    haveany experiences working in diverse or cross-cultural
                    settings,be sure to mention these.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row bg-white ps-5 report7-section3">
            <div className="col-sm-4 col-lg-4 d-flex justify-content-center align-items-center mb-4 report7-wrapper">
              <div>
                <span className="fs-5 fw-semibold report7-text-clr">
                  Companyrelated recentnews
                </span>
              </div>
            </div>
            <div className="col-sm-8 col-lg-8">
              <div className="mt-4 ms-4 mb-5">
                <div>
                  <p>
                    In recent news, Deloitte has announced plans to
                    increasetheir investment in AI and digital transformation
                    services.Mentioning awareness of this can show that you stay
                    updatedwith company news.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row bg-white ps-5 report7-section4">
            <div className="col-sm-4 col-lg-4 d-flex justify-content-center align-items-center mb-4 report7-wrapper">
              <div>
                <span className="fs-5 fw-semibold report7-text-clr">
                  Role-specificSkills
                </span>
              </div>
            </div>
            <div className="col-sm-8 col-lg-8">
              <div className="mt-4 ms-4 mb-5">
                <div>
                  <p>
                    Showcasing your experience with digital HR platforms is
                    crucialfor a HR Transformation Consultant role at Deloitte.
                  </p>
                  <p>
                    Deloitte's HR Transformation services also involve
                    processredesign and change management. Share examples of
                    yourexperience in these areas.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row bg-white ps-5 report7-section5">
            <div className="col-sm-4 col-lg-4 d-flex justify-content-center align-items-center mb-5 report7-wrapper">
              <div>
                <span className="fs-5 fw-semibold report7-text-clr">
                  Industry Trends
                </span>
              </div>
            </div>
            <div className="col-sm-8 col-lg-8">
              <div className="mt-4 ms-4 mb-5">
                <div>
                  <p>
                    The HR industry is increasingly leveraging AI and
                    machinelearning for various HR functions. Highlighting your
                    awarenessand any experience you have with these technologies
                    could bebeneficial.
                  </p>
                  <p>
                    According to a recent study, HR departments are playing a
                    keyrole in environmental, social and governance (ESG)
                    initiatives.This is also an area that Deloitte is focusing
                    on, as per recentnews. Be prepared to discuss your views or
                    experience in thisarea.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5 page" id="page8">
          <div className="row report8-section1">
            <div className="col-sm-12 col-lg-12">
              <div className="mt-5 ms-4 mb-5">
                <span className="ms-4 fs-3 fw-semibold report8-crb">START X</span>
              </div>
            </div>
          </div>
          <div className="row ps-5 report8-section2">
            <div className="col-sm-12 col-lg-12">
              <div className="mt-4 mb-4">
                <span className="fs-4 fw-semibold report8-crb">
                  +91 8328057448
                </span>
              </div>
              <div className="mt-4 mb-4">
                <span className="fs-4 fw-semibold report8-crb">
                  hello@startx.com
                </span>
              </div>
              <div className="mt-4 mb-5">
                <span className="fs-4 fw-semibold report8-crb">
                  www.startx.com
                </span>
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
